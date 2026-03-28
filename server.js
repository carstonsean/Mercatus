// Mercatus is a crowd-led projection market. Core market logic should optimise
// for participation, trading activity, liquidity, and fast price discovery.
// Projections should emerge from trading flow rather than central determination.
const http=require("http");
const fs=require("fs");
const path=require("path");
const {randomUUID}=require("crypto");
require("./lib/load-env");
const {HALF_POINT,roundGames,TEAM_COLORS,buildRoundMarkets,roundToHalf}=require("./seed-data.js");
const derivedData=require("./lib/derived-fantasy-data.js");
const {DEFAULT_SIMULATION_CONFIG,normalizeSimulationConfig,createBotRoster,createRandomBot,createRandomProbBot,runSimulationTick}=require("./lib/bot-engine");
const {isSupabaseEnabled}=require("./lib/config");
const {ensureSupabaseDemoUser}=require("./lib/supabase-users");
const {ensureSupabaseSeedData,getSupabaseAvailableBalance,persistSupabaseMarketState}=require("./lib/supabase-market-sync");
const {fetchSupabaseDashboard}=require("./lib/supabase-dashboard");
const {fetchSupabaseAppState}=require("./lib/supabase-state");
const {fetchSupabaseRuntimeState,persistSupabaseRuntimeState}=require("./lib/supabase-runtime-state");

const PORT=process.env.PORT?Number(process.env.PORT):8000;
const STARTING_BANKROLL=200;
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
const POPULAR_PLAYERS_REFRESH_MS=6*60*60*1000;
const SUPABASE_ENABLED=isSupabaseEnabled();

let popularPlayersCache=null;
let popularPlayersCacheTime=0;
let popularPlayersFetchPromise=null;

let state=loadState();
let supabaseSeedReady=false;
let lastSupabaseStateSyncAt=0;
let supabaseStateSyncPromise=null;
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
    if(url.pathname==="/api"||url.pathname.startsWith("/api/")){
      await handleApi(req,res,url);
      return;
    }
    serveStatic(res,url.pathname);
  }catch(error){
    res.writeHead(500,{"Content-Type":"application/json; charset=utf-8"});
    res.end(JSON.stringify({error:error.message||"Server error"}));
  }
});

server.listen(PORT,"0.0.0.0",()=>{
  console.log(`Mercatus server running on http://0.0.0.0:${PORT}`);
  fetchPopularPlayers().catch((error)=>{
    console.warn("Initial popular players fetch failed",error.message);
  });
  if(SUPABASE_ENABLED){
    syncStateFromSupabase().catch((error)=>{
      console.warn("Initial Supabase state sync failed",error.message);
    });
  }
});
setInterval(runAutonomousBots,BOT_AUTOPLAY_INTERVAL_MS);
setInterval(()=>{
  fetchPopularPlayers(true).catch((error)=>{
    console.warn("Scheduled popular players fetch failed",error.message);
  });
},POPULAR_PLAYERS_REFRESH_MS);

function serveStatic(res,pathname){
  const requestedPath=pathname==="/"?"/index.html":pathname;
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
    res.writeHead(200,headers);
    res.end(data);
  });
}

async function handleApi(req,res,url){
  const useSupabase=shouldUseSupabaseForRequest(req);
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
      syncStateFromSupabase({force:true}).catch((error)=>{
        console.warn("Bootstrap Supabase sync failed",error.message);
      });
    }
    const backendUser=await syncBackendUser(username,useSupabase);
    const dashboard=await getBackendDashboard(username,useSupabase);
    if(!useSupabase){
      syncDerivedBalances();
    }
    syncPrizePoolState(state);
    return json(res,200,{state,roundGames,teamColors:TEAM_COLORS,userName:username,backend:buildBackendPayload(backendUser,dashboard,useSupabase),prizePool:buildPrizePoolClientPayload(username)});
  }
  if(req.method==="POST"&&(url.pathname==="/api/session"||url.pathname==="/api")){
    const body=await parseJson(req);
    const username=ensureUser(body.userName||"Demo Trader");
    if(useSupabase){
      syncStateFromSupabase().catch((error)=>{console.warn("Session bg sync failed",error.message);});
      syncBackendUser(username,useSupabase).catch((error)=>{console.warn("Session bg user sync failed",error.message);});
    }else{
      syncDerivedBalances();
    }
    syncPrizePoolState(state);
    return json(res,200,{state,userName:username,backend:buildBackendPayload(null,null,useSupabase),prizePool:buildPrizePoolClientPayload(username)});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/active-round"){
    const body=await parseJson(req);
    const roundNumber=Number(body.roundNumber);
    if(!AVAILABLE_ROUND_NUMBERS.includes(roundNumber)){
      return json(res,400,{error:"That round is not available in the current dataset."});
    }
    state.activeRoundNumber=roundNumber;
    state.activeRoundLabel=buildRoundLabel(roundNumber);
    state.forceOpenGameIds=[];
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
    const username=ensureUser(body.userName||"Demo Trader");
    if(useSupabase){
      await ensureSupabaseReady();
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
    if(isMarketLocked(market)){
      return json(res,400,{error:"That market is locked."});
    }
    const bankroll=getUserBankroll(username);
    if(stake>bankroll){
      return json(res,400,{error:`${username} has $${bankroll.toFixed(0)} available.`});
    }
    const trade=executeProjectionTrade(market,{userName:username,side,stake});
    if(useSupabase){
      persistSupabaseMarketState(market,state).catch((error)=>console.warn("Supabase trade persist failed",error.message));
      persistState();
    }else{
      await persistStateSnapshot(false);
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
    syncPrizePoolState(state);
    if(!useSupabase){
      return json(res,200,{
        trade,
        balance:getUserBankroll(username),
        market:buildTradeMarketPayload(market),
        backend:null,
        prizePool:buildPrizePoolClientPayload(username)
      });
    }
    return json(res,200,{state,trade,backend:null,prizePool:buildPrizePoolClientPayload(username)});
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
  if(req.method==="POST"&&url.pathname==="/api/admin/bots/config"){
    const body=await parseJson(req);
    state.botSimulation=state.botSimulation||{config:normalizeSimulationConfig(DEFAULT_SIMULATION_CONFIG),bots:createBotRoster(normalizeSimulationConfig(DEFAULT_SIMULATION_CONFIG))};
    const nextConfig=normalizeSimulationConfig({
      ...state.botSimulation.config,
      enabled: body.enabled ?? state.botSimulation.config.enabled,
      maxMarketsPerBot: Number.isFinite(Number(body.maxMarketsPerBot))?Number(body.maxMarketsPerBot):state.botSimulation.config.maxMarketsPerBot,
      globalWeights: {...state.botSimulation.config.globalWeights,...(body.globalWeights||{})},
      behaviour: {...state.botSimulation.config.behaviour,...(body.behaviour||{})},
      botCounts: {...state.botSimulation.config.botCounts,...(body.botCounts||{})},
      seed: Number.isFinite(Number(body.seed))?Number(body.seed):state.botSimulation.config.seed
    });
    state.botSimulation.config=nextConfig;
    syncDerivedBalances();
    await persistStateSnapshot(useSupabase);
    return json(res,200,{state,botSimulation:state.botSimulation});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/bots/create"){
    const body=await parseJson(req);
    state.botSimulation=state.botSimulation||{config:normalizeSimulationConfig(DEFAULT_SIMULATION_CONFIG),bots:[]};
    const mode=body.mode==="random-prob"?"random-prob":"default";
    const bot=mode==="random-prob"?createRandomProbBot(state.botSimulation.bots):createRandomBot(state.botSimulation.bots);
    state.botSimulation.bots=[...state.botSimulation.bots,bot];
    state.bankrolls[bot.userName]=bot.startingBankroll;
    syncDerivedBalances();
    await persistStateSnapshot(useSupabase);
    return json(res,200,{state,bot});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/bots/run"){
    const body=await parseJson(req);
    const ticks=Math.max(1,Math.min(100,Number(body.ticks)||1));
    const result=runBotTicks(ticks);
    if(useSupabase){
      await persistSupabaseMarketsForEvents(result.events);
      await persistStateSnapshot(true);
    }else{
      await persistStateSnapshot(false);
    }
    return json(res,200,{state,botSimulation:state.botSimulation,events:result.events});
  }
  json(res,404,{error:"Not found"});
}

function loadState(){
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
    lastSettlementBatch:null,
    roundMetricsHistory:[],
    prizePool:buildFreshPrizePoolState(),
    botSimulation:{
      config:botSimulation,
      bots:[]
    }
  };
  return nextState;
}

function persistState(){
  fs.writeFileSync(STATE_PATH,JSON.stringify(state,null,2),"utf8");
}

async function persistStateSnapshot(useSupabase=SUPABASE_ENABLED){
  persistState();
  if(!useSupabase){
    return;
  }
  try{
    await persistSupabaseRuntimeState(state);
  }catch(error){
    console.warn("Supabase runtime snapshot failed",error.message);
  }
}

function persistStateSnapshotDeferred(useSupabase=SUPABASE_ENABLED){
  persistState();
  if(!useSupabase){
    return;
  }
  persistSupabaseRuntimeState(state).catch((error)=>{
    console.warn("Supabase runtime snapshot failed",error.message);
  });
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
    trades:Array.isArray(market.trades)?market.trades.slice():[]
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
  const bots=(rawState.botSimulation?.bots||createBotRoster(botConfig))
    .filter((bot)=>bot?.userName&&["custom","random-prob"].includes(bot?.source||"custom"))
    .map((bot)=>({
    ...bot,
    bankroll:Number.isFinite(Number(bot.bankroll))?Number(bot.bankroll):Number(bot.startingBankroll)||200,
    cooldownUntil:Number.isFinite(Number(bot.cooldownUntil))?Number(bot.cooldownUntil):0,
    exposureByPlayer:{...(bot.exposureByPlayer||{})}
  }));
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

function isBotTrade(trade){
  return trade?.userName?.startsWith("Bot ")||trade?.userName?.includes(" Bot ");
}

async function syncBackendUser(userName,useSupabase=SUPABASE_ENABLED){
  if(!useSupabase){
    return null;
  }
  try{
    const backendUser=await ensureSupabaseDemoUser(userName);
    const tableBackedBalance=typeof state.bankrolls?.[userName]==="number"?state.bankrolls[userName]:null;
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
  await ensureSupabaseSeedData();
  supabaseSeedReady=true;
}

async function syncStateFromSupabase({force=false}={}){
  if(!SUPABASE_ENABLED){
    return state;
  }
  const now=Date.now();
  if(!force&&lastSupabaseStateSyncAt&&now-lastSupabaseStateSyncAt<SUPABASE_STATE_SYNC_TTL_MS){
    return state;
  }
  if(supabaseStateSyncPromise){
    return supabaseStateSyncPromise;
  }
  supabaseStateSyncPromise=(async()=>{
    try{
      const [supabaseState,runtimeState]=await Promise.all([
        fetchSupabaseAppState(),
        fetchSupabaseRuntimeState().catch((error)=>{
          console.warn("Supabase runtime overlay fetch failed",error.message);
          return null;
        })
      ]);
      if(supabaseState){
        state=mergeSupabaseState(supabaseState,runtimeState,state);
      }else if(runtimeState){
        state=normalizeState({
          ...buildFreshState(),
          ...runtimeState
        },{skipWalletBootstrap:true});
      }
      lastSupabaseStateSyncAt=Date.now();
    }catch(error){
      console.warn("Supabase state sync failed",error.message);
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

function mergeSupabaseState(supabaseState,runtimeState,currentState=state){
  const overlay=runtimeState&&typeof runtimeState==="object"?runtimeState:{};
  const bankrolls=computeHostedBankrolls(supabaseState,overlay,currentState);
  return normalizeState({
    ...buildFreshState(),
    bankrolls,
    markets:supabaseState?.markets||[],
    activeRoundNumber:overlay.activeRoundNumber??currentState?.activeRoundNumber,
    activeRoundLabel:overlay.activeRoundLabel??currentState?.activeRoundLabel,
    forceOpenGameIds:Array.isArray(overlay.forceOpenGameIds)?overlay.forceOpenGameIds:(currentState?.forceOpenGameIds||[]),
    walletTransactions:Array.isArray(overlay.walletTransactions)?overlay.walletTransactions:(currentState?.walletTransactions||[]),
    lastSettlementBatch:overlay.lastSettlementBatch??currentState?.lastSettlementBatch??null,
    roundMetricsHistory:Array.isArray(overlay.roundMetricsHistory)?overlay.roundMetricsHistory:(currentState?.roundMetricsHistory||[]),
    prizePool:overlay.prizePool??currentState?.prizePool,
    botSimulation:overlay.botSimulation??currentState?.botSimulation
  },{skipWalletBootstrap:true});
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
      bankrolls[trade.userName]=(Number(bankrolls[trade.userName])||STARTING_BANKROLL)-(Number(trade.stake)||0);
      bankrolls[trade.userName]+=Number(trade.refundedStake)||0;
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

function activeOrderStatus(order){
  if(order.unmatchedStake>0&&order.matchedStake>0) return "PARTIALLY_MATCHED";
  if(order.unmatchedStake>0) return "PENDING";
  if(order.matchedStake>0) return "MATCHED";
  return order.result?"SETTLED":"CANCELLED";
}

function executeProjectionTrade(market,{userName,side,stake}){
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
    engineVersion:ENGINE_VERSION
  };
  applyWalletDelta(userName,-stake,{
    type:"TRADE_STAKE",
    title:"Trade placed",
    subtitle:`${market.playerName} ${side.toLowerCase()} ${formatLine(trade.entryLine)}`,
    marketId:market.id,
    tradeId:trade.id,
    createdAt:timestamp
  });
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
      const refundedStake=Number(trade.unmatchedStake)||0;
      if(refundedStake>0){
        applyWalletDelta(userName,refundedStake,{
          type:"TRADE_REFUND",
          title:"Order cancelled",
          subtitle:`${market.playerName} ${trade.side.toLowerCase()} ${formatLine(trade.entryLine)} released`,
          marketId:market.id,
          tradeId:trade.id
        });
        trade.refundedStake=(Number(trade.refundedStake)||0)+refundedStake;
      }
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
      const refundedStake=Number(trade.unmatchedStake)||0;
      applyWalletDelta(trade.userName,refundedStake,{
        type:"TRADE_REFUND",
        title:"Open order released",
        subtitle:`${market.playerName} ${trade.side.toLowerCase()} ${formatLine(trade.entryLine)} released`,
        marketId:market.id,
        tradeId:trade.id,
        createdAt:settledAt
      });
      trade.refundedStake=(Number(trade.refundedStake)||0)+refundedStake;
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
  for(let tickIndex=0;tickIndex<ticks;tickIndex+=1){
    const tickResult=runSimulationTick({
      state,
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
      const trade=executeProjectionTrade(market,{userName:event.botName,side:event.side,stake:1});
      trade.archetype=event.archetype||"custom";
      return {
        ...event,
        executed:true,
        tradeId:trade.id,
        tradeStatus:trade.status
      };
    });
    aggregatedEvents=aggregatedEvents.concat(executedEvents);
    state.botSimulation.config.logs=[...executedEvents.slice().reverse().map((event)=>({
      id:event.id,
      tick:event.tick,
      botName:event.botName,
      archetype:event.archetype,
      archetypeLabel:(state.botSimulation.bots||[]).find((bot)=>bot.userName===event.botName)?.config?.baseLabel||(state.botSimulation.bots||[]).find((bot)=>bot.userName===event.botName)?.config?.label||event.archetype||"Custom",
      playerName:event.playerName,
      side:event.side,
      projection:event.projection,
      edge:event.edge,
      reason:event.executed?`${event.reason} ${event.tradeStatus==="MATCHED"?"Matched immediately.":event.tradeStatus==="PARTIALLY_MATCHED"?"Partially matched, rest posted.":"Posted to book."}`:`${event.reason}`,
      executed:event.executed
    })),...(state.botSimulation.config.logs||[])].slice(0,state.botSimulation.config.maxLogs||120);
  }
  syncDerivedBalances();
  return {events:aggregatedEvents};
}

function runAutonomousBots(){
  try{
    if(!state?.botSimulation?.config?.enabled){
      return;
    }
    if(!state?.botSimulation?.bots?.length){
      return;
    }
    const activeBots=state.botSimulation.bots.filter((bot)=>getUserBankroll(bot.userName)>=1);
    if(!activeBots.length){
      return;
    }
    const result=runBotTicks(1);
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
    console.warn("Bot autoplay failed",error);
  }
}

async function persistSupabaseMarketsForEvents(events=[]){
  const marketIds=[...new Set((events||[]).filter((event)=>event?.executed&&event?.marketId).map((event)=>event.marketId))];
  for(const marketId of marketIds){
    const market=findMarket(marketId);
    if(!market){
      continue;
    }
    await persistSupabaseMarketState(market,state);
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

function json(res,status,payload){
  res.writeHead(status,{"Content-Type":"application/json; charset=utf-8"});
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
      Math.max(getUserBankroll(incomingOrder.userName),0),
      Math.max(getUserBankroll(restingOrder.userName),0)
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
