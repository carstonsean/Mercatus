const {supabaseRequest}=require("./supabase");
const {ensureSupabaseSeedData}=require("./supabase-market-sync");
const {isSupabaseConfigured}=require("./config");

async function fetchSupabaseAppState(){
  if(!isSupabaseConfigured()){
    return null;
  }
  const context=await ensureSupabaseSeedData();
  const roundId=context.round.id;

  const [markets,trades,balances]=await Promise.all([
    supabaseRequest("weekly_player_markets",{
      query:{
        select:"id,round_id,game_id,player_id,team_id,market_status,opening_line,current_line,season_average,over_stake_total,under_stake_total,final_fantasy_score,settled_at,locked_at,manual_override",
        round_id:`eq.${roundId}`
      }
    }),
    supabaseRequest("trades",{
      query:{
        select:"id,market_id,user_id,side,stake,entry_line,placed_at,resolved_outcome,payout,profit_loss,settled_at",
        round_id:`eq.${roundId}`,
        order:"placed_at.asc"
      }
    }),
    supabaseRequest("wallet_balances",{
      query:{select:"username,current_balance"}
    })
  ]);
  const users=await supabaseRequest("users",{
    query:{select:"id,username"}
  });

  const dbMarketById=new Map((markets||[]).map((market)=>[market.id,market]));
  const usersById=new Map((users||[]).map((user)=>[user.id,user.username]));
  const marketByLocalId=new Map();

  context.marketsByLocalId.forEach((entry,localMarketId)=>{
    const dbMarket=dbMarketById.get(entry.market.id);
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
      settlement:dbMarket.final_fantasy_score!==null?{
        finalScore:Number(dbMarket.final_fantasy_score),
        settledAt:dbMarket.settled_at
      }:null,
      manuallyLocked:dbMarket.market_status==="LOCKED"||Boolean(dbMarket.locked_at),
      manualAdjustmentSteps:Math.round((Number(dbMarket.current_line)-Number(dbMarket.opening_line))/0.5),
      trades:[]
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
      stake:Number(trade.stake)||0,
      price:1,
      timestamp:trade.placed_at,
      result:trade.resolved_outcome?{
        outcome:trade.resolved_outcome,
        finalScore:localMarket.settlement?.finalScore??0,
        payout:Number(trade.payout)||0,
        profit:Number(trade.profit_loss)||0
      }:null
    })).filter((trade)=>trade.userName);
  });

  return {
    bankrolls:Object.fromEntries((balances||[]).map((row)=>[row.username,Number(row.current_balance)||0])),
    markets:[...marketByLocalId.values()]
  };
}

module.exports={fetchSupabaseAppState};
