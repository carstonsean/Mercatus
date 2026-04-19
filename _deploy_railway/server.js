// Mercatus is a crowd-led projection market. Core market logic should optimise
// for participation, trading activity, liquidity, and fast price discovery.
// Projections should emerge from trading flow rather than central determination.
const http=require("http");
const fs=require("fs");
const path=require("path");
const {createHash,randomUUID,timingSafeEqual}=require("crypto");
require("./lib/load-env");
const {HALF_POINT,roundGames,TEAM_COLORS,buildRoundMarkets,roundToHalf}=require("./seed-data.js");
const derivedData=require("./lib/derived-fantasy-data.js");
const {DEFAULT_SIMULATION_CONFIG,normalizeSimulationConfig,createBotRoster,createRandomProbBot,runSimulationTick}=require("./lib/bot-engine");
const {USE_SUPABASE,isHostedEnvironment,isSupabaseEnabled,getLocalSupabaseSafetyError}=require("./lib/config");
const {supabaseRequest,supabaseRequestAll}=require("./lib/supabase");
const {ensureSupabaseDemoUser,getSupabaseDemoUser}=require("./lib/supabase-users");
const {ensureSupabaseSeedData,getSupabaseAvailableBalance,persistSupabaseMarketState}=require("./lib/supabase-market-sync");
const {fetchSupabaseDashboard}=require("./lib/supabase-dashboard");
const {fetchSupabaseAppState}=require("./lib/supabase-state");
const {fetchSupabaseRuntimeState,persistSupabaseRuntimeState}=require("./lib/supabase-runtime-state");
const {fetchSupabaseActiveRoundSetting,persistSupabaseActiveRoundSetting}=require("./lib/supabase-active-round");

const PORT=process.env.PORT?Number(process.env.PORT):8000;
const BUILD_ID=String(
  process.env.RAILWAY_GIT_COMMIT_SHA||
  process.env.VERCEL_GIT_COMMIT_SHA||
  process.env.GITHUB_SHA||
  "local-dev"
).slice(0,12);
const CONFIGURED_PUBLIC_ORIGIN=String(
  process.env.PUBLIC_APP_ORIGIN||
  process.env.PUBLIC_BASE_URL||
  process.env.SHARE_URL_ORIGIN||
  ""
).trim().replace(/\/+$/,"");
const STARTING_BANKROLL=200;
const MAX_SINGLE_BID=10;
const PRESSURE_STEP=2;
const BOT_PRESSURE_MULTIPLIER=1;
const LINE_STEP=1;
const PRIZE_POOL_ENTRY_FEE=10;
const PRIZE_POOL_SEED_AMOUNT=100;
const PRIZE_POOL_PAYOUT_SPLITS=[0.5,0.3,0.2];
const PRIZE_POOL_POSITION_SLOTS=[
  {slotId:"FB",position:"Fullback",label:"Fullback"},
  {slotId:"W1",position:"Winger",label:"Winger 1"},
  {slotId:"W2",position:"Winger",label:"Winger 2"},
  {slotId:"C1",position:"Centre",label:"Centre 1"},
  {slotId:"C2",position:"Centre",label:"Centre 2"},
  {slotId:"FE",position:"Five-Eighth",label:"Five-eighth"},
  {slotId:"HB",position:"Halfback",label:"Halfback"},
  {slotId:"HK",position:"Hooker",label:"Hooker"},
  {slotId:"P1",position:"Prop",label:"Prop 1"},
  {slotId:"P2",position:"Prop",label:"Prop 2"},
  {slotId:"SR1",position:"2nd Row",label:"Second Row 1"},
  {slotId:"SR2",position:"2nd Row",label:"Second Row 2"},
  {slotId:"LK",position:"Lock",label:"Lock"},
  {slotId:"INT1",position:"INTERCHANGE",label:"Interchange 1"},
  {slotId:"INT2",position:"INTERCHANGE",label:"Interchange 2"},
  {slotId:"INT3",position:"INTERCHANGE",label:"Interchange 3"},
  {slotId:"INT4",position:"INTERCHANGE",label:"Interchange 4"}
];
const ENGINE_VERSION="hybrid-v2";
const STATE_PATH=path.join(__dirname,"server-state.json");
const INDEX_PATH=path.join(__dirname,"index.html");
const BOT_AUTOPLAY_INTERVAL_MS=3000;
const SEEDED_MARKETS=buildRoundMarkets();
const SEEDED_MARKETS_BY_ID=new Map(SEEDED_MARKETS.map((market)=>[market.id,market]));
const SEEDED_ROUND_NUMBERS=[...new Set(roundGames.map((game)=>parseRoundNumber(game.roundLabel)).filter(Number.isFinite))].sort((left,right)=>left-right);
const CURRENT_ROUND_NUMBER=SEEDED_ROUND_NUMBERS[SEEDED_ROUND_NUMBERS.length-1]||1;
const CURRENT_ROUND_LABEL=roundGames.find((game)=>parseRoundNumber(game.roundLabel)===CURRENT_ROUND_NUMBER)?.roundLabel||`Round ${CURRENT_ROUND_NUMBER}`;
const DEFAULT_ACTIVE_ROUND_NUMBER=CURRENT_ROUND_NUMBER||1;
const ROUND_NUMBER_BY_GAME_ID=new Map(roundGames.map((game)=>[game.id,parseRoundNumber(game.roundLabel)]));
const AVAILABLE_ROUND_NUMBERS=[...new Set([
  ...SEEDED_ROUND_NUMBERS,
  ...((derivedData?.metadata?.roundsIncluded)||[]).map((round)=>Number(round)).filter(Number.isFinite)
])].sort((left,right)=>left-right);
const SUPABASE_STATE_SYNC_TTL_MS=30000;
const SUPABASE_UNAVAILABLE_BACKOFF_MS=2*60*1000;
const SUPABASE_SEED_READY_TIMEOUT_MS=Math.max(8000,Number(process.env.SUPABASE_SEED_READY_TIMEOUT_MS)||30000);
const SUPABASE_BACKEND_USER_TIMEOUT_MS=Math.max(8000,Number(process.env.SUPABASE_BACKEND_USER_TIMEOUT_MS)||15000);
const SHARE_SESSION_CREATE_TIMEOUT_MS=4000;
const SHARE_SESSION_ACCEPT_TIMEOUT_MS=4000;
const POPULAR_PLAYERS_REFRESH_MS=6*60*60*1000;
const SESSION_COOKIE_NAME="crowdiq_session_id";
const SESSION_COOKIE_MAX_AGE_MS=30*24*60*60*1000;
const ADMIN_COOKIE_NAME="crowdiq_admin_session";
const ADMIN_SESSION_MAX_AGE_MS=12*60*60*1000;
const ADMIN_PASSWORD=String(process.env.ADMIN_PASSWORD||"binthechin");
const HOSTED_ENVIRONMENT=isHostedEnvironment();
const SUPABASE_ENABLED=isSupabaseEnabled();
const HOSTED_BOT_AUTOPLAY_ENABLED=String(process.env.ENABLE_HOSTED_BOTS||"").toLowerCase()==="true";
const SUPABASE_LOCAL_SAFETY_ERROR=getLocalSupabaseSafetyError();
const BUILD_INFO={id:BUILD_ID,environment:HOSTED_ENVIRONMENT?"hosted":"local",persistence:SUPABASE_ENABLED?"supabase":"file"};
const ASSET_VERSION=BUILD_ID;

if(SUPABASE_LOCAL_SAFETY_ERROR){
  console.warn(SUPABASE_LOCAL_SAFETY_ERROR);
}

if(HOSTED_ENVIRONMENT&&!SUPABASE_ENABLED){
  throw new Error("Hosted environment requires Supabase. Refusing to start with ephemeral file-backed state.");
}

let popularPlayersCache=null;
let popularPlayersCacheTime=0;
let popularPlayersFetchPromise=null;

let state=null;
state=loadState();
let supabaseSeedReady=false;
let supabaseRuntimeSnapshotQueue=Promise.resolve();
const supabaseMarketPersistQueues=new Map();
let supabaseBotCleanupQueue=Promise.resolve();
let lastSupabaseStateSyncAt=0;
let lastSupabaseUnavailableAt=0;
let supabaseStateSyncPromise=null;
let lastStateMutationAt=Date.now();
let lastBotAutoplayStatus=buildBotAutoplayStatus("startup");
const adminSessions=new Map();
persistState();

const MIME_TYPES={
  ".html":"text/html; charset=utf-8",
  ".css":"text/css; charset=utf-8",
  ".js":"application/javascript; charset=utf-8",
  ".json":"application/json; charset=utf-8"
};

const server=http.createServer(async (req,res)=>{
  try{
    const url=new URL(req.url,`http://${req.headers.host}`);
    const sessionContext=ensureSessionContext(req,res);
    if(url.pathname==="/api"||url.pathname.startsWith("/api/")){
      await handleApi(req,res,url,sessionContext);
      return;
    }
    if(isChallengePath(url.pathname)){
      await trackPageViewRequest(req,url,sessionContext);
      await serveChallengePage(res,url.pathname,shouldUseSupabaseForRequest(req),sessionContext);
      return;
    }
    await trackPageViewRequest(req,url,sessionContext);
    serveStatic(res,url.pathname,sessionContext);
  }catch(error){
    res.writeHead(500,{"Content-Type":"application/json; charset=utf-8"});
    res.end(JSON.stringify({error:error.message||"Server error"}));
  }
});

async function startServer(){
  if(SUPABASE_ENABLED){
    await syncStateFromSupabase({force:true,validateHostedState:HOSTED_ENVIRONMENT});
  }
  server.listen(PORT,"0.0.0.0",()=>{
    console.log(`Mercatus server running on http://0.0.0.0:${PORT}`);
    fetchPopularPlayers().catch((error)=>{
      console.warn("Initial popular players fetch failed",error.message);
    });
  });
  setInterval(runAutonomousBots,BOT_AUTOPLAY_INTERVAL_MS);
  setInterval(()=>{
    fetchPopularPlayers(true).catch((error)=>{
      console.warn("Scheduled popular players fetch failed",error.message);
    });
  },POPULAR_PLAYERS_REFRESH_MS);
}

startServer().catch((error)=>{
  console.error("Mercatus startup failed",error.message||error);
  process.exit(1);
});

function refreshSupabaseStateInBackground(label="Supabase"){
  if(!SUPABASE_ENABLED){
    return;
  }
  syncStateFromSupabase().catch((error)=>{
    console.warn(`${label} sync failed`,error.message);
  });
}

function serveStatic(res,pathname,sessionContext=null){
  const requestedPath=pathname==="/"?"/index.html":pathname;
  if(requestedPath==="/index.html"){
    const publicOrigin=getPublicAppOrigin();
    const html=renderIndexHtmlWithMetadata({
      title:"crowdIQ",
      description:"Trade NRL fantasy projection markets, track crowd confidence, and test your edge on live weekly lines.",
      url:`${publicOrigin}/`,
      image:`${publicOrigin}/social-preview.svg`
    });
    const headers={
      "Content-Type":"text/html; charset=utf-8",
      "Cache-Control":"no-store, no-cache, must-revalidate, proxy-revalidate",
      "Pragma":"no-cache",
      "Expires":"0",
      "Surrogate-Control":"no-store"
    };
    appendPendingCookies(headers,sessionContext);
    res.writeHead(200,headers);
    res.end(html);
    return;
  }
  const filePath=path.join(__dirname,requestedPath);
  if(!filePath.startsWith(__dirname)){
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath,(error,data)=>{
    if(error){
      res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"});
      res.end("Not found");
      return;
    }
    const extension=path.extname(filePath);
    const headers={
      "Content-Type":MIME_TYPES[extension]||"application/octet-stream"
    };
    if([".html",".css",".js"].includes(extension)){
      headers["Cache-Control"]="no-store, no-cache, must-revalidate, proxy-revalidate";
      headers["Pragma"]="no-cache";
      headers["Expires"]="0";
      headers["Surrogate-Control"]="no-store";
    }
    appendPendingCookies(headers,sessionContext);
    res.writeHead(200,headers);
    res.end(data);
  });
}

async function handleApi(req,res,url,sessionContext){
  const useSupabase=shouldUseSupabaseForRequest(req);
  if(req.method==="POST"&&url.pathname==="/api/admin/auth"){
    const body=await parseJson(req);
    const submittedPassword=String(body.password||"");
    if(!safeConstantCompare(submittedPassword,ADMIN_PASSWORD)){
      clearAdminSession(sessionContext);
      return json(res,401,{error:"Incorrect admin password"},sessionContext);
    }
    createAdminSession(sessionContext);
    return json(res,200,{ok:true},sessionContext);
  }
  if(req.method==="POST"&&url.pathname==="/api/analytics/market-view"){
    const body=await parseJson(req);
    await logMarketViewedEvent(req,sessionContext,{
      marketId:body.marketId,
      source:body.source
    },useSupabase);
    return json(res,200,{ok:true},sessionContext);
  }
  if(url.pathname.startsWith("/api/admin/")&&url.pathname!=="/api/admin/auth"){
    if(!hasAdminAccess(sessionContext)){
      return json(res,403,{error:"Admin access required"},sessionContext);
    }
  }
  if(req.method==="POST"&&url.pathname==="/api/share/create"){
    const body=await parseJson(req);
    let authenticatedUserName="";
    try{
      authenticatedUserName=ensureAuthenticatedUserName(req);
    }catch(error){
      return json(res,401,{error:error.message||"Authentication required"});
    }
    const submittedTradeId=String(body.trade_id || (Array.isArray(body.trade_ids)?body.trade_ids[0]:"")).trim();
    if(!submittedTradeId){
      return json(res,400,{error:"Select one unmatched trade to share"});
    }
    const eligibleTrade=findEligibleShareTrade(authenticatedUserName,submittedTradeId);
    if(!eligibleTrade){
      if(useSupabase){
        try{
          await syncStateFromSupabase({force:true});
        }catch(error){
          console.warn("Share create Supabase sync failed",error.message);
        }
      }
      const refreshedTrade=findEligibleShareTrade(authenticatedUserName,submittedTradeId);
      if(refreshedTrade){
        let shareSession=null;
        if(useSupabase){
          try{
            shareSession=await createHostedShareSessionWithTimeout(authenticatedUserName,refreshedTrade.trade.id);
          }catch(error){
            if(!shouldFallbackShareSessionStorage(error)){
              return json(res,500,{error:error.message||"Unable to create challenge link right now"});
            }
            console.warn("Hosted share session creation failed; falling back to runtime overlay",error.message);
          }
        }
        if(!shareSession){
          shareSession=createLocalShareSession(authenticatedUserName,refreshedTrade.trade.id,useSupabase);
        }
        if(!shareSession?.id){
          return json(res,500,{error:"Unable to create challenge link right now"});
        }
        const shareOrigin=getPublicAppOrigin(req);
        return json(res,200,{
          share_url:`${shareOrigin}/challenge/${shareSession.id}`
        });
      }
      return json(res,400,{error:"This trade is no longer available to share"});
    }
    let shareSession=null;
    if(useSupabase){
      try{
        await enqueueSupabaseMarketPersistence(eligibleTrade.market,state);
        shareSession=await createHostedShareSessionWithTimeout(authenticatedUserName,eligibleTrade.trade.id);
      }catch(error){
        if(!shouldFallbackShareSessionStorage(error)){
          return json(res,500,{error:error.message||"Unable to create challenge link right now"});
        }
        console.warn("Hosted share session creation failed; falling back to runtime overlay",error.message);
      }
    }
    if(!shareSession){
      shareSession=createLocalShareSession(authenticatedUserName,eligibleTrade.trade.id,useSupabase);
    }
    if(!shareSession?.id){
      return json(res,500,{error:"Unable to create challenge link right now"});
    }
    const shareOrigin=getPublicAppOrigin(req);
    return json(res,200,{
      share_url:`${shareOrigin}/challenge/${shareSession.id}`
    });
  }
  if(req.method==="GET"&&url.pathname.startsWith("/api/share/")){
    const shareId=decodeURIComponent(url.pathname.replace("/api/share/","").trim());
    if(!shareId||shareId==="accept"||shareId==="create"){
      return json(res,404,{error:"Not found"});
    }
    try{
      const sessionPayload=await fetchShareSessionPayload(shareId,useSupabase);
      return json(res,200,sessionPayload);
    }catch(error){
      if(useSupabase&&shouldFallbackShareSessionStorage(error)){
        try{
          const sessionPayload=await fetchShareSessionPayload(shareId,false);
          return json(res,200,sessionPayload);
        }catch(localError){
          return json(res,400,{error:localError.message||"This challenge link is no longer valid"});
        }
      }
      return json(res,400,{error:error.message||"This challenge link is no longer valid"});
    }
  }
  if(req.method==="POST"&&url.pathname==="/api/share/accept"){
    const body=await parseJson(req);
    let authenticatedUserName="";
    try{
      authenticatedUserName=ensureAuthenticatedUserName(req);
    }catch(error){
      return json(res,401,{error:error.message||"Authentication required"});
    }
    const shareSessionId=String(body.share_session_id||"").trim();
    const tradeId=String(body.trade_id||"").trim();
    if(!shareSessionId||!tradeId){
      return json(res,400,{error:"Invalid share acceptance payload"});
    }
    try{
      const hasLocalShareSession=Boolean(fetchLocalShareSessionRecord(shareSessionId));
      const matchedTrade=useSupabase&&!hasLocalShareSession
        ? await acceptHostedShareTrade(authenticatedUserName,shareSessionId,tradeId)
        : acceptLocalShareTrade(authenticatedUserName,shareSessionId,tradeId,useSupabase);
      const backendUser=await syncBackendUser(authenticatedUserName,useSupabase);
      return json(res,200,{
        success:true,
        matched_trade:matchedTrade,
        balance:getUserBankroll(authenticatedUserName),
        state:buildClientStateSnapshot(state,{
          useSupabase,
          currentUserName:authenticatedUserName
        }),
        backend:buildBackendPayload(backendUser,null,useSupabase),
        prizePool:buildPrizePoolClientPayload(authenticatedUserName)
      });
    }catch(error){
      return json(res,400,{error:error.message||"Unable to accept this trade"});
    }
  }
  if(req.method==="GET"&&url.pathname==="/api/popular-players"){
    const now=Date.now();
    const cacheAge=now-popularPlayersCacheTime;
    const usingCached=Array.isArray(popularPlayersCache)&&cacheAge<POPULAR_PLAYERS_REFRESH_MS;
    const scrapedPlayers=usingCached?popularPlayersCache:await fetchPopularPlayers();
    const players=buildPopularFeaturedPayload(scrapedPlayers,state);
    return json(res,200,{players,cached:usingCached});
  }
  if(req.method==="GET"&&(url.pathname==="/api/bootstrap"||url.pathname==="/api")){
    const username=ensureUser(url.searchParams.get("user")||"Demo Trader");
    if(useSupabase){
      if(Array.isArray(state?.markets)&&state.markets.length){
        refreshSupabaseStateInBackground("Bootstrap Supabase");
      }else{
        try{
          await syncStateFromSupabase({force:true});
        }catch(error){
          console.warn("Bootstrap Supabase sync failed",error.message);
        }
      }
    }else{
      syncDerivedBalances();
    }
    syncPrizePoolState(state);
    const backendUser=await syncBackendUser(username,useSupabase);
    return json(res,200,{state:buildClientStateSnapshot(state,{
      useSupabase,
      currentUserName:username
    }),roundGames,teamColors:TEAM_COLORS,userName:username,backend:buildBackendPayload(backendUser,null,useSupabase),prizePool:buildPrizePoolClientPayload(username),build:BUILD_INFO});
  }
  if(req.method==="POST"&&(url.pathname==="/api/session"||url.pathname==="/api")){
    const body=await parseJson(req);
    const username=ensureUser(body.userName||"Demo Trader");
    const shouldLogAuthEvent=body.logUserAuthEvent!==false;
    if(useSupabase){
      if(Array.isArray(state?.markets)&&state.markets.length){
        refreshSupabaseStateInBackground("Session Supabase");
      }else{
        try{
          await syncStateFromSupabase({force:true});
        }catch(error){
          console.warn("Session Supabase sync failed",error.message);
        }
      }
    }else{
      syncDerivedBalances();
    }
    syncPrizePoolState(state);
    const backendUser=await syncBackendUser(username,useSupabase);
    if(useSupabase&&shouldLogAuthEvent&&backendUser?.id){
      await logAnalyticsEvent({
        eventType:backendUser.created?"user_signup":"user_login",
        sessionId:sessionContext.sessionId,
        userId:backendUser.id,
        metadata:{
          username:backendUser.username
        }
      });
    }
    return json(res,200,{state:buildClientStateSnapshot(state,{
      useSupabase,
      currentUserName:username
    }),userName:username,backend:buildBackendPayload(backendUser,null,useSupabase),prizePool:buildPrizePoolClientPayload(username),build:BUILD_INFO});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/active-round"){
    const body=await parseJson(req);
    const roundNumber=Number(body.roundNumber);
    if(!AVAILABLE_ROUND_NUMBERS.includes(roundNumber)){
      return json(res,400,{error:"That round is not available in the current dataset."});
    }
    const previousRoundNumber=getActiveRoundNumber(state);
    state.activeRoundNumber=roundNumber;
    state.activeRoundLabel=buildRoundLabel(roundNumber);
    state.forceOpenGameIds=[];
    if(previousRoundNumber!==roundNumber){
      await resetBotBankrollsForRound(roundNumber,{useSupabase,targetState:state});
    }
    if(useSupabase){
      await persistSupabaseActiveRoundSetting(roundNumber);
    }
    syncPrizePoolState(state);
    await persistStateSnapshot(useSupabase);
    return json(res,200,{state,prizePool:buildPrizePoolClientPayload()});
  }
  if(req.method==="POST"&&url.pathname==="/api/wallet/deposit"){
    const body=await parseJson(req);
    const username=ensureUser(body.userName||"Demo Trader");
    const amount=Number(body.amount);
    if(!Number.isFinite(amount)||amount<=0){
      return json(res,400,{error:"Enter a valid deposit amount."});
    }
    applyWalletDelta(username,amount,{
      type:"DEPOSIT",
      title:"Deposit completed",
      subtitle:`Added ${formatCurrency(amount)} to your demo wallet`
    });
    await persistStateSnapshot(useSupabase);
    syncPrizePoolState(state);
    return json(res,200,{state,backend:null,prizePool:buildPrizePoolClientPayload(username),message:`${formatCurrency(amount)} added to your wallet.`});
  }
  if(req.method==="POST"&&url.pathname==="/api/wallet/withdraw"){
    const body=await parseJson(req);
    const username=ensureUser(body.userName||"Demo Trader");
    const amount=Number(body.amount);
    if(!Number.isFinite(amount)||amount<=0){
      return json(res,400,{error:"Enter a valid withdrawal amount."});
    }
    recordWalletEvent(username,{
      type:"WITHDRAWAL_REQUEST",
      status:"REJECTED",
      amount:0,
      requestedAmount:amount,
      title:"Withdrawal request",
      subtitle:"Demo mode only. Withdrawals are not enabled."
    });
    await persistStateSnapshot(useSupabase);
    syncPrizePoolState(state);
    return json(res,200,{state,backend:null,prizePool:buildPrizePoolClientPayload(username),message:"Withdrawal requests stop here in demo mode."});
  }
  if(req.method==="POST"&&url.pathname==="/api/trades"){
    const body=await parseJson(req);
    let username="";
    try{
      username=ensureAuthenticatedUserName(req);
    }catch(error){
      return json(res,401,{error:error.message||"Authentication required"});
    }
    if(useSupabase){
      try{
        await ensureSupabaseReady();
      }catch(error){
        console.warn("Supabase unavailable for trade request; rejecting hosted trade",error.message);
        return json(res,503,{error:"Trading is temporarily unavailable. Please try again."});
      }
    }
    if(!useSupabase){
      syncDerivedBalances();
    }
    const market=findMarket(body.marketId);
    const stake=Number(body.stake);
    const side=body.side;
    if(!market||!Number.isFinite(stake)||stake<=0||(side!=="OVER"&&side!=="UNDER")){
      return json(res,400,{error:"Invalid trade payload."});
    }
    if(stake>MAX_SINGLE_BID){
      return json(res,400,{error:`Single bids are capped at ${formatCurrency(MAX_SINGLE_BID)}.`});
    }
    if(isMarketLocked(market)){
      return json(res,400,{error:"That market is locked."});
    }
    const bankroll=getUserBankroll(username);
    if(stake>bankroll){
      return json(res,400,{error:`${username} has $${bankroll.toFixed(0)} available.`});
    }
    const stateSnapshot=useSupabase?cloneValue(state):null;
    let trade=null;
    try{
      trade=executeProjectionTrade(market,{userName:username,side,stake});
      lastStateMutationAt=Date.now();
      syncPrizePoolState(state);
      if(useSupabase){
        await enqueueSupabaseMarketPersistence(market,state);
        enqueueSupabaseRuntimeSnapshot().catch((error)=>{
          console.warn("Supabase runtime snapshot failed after durable trade persist",error.message);
        });
        getSupabaseDemoUser(username)
          .then((backendUser)=>logAnalyticsEvent({
            eventType:"trade_placed",
            sessionId:sessionContext.sessionId,
            userId:backendUser?.id||null,
            metadata:{
              username,
              market_id:String(market.id),
              side,
              stake
            }
          }))
          .catch((error)=>{
            console.warn("Trade analytics logging failed",error.message);
          });
      }else{
        await persistStateSnapshot(false);
      }
    }catch(error){
      if(useSupabase&&stateSnapshot){
        state=normalizeState(stateSnapshot,{skipWalletBootstrap:true});
        syncPrizePoolState(state);
      }
      console.warn("Trade request failed; rolling back in-memory state",error.message);
      return json(res,503,{error:"Trading is temporarily unavailable. Please try again."});
    }
    if(body.quickPick||body.quickTake){
      return json(res,200,{
        trade,
        balance:getUserBankroll(username),
        market:buildQuickTakeMarketPayload(market),
        backend:null,
        prizePool:buildPrizePoolClientPayload(username)
      });
    }
    return json(res,200,{
      trade,
      balance:getUserBankroll(username),
      market:buildTradeMarketPayload(market),
      backend:null,
      prizePool:buildPrizePoolClientPayload(username)
    });
  }
  if(req.method==="POST"&&url.pathname==="/api/orders/cancel"){
    const body=await parseJson(req);
    const username=ensureUser(body.userName||"Demo Trader");
    const orderIds=Array.isArray(body.orderIds)?body.orderIds:[body.orderId].filter(Boolean);
    if(!orderIds.length){
      return json(res,400,{error:"No open order selected."});
    }
    cancelPendingOrders(username,orderIds);
    await persistStateSnapshot(useSupabase);
    syncPrizePoolState(state);
    return json(res,200,{state,backend:null,prizePool:buildPrizePoolClientPayload(username)});
  }
  if(req.method==="POST"&&url.pathname==="/api/prize-pool/draft/start"){
    const body=await parseJson(req);
    const username=ensureUser(body.userName||"Demo Trader");
    syncPrizePoolState(state);
    startPrizePoolDraft(username);
    await persistStateSnapshot(useSupabase);
    return json(res,200,{state,prizePool:buildPrizePoolClientPayload(username)});
  }
  if(req.method==="POST"&&url.pathname==="/api/prize-pool/draft/pick"){
    const body=await parseJson(req);
    const username=ensureUser(body.userName||"Demo Trader");
    syncPrizePoolState(state);
    confirmPrizePoolDraftPick(username,body.draftId,body.side);
    await persistStateSnapshot(useSupabase);
    return json(res,200,{state,prizePool:buildPrizePoolClientPayload(username)});
  }
  if(req.method==="POST"&&url.pathname==="/api/prize-pool/submit"){
    const body=await parseJson(req);
    const username=ensureUser(body.userName||"Demo Trader");
    syncPrizePoolState(state);
    submitPrizePoolEntry(username,body.draftId);
    await persistStateSnapshot(useSupabase);
    return json(res,200,{state,prizePool:buildPrizePoolClientPayload(username)});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/lines"){
    const body=await parseJson(req);
    const market=findMarket(body.marketId);
    const openingLine=normalizeMidpoint(Number(body.openingLine));
    const currentLine=normalizeMidpoint(Number(body.currentLine));
    if(!market||!Number.isFinite(openingLine)||!Number.isFinite(currentLine)){
      return json(res,400,{error:"Enter valid midpoint lines."});
    }
    market.initialLine=openingLine;
    market.currentLine=currentLine;
    market.manualAdjustmentSteps=Math.round((currentLine-openingLine)/LINE_STEP);
    market.manuallyLocked=false;
    updateMarketTotals(market);
    await persistStateSnapshot(useSupabase);
    syncPrizePoolState(state);
    return json(res,200,{state,prizePool:buildPrizePoolClientPayload()});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/settle"){
    const body=await parseJson(req);
    const market=findMarket(body.marketId);
    const finalScore=Number(body.finalScore);
    if(!market||!Number.isFinite(finalScore)){
      return json(res,400,{error:"Enter a valid final score."});
    }
    if(market.settlement){
      return json(res,400,{error:"That market is already resolved."});
    }
    settleMarketsWithSnapshot([{market,finalScore}],{
      mode:"single",
      label:`Manual settlement for ${market.playerName}`
    });
    await persistStateSnapshot(useSupabase);
    syncPrizePoolState(state);
    return json(res,200,{state,prizePool:buildPrizePoolClientPayload()});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/settle-round"){
    const activeRoundNumber=getActiveRoundNumber(state);
    const activeRoundLabel=getActiveRoundLabel(state);
    const candidates=state.markets
      .filter((market)=>!market.settlement&&getRoundNumberForMarket(market)===activeRoundNumber)
      .map((market)=>{
        const finalScore=getImportedRoundScoreForMarket(market,activeRoundNumber);
        if(Number.isFinite(finalScore)){
          return {market,finalScore,settlementType:"SCORED"};
        }
        return {market,finalScore:null,settlementType:"VOID"};
      });
    if(!candidates.length){
      return json(res,400,{error:`No open ${activeRoundLabel} markets are available for imported-score settlement.`});
    }
    const scoredCount=candidates.filter((entry)=>entry.settlementType==="SCORED").length;
    const voidCount=candidates.filter((entry)=>entry.settlementType==="VOID").length;
    settleMarketsWithSnapshot(candidates,{
      mode:"round",
      label:`Imported ${activeRoundLabel} settlement`,
      roundNumber:activeRoundNumber,
      settledCount:candidates.length,
      scoredCount,
      voidCount
    });
    await persistStateSnapshot(useSupabase);
    syncPrizePoolState(state);
    return json(res,200,{
      state,
      settlementBatch:{
        settledCount:candidates.length,
        scoredCount,
        voidCount,
        roundNumber:activeRoundNumber,
        roundMetrics:state.lastSettlementBatch?.roundMetrics||null
      },
      prizePool:buildPrizePoolClientPayload()
    });
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/undo-settlement"){
    if(!state.lastSettlementBatch){
      return json(res,400,{error:"There is no settlement batch to undo."});
    }
    const restoredCount=undoLastSettlementBatch();
    await persistStateSnapshot(useSupabase);
    syncPrizePoolState(state);
    return json(res,200,{state,restoredCount,prizePool:buildPrizePoolClientPayload()});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/reset"){
    state=buildFreshState();
    if(!SUPABASE_ENABLED){
      syncDerivedBalances();
    }
    await persistStateSnapshot(useSupabase);
    syncPrizePoolState(state);
    return json(res,200,{state,prizePool:buildPrizePoolClientPayload()});
  }
  if(req.method==="POST"&&url.pathname==="/api/contact"){
    const body=await parseJson(req);
    const email=String(body.email||"").trim();
    const message=String(body.message||"").trim();
    const userName=String(body.userName||"").trim();
    if(!email||!/\S+@\S+\.\S+/.test(email)){
      return json(res,400,{error:"Enter a valid email address."});
    }
    if(!message){
      return json(res,400,{error:"Enter a message before sending."});
    }
    const contactMessage={
      id:randomUUID(),
      email,
      message,
      userName:userName||null,
      submittedAt:new Date().toISOString(),
      status:"NEW"
    };
    state.contactMessages=[contactMessage,...(Array.isArray(state.contactMessages)?state.contactMessages:[])].slice(0,250);
    await persistStateSnapshot(useSupabase);
    return json(res,200,{state,contactMessage,message:"Message received."});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/bots/create"){
    state.botSimulation=state.botSimulation||{config:normalizeSimulationConfig(DEFAULT_SIMULATION_CONFIG),bots:[]};
    state.botSimulation.config=normalizeSimulationConfig({
      ...state.botSimulation.config,
      enabled:true
    });
    const bot=createRandomProbBot(state.botSimulation.bots);
    state.botSimulation.bots=[...state.botSimulation.bots,bot];
    state.bankrolls[bot.userName]=bot.startingBankroll;
    syncDerivedBalances();
    syncPrizePoolState(state);
    lastBotAutoplayStatus=buildBotAutoplayStatus("bot-created");
    await persistStateSnapshot(useSupabase);
    return json(res,200,{state,bot,botStatus:lastBotAutoplayStatus});
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/bots/status"){
    return json(res,200,{botStatus:buildBotAutoplayStatus("status-requested")});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/bots/run"){
    const body=await parseJson(req);
    const ticks=Math.max(1,Math.min(100,Number(body.ticks)||1));
    const result=runBotTicks(ticks);
    lastBotAutoplayStatus=buildBotAutoplayStatus("manual-run",{
      ticks,
      events:result.events.length,
      executedEvents:result.events.filter((event)=>event.executed).length
    });
    if(useSupabase){
      await persistSupabaseMarketsForEvents(result.events);
      await persistStateSnapshot(true);
    }else{
      await persistStateSnapshot(false);
    }
    return json(res,200,{state,botSimulation:state.botSimulation,events:result.events,botStatus:lastBotAutoplayStatus});
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/analytics/overview"){
    const overview=await buildAnalyticsOverview(useSupabase,url.searchParams.get("range"));
    return json(res,200,overview,sessionContext);
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/analytics/trends"){
    const trends=await buildAnalyticsTrends(useSupabase,url.searchParams.get("range"));
    return json(res,200,trends,sessionContext);
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/analytics/funnel"){
    const funnel=await buildAnalyticsFunnel(useSupabase,url.searchParams.get("range"));
    return json(res,200,funnel,sessionContext);
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/analytics/sources"){
    const sources=await buildAnalyticsSources(useSupabase,url.searchParams.get("range"));
    return json(res,200,sources,sessionContext);
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/analytics/returning"){
    const returning=await buildReturningAnalytics(useSupabase,url.searchParams.get("range"));
    return json(res,200,returning,sessionContext);
  }
  json(res,404,{error:"Not found"});
}

function ensureSessionContext(req,res){
  const cookies=parseCookies(req?.headers?.cookie||"");
  const sessionId=String(cookies[SESSION_COOKIE_NAME]||"").trim()||randomUUID();
  const context={
    req,
    res,
    cookies,
    sessionId,
    pendingCookies:[]
  };
  if(!cookies[SESSION_COOKIE_NAME]){
    setCookie(context,SESSION_COOKIE_NAME,sessionId,{
      maxAgeMs:SESSION_COOKIE_MAX_AGE_MS,
      httpOnly:true
    });
  }
  context.adminSessionToken=String(cookies[ADMIN_COOKIE_NAME]||"").trim();
  context.isAdmin=Boolean(resolveAdminSession(context.adminSessionToken));
  return context;
}

function parseCookies(cookieHeader){
  return String(cookieHeader||"")
    .split(";")
    .map((entry)=>entry.trim())
    .filter(Boolean)
    .reduce((result,entry)=>{
      const separatorIndex=entry.indexOf("=");
      if(separatorIndex===-1){
        return result;
      }
      const key=entry.slice(0,separatorIndex).trim();
      const value=entry.slice(separatorIndex+1).trim();
      if(key){
        result[key]=decodeURIComponent(value);
      }
      return result;
    },{});
}

function serializeCookie(name,value,{maxAgeMs,httpOnly=false}={}){
  const parts=[
    `${name}=${encodeURIComponent(String(value||""))}`,
    "Path=/",
    "SameSite=Lax"
  ];
  if(Number.isFinite(maxAgeMs)){
    parts.push(`Max-Age=${Math.max(0,Math.floor(maxAgeMs/1000))}`);
    parts.push(`Expires=${new Date(Date.now()+Math.max(0,maxAgeMs)).toUTCString()}`);
  }
  if(httpOnly){
    parts.push("HttpOnly");
  }
  return parts.join("; ");
}

function setCookie(sessionContext,name,value,options={}){
  if(!sessionContext){
    return;
  }
  sessionContext.pendingCookies.push(serializeCookie(name,value,options));
}

function appendPendingCookies(headers,sessionContext){
  if(sessionContext?.pendingCookies?.length){
    headers["Set-Cookie"]=sessionContext.pendingCookies;
    sessionContext.pendingCookies=[];
  }
}

function createAdminSession(sessionContext){
  const token=randomUUID();
  adminSessions.set(token,{
    expiresAt:Date.now()+ADMIN_SESSION_MAX_AGE_MS
  });
  sessionContext.adminSessionToken=token;
  sessionContext.isAdmin=true;
  setCookie(sessionContext,ADMIN_COOKIE_NAME,token,{
    maxAgeMs:ADMIN_SESSION_MAX_AGE_MS,
    httpOnly:true
  });
}

function clearAdminSession(sessionContext){
  if(sessionContext?.adminSessionToken){
    adminSessions.delete(sessionContext.adminSessionToken);
  }
  if(sessionContext){
    sessionContext.adminSessionToken="";
    sessionContext.isAdmin=false;
    setCookie(sessionContext,ADMIN_COOKIE_NAME,"",{
      maxAgeMs:0,
      httpOnly:true
    });
  }
}

function resolveAdminSession(token){
  if(!token){
    return null;
  }
  const record=adminSessions.get(token);
  if(!record){
    return null;
  }
  if(record.expiresAt<=Date.now()){
    adminSessions.delete(token);
    return null;
  }
  return record;
}

function hasAdminAccess(sessionContext){
  return Boolean(sessionContext?.isAdmin);
}

function safeConstantCompare(left,right){
  const leftBuffer=Buffer.from(String(left||""),"utf8");
  const rightBuffer=Buffer.from(String(right||""),"utf8");
  if(leftBuffer.length!==rightBuffer.length){
    const leftHash=createHash("sha256").update(leftBuffer).digest();
    const rightHash=createHash("sha256").update(rightBuffer).digest();
    return timingSafeEqual(leftHash,rightHash)&&false;
  }
  return timingSafeEqual(leftBuffer,rightBuffer);
}

async function trackPageViewRequest(req,url,sessionContext){
  if(!SUPABASE_ENABLED||req.method!=="GET"){
    return;
  }
  if(url.pathname!=="/"&&url.pathname!=="/index.html"&&!isChallengePath(url.pathname)){
    return;
  }
  await logRequestAnalyticsEvent(req,sessionContext,"page_view",{
    path:url.pathname
  },{
    source:String(url.searchParams.get("utm_source")||"").trim()||"direct"
  });
}

async function logMarketViewedEvent(req,sessionContext,{marketId,source}={},useSupabase=SUPABASE_ENABLED){
  if(!useSupabase||!marketId){
    return;
  }
  const market=findMarket(String(marketId));
  if(!market){
    return;
  }
  await logRequestAnalyticsEvent(req,sessionContext,"market_viewed",{
    market_id:String(market.id),
    player_name:market.playerName,
    team:market.team,
    source:source||"app"
  });
}

async function logRequestAnalyticsEvent(req,sessionContext,eventType,metadata=null,{source=null}={}){
  const userName=String(req?.headers?.["x-user-name"]||"").trim();
  let backendUser=null;
  if(userName){
    backendUser=await getSupabaseDemoUser(userName);
  }
  await logAnalyticsEvent({
    eventType,
    sessionId:sessionContext?.sessionId||randomUUID(),
    userId:backendUser?.id||null,
    metadata,
    source
  });
}

async function logAnalyticsEvent({eventType,userId=null,sessionId,metadata=null,createdAt=null,source=null}){
  if(!SUPABASE_ENABLED||!eventType||!sessionId){
    return;
  }
  try{
    await supabaseRequest("analytics_events",{
      method:"POST",
      headers:{Prefer:"return=minimal"},
      body:{
        event_type:String(eventType),
        user_id:userId||null,
        session_id:String(sessionId),
        created_at:createdAt||new Date().toISOString(),
        metadata:metadata&&typeof metadata==="object"?metadata:null,
        source:source?String(source):null
      }
    });
  }catch(error){
    if(!/analytics_events/i.test(String(error?.message||""))){
      console.warn("Analytics event write failed",error.message);
    }
  }
}

async function fetchAnalyticsEvents(query={}){
  if(!SUPABASE_ENABLED){
    return [];
  }
  try{
    return await supabaseRequestAll("analytics_events",{
      query:{
        select:"event_type,user_id,session_id,created_at,metadata,source",
        ...query
      }
    });
  }catch(error){
    if(/column .*source/i.test(String(error?.message||""))){
      try{
        const rows=await supabaseRequestAll("analytics_events",{
          query:{
            select:"event_type,user_id,session_id,created_at,metadata",
            ...query
          }
        });
        return rows.map((row)=>({...row,source:null}));
      }catch(fallbackError){
        if(/analytics_events/i.test(String(fallbackError?.message||""))){
          return [];
        }
        throw fallbackError;
      }
    }
    if(/analytics_events/i.test(String(error?.message||""))){
      return [];
    }
    throw error;
  }
}

async function buildAnalyticsOverview(useSupabase=SUPABASE_ENABLED,rangeKey="30d"){
  const analytics=await buildAnalyticsPayload(useSupabase,rangeKey);
  return {
    range:analytics.range,
    cards:{
      active_users:buildMetricCardPayload({
        label:"Active Users",
        value:uniqueSessionCount(analytics.current.events),
        previousValue:uniqueSessionCount(analytics.previous.events),
        meta:`Unique sessions in ${analytics.range.label.toLowerCase()}`,
        sparkline:buildDailyUniqueSessionSeries(analytics.current.events,analytics.range.currentStart,analytics.range.currentEnd)
      }),
      signups:buildMetricCardPayload({
        label:"Signups",
        value:countEventsOfType(analytics.current.events,"user_signup"),
        previousValue:countEventsOfType(analytics.previous.events,"user_signup"),
        meta:`New users in ${analytics.range.label.toLowerCase()}`,
        sparkline:buildDailyEventCountSeries(analytics.current.events,analytics.range.currentStart,analytics.range.currentEnd,"user_signup")
      }),
      visitors:buildMetricCardPayload({
        label:"Visitors",
        value:uniqueSessionCount(filterPageViewEvents(analytics.current.events)),
        previousValue:uniqueSessionCount(filterPageViewEvents(analytics.previous.events)),
        meta:`Tracked visitor sessions in ${analytics.range.label.toLowerCase()}`,
        sparkline:buildDailyUniqueSessionSeries(filterPageViewEvents(analytics.current.events),analytics.range.currentStart,analytics.range.currentEnd)
      }),
      total_users:buildMetricCardPayload({
        label:"Total Users",
        value:countUsersAtMoment(analytics.users,analytics.range.currentEnd),
        previousValue:countUsersAtMoment(analytics.users,analytics.range.previousEnd),
        meta:"All registered users",
        sparkline:buildDailyCumulativeUserSeries(analytics.users,analytics.range.currentStart,analytics.range.currentEnd)
      }),
      trades:buildMetricCardPayload({
        label:"Trades",
        value:countEventsOfType(analytics.current.events,"trade_placed"),
        previousValue:countEventsOfType(analytics.previous.events,"trade_placed"),
        meta:`Trades placed in ${analytics.range.label.toLowerCase()}`,
        sparkline:buildDailyEventCountSeries(analytics.current.events,analytics.range.currentStart,analytics.range.currentEnd,"trade_placed")
      }),
      return_rate:buildMetricCardPayload({
        label:"Return Rate",
        value:analytics.returning.current.rate,
        previousValue:analytics.returning.previous.rate,
        meta:"Registered users with more than one login",
        sparkline:analytics.returning.daily.map((entry)=>entry.rate),
        format:"percentage"
      })
    }
  };
}

async function buildAnalyticsTrends(useSupabase=SUPABASE_ENABLED,rangeKey="30d"){
  const analytics=await buildAnalyticsPayload(useSupabase,rangeKey);
  return {
    range:analytics.range,
    daily_signups:buildDailyEventSeriesWithDates(analytics.current.events,analytics.range.currentStart,analytics.range.currentEnd,"user_signup"),
    daily_active_users:buildDailyUniqueSessionSeriesWithDates(analytics.current.events,analytics.range.currentStart,analytics.range.currentEnd)
  };
}

async function buildAnalyticsFunnel(useSupabase=SUPABASE_ENABLED,rangeKey="30d"){
  const analytics=await buildAnalyticsPayload(useSupabase,rangeKey);
  const totalUniqueVisitors=uniqueSessionCount(filterPageViewEvents(analytics.current.events));
  const totalSignups=countEventsOfType(analytics.current.events,"user_signup");
  return {
    range:analytics.range,
    total_unique_visitors:totalUniqueVisitors,
    total_signups:totalSignups,
    conversion_rate:totalUniqueVisitors?roundPercentage((totalSignups/totalUniqueVisitors)*100):0
  };
}

async function buildAnalyticsSources(useSupabase=SUPABASE_ENABLED,rangeKey="30d"){
  const analytics=await buildAnalyticsPayload(useSupabase,rangeKey);
  const sourceMap=new Map();
  filterPageViewEvents(analytics.current.events).forEach((event)=>{
    const source=String(event.source||"").trim()||"direct";
    if(!sourceMap.has(source)){
      sourceMap.set(source,new Set());
    }
    if(event.session_id){
      sourceMap.get(source).add(String(event.session_id));
    }
  });
  return {
    range:analytics.range,
    sources:[...sourceMap.entries()]
      .map(([source,sessions])=>({source,sessions:sessions.size}))
      .sort((left,right)=>right.sessions-left.sessions||left.source.localeCompare(right.source))
  };
}

async function buildReturningAnalytics(useSupabase=SUPABASE_ENABLED,rangeKey="30d"){
  const analytics=await buildAnalyticsPayload(useSupabase,rangeKey);
  return {
    range:analytics.range,
    return_rate:analytics.returning.current.rate,
    previous_return_rate:analytics.returning.previous.rate,
    comparison:buildComparisonPayload(analytics.returning.current.rate,analytics.returning.previous.rate),
    daily_return_rate:analytics.returning.daily
  };
}

async function buildAnalyticsPayload(useSupabase=SUPABASE_ENABLED,rangeKey="30d"){
  if(!useSupabase){
    const emptyRange=buildAnalyticsRange(rangeKey,new Date());
    return {
      range:emptyRange,
      users:[],
      current:{events:[]},
      previous:{events:[]},
      returning:{
        current:{rate:0},
        previous:{rate:0},
        daily:[]
      }
    };
  }
  const now=new Date();
  const baseRange=buildAnalyticsRange(rangeKey,now);
  const [events,users]=await Promise.all([
    fetchAnalyticsEvents(baseRange.fetchStart?{created_at:`gte.${baseRange.fetchStart.toISOString()}`} : {}),
    fetchUsers()
  ]);
  const earliestEventDate=events.length?new Date(Math.min(...events.map((event)=>new Date(event.created_at).getTime()))):null;
  const earliestUserDate=users.length?new Date(Math.min(...users.map((user)=>new Date(user.created_at).getTime()))):null;
  const earliestKnownDate=earliestEventDate&&earliestUserDate
    ? new Date(Math.min(earliestEventDate.getTime(),earliestUserDate.getTime()))
    : earliestEventDate||earliestUserDate;
  const finalizedRange=baseRange.key==="all"
    ? buildAnalyticsRange(rangeKey,now,earliestKnownDate)
    : baseRange;
  const currentEvents=filterEventsInWindow(events,finalizedRange.currentStart,finalizedRange.currentEnd);
  const previousEvents=finalizedRange.previousStart&&finalizedRange.previousEnd
    ? filterEventsInWindow(events,finalizedRange.previousStart,finalizedRange.previousEnd)
    : [];
  return {
    range:finalizedRange,
    users,
    current:{events:currentEvents},
    previous:{events:previousEvents},
    returning:{
      current:calculateReturningRate(currentEvents,users,finalizedRange.currentEnd),
      previous:calculateReturningRate(previousEvents,users,finalizedRange.previousEnd),
      daily:buildDailyReturningRateSeries(currentEvents,users,finalizedRange.currentStart,finalizedRange.currentEnd)
    }
  };
}

async function fetchUsers(){
  if(!SUPABASE_ENABLED){
    return [];
  }
  return supabaseRequestAll("users",{
    query:{select:"id,created_at"}
  });
}

function buildAnalyticsRange(rangeKey="30d",now=new Date(),earliestDate=null){
  const key=normalizeAnalyticsRangeKey(rangeKey);
  let currentStart;
  if(key==="today"){
    currentStart=startOfUtcDay(now);
  }else if(key==="7d"){
    currentStart=startOfUtcDay(new Date(now.getTime()-(6*24*60*60*1000)));
  }else if(key==="30d"){
    currentStart=startOfUtcDay(new Date(now.getTime()-(29*24*60*60*1000)));
  }else{
    currentStart=startOfUtcDay(earliestDate||now);
  }
  const currentEnd=now;
  const duration=Math.max(currentEnd.getTime()-currentStart.getTime(),1);
  return {
    key,
    label:key==="today"?"Today":key==="7d"?"Last 7 Days":key==="30d"?"Last 30 Days":"All Time",
    currentStart,
    currentEnd,
    previousStart:key==="all"?null:new Date(currentStart.getTime()-duration),
    previousEnd:key==="all"?null:new Date(currentStart),
    fetchStart:key==="all"?null:new Date(currentStart.getTime()-duration)
  };
}

function normalizeAnalyticsRangeKey(rangeKey){
  const submitted=String(rangeKey||"30d").trim().toLowerCase();
  if(submitted==="today"||submitted==="7d"||submitted==="30d"||submitted==="all"){
    return submitted;
  }
  return "30d";
}

function filterEventsInWindow(events,start,end){
  const startMs=start?new Date(start).getTime():-Infinity;
  const endMs=end?new Date(end).getTime():Infinity;
  return events.filter((event)=>{
    const eventTime=new Date(event.created_at).getTime();
    return eventTime>=startMs&&eventTime<endMs;
  });
}

function countEventsOfType(events,eventType){
  return events.filter((event)=>event.event_type===eventType).length;
}

function filterPageViewEvents(events){
  return events.filter((event)=>event.event_type==="page_view");
}

function uniqueSessionCount(events){
  return new Set(events.map((event)=>String(event.session_id||"")).filter(Boolean)).size;
}

function countUsersAtMoment(users,endMoment){
  if(!endMoment){
    return 0;
  }
  const endMs=new Date(endMoment).getTime();
  return users.filter((user)=>new Date(user.created_at).getTime()<=endMs).length;
}

function buildDailyEventSeriesWithDates(events,start,end,eventType){
  const counts=new Map();
  events.filter((event)=>event.event_type===eventType).forEach((event)=>{
    const key=toUtcDateKey(event.created_at);
    counts.set(key,(counts.get(key)||0)+1);
  });
  return buildDailyDateKeys(start,end).map((date)=>({date,count:counts.get(date)||0}));
}

function buildDailyEventCountSeries(events,start,end,eventType){
  return buildDailyEventSeriesWithDates(events,start,end,eventType).map((entry)=>entry.count);
}

function buildDailyUniqueSessionSeriesWithDates(events,start,end){
  const sessionsByDate=new Map();
  events.forEach((event)=>{
    const key=toUtcDateKey(event.created_at);
    if(!sessionsByDate.has(key)){
      sessionsByDate.set(key,new Set());
    }
    if(event.session_id){
      sessionsByDate.get(key).add(String(event.session_id));
    }
  });
  return buildDailyDateKeys(start,end).map((date)=>({date,count:sessionsByDate.get(date)?.size||0}));
}

function buildDailyUniqueSessionSeries(events,start,end){
  return buildDailyUniqueSessionSeriesWithDates(events,start,end).map((entry)=>entry.count);
}

function buildDailyCumulativeUserSeries(users,start,end){
  return buildDailyDateKeys(start,end).map((dateKey)=>{
    const endOfDay=new Date(`${dateKey}T23:59:59.999Z`);
    return countUsersAtMoment(users,endOfDay);
  });
}

function calculateReturningRate(events,users,endMoment){
  const registeredUsers=countUsersAtMoment(users,endMoment);
  if(!registeredUsers){
    return {rate:0,returningUsers:0,registeredUsers:0};
  }
  const loginCounts=new Map();
  events.filter((event)=>event.event_type==="user_login"&&event.user_id).forEach((event)=>{
    const key=String(event.user_id);
    loginCounts.set(key,(loginCounts.get(key)||0)+1);
  });
  const returningUsers=[...loginCounts.values()].filter((count)=>count>=2).length;
  return {
    rate:roundPercentage((returningUsers/registeredUsers)*100),
    returningUsers,
    registeredUsers
  };
}

function buildDailyReturningRateSeries(events,users,start,end){
  const loginEvents=events.filter((event)=>event.event_type==="user_login"&&event.user_id);
  return buildDailyDateKeys(start,end).map((dateKey)=>{
    const startOfDay=new Date(`${dateKey}T00:00:00.000Z`);
    const endOfDay=new Date(`${dateKey}T23:59:59.999Z`);
    const dayEvents=loginEvents.filter((event)=>{
      const eventTime=new Date(event.created_at).getTime();
      return eventTime>=startOfDay.getTime()&&eventTime<=endOfDay.getTime();
    });
    const metric=calculateReturningRate(dayEvents,users,endOfDay);
    return {
      date:dateKey,
      rate:metric.rate
    };
  });
}

function buildMetricCardPayload({label,value,previousValue,meta,sparkline,format="number"}){
  return {
    label,
    value,
    previous_value:previousValue,
    display_value:formatMetricValue(value,format),
    meta,
    comparison:buildComparisonPayload(value,previousValue),
    sparkline:Array.isArray(sparkline)?sparkline:[]
  };
}

function buildComparisonPayload(currentValue,previousValue){
  if(!Number.isFinite(Number(currentValue))||!Number.isFinite(Number(previousValue))){
    return {direction:"flat",percentage:null,label:"-"};
  }
  const current=Number(currentValue)||0;
  const previous=Number(previousValue)||0;
  if(previous===0){
    return current===0
      ? {direction:"flat",percentage:0,label:"-"}
      : {direction:"flat",percentage:null,label:"-"};
  }
  const percentage=((current-previous)/Math.abs(previous))*100;
  if(Math.abs(percentage)<0.05){
    return {direction:"flat",percentage:0,label:"-"};
  }
  return {
    direction:percentage>0?"up":"down",
    percentage:roundPercentage(Math.abs(percentage)),
    label:`${percentage>0?"↑":"↓"} ${roundPercentage(Math.abs(percentage)).toFixed(1)}%`
  };
}

function formatMetricValue(value,format="number"){
  if(format==="percentage"){
    return `${roundPercentage(Number(value)||0).toFixed(1)}%`;
  }
  return Number.isFinite(Number(value))?Math.round(Number(value)):0;
}

function buildDailyDateKeys(start,end){
  const keys=[];
  const cursor=startOfUtcDay(start);
  const endDay=startOfUtcDay(end||start);
  while(cursor.getTime()<=endDay.getTime()){
    keys.push(toUtcDateKey(cursor));
    cursor.setUTCDate(cursor.getUTCDate()+1);
  }
  return keys;
}

function roundPercentage(value){
  return Number(Number(value||0).toFixed(1));
}

function startOfUtcDay(value){
  const date=new Date(value);
  return new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate()));
}

function toUtcDateKey(value){
  return new Date(value).toISOString().slice(0,10);
}

function ensureAuthenticatedUserName(req){
  const userName=String(req?.headers?.["x-user-name"]||"").trim();
  if(!userName){
    throw new Error("Authentication required");
  }
  return ensureUser(userName);
}

function normalizeSupabaseErrorMessage(error,fallback){
  const raw=String(error?.message||"").trim();
  const jsonStart=raw.indexOf("{");
  if(jsonStart!==-1){
    try{
      const payload=JSON.parse(raw.slice(jsonStart));
      return payload.message||payload.error_description||payload.details||fallback;
    }catch(parseError){
      void parseError;
    }
  }
  return raw||fallback;
}

async function createHostedShareSession(userName,tradeId){
  const user=await ensureSupabaseDemoUser(userName);
  const rows=await supabaseRequest("share_sessions",{
    method:"POST",
    query:{select:"id"},
    headers:{Prefer:"return=representation"},
    body:{
      created_by_user_id:user.id,
      trade_ids:[String(tradeId)],
      status:"active"
    }
  });
  return rows?.[0]||null;
}

async function createHostedShareSessionWithTimeout(userName,tradeId){
  return Promise.race([
    createHostedShareSession(userName,tradeId),
    new Promise((_,reject)=>{
      setTimeout(()=>reject(new Error("Hosted share session creation timed out")),SHARE_SESSION_CREATE_TIMEOUT_MS);
    })
  ]);
}

function shouldFallbackShareSessionStorage(error){
  const message=String(error?.message||"");
  return /share_sessions/i.test(message)
    || /accept_share_trade/i.test(message)
    || /relation .*share_sessions/i.test(message)
    || /function .*accept_share_trade/i.test(message)
    || /Could not find the table/i.test(message)
    || /aborted/i.test(message)
    || /timed out/i.test(message);
}

function createLocalShareSession(userName,tradeId,useSupabase=SUPABASE_ENABLED){
  state.shareSessions=Array.isArray(state.shareSessions)?state.shareSessions:[];
  const session={
    id:randomUUID(),
    createdByUserName:userName,
    tradeIds:[String(tradeId)],
    createdAt:new Date().toISOString(),
    status:"active"
  };
  state.shareSessions.push(session);
  persistStateSnapshotDeferred(useSupabase);
  return session;
}

async function fetchShareSessionPayload(shareId,useSupabase=SUPABASE_ENABLED){
  if(useSupabase){
    const localSessionRecord=fetchLocalShareSessionRecord(shareId);
    if(localSessionRecord){
      return fetchShareSessionPayload(shareId,false);
    }
  }
  if(useSupabase){
    try{
      await syncStateFromSupabase({force:true});
    }catch(error){
      console.warn("Hosted share session state sync failed",error.message);
    }
  }
  const sessionRecord=useSupabase
    ? await fetchHostedShareSessionRecord(shareId)
    : fetchLocalShareSessionRecord(shareId);
  if(!sessionRecord){
    throw new Error("This challenge link is no longer valid");
  }
  const validTrades=[];
  let expiredTradeCount=0;
  let unavailableReason="";
  let settledSummary=null;
  sessionRecord.tradeIds.forEach((tradeId)=>{
    const tradeState=describeChallengeTradeState(tradeId);
    if(!tradeState.eligible){
      expiredTradeCount+=1;
      if(!unavailableReason&&tradeState.reason){
        unavailableReason=tradeState.reason;
      }
      if(!settledSummary&&tradeState.settledSummary){
        settledSummary=tradeState.settledSummary;
      }
      return;
    }
    validTrades.push(serializeShareTrade(tradeState.trade,tradeState.market));
  });
  const nextStatus=deriveShareSessionStatus(sessionRecord.tradeIds);
  if(nextStatus!==sessionRecord.status){
    updateShareSessionStatus(sessionRecord.id,nextStatus,useSupabase).catch((error)=>{
      console.warn("Share session status update failed",error.message);
    });
  }
  return {
    created_by_username:sessionRecord.createdByUserName,
    trades:validTrades,
    expired_trade_count:expiredTradeCount,
    unavailable_reason:unavailableReason,
    settled_summary:settledSummary
  };
}

async function fetchHostedShareSessionRecord(shareId){
  const rows=await supabaseRequest("share_sessions",{
    query:{
      select:"id,trade_ids,status,created_by_user_id",
      id:`eq.${shareId}`,
      limit:1
    }
  });
  const row=rows?.[0];
  if(!row){
    return null;
  }
  const userRows=await supabaseRequest("users",{
    query:{
      select:"username",
      id:`eq.${row.created_by_user_id}`,
      limit:1
    }
  });
  return {
    id:row.id,
    tradeIds:Array.isArray(row.trade_ids)?row.trade_ids.map((tradeId)=>String(tradeId)) : [],
    status:String(row.status||"active"),
    createdByUserName:userRows?.[0]?.username||"CrowdIQ user"
  };
}

function fetchLocalShareSessionRecord(shareId){
  const row=(state.shareSessions||[]).find((session)=>session.id===shareId);
  if(!row){
    return null;
  }
  return {
    id:row.id,
    tradeIds:Array.isArray(row.tradeIds)?row.tradeIds.map((tradeId)=>String(tradeId)) : [],
    status:String(row.status||"active"),
    createdByUserName:row.createdByUserName||"CrowdIQ user"
  };
}

function findEligibleShareTrade(userName,tradeId){
  const match=findTradeAndMarketById(tradeId);
  if(!match){
    return null;
  }
  if(String(match.trade.userName||"").toLowerCase()!==String(userName||"").toLowerCase()){
    return null;
  }
  if(getRoundNumberForMarket(match.market)!==getActiveRoundNumber(state)){
    return null;
  }
  if(!isTradeChallengeEligible(match.trade,match.market)){
    return null;
  }
  return match;
}

function findChallengeTradeById(tradeId){
  const match=findTradeAndMarketById(tradeId);
  if(!match){
    return null;
  }
  if(!isTradeChallengeEligible(match.trade,match.market)){
    return null;
  }
  return match;
}

function findTradeRecordById(tradeId){
  return findTradeAndMarketById(tradeId);
}

function findAcceptedChallengeTradeForUser(tradeId,userName){
  const originalMatch=findTradeAndMarketById(tradeId);
  if(!originalMatch){
    return null;
  }
  const pair=findChallengeRelatedPair(originalMatch.trade,originalMatch.market);
  if(!pair){
    return null;
  }
  const oppositeOrderId=String(pair.overOrderId||"")===String(tradeId)
    ? pair.underOrderId
    : pair.overOrderId;
  const matchedTrade=oppositeOrderId?findTradeAndMarketById(String(oppositeOrderId)):null;
  if(!matchedTrade){
    return null;
  }
  if(userName&&String(matchedTrade.trade.userName||"").toLowerCase()!==String(userName||"").toLowerCase()){
    return null;
  }
  return serializeShareTrade(matchedTrade.trade,matchedTrade.market);
}

function describeChallengeTradeState(tradeId){
  const match=findTradeAndMarketById(tradeId);
  if(!match){
    return {eligible:false,reason:"moved",settledSummary:null};
  }
  const {trade,market}=match;
  if(isTradeChallengeEligible(trade,market)){
    return {eligible:true,trade,market,reason:"",settledSummary:null};
  }
  const kickoffAt=Number(new Date(marketKickoffIso(market)||"").getTime());
  const settledSummary=buildChallengeSettledSummary(trade,market)||buildChallengePairSettledSummary(trade,market);
  if(trade.result){
    return {
      eligible:false,
      reason:"expired",
      settledSummary
    };
  }
  if(settledSummary){
    return {
      eligible:false,
      reason:"expired",
      settledSummary
    };
  }
  if(Number.isFinite(kickoffAt)&&kickoffAt<=Date.now()){
    return {eligible:false,reason:"expired",settledSummary:null};
  }
  if(!(Number(trade.unmatchedStake)>0)||String(trade.status||"")==="MATCHED"){
    return {eligible:false,reason:"filled",settledSummary:null};
  }
  return {eligible:false,reason:"moved",settledSummary:null};
}

function buildChallengeSettledSummary(trade,market){
  if(!trade?.result){
    return null;
  }
  return {
    player_name:market?.playerName||"Unknown player",
    final_score:Number.isFinite(Number(trade.result.finalScore))?Number(trade.result.finalScore):null,
    winner_name:findChallengeWinnerName(trade,market),
    outcome:String(trade.result.outcome||"")
  };
}

function buildChallengePairSettledSummary(trade,market){
  if(!trade||!market?.settlement){
    return null;
  }
  const relatedPair=findChallengeRelatedPair(trade,market);
  if(!relatedPair){
    return null;
  }
  const isSettledPair=String(relatedPair.status||"") === "SETTLED"
    || Boolean(relatedPair.winnerUserName)
    || Boolean(relatedPair.voided)
    || Number(relatedPair.platformRevenue) > 0;
  if(!isSettledPair){
    return null;
  }
  const winnerName=relatedPair.winnerUserName||"";
  let outcome="LOSS";
  if(relatedPair.voided){
    outcome="VOID";
  }else if(Number(relatedPair.platformRevenue) > 0 && !winnerName){
    outcome="MIDDLE";
  }else if(winnerName && String(winnerName).toLowerCase() === String(trade.userName||"").toLowerCase()){
    outcome="WIN";
  }
  return {
    player_name:market.playerName||"Unknown player",
    final_score:Number.isFinite(Number(market.settlement?.finalScore))?Number(market.settlement.finalScore):null,
    winner_name:winnerName,
    outcome
  };
}

function findChallengeRelatedPair(trade,market){
  const tradePairIds=Array.isArray(trade?.pairIds)?trade.pairIds.map((id)=>String(id)):[];
  return (market?.matchedPairs||[]).find((pair)=>
    tradePairIds.includes(String(pair.id))
    || String(pair.overOrderId||"") === String(trade.id)
    || String(pair.underOrderId||"") === String(trade.id)
  )||null;
}

function findChallengeWinnerName(trade,market){
  if(!trade?.result){
    return "";
  }
  if(trade.result.outcome==="VOID"||trade.result.outcome==="MIDDLE"){
    return "";
  }
  const relatedPair=findChallengeRelatedPair(trade,market);
  if(relatedPair?.winnerUserName){
    return relatedPair.winnerUserName;
  }
  if(trade.result.outcome==="WIN"){
    return trade.userName||"";
  }
  return "";
}

function findTradeAndMarketById(tradeId){
  for(const market of state.markets||[]){
    const trade=(market.trades||[]).find((entry)=>String(entry.id)===String(tradeId));
    if(trade){
      return {trade,market};
    }
  }
  return null;
}

function isTradeChallengeEligible(trade,market){
  if(!trade||!market){
    return false;
  }
  if(trade.result){
    return false;
  }
  if(!["PENDING","PARTIALLY_MATCHED"].includes(String(trade.status||""))){
    return false;
  }
  if(!(Number(trade.unmatchedStake)>0)){
    return false;
  }
  return !isMarketLocked(market);
}

function serializeShareTrade(trade,market){
  return {
    id:trade.id,
    marketId:trade.marketId,
    userName:trade.userName,
    side:trade.side,
    entryLine:Number(trade.entryLine)||0,
    entryUnderLine:Number(trade.entryUnderLine)||Number(trade.entryLine)||0,
    entryOverLine:Number(trade.entryOverLine)||Number(trade.entryLine)||0,
    stake:Number(trade.stake)||0,
    matchedStake:Number(trade.matchedStake)||0,
    unmatchedStake:Number(trade.unmatchedStake)||0,
    refundedStake:Number(trade.refundedStake)||0,
    pairIds:Array.isArray(trade.pairIds)?trade.pairIds.slice():[],
    price:Number(trade.price)||1,
    timestamp:trade.timestamp,
    result:trade.result||null,
    status:trade.status||"PENDING",
    market:{
      id:market.id,
      player_name:market.playerName,
      team:market.team,
      opponent:market.opponent,
      position:market.position,
      kickoff_time:marketKickoffIso(market),
      current_line:Number(market.currentLine)||0,
      initial_line:Number(market.initialLine)||0,
      game_id:market.gameId
    }
  };
}

function marketKickoffIso(market){
  const game=findGame(market?.gameId);
  if(game?.kickoffAt){
    return game.kickoffAt;
  }
  const kickoffAt=kickoffTimestampForGame(game);
  return Number.isFinite(kickoffAt)?new Date(kickoffAt).toISOString():null;
}

function deriveShareSessionStatus(tradeIds){
  const unresolved=tradeIds
    .map((tradeId)=>findTradeAndMarketById(tradeId))
    .filter(Boolean)
    .filter(({trade})=>!trade.result&&["PENDING","PARTIALLY_MATCHED"].includes(String(trade.status||""))&&(Number(trade.unmatchedStake)||0)>0);
  if(!unresolved.length){
    return "completed";
  }
  const actionable=unresolved.filter(({market})=>!isMarketLocked(market));
  return actionable.length?"active":"expired";
}

async function updateShareSessionStatus(shareId,status,useSupabase=SUPABASE_ENABLED){
  if(useSupabase){
    await supabaseRequest("share_sessions",{
      method:"PATCH",
      query:{id:`eq.${shareId}`},
      headers:{Prefer:"return=minimal"},
      body:{status}
    });
    return;
  }
  const session=(state.shareSessions||[]).find((entry)=>entry.id===shareId);
  if(session){
    session.status=status;
    persistStateSnapshotDeferred(false);
  }
}

async function acceptHostedShareTrade(userName,shareSessionId,tradeId){
  try{
    const user=await Promise.race([
      ensureSupabaseDemoUser(userName),
      new Promise((_,reject)=>{
        setTimeout(()=>reject(new Error("Hosted share accept timed out")),SHARE_SESSION_ACCEPT_TIMEOUT_MS);
      })
    ]);
    const rpcRows=await Promise.race([
      supabaseRequest("rpc/accept_share_trade",{
        method:"POST",
        body:{
          p_share_session_id:String(shareSessionId),
          p_trade_id:String(tradeId),
          p_accepting_user_id:String(user.id)
        }
      }),
      new Promise((_,reject)=>{
        setTimeout(()=>reject(new Error("Hosted share accept timed out")),SHARE_SESSION_ACCEPT_TIMEOUT_MS);
      })
    ]);
    await syncStateFromSupabase({force:true});
    const matchedTradeId=rpcRows?.[0]?.matched_trade_id||rpcRows?.matched_trade_id||null;
    if(matchedTradeId){
      await ensureHostedChallengeChallengerStakeCharged(tradeId,String(matchedTradeId));
      await syncStateFromSupabase({force:true});
    }
    if(matchedTradeId){
      const matchedTrade=findTradeRecordById(String(matchedTradeId));
      if(matchedTrade){
        return serializeShareTrade(matchedTrade.trade,matchedTrade.market);
      }
    }
    const fallbackTrade=findTradeRecordById(String(tradeId));
    if(fallbackTrade){
      return serializeShareTrade(fallbackTrade.trade,fallbackTrade.market);
    }
    throw new Error("Matched trade could not be loaded");
  }catch(error){
    const message=normalizeSupabaseErrorMessage(error,"Unable to match this trade right now");
    try{
      await syncStateFromSupabase({force:true});
      const existingAcceptedTrade=findAcceptedChallengeTradeForUser(String(tradeId),userName);
      if(existingAcceptedTrade){
        return existingAcceptedTrade;
      }
    }catch(recoveryError){
      void recoveryError;
    }
    if(shouldFallbackShareSessionStorage(error)){
      await syncStateFromSupabase({force:true});
      const sessionRecord=await fetchHostedShareSessionRecord(shareSessionId);
      if(!sessionRecord){
        throw new Error("This challenge link is no longer valid");
      }
      state.shareSessions=Array.isArray(state.shareSessions)?state.shareSessions:[];
      const nextSession={
        id:sessionRecord.id,
        tradeIds:Array.isArray(sessionRecord.tradeIds)?sessionRecord.tradeIds.map((id)=>String(id)):[],
        status:String(sessionRecord.status||"active"),
        createdByUserName:sessionRecord.createdByUserName||"CrowdIQ user",
        createdAt:new Date().toISOString()
      };
      const existingIndex=state.shareSessions.findIndex((entry)=>entry.id===nextSession.id);
      if(existingIndex>=0){
        state.shareSessions[existingIndex]=nextSession;
      }else{
        state.shareSessions.push(nextSession);
      }
      try{
        const matchedTrade=acceptLocalShareTrade(userName,shareSessionId,String(tradeId));
        const market=findMarket(matchedTrade.marketId);
        if(!market){
          throw new Error("Matched trade could not be loaded");
        }
        await enqueueSupabaseMarketPersistence(market,state);
        const updatedSession=state.shareSessions.find((entry)=>entry.id===shareSessionId);
        if(updatedSession?.status){
          await updateShareSessionStatus(shareSessionId,updatedSession.status,true);
        }
        await persistStateSnapshot(true);
        return matchedTrade;
      }catch(fallbackError){
        throw new Error(normalizeSupabaseErrorMessage(fallbackError,"Unable to match this trade right now"));
      }
    }
    throw new Error(message);
  }
}

function acceptLocalShareTrade(userName,shareSessionId,tradeId,useSupabase=SUPABASE_ENABLED){
  state.shareSessions=Array.isArray(state.shareSessions)?state.shareSessions:[];
  const session=state.shareSessions.find((entry)=>entry.id===shareSessionId);
  if(!session){
    throw new Error("This challenge link is no longer valid");
  }
  if(session.status!=="active"){
    throw new Error("This challenge is no longer active");
  }
  if(String(session.createdByUserName||"").toLowerCase()===String(userName||"").toLowerCase()){
    throw new Error("You cannot accept your own trade");
  }
  if(!Array.isArray(session.tradeIds)||!session.tradeIds.includes(tradeId)){
    throw new Error("This trade is not part of this challenge");
  }
  const match=findTradeAndMarketById(tradeId);
  if(!match||!isTradeChallengeEligible(match.trade,match.market)){
    throw new Error("This trade is no longer available");
  }
  const {trade,market}=match;
  const requiredStake=Number(trade.unmatchedStake)||0;
  const bankroll=getUserBankroll(userName);
  if(bankroll<requiredStake){
    throw new Error("Insufficient balance");
  }
  if(getUserBankroll(trade.userName)<requiredStake){
    throw new Error("This trade is no longer available");
  }
  const timestamp=new Date().toISOString();
  const acceptingSide=trade.side==="OVER"?"UNDER":"OVER";
  const acceptedTrade={
    id:randomUUID(),
    marketId:market.id,
    userName,
    side:acceptingSide,
    entryLine:acceptingSide==="OVER"?(Number(trade.entryOverLine)||Number(trade.entryLine)||0):(Number(trade.entryUnderLine)||Number(trade.entryLine)||0),
    entryUnderLine:Number(trade.entryUnderLine)||Number(trade.entryLine)||0,
    entryOverLine:Number(trade.entryOverLine)||Number(trade.entryLine)||0,
    stake:requiredStake,
    matchedStake:requiredStake,
    unmatchedStake:0,
    refundedStake:0,
    pairIds:[],
    price:1,
    timestamp,
    result:null,
    status:"MATCHED",
    chargedStake:0,
    engineVersion:ENGINE_VERSION
  };
  ensureBankroll(userName);
  ensureTradeStakeCharged(trade,(Number(trade.matchedStake)||0)+requiredStake,market,timestamp);
  applyWalletDelta(userName,-requiredStake,{
    type:"TRADE_STAKE",
    title:"Trade matched",
    subtitle:`${market.playerName} ${acceptedTrade.side.toLowerCase()} ${formatLine(acceptedTrade.entryLine)}`,
    marketId:market.id,
    tradeId:acceptedTrade.id,
    createdAt:timestamp
  });
  acceptedTrade.chargedStake=requiredStake;
  const pair={
    id:randomUUID(),
    marketId:market.id,
    createdAt:timestamp,
    status:"OPEN",
    stake:requiredStake,
    overUserName:trade.side==="OVER"?trade.userName:userName,
    underUserName:trade.side==="UNDER"?trade.userName:userName,
    overOrderId:trade.side==="OVER"?trade.id:acceptedTrade.id,
    underOrderId:trade.side==="UNDER"?trade.id:acceptedTrade.id,
    overEntryLine:Number(trade.entryOverLine)||Number(trade.entryLine)||0,
    underEntryLine:Number(trade.entryUnderLine)||Number(trade.entryLine)||0,
    winnerUserName:null,
    platformRevenue:0
  };
  trade.unmatchedStake=Math.max((Number(trade.unmatchedStake)||0)-requiredStake,0);
  trade.matchedStake=(Number(trade.matchedStake)||0)+requiredStake;
  trade.pairIds=(trade.pairIds||[]).concat(pair.id);
  trade.status="MATCHED";
  acceptedTrade.pairIds.push(pair.id);
  market.trades.push(acceptedTrade);
  market.matchedPairs.push(pair);
  updateMarketTotals(market);
  syncDerivedBalances();
  session.status=deriveShareSessionStatus(session.tradeIds);
  persistStateSnapshotDeferred(useSupabase);
  return serializeShareTrade(acceptedTrade,market);
}

async function ensureHostedChallengeChallengerStakeCharged(originalTradeId,matchedTradeId){
  if(!SUPABASE_ENABLED){
    return;
  }
  const originalMatch=findChallengeTradeById(String(originalTradeId));
  const matchedTrade=findChallengeTradeById(String(matchedTradeId));
  if(!originalMatch?.trade?.userName||!matchedTrade?.trade){
    return;
  }
  const chargeAmount=Number(matchedTrade.trade.stake)||0;
  if(chargeAmount<=0){
    return;
  }
  const externalLedgerKey=`challenge_match_${String(originalTradeId)}`;
  const existingRows=await supabaseRequest("wallet_ledger",{
    query:{
      select:"id",
      external_ledger_key:`eq.${externalLedgerKey}`,
      limit:1
    }
  });
  if(existingRows?.length){
    return;
  }
  const challenger=await getSupabaseDemoUser(originalMatch.trade.userName);
  if(!challenger){
    return;
  }
  const context=await ensureSupabaseSeedData();
  const nextBalance=(Number(challenger.balance)||0)-chargeAmount;
  await supabaseRequest("wallet_ledger",{
    method:"POST",
    headers:{Prefer:"return=minimal"},
    body:{
      user_id:challenger.id,
      round_id:context?.round?.id||null,
      trade_id:String(originalTradeId),
      entry_type:"TRADE_STAKE",
      amount:-chargeAmount,
      balance_after:nextBalance,
      note:"Challenge trade matched",
      external_ledger_key:externalLedgerKey
    }
  });
  await supabaseRequest("wallet_snapshots",{
    method:"POST",
    query:{
      on_conflict:"user_id",
      select:"*"
    },
    headers:{Prefer:"return=representation,resolution=merge-duplicates"},
    body:{
      user_id:challenger.id,
      username:challenger.username,
      current_balance:nextBalance
    }
  });
}

async function buildChallengeMetadata(shareId,useSupabase=SUPABASE_ENABLED){
  const publicOrigin=getPublicAppOrigin();
  const fallback={
    title:"crowdIQ Challenge",
    description:"Review a crowdIQ challenge and take the other side before kickoff.",
    url:`${publicOrigin}/challenge/${shareId}`,
    image:`${publicOrigin}/social-preview.svg`
  };
  try{
    void useSupabase;
    const session=await fetchShareSessionPayload(shareId,false);
    const firstTrade=session.trades[0];
    if(!firstTrade){
      return fallback;
    }
    const playerName=firstTrade.market?.player_name||"A player";
    const projection=firstTrade.side==="OVER"
      ? `Over ${Number(firstTrade.entryOverLine||firstTrade.entryLine||0).toFixed(1)}`
      : `Under ${Number(firstTrade.entryUnderLine||firstTrade.entryLine||0).toFixed(1)}`;
    const moreTrades=session.trades.length>1?` and ${session.trades.length-1} more trades`:"";
    return {
      title:`${session.created_by_username} challenged you to a trade on CrowdIQ`,
      description:`${playerName} · ${projection} · Take the other side?${moreTrades}`,
      url:`${publicOrigin}/challenge/${shareId}`,
      image:`${publicOrigin}/social-preview.svg`
    };
  }catch(error){
    return fallback;
  }
}

function getPublicAppOrigin(req=null){
  if(CONFIGURED_PUBLIC_ORIGIN){
    return CONFIGURED_PUBLIC_ORIGIN;
  }
  const requestOrigin=getRequestOrigin(req);
  if(requestOrigin){
    return requestOrigin;
  }
  return HOSTED_ENVIRONMENT?"https://crowdiq.live":`http://127.0.0.1:${PORT}`;
}

function getRequestOrigin(req){
  const forwardedProto=String(req?.headers?.["x-forwarded-proto"]||"").split(",")[0].trim();
  const forwardedHost=String(req?.headers?.["x-forwarded-host"]||"").split(",")[0].trim();
  const host=forwardedHost||String(req?.headers?.host||"").trim();
  if(!host){
    return "";
  }
  const protocol=forwardedProto||((host.startsWith("localhost:")||host.startsWith("127.0.0.1:")||/^192\.168\./.test(host)||/^10\./.test(host)||/^172\.(1[6-9]|2\d|3[0-1])\./.test(host))?"http":"https");
  return `${protocol}://${host}`.replace(/\/+$/,"");
}

function loadState(){
  if(SUPABASE_ENABLED){
    return buildFreshState();
  }
  try{
    if(fs.existsSync(STATE_PATH)){
      return normalizeState(JSON.parse(fs.readFileSync(STATE_PATH,"utf8")));
    }
  }catch(error){
    console.warn("Could not load persisted state",error);
  }
  return buildFreshState();
}

function shouldUseSupabaseForRequest(req){
  if(!SUPABASE_ENABLED){
    return false;
  }
  if(HOSTED_ENVIRONMENT||USE_SUPABASE){
    return true;
  }
  const host=String(req?.headers?.host||"").toLowerCase();
  return !(host.startsWith("127.0.0.1:")||host.startsWith("localhost:"));
}

function buildFreshState(){
  const botSimulation=normalizeSimulationConfig(DEFAULT_SIMULATION_CONFIG);
  const activeRoundNumber=DEFAULT_ACTIVE_ROUND_NUMBER;
  const nextState={
    bankrolls:{},
    markets:buildRoundMarkets().map((market)=>({...market,initialLine:normalizeMidpoint(market.initialLine),currentLine:normalizeMidpoint(market.initialLine),spreadWidth:LINE_STEP,totalOverStake:0,totalUnderStake:0,netPressure:0,pressureBalance:0,trades:[],matchedPairs:[],settlement:null,manuallyLocked:false,manualAdjustmentSteps:0,engineVersion:ENGINE_VERSION})),
    activeRoundNumber,
    activeRoundLabel:buildRoundLabel(activeRoundNumber),
    forceOpenGameIds:[],
    walletTransactions:[],
    shareSessions:[],
    contactMessages:[],
    lastSettlementBatch:null,
    roundMetricsHistory:[],
    prizePool:buildFreshPrizePoolState(),
    botSimulation:{
      config:botSimulation,
      bots:createBotRoster(botSimulation)
    }
  };
  return nextState;
}

function persistState(){
  if(SUPABASE_ENABLED){
    return;
  }
  fs.writeFileSync(STATE_PATH,JSON.stringify(state,null,2),"utf8");
}

async function persistStateSnapshot(useSupabase=SUPABASE_ENABLED){
  lastStateMutationAt=Date.now();
  persistState();
  if(!useSupabase){
    return;
  }
  try{
    await enqueueSupabaseRuntimeSnapshot();
  }catch(error){
    console.warn("Supabase runtime snapshot failed",error.message);
  }
}

function persistStateSnapshotDeferred(useSupabase=SUPABASE_ENABLED){
  lastStateMutationAt=Date.now();
  persistState();
  if(!useSupabase){
    return;
  }
  enqueueSupabaseRuntimeSnapshot().catch((error)=>{
    console.warn("Supabase runtime snapshot failed",error.message);
  });
}

function enqueueSupabaseRuntimeSnapshot(){
  supabaseRuntimeSnapshotQueue=supabaseRuntimeSnapshotQueue
    .catch(()=>null)
    .then(()=>persistSupabaseRuntimeState(state));
  return supabaseRuntimeSnapshotQueue;
}

function enqueueSupabaseMarketPersistence(market,targetState=state){
  const marketId=market?.id;
  if(!marketId){
    return Promise.resolve(null);
  }
  const previousQueue=supabaseMarketPersistQueues.get(marketId)||Promise.resolve();
  const nextQueue=previousQueue
    .catch(()=>null)
    .then(()=>persistSupabaseMarketState(market,targetState));
  const cleanupQueue=nextQueue.finally(()=>{
    if(supabaseMarketPersistQueues.get(marketId)===cleanupQueue){
      supabaseMarketPersistQueues.delete(marketId);
    }
  });
  supabaseMarketPersistQueues.set(marketId,cleanupQueue);
  return cleanupQueue;
}

function enqueueSupabaseBotCleanupPersistence(marketIds=[],targetState=state){
  const uniqueMarketIds=[...new Set((marketIds||[]).filter(Boolean))];
  if(!uniqueMarketIds.length){
    return Promise.resolve(null);
  }
  supabaseBotCleanupQueue=supabaseBotCleanupQueue
    .catch(()=>null)
    .then(async()=>{
      for(const marketId of uniqueMarketIds){
        const market=(targetState?.markets||[]).find((entry)=>entry?.id===marketId);
        if(!market){
          continue;
        }
        await enqueueSupabaseMarketPersistence(market,targetState);
      }
      await enqueueSupabaseRuntimeSnapshot();
    });
  return supabaseBotCleanupQueue;
}

function buildQuickTakeMarketPayload(market){
  return {
    id:market.id,
    currentLine:Number(market.currentLine)||0,
    initialLine:Number(market.initialLine)||0,
    totalOverStake:Number(market.totalOverStake)||0,
    totalUnderStake:Number(market.totalUnderStake)||0,
    netPressure:Number(market.netPressure)||0,
    pressureBalance:Number(market.pressureBalance)||0,
    manuallyLocked:Boolean(market.manuallyLocked),
    settlement:market.settlement||null
  };
}

function buildTradeMarketPayload(market){
  return {
    ...buildQuickTakeMarketPayload(market),
    trades:Array.isArray(market.trades)?market.trades.map((trade)=>serializeClientTrade(trade)):[]
  };
}

function serializeClientTrade(trade){
  if(!trade||typeof trade!=="object"){
    return trade;
  }
  return {
    id:trade.id,
    marketId:trade.marketId,
    userName:trade.userName,
    side:trade.side,
    entryLine:Number(trade.entryLine)||0,
    entryUnderLine:Number(trade.entryUnderLine)||Number(trade.entryLine)||0,
    entryOverLine:Number(trade.entryOverLine)||Number(trade.entryLine)||0,
    stake:Number(trade.stake)||0,
    matchedStake:Number(trade.matchedStake)||0,
    unmatchedStake:Number(trade.unmatchedStake)||0,
    refundedStake:Number(trade.refundedStake)||0,
    pairIds:Array.isArray(trade.pairIds)?trade.pairIds.slice():[],
    price:Number(trade.price)||1,
    timestamp:trade.timestamp,
    result:trade.result||null,
    status:trade.status||"PENDING"
  };
}

function serializeClientMarket(market,{useSupabase=false,currentUserName=""}={}){
  if(!market||typeof market!=="object"){
    return market;
  }
  const snapshot={...market};
  const allTrades=Array.isArray(market.trades)?market.trades:[];
  delete snapshot.botInputs;
  delete snapshot.matchedPairs;
  snapshot.initialLine=Number(market.initialLine)||0;
  snapshot.seasonAverage=Number(market.seasonAverage)||0;
  snapshot.fantasyPrice=Number(market.fantasyPrice)||0;
  snapshot.priceImpliedProjection=Number(market.priceImpliedProjection)||0;
  snapshot.isHome=Boolean(market.isHome);
  snapshot.teamOdds=Number(market.teamOdds)||0;
  snapshot.opponentOdds=Number(market.opponentOdds)||0;
  snapshot.impliedTeamWinProb=Number(market.impliedTeamWinProb)||0;
  snapshot.lastSeasonAverage=Number(market.lastSeasonAverage)||0;
  snapshot.lastGameScore=Number(market.lastGameScore)||0;
  snapshot.last3Average=Number(market.last3Average)||0;
  snapshot.positionalMatchupAdjustment=Number(market.positionalMatchupAdjustment)||0;
  snapshot.opponentPositionAverage=Number(market.opponentPositionAverage)||0;
  snapshot.leaguePositionAverage=Number(market.leaguePositionAverage)||0;
  snapshot.homeAverage=Number(market.homeAverage)||0;
  snapshot.awayAverage=Number(market.awayAverage)||0;
  snapshot.popularity=Number(market.popularity)||0;
  snapshot.scoreVolatility=Number(market.scoreVolatility)||0;
  snapshot.currentLine=Number(market.currentLine)||0;
  snapshot.spreadWidth=Number(market.spreadWidth)||0;
  snapshot.totalOverStake=Number(market.totalOverStake)||0;
  snapshot.totalUnderStake=Number(market.totalUnderStake)||0;
  snapshot.netPressure=Number(market.netPressure)||0;
  snapshot.pressureBalance=Number(market.pressureBalance)||0;
  snapshot.tradeMetrics=buildClientMarketTradeMetrics(market,allTrades);
  snapshot.trades=useSupabase
    ? buildHostedMarketTradeSnapshot(allTrades,currentUserName)
    : allTrades.map((trade)=>serializeClientTrade(trade));
  snapshot.settlement=market.settlement||null;
  snapshot.manuallyLocked=Boolean(market.manuallyLocked);
  snapshot.manualAdjustmentSteps=Number(market.manualAdjustmentSteps)||0;
  snapshot.engineVersion=market.engineVersion||ENGINE_VERSION;
  return snapshot;
}

function buildClientStateSnapshot(sourceState,{useSupabase=false,currentUserName=""}={}){
  const snapshot=sourceState&&typeof sourceState==="object"?sourceState:{};
  const trimmedWalletTransactions=useSupabase
    ? buildHostedWalletTransactionSnapshot(snapshot,currentUserName)
    : (Array.isArray(snapshot.walletTransactions)?cloneValue(snapshot.walletTransactions):[]);
  const trimmedContactMessages=useSupabase?[]:(Array.isArray(snapshot.contactMessages)?cloneValue(snapshot.contactMessages):[]);
  const trimmedRoundMetricsHistory=useSupabase?[]:(Array.isArray(snapshot.roundMetricsHistory)?cloneValue(snapshot.roundMetricsHistory):[]);
  const trimmedBotSimulation=useSupabase?buildHostedBotSimulationSnapshot(snapshot.botSimulation):cloneValue(snapshot.botSimulation||normalizeSimulationConfig(DEFAULT_SIMULATION_CONFIG));
  return {
    bankrolls:cloneValue(snapshot.bankrolls||{}),
    markets:Array.isArray(snapshot.markets)?snapshot.markets.map((market)=>serializeClientMarket(market,{
      useSupabase,
      currentUserName
    })):[],
    activeRoundNumber:Number(snapshot.activeRoundNumber)||DEFAULT_ACTIVE_ROUND_NUMBER,
    activeRoundLabel:snapshot.activeRoundLabel||buildRoundLabel(Number(snapshot.activeRoundNumber)||DEFAULT_ACTIVE_ROUND_NUMBER),
    forceOpenGameIds:Array.isArray(snapshot.forceOpenGameIds)?snapshot.forceOpenGameIds.slice():[],
    walletTransactions:trimmedWalletTransactions,
    shareSessions:Array.isArray(snapshot.shareSessions)?cloneValue(snapshot.shareSessions):[],
    contactMessages:trimmedContactMessages,
    lastSettlementBatch:cloneValue(snapshot.lastSettlementBatch||null),
    roundMetricsHistory:trimmedRoundMetricsHistory,
    prizePool:cloneValue(snapshot.prizePool||buildFreshPrizePoolState()),
    botSimulation:trimmedBotSimulation
  };
}

function buildHostedWalletTransactionSnapshot(snapshot,currentUserName){
  if(!Array.isArray(snapshot?.walletTransactions)){
    return [];
  }
  const normalizedUserName=String(currentUserName||"").trim().toLowerCase();
  if(!normalizedUserName){
    return [];
  }
  return cloneValue(
    snapshot.walletTransactions
      .filter((entry)=>String(entry?.userName||"").trim().toLowerCase()===normalizedUserName)
      .slice(0,50)
  );
}

function buildHostedMarketTradeSnapshot(trades,currentUserName){
  const normalizedUserName=String(currentUserName||"").trim().toLowerCase();
  if(!normalizedUserName){
    return [];
  }
  return trades
    .filter((trade)=>String(trade?.userName||"").trim().toLowerCase()===normalizedUserName)
    .map((trade)=>serializeClientTrade(trade));
}

function buildClientMarketTradeMetrics(market,trades){
  const volume=trades.reduce((sum,trade)=>sum+(Number(trade?.stake)||0),0);
  const openTrades=trades.filter((trade)=>!trade?.result&&trade?.status!=="CANCELLED");
  const matchedTrades=trades.filter((trade)=>(Number(trade?.matchedStake)||0)>0);
  const matchedTradeCount=matchedTrades.length;
  const uniqueTraders=new Set(trades.map((trade)=>trade?.userName).filter(Boolean)).size;
  return {
    tradeCount:trades.length,
    volume,
    liveExposure:openTrades.reduce((sum,trade)=>sum+(Number(trade?.matchedStake)||0),0),
    availableLiquidity:openTrades.reduce((sum,trade)=>sum+(Number(trade?.unmatchedStake)||0),0),
    unmatchedOrderCount:openTrades.filter((trade)=>(Number(trade?.unmatchedStake)||0)>0).length,
    matchedTradeCount,
    uniqueTraders,
    netPressure:Number(market?.netPressure)||0,
    confidence:marketConfidenceScore({matchedTradeCount,volume,uniqueTraders})
  };
}

function marketConfidenceScore({matchedTradeCount,volume,uniqueTraders}){
  const matchedSignal=1-Math.exp(-(Number(matchedTradeCount)||0)/6);
  const volumeSignal=1-Math.exp(-(Number(volume)||0)/220);
  const traderSignal=1-Math.exp(-(Number(uniqueTraders)||0)/5);
  return Math.round(Math.min(0.97,matchedSignal*0.45+volumeSignal*0.4+traderSignal*0.15)*100);
}

function buildHostedBotSimulationSnapshot(botSimulation){
  const config=botSimulation?.config&&typeof botSimulation.config==="object"
    ? botSimulation.config
    : {};
  return {
    config:{
      enabled:Boolean(config.enabled),
      defaultBotCount:Math.max(0,Number(config.defaultBotCount)||0),
      tick:Number(config.tick)||0,
      maxLogs:0,
      logs:Array.isArray(config.logs)?cloneValue(config.logs.slice(0,40)):[]
    },
    bots:Array.isArray(botSimulation?.bots)?cloneValue(botSimulation.bots):[]
  };
}

function normalizeRandomProbBot(bot){
  if(!bot?.userName){
    return null;
  }
  const rawConfig=bot?.config&&typeof bot.config==="object"?bot.config:{};
  const startingBankroll=Number.isFinite(Number(bot.startingBankroll))?Number(bot.startingBankroll):200;
  return {
    ...bot,
    id:bot.id||`bot-random-prob-${randomUUID()}`,
    archetype:"random-prob",
    source:"random-prob",
    startingBankroll,
    bankroll:Number.isFinite(Number(bot.bankroll))?Number(bot.bankroll):startingBankroll,
    cooldownUntil:Number.isFinite(Number(bot.cooldownUntil))?Number(bot.cooldownUntil):0,
    exposureByPlayer:{...(bot.exposureByPlayer||{})},
    config:{
      ...rawConfig,
      key:"random-prob",
      label:"Random Prob",
      baseLabel:"Random Prob",
      decisionMode:"random-prob",
      activityRate:Number.isFinite(Number(rawConfig.activityRate))?Number(rawConfig.activityRate):0.7,
      cooldownTicks:Number.isFinite(Number(rawConfig.cooldownTicks))?Number(rawConfig.cooldownTicks):4
    }
  };
}

function ensureUser(userName){
  const normalized=(userName||"Demo Trader").trim()||"Demo Trader";
  ensureWalletAccount(normalized);
  return normalized;
}

function buildFreshPrizePoolState(){
  return {
    entryFee:PRIZE_POOL_ENTRY_FEE,
    seedAmount:PRIZE_POOL_SEED_AMOUNT,
    payoutSplits:PRIZE_POOL_PAYOUT_SPLITS.slice(),
    rounds:{},
    drafts:{}
  };
}

function normalizePrizePoolState(rawPrizePool){
  const source=rawPrizePool&&typeof rawPrizePool==="object"?rawPrizePool:{};
  const rounds=Object.fromEntries(Object.entries(source.rounds||{}).map(([roundKey,round])=>[
    String(roundKey),
    {
      roundNumber:Number(round?.roundNumber)||DEFAULT_ACTIVE_ROUND_NUMBER,
      roundLabel:round?.roundLabel||buildRoundLabel(Number(round?.roundNumber)||DEFAULT_ACTIVE_ROUND_NUMBER),
      entries:Array.isArray(round?.entries)?round.entries.map((entry)=>normalizePrizePoolEntry(entry)):[]
    }
  ]));
  const drafts=Object.fromEntries(Object.entries(source.drafts||{}).map(([userName,draft])=>[
    userName,
    normalizePrizePoolDraft(draft)
  ]));
  return {
    entryFee:Number(source.entryFee)||PRIZE_POOL_ENTRY_FEE,
    seedAmount:Number.isFinite(Number(source.seedAmount))?Number(source.seedAmount):PRIZE_POOL_SEED_AMOUNT,
    payoutSplits:Array.isArray(source.payoutSplits)&&source.payoutSplits.length===3?source.payoutSplits.map((value)=>Number(value)||0):PRIZE_POOL_PAYOUT_SPLITS.slice(),
    rounds,
    drafts
  };
}

function prizePoolTotalAmount(targetState=state,round=currentPrizePoolRound(targetState)){
  return (Number(targetState?.prizePool?.seedAmount)||0)+((round?.entries?.length||0)*(Number(targetState?.prizePool?.entryFee)||0));
}

function normalizePrizePoolEntry(entry){
  return {
    id:entry?.id||randomUUID(),
    userName:String(entry?.userName||""),
    submittedAt:entry?.submittedAt||new Date().toISOString(),
    picks:Array.isArray(entry?.picks)?entry.picks.map((pick)=>normalizePrizePoolPick(pick)):[],
    correctCount:Number(entry?.correctCount)||0,
    settledCount:Number(entry?.settledCount)||0,
    correctPct:Number(entry?.correctPct)||0,
    rank:Number(entry?.rank)||0,
    payout:Number(entry?.payout)||0,
    payoutPostedAt:entry?.payoutPostedAt||null
  };
}

function normalizePrizePoolDraft(draft){
  return {
    id:draft?.id||randomUUID(),
    userName:String(draft?.userName||""),
    createdAt:draft?.createdAt||new Date().toISOString(),
    roundNumber:Number(draft?.roundNumber)||DEFAULT_ACTIVE_ROUND_NUMBER,
    picks:Array.isArray(draft?.picks)?draft.picks.map((pick)=>normalizePrizePoolPick(pick)):[],
    assignmentIds:Array.isArray(draft?.assignmentIds)?draft.assignmentIds.map((id)=>String(id)):[],
    currentIndex:Number(draft?.currentIndex)||0
  };
}

function normalizePrizePoolPick(pick){
  return {
    slotId:pick?.slotId||"",
    position:pick?.position||"",
    positionLabel:pick?.positionLabel||pick?.position||"",
    marketId:pick?.marketId||"",
    playerName:pick?.playerName||"",
    team:pick?.team||"",
    gameId:pick?.gameId||"",
    side:pick?.side||"",
    line:Number.isFinite(Number(pick?.line))?Number(pick.line):0,
    actualScore:Number.isFinite(Number(pick?.actualScore))?Number(pick.actualScore):null,
    resultStatus:pick?.resultStatus||"PENDING",
    settledAt:pick?.settledAt||null
  };
}

function findMarket(marketId){
  return state.markets.find((market)=>market.id===marketId);
}

function findGame(gameId){
  return roundGames.find((game)=>game.id===gameId)||null;
}

function kickoffTimestampForGame(game){
  if(!game){
    return null;
  }
  const kickoffAt=Number(new Date(game.kickoffAt||"").getTime());
  if(Number.isFinite(kickoffAt)&&kickoffAt>0){
    return kickoffAt;
  }
  return parseKickoffLabel(game.kickoff);
}

function isGameLocked(game,now=Date.now(),targetState=state){
  if(isGameForceOpen(game,targetState)){
    return false;
  }
  const kickoffAt=kickoffTimestampForGame(game);
  return Number.isFinite(kickoffAt)?now>=kickoffAt:false;
}

function isGameForceOpen(game,targetState=state){
  if(!game){
    return false;
  }
  const forceOpenGameIds=Array.isArray(targetState?.forceOpenGameIds)?targetState.forceOpenGameIds:[];
  return forceOpenGameIds.includes(game.id);
}

function isMarketLocked(market,now=Date.now(),targetState=state){
  if(!market){
    return true;
  }
  if(market.settlement||market.manuallyLocked){
    return true;
  }
  return isGameLocked(findGame(market.gameId),now,targetState);
}

function calculateCurrentLine(market){
  return normalizeMidpoint(Number(market.currentLine)||Number(market.initialLine)||0);
}

function calculatePressureImbalance(market){
  return Number(market.netPressure)||0;
}

function normalizeMidpoint(value){
  return Math.round(value||0);
}

function linePairFor(market){
  return {underLine:roundToHalf(market.currentLine-HALF_POINT),overLine:roundToHalf(market.currentLine+HALF_POINT)};
}

function normalizeState(rawState,options={}){
  const skipWalletBootstrap=Boolean(options.skipWalletBootstrap);
  const activeRoundNumber=normalizeRoundNumber(rawState.activeRoundNumber);
  const bankrolls=Object.fromEntries(Object.entries(rawState.bankrolls||{}).map(([userName,balance])=>[userName,Number(balance)||STARTING_BANKROLL]));
  const walletTransactions=Array.isArray(rawState.walletTransactions)
    ? rawState.walletTransactions.map((transaction)=>normalizeWalletTransaction(transaction,{bankrolls}))
    : [];
  const botConfig=normalizeSimulationConfig(rawState.botSimulation?.config||DEFAULT_SIMULATION_CONFIG);
  const rawBots=Array.isArray(rawState.botSimulation?.bots)?rawState.botSimulation.bots:[];
  const bots=(rawBots.length?rawBots:createBotRoster(botConfig))
    .map((bot)=>normalizeRandomProbBot(bot))
    .filter(Boolean);
  const persistedMarkets=Array.isArray(rawState.markets)?rawState.markets:[];
  const persistedMarketsById=new Map(persistedMarkets.filter((market)=>market?.id).map((market)=>[market.id,market]));
  const mergedSeededMarkets=SEEDED_MARKETS.map((seededMarket)=>({
    ...seededMarket,
    ...(persistedMarketsById.get(seededMarket.id)||{})
  }));
  const legacyMarkets=persistedMarkets.filter((market)=>market?.id&&!SEEDED_MARKETS_BY_ID.has(market.id));
  const markets=[...mergedSeededMarkets,...legacyMarkets].map((market)=>{
    const seededMarket=SEEDED_MARKETS_BY_ID.get(market.id)||{};
    const resolvedMarket={
      ...seededMarket,
      ...market,
      opponent: preferSeededText(market.opponent,seededMarket.opponent),
      position: preferSeededText(market.position,seededMarket.position),
      fantasyPrice: preferSeededNumber(market.fantasyPrice,seededMarket.fantasyPrice,{min:1}),
      priceImpliedProjection: preferSeededNumber(market.priceImpliedProjection,seededMarket.priceImpliedProjection),
      seasonAverage: preferSeededNumber(market.seasonAverage,seededMarket.seasonAverage),
      lastSeasonAverage: preferSeededNumber(market.lastSeasonAverage,seededMarket.lastSeasonAverage),
      lastGameScore: preferSeededNumber(market.lastGameScore,seededMarket.lastGameScore),
      last3Average: preferSeededNumber(market.last3Average,seededMarket.last3Average),
      homeAverage: preferSeededNumber(market.homeAverage,seededMarket.homeAverage),
      awayAverage: preferSeededNumber(market.awayAverage,seededMarket.awayAverage),
      teamOdds: preferSeededNumber(market.teamOdds,seededMarket.teamOdds,{min:0}),
      opponentOdds: preferSeededNumber(market.opponentOdds,seededMarket.opponentOdds,{min:0}),
      impliedTeamWinProb: preferSeededNumber(market.impliedTeamWinProb,seededMarket.impliedTeamWinProb,{min:0}),
      opponentPositionAverage: preferSeededNumber(market.opponentPositionAverage,seededMarket.opponentPositionAverage),
      leaguePositionAverage: preferSeededNumber(market.leaguePositionAverage,seededMarket.leaguePositionAverage),
      popularity: preferSeededNumber(market.popularity,seededMarket.popularity,{min:0}),
      scoreVolatility: preferSeededNumber(market.scoreVolatility,seededMarket.scoreVolatility,{min:0}),
      botInputs: market.botInputs&&typeof market.botInputs==="object"?market.botInputs:(seededMarket.botInputs||null)
    };
    return {
    ...resolvedMarket,
    initialLine: normalizeMidpoint(Number(resolvedMarket.initialLine)||0),
    currentLine: normalizeMidpoint(Number(resolvedMarket.currentLine)||Number(resolvedMarket.initialLine)||0),
    spreadWidth: Number(resolvedMarket.spreadWidth)||LINE_STEP,
    netPressure: Number(resolvedMarket.netPressure)||0,
    pressureBalance: Number(resolvedMarket.pressureBalance)||0,
    engineVersion: resolvedMarket.engineVersion||null,
    matchedPairs: (resolvedMarket.matchedPairs||[]).map((pair)=>({...pair})),
    trades: (resolvedMarket.trades||[]).map((trade)=>({
      ...trade,
      entryLine: Number.isFinite(Number(trade.entryLine))?Number(trade.entryLine):HALF_POINT,
      entryUnderLine: Number.isFinite(Number(trade.entryUnderLine))?Number(trade.entryUnderLine):Number.isFinite(Number(trade.entryLine))?Number(trade.entryLine):HALF_POINT,
      entryOverLine: Number.isFinite(Number(trade.entryOverLine))?Number(trade.entryOverLine):Number.isFinite(Number(trade.entryLine))?Number(trade.entryLine):HALF_POINT,
      unmatchedStake: Number.isFinite(Number(trade.unmatchedStake))?Number(trade.unmatchedStake):0,
      matchedStake: Number.isFinite(Number(trade.matchedStake))?Number(trade.matchedStake):Number(trade.stake)||0,
      refundedStake: Number.isFinite(Number(trade.refundedStake))?Number(trade.refundedStake):0,
      chargedStake: currentChargedStake(trade),
      pairIds: Array.isArray(trade.pairIds)?trade.pairIds:[],
      status: trade.status||(trade.result?"SETTLED":"MATCHED")
    }))
  };
  });
  markets.forEach((market)=>migrateLegacyMarket(market,bankrolls));
  markets.forEach((market)=>updateMarketTotals(market));
  const normalizedState=syncDerivedBalances({
    bankrolls,
    markets,
    activeRoundNumber,
    activeRoundLabel:buildRoundLabel(activeRoundNumber),
    forceOpenGameIds:[],
    walletTransactions,
    shareSessions:Array.isArray(rawState.shareSessions)
      ? rawState.shareSessions
          .filter((entry)=>entry&&entry.id)
          .map((entry)=>({
            id:String(entry.id),
            createdByUserName:String(entry.createdByUserName||""),
            tradeIds:Array.isArray(entry.tradeIds)?entry.tradeIds.map((tradeId)=>String(tradeId)).filter(Boolean):[],
            createdAt:entry.createdAt||new Date().toISOString(),
            status:["active","completed","expired"].includes(String(entry.status||""))?String(entry.status):"active"
          }))
      : [],
    contactMessages:Array.isArray(rawState.contactMessages)
      ? rawState.contactMessages
          .filter((entry)=>entry&&entry.id)
          .map((entry)=>({
            id:String(entry.id),
            email:String(entry.email||"").trim(),
            message:String(entry.message||"").trim(),
            userName:entry.userName?String(entry.userName):null,
            submittedAt:entry.submittedAt||new Date().toISOString(),
            status:String(entry.status||"NEW")
          }))
          .filter((entry)=>entry.email&&entry.message)
      : [],
    lastSettlementBatch:rawState.lastSettlementBatch||null,
    roundMetricsHistory:Array.isArray(rawState.roundMetricsHistory)?cloneValue(rawState.roundMetricsHistory):[],
    prizePool:normalizePrizePoolState(rawState.prizePool),
    botSimulation:{config:botConfig,bots}
  });
  if(!skipWalletBootstrap){
    Object.keys(normalizedState.bankrolls||{}).forEach((userName)=>{
      ensureWalletAccount(userName,normalizedState,{
        title:"Opening balance snapshot",
        subtitle:"Wallet history started from the current demo balance"
      });
    });
  }
  return normalizedState;
}

function syncDerivedBalances(targetState=state){
  const bankrolls={...targetState.bankrolls};
  Object.keys(bankrolls).forEach((userName)=>{bankrolls[userName]=getUserBankroll(userName,targetState);});
  (targetState.botSimulation?.bots||[]).forEach((bot)=>{
    if(typeof bankrolls[bot.userName]!=="number"){
      bankrolls[bot.userName]=Number(bot.startingBankroll)||Number(bot.bankroll)||STARTING_BANKROLL;
    }
    bot.bankroll=bankrolls[bot.userName];
  });
  targetState.markets.forEach((market)=>{
    market.trades.forEach((trade)=>{
      if(typeof bankrolls[trade.userName]!=="number"){
        bankrolls[trade.userName]=getUserBankroll(trade.userName,targetState);
      }
    });
  });
  targetState.bankrolls=bankrolls;
  return targetState;
}

function getUserBankroll(userName,targetState=state){
  if(!userName){
    return STARTING_BANKROLL;
  }
  return typeof targetState.bankrolls?.[userName]==="number"?targetState.bankrolls[userName]:STARTING_BANKROLL;
}

function normalizeWalletTransaction(transaction,targetState=state){
  const amount=Number(transaction?.amount)||0;
  const requestedAmount=Number.isFinite(Number(transaction?.requestedAmount))?Number(transaction.requestedAmount):null;
  const balanceAfter=Number.isFinite(Number(transaction?.balanceAfter))
    ? Number(transaction.balanceAfter)
    : getUserBankroll(transaction?.userName,targetState);
  return {
    id:transaction?.id||randomUUID(),
    userName:String(transaction?.userName||""),
    type:String(transaction?.type||"UNKNOWN"),
    status:String(transaction?.status||"COMPLETED"),
    amount,
    requestedAmount,
    balanceAfter,
    title:String(transaction?.title||"Wallet update"),
    subtitle:transaction?.subtitle?String(transaction.subtitle):"",
    marketId:transaction?.marketId||"",
    tradeId:transaction?.tradeId||"",
    pairId:transaction?.pairId||"",
    entryId:transaction?.entryId||"",
    createdAt:transaction?.createdAt||new Date().toISOString()
  };
}

function ensureWalletAccount(userName,targetState=state,options={}){
  if(!userName){
    return;
  }
  targetState.walletTransactions=Array.isArray(targetState.walletTransactions)?targetState.walletTransactions:[];
  if(typeof targetState.bankrolls?.[userName]!=="number"){
    targetState.bankrolls[userName]=STARTING_BANKROLL;
  }
  const hasHistory=targetState.walletTransactions.some((transaction)=>transaction.userName.toLowerCase()===userName.toLowerCase());
  if(hasHistory){
    return;
  }
  const openingBalance=Number(targetState.bankrolls[userName])||0;
  targetState.walletTransactions.push(normalizeWalletTransaction({
    userName,
    type:options.type||"OPENING_BALANCE",
    status:"COMPLETED",
    amount:openingBalance,
    balanceAfter:openingBalance,
    title:options.title||"Opening balance",
    subtitle:options.subtitle||"crowdIQ demo wallet opened",
    createdAt:options.createdAt||new Date().toISOString()
  },targetState));
}

function appendWalletTransaction(transaction,targetState=state){
  targetState.walletTransactions=Array.isArray(targetState.walletTransactions)?targetState.walletTransactions:[];
  const normalized=normalizeWalletTransaction(transaction,targetState);
  targetState.walletTransactions.push(normalized);
  return normalized;
}

function applyWalletDelta(userName,amount,transaction,targetState=state){
  ensureWalletAccount(userName,targetState);
  const nextBalance=Math.max(0,getUserBankroll(userName,targetState)+(Number(amount)||0));
  targetState.bankrolls[userName]=nextBalance;
  return appendWalletTransaction({
    ...transaction,
    userName,
    amount:Number(amount)||0,
    balanceAfter:nextBalance,
    status:transaction?.status||"COMPLETED"
  },targetState);
}

function recordWalletEvent(userName,transaction,targetState=state){
  ensureWalletAccount(userName,targetState);
  return appendWalletTransaction({
    ...transaction,
    userName,
    amount:Number(transaction?.amount)||0,
    balanceAfter:getUserBankroll(userName,targetState),
    status:transaction?.status||"COMPLETED"
  },targetState);
}

function getBotBankrollResetRoundNumber(targetState=state){
  return Number(targetState?.botSimulation?.config?.lastBankrollResetRoundNumber)||null;
}

async function persistSupabaseWalletTransactions(transactions=[],roundNumber=getActiveRoundNumber(state)){
  const rows=Array.isArray(transactions)?transactions.filter((transaction)=>transaction?.id&&transaction?.userName):[];
  if(!rows.length){
    return;
  }
  const context=await ensureSupabaseSeedData();
  const roundId=context?.roundsByNumber?.get(Number(roundNumber))?.id||null;
  for(const transaction of rows){
    const user=await ensureSupabaseDemoUser(transaction.userName);
    if(!user?.id){
      continue;
    }
    const ledgerRow={
      user_id:user.id,
      round_id:roundId,
      trade_id:null,
      entry_type:"ADMIN_ADJUSTMENT",
      amount:Number(transaction.amount)||0,
      balance_after:Number(transaction.balanceAfter)||0,
      note:transaction.subtitle||transaction.title||"Bot bankroll reset",
      created_at:transaction.createdAt||new Date().toISOString(),
      external_ledger_key:transaction.id
    };
    const existingRows=await supabaseRequest("wallet_ledger",{
      query:{
        select:"id",
        external_ledger_key:`eq.${transaction.id}`,
        limit:1
      }
    });
    if(existingRows?.[0]?.id){
      await supabaseRequest("wallet_ledger",{
        method:"PATCH",
        query:{id:`eq.${existingRows[0].id}`},
        headers:{Prefer:"return=minimal"},
        body:ledgerRow
      });
    }else{
      await supabaseRequest("wallet_ledger",{
        method:"POST",
        headers:{Prefer:"return=minimal"},
        body:ledgerRow
      });
    }
    await supabaseRequest("wallet_snapshots",{
      method:"POST",
      query:{
        on_conflict:"user_id",
        select:"user_id"
      },
      headers:{Prefer:"return=representation,resolution=merge-duplicates"},
      body:{
        user_id:user.id,
        username:user.username,
        current_balance:Number(transaction.balanceAfter)||0,
        updated_at:transaction.createdAt||new Date().toISOString()
      }
    });
  }
}

async function resetBotBankrollsForRound(targetRoundNumber,{useSupabase=SUPABASE_ENABLED,targetState=state,force=false}={}){
  const roundNumber=normalizeRoundNumber(targetRoundNumber);
  const bots=Array.isArray(targetState?.botSimulation?.bots)?targetState.botSimulation.bots:[];
  const currentResetRoundNumber=getBotBankrollResetRoundNumber(targetState);
  if(!force&&currentResetRoundNumber===roundNumber){
    return {resetCount:0,adjustedAmount:0,roundNumber};
  }
  const createdAt=new Date().toISOString();
  const resetTransactions=[];
  let adjustedAmount=0;
  bots.forEach((bot)=>{
    if(!bot?.userName){
      return;
    }
    ensureWalletAccount(bot.userName,targetState);
    const currentBalance=Number(getUserBankroll(bot.userName,targetState))||0;
    const delta=Number((STARTING_BANKROLL-currentBalance).toFixed(2));
    if(Math.abs(delta)>0.001){
      const transaction=applyWalletDelta(bot.userName,delta,{
        type:"ROUND_RESET",
        title:"Bot bankroll reset",
        subtitle:`${buildRoundLabel(roundNumber)} bankroll reset to ${formatCurrency(STARTING_BANKROLL)}`,
        createdAt
      },targetState);
      resetTransactions.push(transaction);
      adjustedAmount+=Math.abs(delta);
    }
    targetState.bankrolls[bot.userName]=STARTING_BANKROLL;
    bot.bankroll=STARTING_BANKROLL;
  });
  targetState.botSimulation=targetState.botSimulation||{config:normalizeSimulationConfig(DEFAULT_SIMULATION_CONFIG),bots:[]};
  targetState.botSimulation.config={
    ...(targetState.botSimulation.config||{}),
    lastBankrollResetRoundNumber:roundNumber
  };
  syncDerivedBalances(targetState);
  if(useSupabase&&resetTransactions.length){
    await persistSupabaseWalletTransactions(resetTransactions,roundNumber);
  }
  return {
    resetCount:resetTransactions.length,
    adjustedAmount:Number(adjustedAmount.toFixed(2)),
    roundNumber
  };
}

function currentPrizePoolRoundKey(){
  return String(getActiveRoundNumber(state)||1);
}

function ensurePrizePoolRound(targetState=state,roundKey=String(getActiveRoundNumber(targetState)||1)){
  targetState.prizePool=targetState.prizePool||buildFreshPrizePoolState();
  const roundNumber=Number(roundKey)||getActiveRoundNumber(targetState);
  if(!targetState.prizePool.rounds[roundKey]){
    targetState.prizePool.rounds[roundKey]={
      roundNumber,
      roundLabel:buildRoundLabel(roundNumber),
      entries:[]
    };
  }
  targetState.prizePool.rounds[roundKey].roundNumber=roundNumber;
  targetState.prizePool.rounds[roundKey].roundLabel=buildRoundLabel(roundNumber);
  return targetState.prizePool.rounds[roundKey];
}

function currentPrizePoolRound(targetState=state){
  return ensurePrizePoolRound(targetState,String(getActiveRoundNumber(targetState)||1));
}

function prizePoolLatestKickoffTimestamp(targetRoundNumber=getActiveRoundNumber(state)){
  const relevantGames=roundGames.filter((game)=>parseRoundNumber(game.roundLabel)===Number(targetRoundNumber));
  const sourceGames=relevantGames.length?relevantGames:roundGames;
  return sourceGames.reduce((latest,game)=>{
    const kickoffAt=kickoffTimestampForGame(game);
    if(!Number.isFinite(kickoffAt)){
      return latest;
    }
    return Math.max(latest,kickoffAt);
  },0);
}

function prizePoolSettlementDeadline(now=Date.now(),targetState=state){
  const latestKickoff=prizePoolLatestKickoffTimestamp(getActiveRoundNumber(targetState));
  const source=new Date(Number.isFinite(latestKickoff)&&latestKickoff>0?latestKickoff:now);
  const deadline=new Date(source);
  const currentDay=deadline.getDay();
  const offsetToMonday=(8-currentDay)%7||7;
  deadline.setDate(deadline.getDate()+offsetToMonday);
  deadline.setHours(0,0,0,0);
  return deadline.getTime();
}

function prizePoolEntryWindowOpen(now=Date.now(),targetState=state){
  const relevantGames=roundGames.filter((game)=>parseRoundNumber(game.roundLabel)===getActiveRoundNumber(targetState));
  const sourceGames=relevantGames.length?relevantGames:roundGames;
  return sourceGames.some((game)=>!isGameLocked(game,now,targetState));
}

function openPrizePoolCandidatesForPosition(position,excludedMarketIds=[],now=Date.now(),targetState=state){
  const excludedSet=new Set(excludedMarketIds);
  const activeRoundNumber=getActiveRoundNumber(targetState);
  return targetState.markets
    .filter((market)=>
      getRoundNumberForMarket(market)===activeRoundNumber
      &&(position==="INTERCHANGE"||market.position===position)
      &&!isMarketLocked(market,now,targetState)
      &&!excludedSet.has(market.id)
    )
    .sort((left,right)=>left.id.localeCompare(right.id));
}

function prizePoolStartingSlots(){
  return PRIZE_POOL_POSITION_SLOTS.filter((slot)=>slot.position!=="INTERCHANGE");
}

function prizePoolInterchangeSlots(){
  return PRIZE_POOL_POSITION_SLOTS.filter((slot)=>slot.position==="INTERCHANGE");
}

function isInterchangeSlot(slot){
  return slot?.position==="INTERCHANGE"||String(slot?.slotId||"").startsWith("INT");
}

function prizePoolStartingPicks(picks=[]){
  return picks.filter((pick)=>!isInterchangeSlot(pick));
}

function prizePoolInterchangePicks(picks=[]){
  return picks.filter((pick)=>isInterchangeSlot(pick));
}

function prizePoolAvailableCountForSlot(slot,usedMarketIds=[],now=Date.now(),targetState=state){
  return openPrizePoolCandidatesForPosition(slot.position,usedMarketIds,now,targetState).length;
}

function stableHash(value){
  return String(value||"").split("").reduce((sum,char,index)=>sum+(char.charCodeAt(0)*(index+1)),0);
}

function pickRandomItem(items){
  if(!Array.isArray(items)||!items.length){
    return null;
  }
  return items[Math.floor(Math.random()*items.length)]||null;
}

function prizePoolUserKey(userName){
  return String(userName||"").trim().toLowerCase();
}

function prizePoolFindEntry(userName,targetState=state){
  const userKey=prizePoolUserKey(userName);
  return currentPrizePoolRound(targetState).entries.find((entry)=>prizePoolUserKey(entry.userName)===userKey)||null;
}

function buildPrizePoolDraftAssignments(existingPicks=[],now=Date.now(),targetState=state){
  const usedMarketIds=existingPicks.map((pick)=>pick.marketId).filter(Boolean);
  return PRIZE_POOL_POSITION_SLOTS.map((slot)=>{
    const candidates=openPrizePoolCandidatesForPosition(slot.position,usedMarketIds,now,targetState);
    const nextMarket=pickRandomItem(candidates);
    if(nextMarket){
      usedMarketIds.push(nextMarket.id);
      return nextMarket.id;
    }
    return "";
  });
}

function refreshPrizePoolDraft(draft,now=Date.now(),targetState=state){
  const picks=Array.isArray(draft?.picks)?draft.picks:[];
  const lockedIds=picks.map((pick)=>pick.marketId).filter(Boolean);
  const nextAssignments=Array.isArray(draft?.assignmentIds)?draft.assignmentIds.slice(0,PRIZE_POOL_POSITION_SLOTS.length):[];
  for(let index=0;index<PRIZE_POOL_POSITION_SLOTS.length;index+=1){
    if(picks[index]){
      nextAssignments[index]=picks[index].marketId;
      continue;
    }
    const currentMarket=findMarket(nextAssignments[index]);
    if(currentMarket&&!isMarketLocked(currentMarket,now,targetState)&&!lockedIds.includes(currentMarket.id)){
      lockedIds.push(currentMarket.id);
      continue;
    }
    const replacement=pickRandomItem(openPrizePoolCandidatesForPosition(PRIZE_POOL_POSITION_SLOTS[index].position,lockedIds,now,targetState));
    nextAssignments[index]=replacement?.id||"";
    if(replacement){
      lockedIds.push(replacement.id);
    }
  }
  draft.assignmentIds=nextAssignments;
  draft.currentIndex=Math.max(0,Math.min(Number(draft.currentIndex)||0,picks.length));
  return draft;
}

function startPrizePoolDraft(userName,now=Date.now()){
  if(prizePoolFindEntry(userName)){
    throw new Error("You have already submitted a Prize Pool team this round.");
  }
  if(!prizePoolEntryWindowOpen(now,state)){
    throw new Error("Prize Pool entry is closed for this round.");
  }
  const existingDraft=state.prizePool?.drafts?.[userName];
  if(existingDraft){
    return refreshPrizePoolDraft(existingDraft,now,state);
  }
  const assignmentIds=buildPrizePoolDraftAssignments([],now,state);
  if(assignmentIds.some((marketId)=>!marketId)){
    throw new Error("Not enough unlocked players remain to build a full Prize Pool team.");
  }
  const draft={
    id:randomUUID(),
    userName,
    createdAt:new Date(now).toISOString(),
    roundNumber:getActiveRoundNumber(state),
    picks:[],
    assignmentIds,
    currentIndex:0
  };
  state.prizePool.drafts[userName]=draft;
  return draft;
}

function confirmPrizePoolDraftPick(userName,draftId,side,now=Date.now()){
  if(side!=="OVER"&&side!=="UNDER"){
    throw new Error("Choose Over or Under.");
  }
  const draft=state.prizePool?.drafts?.[userName];
  if(!draft||draft.id!==draftId){
    throw new Error("Prize Pool entry session not found.");
  }
  if(prizePoolFindEntry(userName)){
    delete state.prizePool.drafts[userName];
    throw new Error("You have already submitted a Prize Pool team this round.");
  }
  if(!prizePoolEntryWindowOpen(now,state)){
    throw new Error("Prize Pool entry is closed for this round.");
  }
  refreshPrizePoolDraft(draft,now,state);
  const slot=PRIZE_POOL_POSITION_SLOTS[draft.currentIndex];
  const marketId=draft.assignmentIds[draft.currentIndex];
  const market=findMarket(marketId);
  if(!slot||!market||isMarketLocked(market,now,state)){
    throw new Error("That player is no longer available. Try again.");
  }
  draft.picks[draft.currentIndex]={
    slotId:slot.slotId,
    position:slot.position,
    positionLabel:slot.label,
    marketId:market.id,
    playerName:market.playerName,
    team:market.team,
    gameId:market.gameId,
    side,
    line:Number(market.currentLine)||0,
    actualScore:null,
    resultStatus:"PENDING",
    settledAt:null
  };
  draft.currentIndex+=1;
  refreshPrizePoolDraft(draft,now,state);
  return draft;
}

function submitPrizePoolEntry(userName,draftId,now=Date.now()){
  const round=currentPrizePoolRound(state);
  const draft=state.prizePool?.drafts?.[userName];
  if(!draft||draft.id!==draftId){
    throw new Error("Prize Pool entry session not found.");
  }
  if(prizePoolFindEntry(userName)){
    delete state.prizePool.drafts[userName];
    throw new Error("You have already submitted a Prize Pool team this round.");
  }
  if(draft.picks.length!==PRIZE_POOL_POSITION_SLOTS.length){
    throw new Error("Finish all 17 selections before submitting.");
  }
  ensureBankroll(userName);
  if(getUserBankroll(userName)<PRIZE_POOL_ENTRY_FEE){
    throw new Error(`You need $${PRIZE_POOL_ENTRY_FEE.toFixed(0)} in your wallet to enter.`);
  }
  const entry=normalizePrizePoolEntry({
    id:randomUUID(),
    userName,
    submittedAt:new Date(now).toISOString(),
    picks:draft.picks
  });
  applyWalletDelta(userName,-PRIZE_POOL_ENTRY_FEE,{
    type:"PRIZE_POOL_ENTRY",
    title:"Prize Pool entry",
    subtitle:`${getActiveRoundLabel(state)} entry fee`
  });
  round.entries.push(entry);
  delete state.prizePool.drafts[userName];
  syncPrizePoolState(state,now);
  return entry;
}

function buildPrizePoolBotEntry(userName,targetState=state,now=Date.now()){
  const assignmentIds=buildPrizePoolDraftAssignments([],now,targetState);
  if(assignmentIds.some((marketId)=>!marketId)){
    return null;
  }
  const picks=PRIZE_POOL_POSITION_SLOTS.map((slot,index)=>{
    const market=findMarket(assignmentIds[index]);
    if(!market){
      return null;
    }
    const side=Math.random()<0.5?"OVER":"UNDER";
    return normalizePrizePoolPick({
      slotId:slot.slotId,
      position:slot.position,
      positionLabel:slot.label,
      marketId:market.id,
      playerName:market.playerName,
      team:market.team,
      gameId:market.gameId,
      side,
      line:Number(market.currentLine)||0,
      actualScore:null,
      resultStatus:"PENDING",
      settledAt:null
    });
  }).filter(Boolean);
  if(picks.length!==PRIZE_POOL_POSITION_SLOTS.length){
    return null;
  }
  return normalizePrizePoolEntry({
    id:randomUUID(),
    userName,
    submittedAt:new Date(now).toISOString(),
    picks
  });
}

function isChallengePath(pathname){
  return /^\/challenge\/[^/]+\/?$/.test(String(pathname||""));
}

async function serveChallengePage(res,pathname,useSupabase=SUPABASE_ENABLED,sessionContext=null){
  const shareId=decodeURIComponent(String(pathname||"").replace(/^\/challenge\//,"").replace(/\/$/,""));
  const metadata=await buildChallengeMetadata(shareId,useSupabase);
  const html=renderIndexHtmlWithMetadata(metadata);
  const headers={
    "Content-Type":"text/html; charset=utf-8",
    "Cache-Control":"no-store, no-cache, must-revalidate, proxy-revalidate",
    "Pragma":"no-cache",
    "Expires":"0",
    "Surrogate-Control":"no-store"
  };
  appendPendingCookies(headers,sessionContext);
  res.writeHead(200,headers);
  res.end(html);
}

function renderIndexHtmlWithMetadata(metadata){
  const html=fs.readFileSync(INDEX_PATH,"utf8");
  const title=escapeHtmlText(metadata.title||"crowdIQ");
  const description=escapeHtmlText(metadata.description||"Trade NRL fantasy projection markets, track crowd confidence, and test your edge on live weekly lines.");
  const publicOrigin=getPublicAppOrigin();
  const url=escapeHtmlText(metadata.url||`${publicOrigin}/`);
  const image=escapeHtmlText(metadata.image||`${publicOrigin}/social-preview.svg`);
  return applyAssetVersion(
    html
    .replace(/<title>[\s\S]*?<\/title>/i,`<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*">/i,`<meta name="description" content="${description}">`)
    .replace(/<meta property="og:url" content="[^"]*">/i,`<meta property="og:url" content="${url}">`)
    .replace(/<meta property="og:title" content="[^"]*">/i,`<meta property="og:title" content="${title}">`)
    .replace(/<meta property="og:description" content="[^"]*">/i,`<meta property="og:description" content="${description}">`)
    .replace(/<meta property="og:image" content="[^"]*">/i,`<meta property="og:image" content="${image}">`)
    .replace(/<meta name="twitter:title" content="[^"]*">/i,`<meta name="twitter:title" content="${title}">`)
    .replace(/<meta name="twitter:description" content="[^"]*">/i,`<meta name="twitter:description" content="${description}">`)
    .replace(/<meta name="twitter:image" content="[^"]*">/i,`<meta name="twitter:image" content="${image}">`)
  );
}

function applyAssetVersion(html){
  return String(html)
    .replace(/((?:\.\/|\/)styles\.css)(\?v=[^"]+)?/g,`$1?v=${ASSET_VERSION}`)
    .replace(/((?:\.\/|\/)lib\/derived-fantasy-data\.js)(\?v=[^"]+)?/g,`$1?v=${ASSET_VERSION}`)
    .replace(/((?:\.\/|\/)lib\/onboarding-modal\.js)(\?v=[^"]+)?/g,`$1?v=${ASSET_VERSION}`)
    .replace(/((?:\.\/|\/)seed-data\.js)(\?v=[^"]+)?/g,`$1?v=${ASSET_VERSION}`)
    .replace(/((?:\.\/|\/)app\.js)(\?v=[^"]+)?/g,`$1?v=${ASSET_VERSION}`);
}

function escapeHtmlText(value){
  return String(value||"")
    .replace(/&/g,"&amp;")
    .replace(/"/g,"&quot;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;");
}

function ensurePrizePoolBotEntries(targetState=state,now=Date.now()){
  if(!prizePoolEntryWindowOpen(now,targetState)){
    return;
  }
  const round=currentPrizePoolRound(targetState);
  const bots=(targetState.botSimulation?.bots||[]).filter((bot)=>bot?.source==="random-prob");
  bots.forEach((bot)=>{
    const userName=bot.userName;
    if(!userName||prizePoolFindEntry(userName,targetState)){
      return;
    }
    ensureBankroll(userName,targetState);
    if(getUserBankroll(userName,targetState)<PRIZE_POOL_ENTRY_FEE){
      return;
    }
    const entry=buildPrizePoolBotEntry(userName,targetState,now);
    if(!entry){
      return;
    }
    applyWalletDelta(userName,-PRIZE_POOL_ENTRY_FEE,{
      type:"PRIZE_POOL_ENTRY",
      title:"Prize Pool entry",
      subtitle:`${getActiveRoundLabel(targetState)} entry fee`,
      createdAt:entry.submittedAt
    },targetState);
    round.entries.push(entry);
  });
}

function prizePoolPickStatus(pick){
  const score=getImportedRoundScoreForMarket({playerName:pick.playerName,team:pick.team},getActiveRoundNumber(state));
  if(!Number.isFinite(score)){
    return {actualScore:null,resultStatus:"PENDING",settledAt:null};
  }
  const isCorrect=pick.side==="OVER"?score>pick.line:score<pick.line;
  return {
    actualScore:score,
    resultStatus:isCorrect?"CORRECT":"INCORRECT",
    settledAt:new Date().toISOString()
  };
}

function syncPrizePoolState(targetState=state,now=Date.now()){
  targetState.prizePool=normalizePrizePoolState(targetState.prizePool);
  const round=currentPrizePoolRound(targetState);
  ensurePrizePoolBotEntries(targetState,now);
  const finalizeAt=prizePoolSettlementDeadline(now,targetState);
  round.entries.forEach((entry)=>{
    entry.picks=entry.picks.map((pick)=>{
      if(pick.resultStatus!=="PENDING"&&Number.isFinite(Number(pick.actualScore))){
        return pick;
      }
      return {...pick,...prizePoolPickStatus(pick)};
    });
    const startingPicks=prizePoolStartingPicks(entry.picks);
    const interchangePicks=prizePoolInterchangePicks(entry.picks);
    entry.correctCount=entry.picks.filter((pick)=>pick.resultStatus==="CORRECT").length;
    entry.settledCount=entry.picks.filter((pick)=>pick.resultStatus!=="PENDING").length;
    entry.startingCorrectCount=startingPicks.filter((pick)=>pick.resultStatus==="CORRECT").length;
    entry.startingSettledCount=startingPicks.filter((pick)=>pick.resultStatus!=="PENDING").length;
    entry.interchangeCorrectCount=interchangePicks.filter((pick)=>pick.resultStatus==="CORRECT").length;
    entry.interchangeSettledCount=interchangePicks.filter((pick)=>pick.resultStatus!=="PENDING").length;
    const liveDenominator=entry.startingSettledCount||0;
    const finalDenominator=startingPicks.length||prizePoolStartingSlots().length;
    entry.correctPct=now>=finalizeAt
      ? entry.startingCorrectCount/finalDenominator
      : liveDenominator?entry.startingCorrectCount/liveDenominator:0;
    entry.payout=0;
    entry.rank=0;
  });
  const isFinal=now>=finalizeAt;
  const sortedEntries=round.entries
    .slice()
    .sort((left,right)=>right.correctPct-left.correctPct||right.interchangeCorrectCount-left.interchangeCorrectCount||right.startingCorrectCount-left.startingCorrectCount||right.startingSettledCount-left.startingSettledCount||new Date(left.submittedAt)-new Date(right.submittedAt)||left.userName.localeCompare(right.userName));
  sortedEntries.forEach((entry,index)=>{
    entry.rank=index+1;
    if(isFinal&&index<targetState.prizePool.payoutSplits.length){
      entry.payout=prizePoolTotalAmount(targetState,round)*(targetState.prizePool.payoutSplits[index]||0);
      if(entry.payout>0&&!entry.payoutPostedAt){
        applyWalletDelta(entry.userName,entry.payout,{
          type:"PRIZE_POOL_PAYOUT",
          title:"Prize Pool payout",
          subtitle:`${getActiveRoundLabel(targetState)} finished #${entry.rank}`,
          entryId:entry.id
        },targetState);
        entry.payoutPostedAt=new Date(now).toISOString();
      }
    }
  });
  round.entries=sortedEntries;
  Object.keys(targetState.prizePool.drafts||{}).forEach((userName)=>{
    if(prizePoolFindEntry(userName,targetState)){
      delete targetState.prizePool.drafts[userName];
      return;
    }
    refreshPrizePoolDraft(targetState.prizePool.drafts[userName],now,targetState);
  });
  return targetState;
}

function buildPrizePoolClientPayload(userName="",targetState=state,now=Date.now()){
  syncPrizePoolState(targetState,now);
  const round=currentPrizePoolRound(targetState);
  const entry=userName?prizePoolFindEntry(userName,targetState):null;
  const draft=userName&&targetState.prizePool?.drafts?.[userName]?refreshPrizePoolDraft(targetState.prizePool.drafts[userName],now,targetState):null;
  const leaderboard=round.entries.map((item)=>({
    userName:item.userName,
    rank:item.rank,
    correctCount:item.correctCount,
    settledCount:item.settledCount,
    correctPct:item.correctPct,
    startingCorrectCount:Number(item.startingCorrectCount)||0,
    startingSettledCount:Number(item.startingSettledCount)||0,
    interchangeCorrectCount:Number(item.interchangeCorrectCount)||0,
    interchangeSettledCount:Number(item.interchangeSettledCount)||0,
    payout:item.payout
  }));
  const currentSlotIndex=Math.min(Number(draft?.currentIndex)||0,PRIZE_POOL_POSITION_SLOTS.length-1);
  const currentSlot=PRIZE_POOL_POSITION_SLOTS[currentSlotIndex]||null;
  const currentMarket=draft?findMarket(draft.assignmentIds[currentSlotIndex]):null;
  const usedMarketIds=[];
  const canBuildFreshTeam=PRIZE_POOL_POSITION_SLOTS.every((slot)=>{
    const availableCount=prizePoolAvailableCountForSlot(slot,usedMarketIds,now,targetState);
    if(availableCount<=0){
      return false;
    }
    const candidates=openPrizePoolCandidatesForPosition(slot.position,usedMarketIds,now,targetState);
    if(candidates[0]){
      usedMarketIds.push(candidates[0].id);
    }
    return true;
  });
  const entriesLast24h=round.entries.filter((item)=>now-new Date(item.submittedAt).getTime()<=24*60*60*1000);
  const recentDeltaAmount=entriesLast24h.length*targetState.prizePool.entryFee;
  const fallbackIncrementAmount=round.entries.length?targetState.prizePool.entryFee:targetState.prizePool.entryFee;
  const startingSlots=prizePoolStartingSlots();
  const interchangeSlots=prizePoolInterchangeSlots();
  const canEnter=prizePoolEntryWindowOpen(now,targetState)&&canBuildFreshTeam;
  const activeRoundNumber=getActiveRoundNumber(targetState);
  return {
    roundNumber:activeRoundNumber,
    roundLabel:getActiveRoundLabel(targetState),
    entryFee:targetState.prizePool.entryFee,
    seedAmount:targetState.prizePool.seedAmount,
    payoutSplits:targetState.prizePool.payoutSplits,
    poolAmount:prizePoolTotalAmount(targetState,round),
    poolAmount24hAgo:prizePoolTotalAmount(targetState,round)-recentDeltaAmount,
    recentDeltaAmount:recentDeltaAmount||fallbackIncrementAmount,
    recentDeltaWindowLabel:recentDeltaAmount?"in the last 24h":"in the last hour",
    recentEntryCount:entriesLast24h.length,
    entrantCount:round.entries.length,
    startingSlotCount:startingSlots.length,
    interchangeSlotCount:interchangeSlots.length,
    canEnter,
    isFinal:now>=prizePoolSettlementDeadline(now,targetState),
    settlementAt:new Date(prizePoolSettlementDeadline(now,targetState)).toISOString(),
    hasEntry:Boolean(entry),
    entry:entry?{
      ...entry,
      picks:entry.picks.map((pick)=>({...pick}))
    }:null,
    draft:draft?{
      id:draft.id,
      currentIndex:Number(draft.currentIndex)||0,
      totalSlots:PRIZE_POOL_POSITION_SLOTS.length,
      startingSlots:startingSlots.length,
      interchangeSlots:interchangeSlots.length,
      picks:draft.picks.map((pick)=>({...pick})),
      readyToSubmit:draft.picks.length===PRIZE_POOL_POSITION_SLOTS.length,
      currentCard:currentSlot&&currentMarket?{
        slotId:currentSlot.slotId,
        position:currentSlot.position,
        positionLabel:currentSlot.label,
        isInterchange:isInterchangeSlot(currentSlot),
        marketId:currentMarket.id,
        playerName:currentMarket.playerName,
        team:currentMarket.team,
        gameId:currentMarket.gameId,
        line:Number(currentMarket.currentLine)||0
      }:null
    }:null,
    leaderboard
  };
}

function isKnownBotUser(userName,targetState=state){
  if(!userName){
    return false;
  }
  return (targetState?.botSimulation?.bots||[]).some((bot)=>bot?.userName===userName);
}

function isBotTrade(trade){
  return Boolean(
    trade?.botId||
    trade?.botSource||
    trade?.archetype||
    isKnownBotUser(trade?.userName)
  );
}

async function syncBackendUser(userName,useSupabase=SUPABASE_ENABLED){
  if(!useSupabase){
    return null;
  }
  const tableBackedBalance=typeof state.bankrolls?.[userName]==="number"?state.bankrolls[userName]:null;
  try{
    const backendUser=await Promise.race([
      ensureSupabaseDemoUser(userName),
      new Promise((_,reject)=>{
        setTimeout(()=>reject(new Error("Supabase session sync timed out")),SUPABASE_BACKEND_USER_TIMEOUT_MS);
      })
    ]);
    if(backendUser&&Number.isFinite(tableBackedBalance)){
      backendUser.balance=tableBackedBalance;
      state.bankrolls[userName]=tableBackedBalance;
    }else if(backendUser&&Number.isFinite(backendUser.balance)){
      state.bankrolls[userName]=backendUser.balance;
    }
    return backendUser;
  }catch(error){
    console.warn("Supabase session sync failed",error.message);
    return null;
  }
}

async function ensureSupabaseReady(){
  if(!SUPABASE_ENABLED||supabaseSeedReady){
    return;
  }
  await Promise.race([
    ensureSupabaseSeedData().then(()=>{
      supabaseSeedReady=true;
    }),
    new Promise((_,reject)=>{
      setTimeout(()=>reject(new Error("Supabase seed readiness timed out")),SUPABASE_SEED_READY_TIMEOUT_MS);
    })
  ]);
}

function hostedActiveRoundNumber(activeRoundSetting,runtimeState,nextState){
  if(Number.isFinite(Number(activeRoundSetting?.activeRoundNumber))){
    return Number(activeRoundSetting.activeRoundNumber);
  }
  if(Number.isFinite(Number(runtimeState?.activeRoundNumber))){
    return Number(runtimeState.activeRoundNumber);
  }
  return Number(nextState?.activeRoundNumber);
}

function validateHostedStateOrThrow(nextState,activeRoundSetting,runtimeState){
  if(!HOSTED_ENVIRONMENT){
    return;
  }
  const configuredRoundNumber=Number(activeRoundSetting?.activeRoundNumber);
  const runtimeRoundNumber=Number(runtimeState?.activeRoundNumber);
  const expectedRoundNumber=hostedActiveRoundNumber(activeRoundSetting,runtimeState,nextState);
  if(Number.isFinite(configuredRoundNumber)&&Number.isFinite(runtimeRoundNumber)&&configuredRoundNumber!==runtimeRoundNumber){
    throw new Error(`Hosted state validation failed: active round setting ${configuredRoundNumber} does not match runtime overlay ${runtimeRoundNumber}.`);
  }
  if(!Number.isFinite(expectedRoundNumber)){
    throw new Error("Hosted state validation failed: active round is missing from durable settings and runtime overlay.");
  }
  if(Number(nextState?.activeRoundNumber)!==expectedRoundNumber){
    throw new Error(`Hosted state validation failed: merged state round ${Number(nextState?.activeRoundNumber)||"(missing)"} does not match expected round ${expectedRoundNumber}.`);
  }
  const activeRoundMarkets=(Array.isArray(nextState?.markets)?nextState.markets:[])
    .filter((market)=>getRoundNumberForMarket(market)===expectedRoundNumber);
  if(!activeRoundMarkets.length){
    throw new Error(`Hosted state validation failed: no markets were loaded for active round ${expectedRoundNumber}.`);
  }
}

async function syncStateFromSupabase({force=false,validateHostedState=false}={}){
  if(!SUPABASE_ENABLED){
    return state;
  }
  const now=Date.now();
  if(!force&&lastSupabaseUnavailableAt&&now-lastSupabaseUnavailableAt<SUPABASE_UNAVAILABLE_BACKOFF_MS){
    return state;
  }
  if(!force&&lastSupabaseStateSyncAt&&now-lastSupabaseStateSyncAt<SUPABASE_STATE_SYNC_TTL_MS){
    return state;
  }
  if(supabaseStateSyncPromise){
    return supabaseStateSyncPromise;
  }
  supabaseStateSyncPromise=(async()=>{
    const syncStartedAt=Date.now();
    try{
      const [activeRoundSetting,runtimeState]=await Promise.all([
        fetchSupabaseActiveRoundSetting().catch((error)=>{
          console.warn("Supabase active round fetch failed",error.message);
          return null;
        }),
        fetchSupabaseRuntimeState().catch((error)=>{
          console.warn("Supabase runtime overlay fetch failed",error.message);
          return null;
        })
      ]);
      const activeRoundNumber=hostedActiveRoundNumber(activeRoundSetting,runtimeState,state);
      const supabaseState=await fetchSupabaseAppState({activeRoundNumber});
      if(lastStateMutationAt>syncStartedAt){
        return state;
      }
      if(supabaseState){
        const mergedState=mergeSupabaseState(supabaseState,runtimeState,state,activeRoundSetting);
        if(validateHostedState){
          validateHostedStateOrThrow(mergedState,activeRoundSetting,runtimeState);
        }
        state=mergedState;
      }else if(runtimeState){
        const fallbackActiveRoundNumber=hostedActiveRoundNumber(activeRoundSetting,runtimeState,state);
        const fallbackState=normalizeState({
          ...buildFreshState(),
          ...runtimeState,
          activeRoundNumber:fallbackActiveRoundNumber,
          activeRoundLabel:buildRoundLabel(fallbackActiveRoundNumber)
        },{skipWalletBootstrap:true});
        if(validateHostedState){
          validateHostedStateOrThrow(fallbackState,activeRoundSetting,runtimeState);
        }
        state=fallbackState;
      }else if(validateHostedState){
        throw new Error("Hosted state validation failed: neither active round settings nor runtime overlay could be loaded from Supabase.");
      }
      const botCleanupResult=reconcileSelfCrossingBotLiquidity(state);
      const botResetResult=await resetBotBankrollsForRound(getActiveRoundNumber(state),{useSupabase,targetState:state});
      if(botResetResult.resetCount>0){
        console.warn(`Reset ${botResetResult.resetCount} bot bankrolls for ${buildRoundLabel(botResetResult.roundNumber)}.`);
        enqueueSupabaseRuntimeSnapshot().catch((error)=>{
          console.warn("Supabase runtime snapshot failed after bot bankroll reset",error.message);
        });
      }
      if(botCleanupResult.cancelledTradeCount>0){
        console.warn(`Cleared ${botCleanupResult.cancelledTradeCount} self-crossing bot orders across ${botCleanupResult.changedMarketIds.length} markets during Supabase sync.`);
        enqueueSupabaseBotCleanupPersistence(botCleanupResult.changedMarketIds,state).catch((error)=>{
          console.warn("Supabase bot cleanup persistence failed",error.message);
        });
      }
      lastSupabaseStateSyncAt=Date.now();
    }catch(error){
      console.warn("Supabase state sync failed",error.message);
      lastSupabaseUnavailableAt=Date.now();
      lastSupabaseStateSyncAt=Date.now();
    }
    return state;
  })();
  try{
    return await supabaseStateSyncPromise;
  }finally{
    supabaseStateSyncPromise=null;
  }
}

async function getBackendDashboard(userName,useSupabase=SUPABASE_ENABLED){
  if(!useSupabase){
    return null;
  }
  void userName;
  return null;
}

function buildBackendPayload(backendUser,dashboard=null,useSupabase=SUPABASE_ENABLED){
  return {
    mode: useSupabase?"supabase":"local",
    user: backendUser,
    dashboard
  };
}

function mergeSupabaseState(supabaseState,runtimeState,currentState=state,activeRoundSetting=null){
  const overlay=runtimeState&&typeof runtimeState==="object"?runtimeState:{};
  const bankrolls=computeHostedBankrolls(supabaseState,overlay,currentState);
  const activeRoundNumber=hostedActiveRoundNumber(activeRoundSetting,overlay,supabaseState);
  return normalizeState({
    ...buildFreshState(),
    bankrolls,
    markets:supabaseState?.markets||[],
    activeRoundNumber,
    activeRoundLabel:buildRoundLabel(activeRoundNumber),
    forceOpenGameIds:Array.isArray(overlay.forceOpenGameIds)?overlay.forceOpenGameIds:(currentState?.forceOpenGameIds||[]),
    walletTransactions:Array.isArray(overlay.walletTransactions)?overlay.walletTransactions:(currentState?.walletTransactions||[]),
    shareSessions:Array.isArray(overlay.shareSessions)?overlay.shareSessions:(currentState?.shareSessions||[]),
    lastSettlementBatch:overlay.lastSettlementBatch??currentState?.lastSettlementBatch??null,
    roundMetricsHistory:Array.isArray(overlay.roundMetricsHistory)?overlay.roundMetricsHistory:(currentState?.roundMetricsHistory||[]),
    prizePool:overlay.prizePool??currentState?.prizePool,
    botSimulation:overlay.botSimulation??currentState?.botSimulation
  },{skipWalletBootstrap:true});
}

function reconcileSelfCrossingBotLiquidity(targetState=state){
  const changedMarketIds=[];
  let cancelledTradeCount=0;
  let refundedStakeTotal=0;
  (targetState?.markets||[]).forEach((market)=>{
    const result=clearSelfCrossingBotLiquidity(market,targetState);
    if(result.cancelledTradeCount>0){
      changedMarketIds.push(market.id);
      cancelledTradeCount+=result.cancelledTradeCount;
      refundedStakeTotal+=result.refundedStakeTotal;
    }
  });
  if(changedMarketIds.length){
    syncDerivedBalances(targetState);
  }
  return {changedMarketIds,cancelledTradeCount,refundedStakeTotal};
}

function clearSelfCrossingBotLiquidity(market,targetState=state,preferredSide=null){
  const openBotTrades=(market?.trades||[]).filter((trade)=>
    trade &&
    isBotTrade(trade) &&
    ["PENDING","PARTIALLY_MATCHED"].includes(String(trade.status||"")) &&
    Number(trade.unmatchedStake)>0
  );
  if(!openBotTrades.length){
    return {cancelledTradeCount:0,refundedStakeTotal:0};
  }
  const byUserName=new Map();
  openBotTrades.forEach((trade)=>{
    const key=String(trade.userName||"").trim().toLowerCase();
    if(!key){
      return;
    }
    const list=byUserName.get(key)||[];
    list.push(trade);
    byUserName.set(key,list);
  });
  const nowIso=new Date().toISOString();
  let cancelledTradeCount=0;
  let refundedStakeTotal=0;
  const previousNetPressure=Number(market.netPressure)||0;
  byUserName.forEach((tradesForUser)=>{
    const hasOver=tradesForUser.some((trade)=>trade.side==="OVER");
    const hasUnder=tradesForUser.some((trade)=>trade.side==="UNDER");
    if(!hasOver||!hasUnder){
      return;
    }
    const sortedByRecent=tradesForUser.slice().sort((left,right)=>new Date(right.timestamp)-new Date(left.timestamp));
    const keepSide=preferredSide&&["OVER","UNDER"].includes(preferredSide)
      ? preferredSide
      : sortedByRecent[0]?.side||"OVER";
    tradesForUser
      .filter((trade)=>trade.side!==keepSide&&(Number(trade.unmatchedStake)||0)>0)
      .forEach((trade)=>{
        const refunded=refundReservedStake(trade,trade.unmatchedStake,market,{
          type:"TRADE_REFUND",
          title:"Bot order cleared",
          subtitle:`Conflicting ${trade.side.toLowerCase()} bot order removed`,
          marketId:market.id,
          tradeId:trade.id,
          createdAt:nowIso
        });
        trade.unmatchedStake=0;
        trade.status=trade.matchedStake>0?"MATCHED":"CANCELLED";
        if(refunded>0){
          cancelledTradeCount+=1;
          refundedStakeTotal+=refunded;
        }
      });
  });
  if(cancelledTradeCount>0){
    updateMarketTotals(market);
    applyTradePressure(market,(Number(market.netPressure)||0)-previousNetPressure);
  }
  return {cancelledTradeCount,refundedStakeTotal};
}

function computeHostedBankrolls(supabaseState,runtimeOverlay={},currentState=state){
  void currentState;
  const userNames=new Set([
    ...Object.keys(supabaseState?.bankrolls||{}),
    ...((supabaseState?.userNames)||[]),
    ...((runtimeOverlay?.botSimulation?.bots)||[]).map((bot)=>bot?.userName).filter(Boolean)
  ]);
  (supabaseState?.markets||[]).forEach((market)=>{
    (market?.trades||[]).forEach((trade)=>{
      if(trade?.userName){
        userNames.add(trade.userName);
      }
    });
  });
  Object.values(runtimeOverlay?.prizePool?.rounds||{}).forEach((round)=>{
    (round?.entries||[]).forEach((entry)=>{
      if(entry?.userName){
        userNames.add(entry.userName);
      }
    });
  });

  const bankrolls=Object.fromEntries([...userNames].filter(Boolean).map((userName)=>[userName,STARTING_BANKROLL]));

  (supabaseState?.markets||[]).forEach((market)=>{
    (market?.trades||[]).forEach((trade)=>{
      if(!trade?.userName){
        return;
      }
      bankrolls[trade.userName]=(Number(bankrolls[trade.userName])||STARTING_BANKROLL)-currentChargedStake(trade);
      bankrolls[trade.userName]+=Number(trade.result?.payout)||0;
    });
  });

  const entryFee=Number(runtimeOverlay?.prizePool?.entryFee)||PRIZE_POOL_ENTRY_FEE;
  Object.values(runtimeOverlay?.prizePool?.rounds||{}).forEach((round)=>{
    (round?.entries||[]).forEach((entry)=>{
      if(!entry?.userName){
        return;
      }
      bankrolls[entry.userName]=(Number(bankrolls[entry.userName])||STARTING_BANKROLL)-entryFee;
      if(entry?.payoutPostedAt&&Number(entry?.payout)>0){
        bankrolls[entry.userName]+=Number(entry.payout)||0;
      }
    });
  });

  Object.keys(bankrolls).forEach((userName)=>{
    bankrolls[userName]=Math.max(0,Math.round(((Number(bankrolls[userName])||0)+Number.EPSILON)*100)/100);
  });

  return bankrolls;
}

function ensureBankroll(userName,targetState=state){
  if(typeof targetState.bankrolls[userName]!=="number"){
    targetState.bankrolls[userName]=STARTING_BANKROLL;
  }
}

function updateMarketTotals(market){
  const restingOrders=market.trades.filter((trade)=>!trade.result&&["PENDING","PARTIALLY_MATCHED"].includes(trade.status));
  market.totalOverStake=restingOrders.filter((trade)=>trade.side==="OVER").reduce((sum,trade)=>sum+(Number(trade.unmatchedStake)||0),0);
  market.totalUnderStake=restingOrders.filter((trade)=>trade.side==="UNDER").reduce((sum,trade)=>sum+(Number(trade.unmatchedStake)||0),0);
  market.netPressure=calculateNetPressure(market);
}

function currentChargedStake(trade){
  const explicitStake=Number(trade?.chargedStake);
  if(Number.isFinite(explicitStake)){
    return Math.max(0,explicitStake);
  }
  const matchedStake=Number(trade?.matchedStake)||0;
  const rawStake=Number(trade?.stake)||0;
  const refundedStake=Number(trade?.refundedStake)||0;
  if(trade?.result){
    return Math.max(0,matchedStake);
  }
  return Math.max(matchedStake,rawStake-refundedStake,0);
}

function availableChargedReserve(trade){
  return Math.max(0,currentChargedStake(trade)-(Number(trade?.matchedStake)||0));
}

function ensureTradeStakeCharged(trade,targetStake,market,createdAt){
  const requiredStake=Math.max(0,Number(targetStake)||0);
  const chargedStake=currentChargedStake(trade);
  const additionalStake=Math.max(0,requiredStake-chargedStake);
  if(additionalStake<=0){
    trade.chargedStake=chargedStake;
    return 0;
  }
  applyWalletDelta(trade.userName,-additionalStake,{
    type:"TRADE_STAKE",
    title:"Trade matched",
    subtitle:`${market.playerName} ${trade.side.toLowerCase()} ${formatLine(trade.entryLine)}`,
    marketId:market.id,
    tradeId:trade.id,
    createdAt:createdAt||trade.timestamp||new Date().toISOString()
  });
  trade.chargedStake=chargedStake+additionalStake;
  return additionalStake;
}

function refundReservedStake(trade,amount,market,details={}){
  const refundableStake=Math.min(Math.max(0,Number(amount)||0),availableChargedReserve(trade));
  trade.chargedStake=currentChargedStake(trade);
  if(refundableStake<=0){
    return 0;
  }
  applyWalletDelta(trade.userName,refundableStake,{
    type:details.type||"TRADE_REFUND",
    title:details.title||"Order cancelled",
    subtitle:details.subtitle||`${market.playerName} ${trade.side.toLowerCase()} ${formatLine(trade.entryLine)} released`,
    marketId:market.id,
    tradeId:trade.id,
    createdAt:details.createdAt||new Date().toISOString()
  });
  trade.chargedStake=Math.max(0,currentChargedStake(trade)-refundableStake);
  trade.refundedStake=(Number(trade.refundedStake)||0)+refundableStake;
  return refundableStake;
}

function activeOrderStatus(order){
  if(order.unmatchedStake>0&&order.matchedStake>0) return "PARTIALLY_MATCHED";
  if(order.unmatchedStake>0) return "PENDING";
  if(order.matchedStake>0) return "MATCHED";
  return order.result?"SETTLED":"CANCELLED";
}

function executeProjectionTrade(market,{userName,side,stake,botId=null,botSource="",archetype=""}){
  ensureBankroll(userName);
  const previousNetPressure=Number(market.netPressure)||0;
  const {underLine,overLine}=linePairFor(market);
  const timestamp=new Date().toISOString();
  const trade={
    id:randomUUID(),
    marketId:market.id,
    userName,
    side,
    entryLine:side==="OVER"?overLine:underLine,
    entryUnderLine:underLine,
    entryOverLine:overLine,
    stake,
    matchedStake:0,
    unmatchedStake:stake,
    refundedStake:0,
    pairIds:[],
    price:1,
    timestamp,
    result:null,
    status:"PENDING",
    chargedStake:0,
    engineVersion:ENGINE_VERSION,
    botId:botId||undefined,
    botSource:botSource||undefined,
    archetype:archetype||undefined
  };
  matchAgainstRestingOrders(market,trade);
  trade.status=activeOrderStatus(trade);
  market.trades.push(trade);
  updateMarketTotals(market);
  applyTradePressure(market,(Number(market.netPressure)||0)-previousNetPressure);
  syncDerivedBalances();
  return trade;
}

function cancelPendingOrders(userName,orderIds){
  state.markets.forEach((market)=>{
    const previousNetPressure=Number(market.netPressure)||0;
    market.trades.forEach((trade)=>{
      if(trade.userName!==userName||!orderIds.includes(trade.id)||!(trade.unmatchedStake>0)){
        return;
      }
      refundReservedStake(trade,trade.unmatchedStake,market);
      trade.unmatchedStake=0;
      trade.status=trade.matchedStake>0?"MATCHED":"CANCELLED";
    });
    updateMarketTotals(market);
    applyTradePressure(market,(Number(market.netPressure)||0)-previousNetPressure);
  });
}

function settleProjectionMarket(market,finalScore,options={}){
  const settlementType=options.settlementType||"SCORED";
  const isVoid=settlementType==="VOID";
  const settledAt=new Date().toISOString();
  market.settlement={finalScore:isVoid?null:finalScore,settledAt:new Date().toISOString(),settlementType};
  market.manuallyLocked=true;
  market.trades.forEach((trade)=>{
    if(trade.unmatchedStake>0){
      refundReservedStake(trade,trade.unmatchedStake,market,{
        type:"TRADE_REFUND",
        title:"Open order released",
        subtitle:`${market.playerName} ${trade.side.toLowerCase()} ${formatLine(trade.entryLine)} released`,
        marketId:market.id,
        tradeId:trade.id,
        createdAt:settledAt
      });
      trade.unmatchedStake=0;
    }
  });
  market.matchedPairs.forEach((pair)=>{
    if(pair.status!=="OPEN"){
      return;
    }
    if(isVoid){
      applyWalletDelta(pair.overUserName,pair.stake,{
        type:"TRADE_REFUND",
        title:"Entry refunded",
        subtitle:`${market.playerName} ${formatLine(pair.overEntryLine)} voided`,
        marketId:market.id,
        tradeId:pair.overOrderId,
        pairId:pair.id,
        createdAt:settledAt
      });
      applyWalletDelta(pair.underUserName,pair.stake,{
        type:"TRADE_REFUND",
        title:"Entry refunded",
        subtitle:`${market.playerName} ${formatLine(pair.underEntryLine)} voided`,
        marketId:market.id,
        tradeId:pair.underOrderId,
        pairId:pair.id,
        createdAt:settledAt
      });
      pair.winnerUserName=null;
      pair.voided=true;
    }else if(finalScore>pair.overEntryLine){
      pair.winnerUserName=pair.overUserName;
      applyWalletDelta(pair.overUserName,pair.stake*2,{
        type:"TRADE_SETTLEMENT_WIN",
        title:"Winnings paid",
        subtitle:`${market.playerName} over ${formatLine(pair.overEntryLine)} won`,
        marketId:market.id,
        tradeId:pair.overOrderId,
        pairId:pair.id,
        createdAt:settledAt
      });
    }else if(finalScore<pair.underEntryLine){
      pair.winnerUserName=pair.underUserName;
      applyWalletDelta(pair.underUserName,pair.stake*2,{
        type:"TRADE_SETTLEMENT_WIN",
        title:"Winnings paid",
        subtitle:`${market.playerName} under ${formatLine(pair.underEntryLine)} won`,
        marketId:market.id,
        tradeId:pair.underOrderId,
        pairId:pair.id,
        createdAt:settledAt
      });
    }else{
      pair.platformRevenue=pair.stake*2;
    }
    pair.status="SETTLED";
  });
  market.trades.forEach((trade)=>{
    const relatedPairs=market.matchedPairs.filter((pair)=>(trade.pairIds||[]).includes(pair.id));
    const payout=relatedPairs.reduce((sum,pair)=>{
      if(isVoid){
        return sum+pair.stake;
      }
      return sum+(pair.winnerUserName===trade.userName?pair.stake*2:0);
    },0);
    const activeStake=(trade.matchedStake||0)+(trade.refundedStake||0);
    const profit=payout+(trade.refundedStake||0)-activeStake;
    let outcome="LOSS";
    if(isVoid){
      outcome="VOID";
    }else if(trade.matchedStake===0){
      outcome="VOID";
    }else if(relatedPairs.some((pair)=>pair.platformRevenue>0)&&payout===0){
      outcome="MIDDLE";
    }else if(payout>0){
      outcome="WIN";
    }
    trade.result={outcome,finalScore:isVoid?null:finalScore,payout:payout+(trade.refundedStake||0),profit};
    trade.status="SETTLED";
  });
  updateMarketTotals(market);
  syncDerivedBalances();
}

function settleMarketsWithSnapshot(entries,metadata={}){
  const marketsToRestore=entries.map(({market})=>market);
  const preSettlementMarkets=cloneValue(marketsToRestore);
  state.lastSettlementBatch={
    createdAt:new Date().toISOString(),
    metadata,
    bankrolls:cloneValue(state.bankrolls),
    walletTransactions:cloneValue(state.walletTransactions||[]),
    markets:preSettlementMarkets,
    roundMetricsHistory:cloneValue(state.roundMetricsHistory||[])
  };
  entries.forEach(({market,finalScore,settlementType})=>{
    settleProjectionMarket(market,finalScore,{settlementType});
  });
  if(Number.isFinite(Number(metadata.roundNumber))){
    const roundMetrics=buildRoundSettlementMetricsReport({
      roundNumber:Number(metadata.roundNumber),
      beforeMarkets:preSettlementMarkets,
      afterMarkets:cloneValue(entries.map(({market})=>market)),
      metadata
    });
    state.lastSettlementBatch.roundMetrics=roundMetrics;
    state.roundMetricsHistory=upsertRoundMetricsHistory(state.roundMetricsHistory,roundMetrics);
  }
}

function undoLastSettlementBatch(){
  const snapshot=state.lastSettlementBatch;
  const snapshotMarkets=new Map((snapshot?.markets||[]).map((market)=>[market.id,market]));
  if(!snapshot||!snapshotMarkets.size){
    throw new Error("There is no settlement batch to undo.");
  }
  state.bankrolls=cloneValue(snapshot.bankrolls||{});
  state.walletTransactions=cloneValue(snapshot.walletTransactions||[]);
  state.markets=state.markets.map((market)=>snapshotMarkets.has(market.id)?cloneValue(snapshotMarkets.get(market.id)):market);
  state.roundMetricsHistory=cloneValue(snapshot.roundMetricsHistory||[]);
  state.lastSettlementBatch=null;
  syncDerivedBalances();
  return snapshotMarkets.size;
}

function getImportedRoundScoreForMarket(market,roundNumber){
  const playerEntries=derivedData?.roundScoresByPlayer?.[normalizePlayerKey(market.playerName)];
  if(!Array.isArray(playerEntries)){
    return null;
  }
  const entry=playerEntries.find((item)=>
    Number(item.round)===Number(roundNumber)&&normalizeTeamName(item.team)===normalizeTeamName(market.team)
  );
  return Number.isFinite(Number(entry?.score))?Number(entry.score):null;
}

function parseRoundNumber(label){
  const match=String(label||"").match(/(\d+)/);
  return match?Number(match[1]):null;
}

function normalizeRoundNumber(value){
  const roundNumber=Number(value);
  return AVAILABLE_ROUND_NUMBERS.includes(roundNumber)?roundNumber:DEFAULT_ACTIVE_ROUND_NUMBER;
}

function buildRoundLabel(roundNumber){
  const normalizedRoundNumber=normalizeRoundNumber(roundNumber);
  return roundGames.find((game)=>parseRoundNumber(game.roundLabel)===normalizedRoundNumber)?.roundLabel||`Round ${normalizedRoundNumber}`;
}

function buildForceOpenGameIdsForRound(roundNumber){
  const normalizedRoundNumber=normalizeRoundNumber(roundNumber);
  return roundGames
    .filter((game)=>parseRoundNumber(game.roundLabel)===normalizedRoundNumber)
    .map((game)=>game.id);
}

function getActiveRoundNumber(targetState=state){
  return normalizeRoundNumber(targetState?.activeRoundNumber);
}

function getActiveRoundLabel(targetState=state){
  return buildRoundLabel(getActiveRoundNumber(targetState));
}

function normalizePopularInlineJson(value){
  return String(value||"")
    .replace(/\\u0022/g,'"')
    .replace(/\\u0027/g,"'")
    .replace(/\\u003C/g,"<")
    .replace(/\\u003E/g,">")
    .replace(/\\u0026/g,"&")
    .replace(/\\\//g,"/");
}

function normalizePopularPlayer(player){
  const firstName=String(player?.first_name||"").trim();
  const lastName=String(player?.last_name||"").trim();
  return {
    name:`${firstName} ${lastName}`.trim(),
    team:String(player?.team_name||"").trim(),
    position:String(player?.positions||"").trim(),
    viewsCount:Number(player?.views_count)||0
  };
}

async function fetchPopularPlayers(force=false){
  const cacheAge=Date.now()-popularPlayersCacheTime;
  if(!force&&Array.isArray(popularPlayersCache)&&popularPlayersCache.length&&cacheAge<POPULAR_PLAYERS_REFRESH_MS){
    return popularPlayersCache;
  }
  if(popularPlayersFetchPromise){
    return popularPlayersFetchPromise;
  }
  popularPlayersFetchPromise=(async()=>{
    try{
      const response=await fetch("https://footystatistics.com/",{
        headers:{
          "User-Agent":"Mozilla/5.0 (compatible; crowdIQ/1.0)"
        }
      });
      if(!response.ok){
        throw new Error(`FootyStatistics responded ${response.status}`);
      }
      const html=await response.text();
      const match=html.match(/popularPlayers:\s*JSON\.parse\('([\s\S]*?)'\)/);
      if(!match){
        throw new Error("Popular This Week payload not found in source HTML");
      }
      const decodedJson=normalizePopularInlineJson(match[1]);
      const parsedPlayers=JSON.parse(decodedJson);
      const players=Array.isArray(parsedPlayers)?parsedPlayers.map(normalizePopularPlayer).filter((player)=>player.name).slice(0,8):[];
      if(!players.length){
        throw new Error("Popular This Week payload was empty");
      }
      popularPlayersCache=players;
      popularPlayersCacheTime=Date.now();
      return players;
    }catch(error){
      console.error("Failed to fetch popular players:",error.message);
      return Array.isArray(popularPlayersCache)?popularPlayersCache:null;
    }finally{
      popularPlayersFetchPromise=null;
    }
  })();
  return popularPlayersFetchPromise;
}

function normalizeLookupValue(value){
  return String(value||"").toLowerCase().replace(/[^a-z0-9]/g,"");
}

function normalizePopularTeamName(value){
  return String(value||"")
    .toLowerCase()
    .replace(/^(parramatta|newcastle|canterburybankstown|cronullasutherland|gold coast|manlywarringah|melbourne|north queensland|penrith|south sydney|st george illawarra|sydney)\s+/,"")
    .replace(/[^a-z0-9]/g,"");
}

function matchPopularPlayerToMarket(popularPlayer,marketPlayers,usedMarketIds=new Set()){
  const exactName=normalizeLookupValue(popularPlayer?.name);
  const exactTeam=normalizePopularTeamName(popularPlayer?.team);
  let candidates=marketPlayers.filter((market)=>!usedMarketIds.has(market.id));
  let match=candidates.find((market)=>normalizeLookupValue(market.playerName)===exactName);
  if(match&&exactTeam){
    const teamAligned=normalizePopularTeamName(match.team)===exactTeam;
    if(!teamAligned){
      match=null;
    }
  }
  if(!match){
    const surname=normalizeLookupValue(String(popularPlayer?.name||"").split(" ").slice(-1)[0]);
    const surnameMatches=candidates.filter((market)=>normalizeLookupValue(market.playerName).includes(surname));
    match=surnameMatches.find((market)=>!exactTeam||normalizePopularTeamName(market.team)===exactTeam)||surnameMatches[0]||null;
  }
  return match||null;
}

function fallbackFeaturedMarkets(targetState=state,excludedMarketIds=new Set()){
  return targetState.markets
    .filter((market)=>getRoundNumberForMarket(market)===getActiveRoundNumber(targetState))
    .filter((market)=>!excludedMarketIds.has(market.id))
    .slice()
    .sort((left,right)=>Number(right.currentLine||0)-Number(left.currentLine||0)||Number(right.seasonAverage||0)-Number(left.seasonAverage||0))
    .slice(0,8);
}

function buildPopularFeaturedPayload(scrapedPlayers,targetState=state){
  const activeMarkets=targetState.markets.filter((market)=>getRoundNumberForMarket(market)===getActiveRoundNumber(targetState));
  const usedMarketIds=new Set();
  const matchedMarkets=[];
  for(const popularPlayer of Array.isArray(scrapedPlayers)?scrapedPlayers.slice(0,8):[]){
    const matchedMarket=matchPopularPlayerToMarket(popularPlayer,activeMarkets,usedMarketIds);
    if(!matchedMarket){
      console.warn(`Popular player unmatched: ${popularPlayer?.name||"Unknown"} (${popularPlayer?.team||"Unknown team"})`);
      continue;
    }
    usedMarketIds.add(matchedMarket.id);
    matchedMarkets.push({
      marketId:matchedMarket.id,
      playerName:matchedMarket.playerName,
      team:matchedMarket.team,
      position:matchedMarket.position
    });
  }
  if(matchedMarkets.length<3){
    return fallbackFeaturedMarkets(targetState).map((market)=>({
      marketId:market.id,
      playerName:market.playerName,
      team:market.team,
      position:market.position
    }));
  }
  const fallbackMarkets=fallbackFeaturedMarkets(targetState,usedMarketIds);
  return [...matchedMarkets,...fallbackMarkets.map((market)=>({
    marketId:market.id,
    playerName:market.playerName,
    team:market.team,
    position:market.position
  }))].slice(0,8);
}

function formatCurrency(value){
  return `$${Math.abs(Number(value)||0).toFixed(0)}`;
}

function formatLine(value){
  return `${Number(value||0).toFixed(1)} pts`;
}

function parseKickoffLabel(label){
  const match=String(label||"").match(/^[A-Za-z]{3}\s+(\d{1,2})\s+([A-Za-z]{3})\s+(\d{1,2}):(\d{2})\s+(AM|PM)$/i);
  if(!match){
    return null;
  }
  const [,day,monthLabel,hourLabel,minuteLabel,period]=match;
  const monthMap={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
  const month=monthMap[monthLabel];
  if(month===undefined){
    return null;
  }
  let hour=Number(hourLabel);
  if(period.toUpperCase()==="PM"&&hour!==12){
    hour+=12;
  }
  if(period.toUpperCase()==="AM"&&hour===12){
    hour=0;
  }
  const now=Date.now();
  let year=new Date().getFullYear();
  let ts=new Date(year,month,Number(day),hour,Number(minuteLabel),0,0).getTime();
  if(ts<now-180*24*60*60*1000){
    ts=new Date(year+1,month,Number(day),hour,Number(minuteLabel),0,0).getTime();
  }
  return ts;
}

function getRoundNumberForMarket(market){
  return ROUND_NUMBER_BY_GAME_ID.get(market?.gameId)??null;
}

function buildRoundSettlementMetricsReport({roundNumber,beforeMarkets,afterMarkets,metadata={}}){
  const relevantBeforeMarkets=(beforeMarkets||[]).filter((market)=>getRoundNumberForMarket(market)===roundNumber);
  const relevantAfterMarkets=(afterMarkets||[]).filter((market)=>getRoundNumberForMarket(market)===roundNumber);
  const trades=relevantBeforeMarkets.flatMap((market)=>market.trades||[]);
  const matchedPairs=relevantAfterMarkets.flatMap((market)=>market.matchedPairs||[]);
  const participatingUsers=new Set(trades.map((trade)=>trade.userName).filter(Boolean));
  const totalMatchedVolume=trades.reduce((sum,trade)=>sum+(Number(trade.matchedStake)||0),0);
  const unmatchedVolume=trades.reduce((sum,trade)=>sum+(Number(trade.unmatchedStake)||0),0);
  const totalTradedValue=trades.reduce((sum,trade)=>sum+(Number(trade.stake)||0),0);
  const roundProfit=matchedPairs.reduce((sum,pair)=>sum+(Number(pair.platformRevenue)||0),0);
  const middleMatchedPairs=matchedPairs.filter((pair)=>(Number(pair.platformRevenue)||0)>0);
  return {
    roundNumber,
    roundLabel:roundGames.find((game)=>parseRoundNumber(game.roundLabel)===roundNumber)?.roundLabel||`Round ${roundNumber}`,
    settledAt:new Date().toISOString(),
    settledMarkets:relevantAfterMarkets.length,
    totalTrades:trades.length,
    totalMatchedVolume,
    unmatchedVolume,
    totalTradedValue,
    participatingUsers:participatingUsers.size,
    averageSpendPerUser:participatingUsers.size?totalTradedValue/participatingUsers.size:0,
    roundProfit,
    middleOutcomeCount:middleMatchedPairs.length,
    middleMatchedVolume:middleMatchedPairs.reduce((sum,pair)=>sum+((Number(pair.stake)||0)*2),0),
    metadata
  };
}

function upsertRoundMetricsHistory(history,roundMetrics){
  const existingHistory=Array.isArray(history)?history:[];
  const nextHistory=existingHistory.filter((entry)=>Number(entry?.roundNumber)!==Number(roundMetrics?.roundNumber));
  return [...nextHistory,roundMetrics].sort((left,right)=>Number(left.roundNumber)-Number(right.roundNumber));
}

function normalizePlayerKey(value){
  return String(value||"").toUpperCase().replace(/[^A-Z0-9]/g,"");
}

function normalizeTeamName(team){
  return team==="Tigers"?"Wests Tigers":String(team||"");
}

function preferSeededNumber(value,fallback,options={}){
  const min=options.min??null;
  const normalizedValue=Number(value);
  if(Number.isFinite(normalizedValue)&&(min===null||normalizedValue>=min)){
    return normalizedValue;
  }
  const normalizedFallback=Number(fallback);
  if(Number.isFinite(normalizedFallback)&&(min===null||normalizedFallback>=min)){
    return normalizedFallback;
  }
  return null;
}

function preferSeededText(value,fallback){
  if(typeof value==="string"&&value.trim()){
    return value;
  }
  if(typeof fallback==="string"&&fallback.trim()){
    return fallback;
  }
  return "";
}

function cloneValue(value){
  return JSON.parse(JSON.stringify(value));
}

function runBotTicks(ticks){
  state.botSimulation=state.botSimulation||{config:normalizeSimulationConfig(DEFAULT_SIMULATION_CONFIG),bots:createBotRoster(normalizeSimulationConfig(DEFAULT_SIMULATION_CONFIG))};
  let aggregatedEvents=[];
  const eligibleMarkets=state.markets.filter((market)=>
    getRoundNumberForMarket(market)===getActiveRoundNumber(state)&&!isMarketLocked(market)
  );
  for(let tickIndex=0;tickIndex<ticks;tickIndex+=1){
    const tickResult=runSimulationTick({
      state:{...state,markets:eligibleMarkets},
      bots:state.botSimulation.bots,
      config:state.botSimulation.config,
      tick:state.botSimulation.config.tick||0
    });
    state.botSimulation.config=tickResult.config;
    state.botSimulation.bots=tickResult.bots;
    const executedEvents=tickResult.events.map((event)=>{
      const market=findMarket(event.marketId);
      if(!market||isMarketLocked(market)){
        return {...event,executed:false,reason:`${event.reason} Market locked.`};
      }
      ensureUser(event.botName);
      const bankroll=getUserBankroll(event.botName);
      if(bankroll<1){
        return {...event,executed:false,reason:`${event.reason} Bot bankroll too low.`};
      }
      const cleanupResult=clearSelfCrossingBotLiquidity(market,state,event.side);
      const bot=state.botSimulation.bots.find((entry)=>entry.id===event.botId)||state.botSimulation.bots.find((entry)=>entry.userName===event.botName)||null;
      const trade=executeProjectionTrade(market,{
        userName:event.botName,
        side:event.side,
        stake:1,
        botId:event.botId||bot?.id||null,
        botSource:bot?.source||"",
        archetype:event.archetype||bot?.archetype||"random-prob"
      });
      return {
        ...event,
        executed:true,
        tradeId:trade.id,
        tradeStatus:trade.status,
        conflictCleared:cleanupResult.cancelledTradeCount>0
      };
    });
    aggregatedEvents=aggregatedEvents.concat(executedEvents);
    state.botSimulation.config.logs=[...executedEvents.slice().reverse().map((event)=>({
      id:event.id,
      tick:event.tick,
      botName:event.botName,
      archetype:event.archetype,
      archetypeLabel:(state.botSimulation.bots||[]).find((bot)=>bot.userName===event.botName)?.config?.baseLabel||(state.botSimulation.bots||[]).find((bot)=>bot.userName===event.botName)?.config?.label||event.archetype||"Random Prob",
      playerName:event.playerName,
      side:event.side,
      projection:event.projection,
      edge:event.edge,
      reason:event.executed?`${event.reason} ${event.conflictCleared?"Removed conflicting same-bot liquidity first. ":""}${event.tradeStatus==="MATCHED"?"Matched immediately.":event.tradeStatus==="PARTIALLY_MATCHED"?"Partially matched, rest posted.":"Posted to book."}`:`${event.reason}`,
      executed:event.executed
    })),...(state.botSimulation.config.logs||[])].slice(0,state.botSimulation.config.maxLogs||120);
  }
  syncDerivedBalances();
  return {events:aggregatedEvents};
}

function runAutonomousBots(){
  try{
    if(HOSTED_ENVIRONMENT&&!HOSTED_BOT_AUTOPLAY_ENABLED){
      lastBotAutoplayStatus=buildBotAutoplayStatus("skipped-hosted-disabled");
      return;
    }
    if(!state?.botSimulation?.config?.enabled){
      lastBotAutoplayStatus=buildBotAutoplayStatus("skipped-disabled");
      return;
    }
    if(!state?.botSimulation?.bots?.length){
      state.botSimulation.bots=createBotRoster(state.botSimulation.config);
    }
    if(!state?.botSimulation?.bots?.length){
      lastBotAutoplayStatus=buildBotAutoplayStatus("skipped-no-bots");
      return;
    }
    const activeBots=state.botSimulation.bots.filter((bot)=>getUserBankroll(bot.userName)>=1);
    if(!activeBots.length){
      lastBotAutoplayStatus=buildBotAutoplayStatus("skipped-no-funded-bots");
      return;
    }
    const result=runBotTicks(1);
    lastBotAutoplayStatus=buildBotAutoplayStatus("tick-complete",{
      events:result.events.length,
      executedEvents:result.events.filter((event)=>event.executed).length
    });
    if(result.events.length){
      if(SUPABASE_ENABLED){
        persistSupabaseMarketsForEvents(result.events)
          .then(()=>persistStateSnapshot(true))
          .catch((error)=>{
            console.warn("Hosted bot persistence failed",error.message);
          });
      }else{
        persistStateSnapshotDeferred();
      }
    }
  }catch(error){
    lastBotAutoplayStatus=buildBotAutoplayStatus("failed",{error:error.message||String(error)});
    console.warn("Bot autoplay failed",error);
  }
}

function buildBotAutoplayStatus(reason,extra={}){
  const botSimulation=state?.botSimulation||{};
  const bots=Array.isArray(botSimulation.bots)?botSimulation.bots:[];
  const eligibleMarkets=Array.isArray(state?.markets)
    ? state.markets.filter((market)=>getRoundNumberForMarket(market)===getActiveRoundNumber(state)&&!isMarketLocked(market)).length
    : 0;
  return {
    reason,
    timestamp:new Date().toISOString(),
    hostedEnvironment:HOSTED_ENVIRONMENT,
    hostedAutoplayEnabled:HOSTED_BOT_AUTOPLAY_ENABLED,
    simulationEnabled:Boolean(botSimulation?.config?.enabled),
    botCount:bots.length,
    activeBotCount:bots.filter((bot)=>getUserBankroll(bot.userName)>=1).length,
    eligibleMarketCount:eligibleMarkets,
    tick:Number(botSimulation?.config?.tick)||0,
    ...extra
  };
}

async function persistSupabaseMarketsForEvents(events=[]){
  const marketIds=[...new Set((events||[]).filter((event)=>event?.executed&&event?.marketId).map((event)=>event.marketId))];
  for(const marketId of marketIds){
    const market=findMarket(marketId);
    if(!market){
      continue;
    }
    await enqueueSupabaseMarketPersistence(market,state);
  }
}

function parseJson(req){
  return new Promise((resolve,reject)=>{
    let raw="";
    req.on("data",(chunk)=>{raw+=chunk;});
    req.on("end",()=>{
      if(!raw){
        resolve({});
        return;
      }
      try{
        resolve(JSON.parse(raw));
      }catch(error){
        reject(new Error("Invalid JSON payload"));
      }
    });
    req.on("error",reject);
  });
}

function json(res,status,payload,sessionContext=null){
  const headers={"Content-Type":"application/json; charset=utf-8"};
  appendPendingCookies(headers,sessionContext);
  res.writeHead(status,headers);
  res.end(JSON.stringify(payload));
}

function calculateNetPressure(market){
  return (market.trades||[])
    .filter((trade)=>!trade.result&&["PENDING","PARTIALLY_MATCHED"].includes(trade.status))
    .reduce((sum,trade)=>{
      const unmatchedStake=Number(trade.unmatchedStake)||0;
      if(unmatchedStake<=0){
        return sum;
      }
      const weightedStake=isBotTrade(trade)?unmatchedStake*BOT_PRESSURE_MULTIPLIER:unmatchedStake;
      return sum+(trade.side==="OVER"?weightedStake:-weightedStake);
    },0);
}

function applyTradePressure(market,deltaPressure){
  if(!deltaPressure){
    return;
  }
  market.pressureBalance=(Number(market.pressureBalance)||0)+deltaPressure;
  while(Math.abs(market.pressureBalance)>=PRESSURE_STEP){
    market.currentLine=normalizeMidpoint(market.currentLine+Math.sign(market.pressureBalance)*LINE_STEP);
    market.pressureBalance-=Math.sign(market.pressureBalance)*PRESSURE_STEP;
  }
}

function migrateLegacyMarket(market,bankrolls){
  if(market.engineVersion===ENGINE_VERSION){
    return;
  }
  market.pressureBalance=0;
  (market.trades||[]).forEach((trade)=>{
    const unmatchedStake=Number(trade.unmatchedStake)||0;
    if(trade.result){
      trade.status="SETTLED";
      trade.unmatchedStake=0;
      trade.matchedStake=Number(trade.matchedStake)||Number(trade.stake)||0;
      trade.engineVersion=ENGINE_VERSION;
      return;
    }
    if(unmatchedStake>0){
      bankrolls[trade.userName]=(Number(bankrolls[trade.userName])||STARTING_BANKROLL)+unmatchedStake;
      trade.refundedStake=0;
    }
    const reservedStake=Math.max((Number(trade.stake)||0)-(Number(trade.refundedStake)||0),0);
    if((trade.pairIds||[]).length){
      trade.matchedStake=Number(trade.matchedStake)||0;
      trade.unmatchedStake=Math.max(Number(trade.unmatchedStake)||0,reservedStake-(Number(trade.matchedStake)||0));
      trade.status=activeOrderStatus(trade);
    }else{
      trade.matchedStake=0;
      trade.unmatchedStake=Number(trade.unmatchedStake)||reservedStake;
      trade.status=reservedStake>0?"PENDING":"CANCELLED";
    }
    trade.engineVersion=ENGINE_VERSION;
  });
  Object.keys(bankrolls).forEach((userName)=>{
    bankrolls[userName]=Number(bankrolls[userName])||STARTING_BANKROLL;
  });
  market.netPressure=calculateNetPressure(market);
  market.engineVersion=ENGINE_VERSION;
}

function matchAgainstRestingOrders(market,incomingOrder){
  const candidates=market.trades
    .filter((trade)=>trade.side!==incomingOrder.side&&trade.userName!==incomingOrder.userName&&["PENDING","PARTIALLY_MATCHED"].includes(trade.status))
    .filter((trade)=>isCompatibleMatch(incomingOrder,trade))
    .sort((left,right)=>compareRestingOrders(incomingOrder,left,right));

  candidates.forEach((restingOrder)=>{
    if(incomingOrder.unmatchedStake<=0){
      return;
    }
    const affordableStake=Math.min(
      incomingOrder.unmatchedStake,
      restingOrder.unmatchedStake,
      Math.max(getUserBankroll(incomingOrder.userName)+availableChargedReserve(incomingOrder),0),
      Math.max(getUserBankroll(restingOrder.userName)+availableChargedReserve(restingOrder),0)
    );
    if(affordableStake<=0){
      return;
    }
    const overOrder=incomingOrder.side==="OVER"?incomingOrder:restingOrder;
    const underOrder=incomingOrder.side==="UNDER"?incomingOrder:restingOrder;
    const pair={
      id:randomUUID(),
      marketId:market.id,
      createdAt:incomingOrder.timestamp,
      status:"OPEN",
      stake:affordableStake,
      overUserName:overOrder.userName,
      underUserName:underOrder.userName,
      overOrderId:overOrder.id,
      underOrderId:underOrder.id,
      overEntryLine:overOrder.entryOverLine,
      underEntryLine:underOrder.entryUnderLine,
      winnerUserName:null,
      platformRevenue:0
    };
    market.matchedPairs.push(pair);
    incomingOrder.unmatchedStake-=affordableStake;
    incomingOrder.matchedStake+=affordableStake;
    incomingOrder.pairIds.push(pair.id);
    restingOrder.unmatchedStake-=affordableStake;
    restingOrder.matchedStake+=affordableStake;
    restingOrder.pairIds=(restingOrder.pairIds||[]).concat(pair.id);
    ensureTradeStakeCharged(incomingOrder,incomingOrder.matchedStake,market,incomingOrder.timestamp);
    ensureTradeStakeCharged(restingOrder,restingOrder.matchedStake,market,incomingOrder.timestamp);
    restingOrder.status=activeOrderStatus(restingOrder);
  });
}

function isCompatibleMatch(incomingOrder,restingOrder){
  if(incomingOrder.side==="OVER"){
    return Number(restingOrder.entryUnderLine)<=Number(incomingOrder.entryOverLine);
  }
  return Number(incomingOrder.entryUnderLine)<=Number(restingOrder.entryOverLine);
}

function compareRestingOrders(incomingOrder,left,right){
  if(incomingOrder.side==="OVER"){
    const leftLine=Number(left.entryUnderLine)||0;
    const rightLine=Number(right.entryUnderLine)||0;
    if(rightLine!==leftLine){
      return rightLine-leftLine;
    }
  }else{
    const leftLine=Number(left.entryOverLine)||0;
    const rightLine=Number(right.entryOverLine)||0;
    if(leftLine!==rightLine){
      return leftLine-rightLine;
    }
  }
  return new Date(left.timestamp)-new Date(right.timestamp);
}
