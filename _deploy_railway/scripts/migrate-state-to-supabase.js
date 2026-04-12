const fs=require("fs");
const path=require("path");

require("../lib/load-env");

const {ensureSupabaseSeedData}=require("../lib/supabase-market-sync");
const {supabaseRequest}=require("../lib/supabase");
const {isSupabaseConfigured,getLocalSupabaseSafetyError}=require("../lib/config");

const STATE_PATH=path.resolve(process.argv[2]||path.join(__dirname,"..","server-state.json"));
const STARTING_BANKROLL=200;

async function main(){
  if(!isSupabaseConfigured()){
    throw new Error("Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY first.");
  }
  const safetyError=getLocalSupabaseSafetyError();
  if(safetyError){
    throw new Error(safetyError);
  }
  if(!fs.existsSync(STATE_PATH)){
    throw new Error(`State file not found: ${STATE_PATH}`);
  }

  const state=JSON.parse(fs.readFileSync(STATE_PATH,"utf8"));
  const context=await ensureSupabaseSeedData();
  const localMarkets=Array.isArray(state.markets)?state.markets:[];
  const allTrades=localMarkets.flatMap((market)=>Array.isArray(market.trades)?market.trades:[]);
  const allPairs=localMarkets.flatMap((market)=>Array.isArray(market.matchedPairs)?market.matchedPairs:[]);
  const userNames=collectUserNames(state,allTrades,allPairs);

  console.log(`Importing ${userNames.length} users, ${localMarkets.length} markets, ${allTrades.length} trades, and ${allPairs.length} matched pairs from ${STATE_PATH}`);

  const users=await upsertRows("users",userNames.map((userName)=>({
    username:userName,
    display_name:userName,
    last_seen_at:new Date().toISOString()
  })),"username");
  const usersByName=new Map(users.map((user)=>[user.username,user]));

  await importLedger(state,usersByName,context.round.id);
  await importMarkets(localMarkets,context);
  await importTrades(localMarkets,context,usersByName);
  await importMatchedPairs(localMarkets,context,usersByName);
  await importHoldings(localMarkets,context,usersByName);

  console.log("Supabase import completed.");
}

function collectUserNames(state,trades,pairs){
  const names=new Set(Object.keys(state.bankrolls||{}));
  trades.forEach((trade)=>{
    if(trade?.userName){
      names.add(trade.userName);
    }
  });
  pairs.forEach((pair)=>{
    if(pair?.overUserName){
      names.add(pair.overUserName);
    }
    if(pair?.underUserName){
      names.add(pair.underUserName);
    }
    if(pair?.winnerUserName){
      names.add(pair.winnerUserName);
    }
  });
  return [...names].filter(Boolean).sort((left,right)=>left.localeCompare(right));
}

async function importLedger(state,usersByName,roundId){
  const rows=[];
  Object.entries(state.bankrolls||{}).forEach(([userName,balance])=>{
    const user=usersByName.get(userName);
    if(!user){
      return;
    }
    const currentBalance=Number(balance)||0;
    rows.push({
      user_id:user.id,
      round_id:null,
      trade_id:null,
      entry_type:"ACCOUNT_CREATED",
      amount:STARTING_BANKROLL,
      balance_after:STARTING_BANKROLL,
      note:"Imported account opening balance",
      external_ledger_key:`import:${userName}:account-created`
    });
    if(currentBalance!==STARTING_BANKROLL){
      rows.push({
        user_id:user.id,
        round_id:roundId,
        trade_id:null,
        entry_type:"ADMIN_ADJUSTMENT",
        amount:Number((currentBalance-STARTING_BANKROLL).toFixed(2)),
        balance_after:currentBalance,
        note:"Imported balance adjustment from local server-state.json",
        external_ledger_key:`import:${userName}:balance-adjustment`
      });
    }
  });
  await insertRows("wallet_ledger",rows);
}

async function importMarkets(localMarkets,context){
  for(const market of localMarkets){
    const marketContext=context.marketsByLocalId.get(market.id);
    if(!marketContext?.market){
      continue;
    }
    await supabaseRequest("weekly_player_markets",{
      method:"PATCH",
      query:{id:`eq.${marketContext.market.id}`},
      headers:{Prefer:"return=minimal"},
      body:{
        current_line:Number(market.currentLine)||0,
        over_stake_total:Number(market.totalOverStake)||0,
        under_stake_total:Number(market.totalUnderStake)||0,
        market_status:market.settlement?"RESOLVED":market.manuallyLocked?"LOCKED":"OPEN",
        final_fantasy_score:Number.isFinite(Number(market?.settlement?.finalScore))?Number(market.settlement.finalScore):null,
        settled_at:market?.settlement?.settledAt||null,
        locked_at:market.manuallyLocked?(market?.settlement?.settledAt||new Date().toISOString()):null,
        manual_override:Boolean(market.manuallyLocked)
      }
    });
  }
}

async function importTrades(localMarkets,context,usersByName){
  const rows=[];
  localMarkets.forEach((market)=>{
    const marketContext=context.marketsByLocalId.get(market.id);
    if(!marketContext?.market){
      return;
    }
    (market.trades||[]).forEach((trade)=>{
      const user=usersByName.get(trade.userName);
      if(!user){
        return;
      }
      rows.push({
        id:trade.id,
        user_id:user.id,
        market_id:marketContext.market.id,
        round_id:context.round.id,
        game_id:marketContext.game.id,
        player_id:marketContext.player.id,
        side:trade.side,
        stake:Number(trade.stake)||0,
        pre_trade_line:Number(trade.entryLine)||0,
        post_trade_line:Number(trade.entryLine)||0,
        entry_line:Number(trade.entryLine)||0,
        entry_under_line:Number.isFinite(Number(trade.entryUnderLine))?Number(trade.entryUnderLine):Number(trade.entryLine)||0,
        entry_over_line:Number.isFinite(Number(trade.entryOverLine))?Number(trade.entryOverLine):Number(trade.entryLine)||0,
        quantity:1,
        average_fill_rule:"MIDPOINT",
        resolved_outcome:trade.result?.outcome||null,
        payout:Number.isFinite(Number(trade.result?.payout))?Number(trade.result.payout):null,
        profit_loss:Number.isFinite(Number(trade.result?.profit))?Number(trade.result.profit):null,
        placed_at:trade.timestamp||new Date().toISOString(),
        settled_at:trade.result?market?.settlement?.settledAt||trade.timestamp||new Date().toISOString():null,
        status:trade.status||"PENDING",
        matched_stake:Number(trade.matchedStake)||0,
        unmatched_stake:Number(trade.unmatchedStake)||0,
        refunded_stake:Number(trade.refundedStake)||0,
        engine_version:trade.engineVersion||null
      });
    });
  });
  await upsertRows("trades",rows,"id");
}

async function importMatchedPairs(localMarkets,context,usersByName){
  const rows=[];
  localMarkets.forEach((market)=>{
    const marketContext=context.marketsByLocalId.get(market.id);
    if(!marketContext?.market){
      return;
    }
    (market.matchedPairs||[]).forEach((pair)=>{
      const overUser=usersByName.get(pair.overUserName);
      const underUser=usersByName.get(pair.underUserName);
      if(!overUser||!underUser){
        return;
      }
      rows.push({
        id:pair.id,
        market_id:marketContext.market.id,
        round_id:context.round.id,
        game_id:marketContext.game.id,
        player_id:marketContext.player.id,
        created_at:pair.createdAt||new Date().toISOString(),
        status:pair.status||"OPEN",
        stake:Number(pair.stake)||0,
        over_user_id:overUser.id,
        under_user_id:underUser.id,
        over_order_id:pair.overOrderId||null,
        under_order_id:pair.underOrderId||null,
        over_entry_line:Number(pair.overEntryLine)||0,
        under_entry_line:Number(pair.underEntryLine)||0,
        winner_user_id:pair.winnerUserName?usersByName.get(pair.winnerUserName)?.id||null:null,
        voided:Boolean(pair.voided),
        platform_revenue:Number(pair.platformRevenue)||0
      });
    });
  });
  await upsertRows("matched_pairs",rows,"id");
}

async function importHoldings(localMarkets,context,usersByName){
  const holdings=new Map();
  localMarkets.forEach((market)=>{
    const marketContext=context.marketsByLocalId.get(market.id);
    if(!marketContext?.market){
      return;
    }
    (market.trades||[]).forEach((trade)=>{
      if(trade.result||!(Number(trade.matchedStake)>0)){
        return;
      }
      const user=usersByName.get(trade.userName);
      if(!user){
        return;
      }
      const key=[user.id,marketContext.market.id,trade.side].join(":");
      const current=holdings.get(key)||{
        user_id:user.id,
        round_id:context.round.id,
        market_id:marketContext.market.id,
        player_id:marketContext.player.id,
        side:trade.side,
        total_stake:0,
        weighted_entry_sum:0,
        open_trade_count:0,
        updated_at:new Date().toISOString()
      };
      const matchedStake=Number(trade.matchedStake)||0;
      current.total_stake+=matchedStake;
      current.weighted_entry_sum+=matchedStake*(Number(trade.entryLine)||0);
      current.open_trade_count+=1;
      holdings.set(key,current);
    });
  });

  const rows=[...holdings.values()].map((holding)=>({
    user_id:holding.user_id,
    round_id:holding.round_id,
    market_id:holding.market_id,
    player_id:holding.player_id,
    side:holding.side,
    total_stake:Number(holding.total_stake.toFixed(2)),
    weighted_entry_line:holding.total_stake?Number((holding.weighted_entry_sum/holding.total_stake).toFixed(1)):null,
    open_trade_count:holding.open_trade_count,
    updated_at:holding.updated_at
  }));
  await upsertRows("holdings",rows,"user_id,market_id,side");
}

async function upsertRows(resource,rows,conflict){
  if(!rows.length){
    return [];
  }
  return supabaseRequest(resource,{
    method:"POST",
    query:{
      on_conflict:conflict,
      select:"*"
    },
    headers:{Prefer:"return=representation,resolution=merge-duplicates"},
    body:rows
  });
}

async function insertRows(resource,rows){
  if(!rows.length){
    return [];
  }
  return supabaseRequest(resource,{
    method:"POST",
    query:{select:"*"},
    headers:{Prefer:"return=representation"},
    body:rows
  });
}

main().catch((error)=>{
  console.error(error.message||error);
  process.exitCode=1;
});
