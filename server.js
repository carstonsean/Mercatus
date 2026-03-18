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
const {isSupabaseConfigured}=require("./lib/config");
const {ensureSupabaseDemoUser}=require("./lib/supabase-users");
const {ensureSupabaseSeedData,getSupabaseAvailableBalance}=require("./lib/supabase-market-sync");
const {fetchSupabaseDashboard}=require("./lib/supabase-dashboard");
const {fetchSupabaseAppState}=require("./lib/supabase-state");

const PORT=process.env.PORT?Number(process.env.PORT):8000;
const STARTING_BANKROLL=1000;
const PRESSURE_STEP=2;
const BOT_PRESSURE_MULTIPLIER=1;
const LINE_STEP=1;
const ENGINE_VERSION="hybrid-v2";
const STATE_PATH=path.join(__dirname,"server-state.json");
const USE_SUPABASE=false;
const BOT_AUTOPLAY_INTERVAL_MS=3000;
const SEEDED_MARKETS=buildRoundMarkets();
const SEEDED_MARKETS_BY_ID=new Map(SEEDED_MARKETS.map((market)=>[market.id,market]));
const CURRENT_ROUND_NUMBER=parseRoundNumber(roundGames[0]?.roundLabel);
const ROUND_NUMBER_BY_GAME_ID=new Map(roundGames.map((game)=>[game.id,parseRoundNumber(game.roundLabel)]));

let state=loadState();
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
    if(url.pathname.startsWith("/api/")){
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
});
setInterval(runAutonomousBots,BOT_AUTOPLAY_INTERVAL_MS);

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
  if(req.method==="GET"&&url.pathname==="/api/bootstrap"){
    const username=ensureUser(url.searchParams.get("user")||"Demo Trader");
    if(USE_SUPABASE&&isSupabaseConfigured()){
      await ensureSupabaseSeedData();
      await syncStateFromSupabase();
    }
    const backendUser=await syncBackendUser(username);
    const dashboard=await getBackendDashboard(username);
    if(!(USE_SUPABASE&&isSupabaseConfigured())){
      syncDerivedBalances();
    }
    return json(res,200,{state,roundGames,teamColors:TEAM_COLORS,userName:username,backend:buildBackendPayload(backendUser,dashboard)});
  }
  if(req.method==="POST"&&url.pathname==="/api/session"){
    const body=await parseJson(req);
    const username=ensureUser(body.userName||"Demo Trader");
    if(USE_SUPABASE&&isSupabaseConfigured()){
      await ensureSupabaseSeedData();
      await syncStateFromSupabase();
    }
    const backendUser=await syncBackendUser(username);
    const dashboard=await getBackendDashboard(username);
    if(!(USE_SUPABASE&&isSupabaseConfigured())){
      syncDerivedBalances();
    }
    persistState();
    return json(res,200,{state,userName:username,backend:buildBackendPayload(backendUser,dashboard)});
  }
  if(req.method==="POST"&&url.pathname==="/api/trades"){
    const body=await parseJson(req);
    const username=ensureUser(body.userName||"Demo Trader");
    if(USE_SUPABASE&&isSupabaseConfigured()){
      await ensureSupabaseSeedData();
      await syncStateFromSupabase();
    }
    if(!(USE_SUPABASE&&isSupabaseConfigured())){
      syncDerivedBalances();
    }
    const market=findMarket(body.marketId);
    const stake=Number(body.stake);
    const side=body.side;
    if(!market||!Number.isFinite(stake)||stake<=0||(side!=="OVER"&&side!=="UNDER")){
      return json(res,400,{error:"Invalid trade payload."});
    }
    if(market.settlement||market.manuallyLocked){
      return json(res,400,{error:"That market is locked."});
    }
    const supabaseBalance=USE_SUPABASE&&isSupabaseConfigured()?await getSupabaseAvailableBalance(username):null;
    const bankroll=supabaseBalance??getUserBankroll(username);
    if(stake>bankroll){
      return json(res,400,{error:`${username} has $${bankroll.toFixed(0)} available.`});
    }
    const trade=executeProjectionTrade(market,{userName:username,side,stake});
    persistState();
    if(body.quickTake){
      return json(res,200,{
        trade,
        balance:getUserBankroll(username),
        market:buildQuickTakeMarketPayload(market),
        backend:null
      });
    }
    return json(res,200,{state,trade,backend:null});
  }
  if(req.method==="POST"&&url.pathname==="/api/orders/cancel"){
    const body=await parseJson(req);
    const username=ensureUser(body.userName||"Demo Trader");
    const orderIds=Array.isArray(body.orderIds)?body.orderIds:[body.orderId].filter(Boolean);
    if(!orderIds.length){
      return json(res,400,{error:"No open order selected."});
    }
    cancelPendingOrders(username,orderIds);
    persistState();
    return json(res,200,{state,backend:null});
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
    persistState();
    return json(res,200,{state});
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
    persistState();
    return json(res,200,{state});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/settle-round"){
    const candidates=state.markets
      .filter((market)=>!market.settlement)
      .map((market)=>{
        const finalScore=getImportedRoundScoreForMarket(market,CURRENT_ROUND_NUMBER);
        if(Number.isFinite(finalScore)){
          return {market,finalScore,settlementType:"SCORED"};
        }
        return {market,finalScore:null,settlementType:"VOID"};
      });
    if(!candidates.length){
      return json(res,400,{error:`No imported ${roundGames[0]?.roundLabel||"round"} scores are available for open markets.`});
    }
    const scoredCount=candidates.filter((entry)=>entry.settlementType==="SCORED").length;
    const voidCount=candidates.filter((entry)=>entry.settlementType==="VOID").length;
    settleMarketsWithSnapshot(candidates,{
      mode:"round",
      label:`Imported ${roundGames[0]?.roundLabel||`Round ${CURRENT_ROUND_NUMBER}`} settlement`,
      roundNumber:CURRENT_ROUND_NUMBER,
      settledCount:candidates.length,
      scoredCount,
      voidCount
    });
    persistState();
    return json(res,200,{
      state,
      settlementBatch:{
        settledCount:candidates.length,
        scoredCount,
        voidCount,
        roundNumber:CURRENT_ROUND_NUMBER,
        roundMetrics:state.lastSettlementBatch?.roundMetrics||null
      }
    });
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/undo-settlement"){
    if(!state.lastSettlementBatch){
      return json(res,400,{error:"There is no settlement batch to undo."});
    }
    const restoredCount=undoLastSettlementBatch();
    persistState();
    return json(res,200,{state,restoredCount});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/reset"){
    state=buildFreshState();
    if(!(USE_SUPABASE&&isSupabaseConfigured())){
      syncDerivedBalances();
    }
    persistState();
    return json(res,200,{state});
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
    persistState();
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
    persistState();
    return json(res,200,{state,bot});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/bots/run"){
    const body=await parseJson(req);
    const ticks=Math.max(1,Math.min(100,Number(body.ticks)||1));
    const result=runBotTicks(ticks);
    persistState();
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

function buildFreshState(){
  const botSimulation=normalizeSimulationConfig(DEFAULT_SIMULATION_CONFIG);
  return {
    bankrolls:{},
    markets:buildRoundMarkets().map((market)=>({...market,initialLine:normalizeMidpoint(market.initialLine),currentLine:normalizeMidpoint(market.initialLine),spreadWidth:LINE_STEP,totalOverStake:0,totalUnderStake:0,netPressure:0,pressureBalance:0,trades:[],matchedPairs:[],settlement:null,manuallyLocked:false,manualAdjustmentSteps:0,engineVersion:ENGINE_VERSION})),
    lastSettlementBatch:null,
    roundMetricsHistory:[],
    botSimulation:{
      config:botSimulation,
      bots:[]
    }
  };
}

function persistState(){
  fs.writeFileSync(STATE_PATH,JSON.stringify(state,null,2),"utf8");
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

function ensureUser(userName){
  const normalized=(userName||"Demo Trader").trim()||"Demo Trader";
  if(typeof state.bankrolls[normalized]!=="number"){
    state.bankrolls[normalized]=STARTING_BANKROLL;
  }
  return normalized;
}

function findMarket(marketId){
  return state.markets.find((market)=>market.id===marketId);
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

function normalizeState(rawState){
  const bankrolls=Object.fromEntries(Object.entries(rawState.bankrolls||{}).map(([userName,balance])=>[userName,Number(balance)||STARTING_BANKROLL]));
  const botConfig=normalizeSimulationConfig(rawState.botSimulation?.config||DEFAULT_SIMULATION_CONFIG);
  const bots=(rawState.botSimulation?.bots||createBotRoster(botConfig))
    .filter((bot)=>bot?.source==="custom")
    .map((bot)=>({
    ...bot,
    bankroll:Number.isFinite(Number(bot.bankroll))?Number(bot.bankroll):Number(bot.startingBankroll)||200,
    cooldownUntil:Number.isFinite(Number(bot.cooldownUntil))?Number(bot.cooldownUntil):0,
    exposureByPlayer:{...(bot.exposureByPlayer||{})}
  }));
  const persistedMarkets=Array.isArray(rawState.markets)?rawState.markets:[];
  const markets=(persistedMarkets.length?persistedMarkets:SEEDED_MARKETS).map((market)=>{
    const seededMarket=SEEDED_MARKETS_BY_ID.get(market.id)||{};
    return {
    ...seededMarket,
    ...market,
    initialLine: normalizeMidpoint(Number(market.initialLine)||0),
    currentLine: normalizeMidpoint(Number(market.currentLine)||Number(market.initialLine)||0),
    spreadWidth: Number(market.spreadWidth)||LINE_STEP,
    netPressure: Number(market.netPressure)||0,
    pressureBalance: Number(market.pressureBalance)||0,
    engineVersion: market.engineVersion||null,
    matchedPairs: (market.matchedPairs||[]).map((pair)=>({...pair})),
    trades: (market.trades||[]).map((trade)=>({
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
  return syncDerivedBalances({
    bankrolls,
    markets,
    lastSettlementBatch:rawState.lastSettlementBatch||null,
    roundMetricsHistory:Array.isArray(rawState.roundMetricsHistory)?cloneValue(rawState.roundMetricsHistory):[],
    botSimulation:{config:botConfig,bots}
  });
}

function syncDerivedBalances(targetState=state){
  const bankrolls={...targetState.bankrolls};
  Object.keys(bankrolls).forEach((userName)=>{bankrolls[userName]=getUserBankroll(userName,targetState);});
  (targetState.botSimulation?.bots||[]).forEach((bot)=>{
    if(typeof bankrolls[bot.userName]!=="number"){
      bankrolls[bot.userName]=Number(bot.startingBankroll)||Number(bot.bankroll)||STARTING_BANKROLL;
    }
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

function isBotTrade(trade){
  return trade?.userName?.startsWith("Bot ")||trade?.userName?.includes(" Bot ");
}

async function syncBackendUser(userName){
  if(!(USE_SUPABASE&&isSupabaseConfigured())){
    return null;
  }
  try{
    const backendUser=await ensureSupabaseDemoUser(userName);
    if(backendUser&&Number.isFinite(backendUser.balance)){
      state.bankrolls[userName]=Math.min(state.bankrolls[userName]??STARTING_BANKROLL,backendUser.balance);
    }
    return backendUser;
  }catch(error){
    console.warn("Supabase session sync failed",error.message);
    return null;
  }
}

async function syncStateFromSupabase(){
  if(!(USE_SUPABASE&&isSupabaseConfigured())){
    return state;
  }
  try{
    const supabaseState=await fetchSupabaseAppState();
    if(supabaseState){
      state=supabaseState;
    }
  }catch(error){
    console.warn("Supabase state sync failed",error.message);
  }
  return state;
}

async function getBackendDashboard(userName){
  if(!(USE_SUPABASE&&isSupabaseConfigured())){
    return null;
  }
  try{
    return await fetchSupabaseDashboard(userName);
  }catch(error){
    console.warn("Supabase dashboard fetch failed",error.message);
    return null;
  }
}

function buildBackendPayload(backendUser,dashboard=null){
  return {
    mode: USE_SUPABASE&&isSupabaseConfigured()?"supabase":"local",
    user: backendUser,
    dashboard
  };
}

function ensureBankroll(userName){
  if(typeof state.bankrolls[userName]!=="number"){
    state.bankrolls[userName]=STARTING_BANKROLL;
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
  market.settlement={finalScore:isVoid?null:finalScore,settledAt:new Date().toISOString(),settlementType};
  market.manuallyLocked=true;
  market.trades.forEach((trade)=>{
    if(trade.unmatchedStake>0){
      trade.unmatchedStake=0;
    }
  });
  market.matchedPairs.forEach((pair)=>{
    if(pair.status!=="OPEN"){
      return;
    }
    if(isVoid){
      state.bankrolls[pair.overUserName]=(state.bankrolls[pair.overUserName]||STARTING_BANKROLL)+pair.stake;
      state.bankrolls[pair.underUserName]=(state.bankrolls[pair.underUserName]||STARTING_BANKROLL)+pair.stake;
      pair.winnerUserName=null;
      pair.voided=true;
    }else if(finalScore>pair.overEntryLine){
      pair.winnerUserName=pair.overUserName;
      state.bankrolls[pair.overUserName]=(state.bankrolls[pair.overUserName]||STARTING_BANKROLL)+(pair.stake*2);
    }else if(finalScore<pair.underEntryLine){
      pair.winnerUserName=pair.underUserName;
      state.bankrolls[pair.underUserName]=(state.bankrolls[pair.underUserName]||STARTING_BANKROLL)+(pair.stake*2);
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
      if(!market||market.settlement||market.manuallyLocked){
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
    if(!state?.botSimulation?.bots?.length){
      return;
    }
    const activeBots=state.botSimulation.bots.filter((bot)=>getUserBankroll(bot.userName)>=1);
    if(!activeBots.length){
      return;
    }
    const result=runBotTicks(1);
    if(result.events.length){
      persistState();
    }
  }catch(error){
    console.warn("Bot autoplay failed",error);
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
    state.bankrolls[incomingOrder.userName]=Math.max(getUserBankroll(incomingOrder.userName)-affordableStake,0);
    state.bankrolls[restingOrder.userName]=Math.max(getUserBankroll(restingOrder.userName)-affordableStake,0);
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
