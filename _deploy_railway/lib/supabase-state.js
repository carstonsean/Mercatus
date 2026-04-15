const {supabaseRequest,supabaseRequestAll}=require("./supabase");
const {ensureSupabaseSeedData,CURRENT_ROUND_NUMBER}=require("./supabase-market-sync");
const {isSupabaseConfigured}=require("./config");

async function fetchSupabaseAppState({activeRoundNumber}={}){
  if(!isSupabaseConfigured()){
    return null;
  }
  const context=await ensureSupabaseSeedData();
  const requestedRoundNumber=Number.isFinite(Number(activeRoundNumber))
    ? Number(activeRoundNumber)
    : CURRENT_ROUND_NUMBER;
  const activeRound=context?.roundsByNumber?.get(requestedRoundNumber);
  const roundIds=activeRound?.id ? [activeRound.id] : [];

  const [markets,trades,balances,users,matchedPairs]=await Promise.all([
    roundIds.length
      ? supabaseRequest("weekly_player_markets",{
        query:{
          select:"id,round_id,game_id,player_id,team_id,market_status,opening_line,current_line,season_average,over_stake_total,under_stake_total,final_fantasy_score,settled_at,locked_at,manual_override",
          round_id:`in.(${roundIds.join(",")})`
        }
      })
      : [],
    roundIds.length
      ? supabaseRequest("trades",{
        query:{
          select:"id,market_id,user_id,side,stake,entry_line,entry_under_line,entry_over_line,placed_at,resolved_outcome,payout,profit_loss,settled_at,status,matched_stake,unmatched_stake,refunded_stake,engine_version",
          round_id:`in.(${roundIds.join(",")})`,
          order:"placed_at.asc"
        }
      })
      : [],
    supabaseRequest("wallet_balances",{
      query:{select:"username,current_balance"}
    }).catch(()=>supabaseRequest("wallet_snapshots",{
      query:{select:"username,current_balance"}
    })),
    supabaseRequest("users",{
      query:{select:"id,username"}
    }),
    roundIds.length
      ? supabaseRequest("matched_pairs",{
        query:{
          select:"id,market_id,status,stake,over_user_id,under_user_id,over_order_id,under_order_id,over_entry_line,under_entry_line,winner_user_id,voided,platform_revenue,created_at",
          round_id:`in.(${roundIds.join(",")})`,
          order:"created_at.asc"
        }
      })
      : []
  ]);

  const dbMarketById=new Map((markets||[]).map((market)=>[market.id,market]));
  const usersById=new Map((users||[]).map((user)=>[user.id,user.username]));
  const marketByLocalId=new Map();
  const pairIdsByTradeId=new Map();

  (matchedPairs||[]).forEach((pair)=>{
    [pair.over_order_id,pair.under_order_id].filter(Boolean).forEach((tradeId)=>{
      const pairIds=pairIdsByTradeId.get(tradeId)||[];
      pairIds.push(pair.id);
      pairIdsByTradeId.set(tradeId,pairIds);
    });
  });

  context.marketsByLocalId.forEach((entry,localMarketId)=>{
    const dbMarket=dbMarketById.get(entry.market?.id);
    if(!dbMarket){
      return;
    }
    marketByLocalId.set(localMarketId,{
      id:localMarketId,
      gameId:entry.localMarket.gameId,
      playerName:entry.localMarket.playerName,
      team:entry.localMarket.team,
      opponent:entry.localMarket.opponent,
      position:entry.localMarket.position,
      jerseyNumber:entry.localMarket.jerseyNumber,
      fantasyPrice:entry.localMarket.fantasyPrice||null,
      priceImpliedProjection:entry.localMarket.priceImpliedProjection||null,
      botInputs:entry.localMarket.botInputs||null,
      initialLine:Number(dbMarket.opening_line),
      seasonAverage:Number(dbMarket.season_average)||Number(entry.localMarket.seasonAverage)||0,
      currentLine:Number(dbMarket.current_line),
      totalOverStake:Number(dbMarket.over_stake_total)||0,
      totalUnderStake:Number(dbMarket.under_stake_total)||0,
      netPressure:0,
      pressureBalance:0,
      settlement:dbMarket.final_fantasy_score!==null?{
        finalScore:Number(dbMarket.final_fantasy_score),
        settledAt:dbMarket.settled_at
      }:null,
      manuallyLocked:dbMarket.market_status==="LOCKED"||Boolean(dbMarket.locked_at),
      manualAdjustmentSteps:Math.round((Number(dbMarket.current_line)-Number(dbMarket.opening_line))/0.5),
      trades:[],
      matchedPairs:[]
    });
  });

  const tradesByMarketId=new Map();
  (trades||[]).forEach((trade)=>{
    const list=tradesByMarketId.get(trade.market_id)||[];
    list.push(trade);
    tradesByMarketId.set(trade.market_id,list);
  });

  context.marketsByLocalId.forEach((entry,localMarketId)=>{
    const localMarket=marketByLocalId.get(localMarketId);
    if(!localMarket){
      return;
    }
    const marketTrades=tradesByMarketId.get(entry.market.id)||[];
    localMarket.trades=marketTrades.map((trade)=>({
      id:trade.id,
      marketId:localMarketId,
      userName:usersById.get(trade.user_id)||null,
      side:trade.side,
      entryLine:Number(trade.entry_line),
      entryUnderLine:Number.isFinite(Number(trade.entry_under_line))?Number(trade.entry_under_line):Number(trade.entry_line)||0,
      entryOverLine:Number.isFinite(Number(trade.entry_over_line))?Number(trade.entry_over_line):Number(trade.entry_line)||0,
      stake:Number(trade.stake)||0,
      matchedStake:Number(trade.matched_stake)||0,
      unmatchedStake:Number(trade.unmatched_stake)||0,
      refundedStake:Number(trade.refunded_stake)||0,
      pairIds:pairIdsByTradeId.get(trade.id)||[],
      price:1,
      timestamp:trade.placed_at,
      status:trade.status||"PENDING",
      engineVersion:trade.engine_version||null,
      result:trade.resolved_outcome?{
        outcome:trade.resolved_outcome,
        finalScore:localMarket.settlement?.finalScore??0,
        payout:Number(trade.payout)||0,
        profit:Number(trade.profit_loss)||0
      }:null
    })).filter((trade)=>trade.userName);

    localMarket.matchedPairs=(matchedPairs||[])
      .filter((pair)=>pair.market_id===entry.market.id)
      .map((pair)=>({
        id:pair.id,
        createdAt:pair.created_at,
        status:pair.status||"OPEN",
        stake:Number(pair.stake)||0,
        overUserName:usersById.get(pair.over_user_id)||"",
        underUserName:usersById.get(pair.under_user_id)||"",
        overOrderId:pair.over_order_id||null,
        underOrderId:pair.under_order_id||null,
        overEntryLine:Number(pair.over_entry_line)||0,
        underEntryLine:Number(pair.under_entry_line)||0,
        winnerUserName:usersById.get(pair.winner_user_id)||null,
        voided:Boolean(pair.voided),
        platformRevenue:Number(pair.platform_revenue)||0
      }))
      .filter((pair)=>pair.overUserName&&pair.underUserName);
  });

  return {
    bankrolls:Object.fromEntries((balances||[]).map((row)=>[row.username,Number(row.current_balance)||0])),
    userNames:(users||[]).map((user)=>user.username).filter(Boolean),
    markets:[...marketByLocalId.values()],
    activeRoundNumber:requestedRoundNumber
  };
}

module.exports={fetchSupabaseAppState};
