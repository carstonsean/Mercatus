const http=require("http");
const fs=require("fs");
const path=require("path");
const {randomUUID}=require("crypto");
require("./lib/load-env");
const {HALF_POINT,roundGames,TEAM_COLORS,buildRoundMarkets,roundToHalf}=require("./seed-data.js");
const {isSupabaseConfigured}=require("./lib/config");
const {ensureSupabaseDemoUser}=require("./lib/supabase-users");
const {ensureSupabaseSeedData,getSupabaseAvailableBalance,persistSupabaseTrade}=require("./lib/supabase-market-sync");
const {fetchSupabaseDashboard}=require("./lib/supabase-dashboard");
const {fetchSupabaseAppState}=require("./lib/supabase-state");

const PORT=process.env.PORT?Number(process.env.PORT):8000;
const STARTING_BANKROLL=1000;
const PRESSURE_STEP=20;
const LINE_STEP=1;
const STATE_PATH=path.join(__dirname,"server-state.json");
const USE_SUPABASE=false;

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
    res.writeHead(200,{"Content-Type":MIME_TYPES[path.extname(filePath)]||"application/octet-stream"});
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
    const trade=placeMatchedOrder(market,{userName:username,side,stake});
    persistState();
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
    settleMatchedMarket(market,finalScore);
    persistState();
    return json(res,200,{state});
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/reset"){
    state=buildFreshState();
    if(!(USE_SUPABASE&&isSupabaseConfigured())){
      syncDerivedBalances();
    }
    persistState();
    return json(res,200,{state});
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
  return {bankrolls:{},markets:buildRoundMarkets().map((market)=>({...market,initialLine:normalizeMidpoint(market.initialLine),currentLine:normalizeMidpoint(market.initialLine),spreadWidth:LINE_STEP,totalOverStake:0,totalUnderStake:0,trades:[],matchedPairs:[],settlement:null,manuallyLocked:false,manualAdjustmentSteps:0}))};
}

function persistState(){
  fs.writeFileSync(STATE_PATH,JSON.stringify(state,null,2),"utf8");
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
  const imbalance=market.totalOverStake-market.totalUnderStake;
  const steps=Math.trunc(imbalance/PRESSURE_STEP)+(market.manualAdjustmentSteps??0);
  return normalizeMidpoint(market.initialLine+steps*LINE_STEP);
}

function normalizeMidpoint(value){
  return Math.round(value||0);
}

function linePairFor(market){
  return {underLine:roundToHalf(market.currentLine-HALF_POINT),overLine:roundToHalf(market.currentLine+HALF_POINT)};
}

function normalizeState(rawState){
  const bankrolls=Object.fromEntries(Object.entries(rawState.bankrolls||{}).map(([userName,balance])=>[userName,Number(balance)||STARTING_BANKROLL]));
  const markets=(rawState.markets||[]).map((market)=>({
    ...market,
    initialLine: normalizeMidpoint(Number(market.initialLine)||0),
    currentLine: normalizeMidpoint(Number(market.currentLine)||Number(market.initialLine)||0),
    spreadWidth: Number(market.spreadWidth)||LINE_STEP,
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
  }));
  markets.forEach((market)=>updateMarketTotals(market));
  return syncDerivedBalances({bankrolls,markets});
}

function syncDerivedBalances(targetState=state){
  const bankrolls={...targetState.bankrolls};
  Object.keys(bankrolls).forEach((userName)=>{bankrolls[userName]=getUserBankroll(userName,targetState);});
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
  const pendingOrders=market.trades.filter((trade)=>["PENDING","PARTIALLY_MATCHED"].includes(trade.status));
  market.totalOverStake=pendingOrders.filter((trade)=>trade.side==="OVER").reduce((sum,trade)=>sum+(Number(trade.unmatchedStake)||0),0);
  market.totalUnderStake=pendingOrders.filter((trade)=>trade.side==="UNDER").reduce((sum,trade)=>sum+(Number(trade.unmatchedStake)||0),0);
  market.currentLine=calculateCurrentLine(market);
}

function activeOrderStatus(order){
  if(order.unmatchedStake>0&&order.matchedStake>0) return "PARTIALLY_MATCHED";
  if(order.unmatchedStake>0) return "PENDING";
  if(order.matchedStake>0) return "MATCHED";
  return order.result?"SETTLED":"CANCELLED";
}

function placeMatchedOrder(market,{userName,side,stake}){
  ensureBankroll(userName);
  state.bankrolls[userName]-=stake;
  const {underLine,overLine}=linePairFor(market);
  const timestamp=new Date().toISOString();
  const order={id:randomUUID(),marketId:market.id,userName,side,entryLine:side==="OVER"?overLine:underLine,entryUnderLine:underLine,entryOverLine:overLine,stake,matchedStake:0,unmatchedStake:stake,refundedStake:0,pairIds:[],price:1,timestamp,result:null,status:"PENDING"};
  const oppositeSide=side==="OVER"?"UNDER":"OVER";
  const restingOrders=market.trades
    .filter((trade)=>trade.side===oppositeSide&&trade.userName!==userName&&["PENDING","PARTIALLY_MATCHED"].includes(trade.status))
    .filter((trade)=>trade.entryUnderLine===underLine&&trade.entryOverLine===overLine)
    .sort((a,b)=>new Date(a.timestamp)-new Date(b.timestamp));

  restingOrders.forEach((restingOrder)=>{
    if(order.unmatchedStake<=0){
      return;
    }
    const matchedStake=Math.min(order.unmatchedStake,restingOrder.unmatchedStake);
    if(matchedStake<=0){
      return;
    }
    const pair={id:randomUUID(),marketId:market.id,createdAt:timestamp,status:"OPEN",stake:matchedStake,overUserName:side==="OVER"?userName:restingOrder.userName,underUserName:side==="UNDER"?userName:restingOrder.userName,overOrderId:side==="OVER"?order.id:restingOrder.id,underOrderId:side==="UNDER"?order.id:restingOrder.id,overEntryLine:overLine,underEntryLine:underLine,winnerUserName:null,platformRevenue:0};
    market.matchedPairs.push(pair);
    order.unmatchedStake-=matchedStake;
    order.matchedStake+=matchedStake;
    order.pairIds.push(pair.id);
    restingOrder.unmatchedStake-=matchedStake;
    restingOrder.matchedStake+=matchedStake;
    restingOrder.pairIds=(restingOrder.pairIds||[]).concat(pair.id);
    restingOrder.status=activeOrderStatus(restingOrder);
  });

  order.status=activeOrderStatus(order);
  market.trades.push(order);
  updateMarketTotals(market);
  syncDerivedBalances();
  return order;
}

function cancelPendingOrders(userName,orderIds){
  state.markets.forEach((market)=>{
    market.trades.forEach((trade)=>{
      if(trade.userName!==userName||!orderIds.includes(trade.id)||!(trade.unmatchedStake>0)){
        return;
      }
      state.bankrolls[userName]=(state.bankrolls[userName]||STARTING_BANKROLL)+trade.unmatchedStake;
      trade.refundedStake=(trade.refundedStake||0)+trade.unmatchedStake;
      trade.stake-=trade.unmatchedStake;
      trade.unmatchedStake=0;
      trade.status=trade.matchedStake>0?"MATCHED":"CANCELLED";
    });
    updateMarketTotals(market);
  });
}

function settleMatchedMarket(market,finalScore){
  market.settlement={finalScore,settledAt:new Date().toISOString()};
  market.manuallyLocked=true;
  market.matchedPairs.forEach((pair)=>{
    if(pair.status!=="OPEN"){
      return;
    }
    if(finalScore>pair.overEntryLine){
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
    if(trade.unmatchedStake>0){
      state.bankrolls[trade.userName]=(state.bankrolls[trade.userName]||STARTING_BANKROLL)+trade.unmatchedStake;
      trade.refundedStake=(trade.refundedStake||0)+trade.unmatchedStake;
      trade.stake-=trade.unmatchedStake;
      trade.unmatchedStake=0;
    }
    const relatedPairs=market.matchedPairs.filter((pair)=>(trade.pairIds||[]).includes(pair.id));
    const payout=relatedPairs.reduce((sum,pair)=>sum+(pair.winnerUserName===trade.userName?pair.stake*2:0),0);
    const activeStake=(trade.matchedStake||0)+(trade.refundedStake||0);
    const profit=payout+(trade.refundedStake||0)-activeStake;
    let outcome="LOSS";
    if(trade.matchedStake===0&&trade.refundedStake>0){
      outcome="VOID";
    }else if(relatedPairs.some((pair)=>pair.platformRevenue>0)&&payout===0){
      outcome="MIDDLE";
    }else if(payout>0){
      outcome="WIN";
    }
    trade.result={outcome,finalScore,payout:payout+(trade.refundedStake||0),profit};
    trade.status="SETTLED";
  });
  updateMarketTotals(market);
  syncDerivedBalances();
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
