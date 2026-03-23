const {supabaseRequest}=require("./supabase");
const {getSupabaseDemoUser}=require("./supabase-users");
const {isSupabaseConfigured}=require("./config");

async function fetchSupabaseDashboard(userName){
  if(!isSupabaseConfigured()){
    return null;
  }
  const user=await getSupabaseDemoUser(userName);
  const leaderboard=await fetchLeaderboard();
  if(!user){
    return {portfolio:null,leaderboard};
  }
  const portfolio=await fetchPortfolio(user);
  return {portfolio,leaderboard};
}

async function fetchPortfolio(user){
  const holdings=await supabaseRequest("holdings",{
    query:{
      select:"id,market_id,player_id,side,total_stake,weighted_entry_line,open_trade_count,updated_at",
      user_id:`eq.${user.id}`,
      order:"updated_at.desc"
    }
  });

  const settledTrades=await supabaseRequest("trades",{
    query:{
      select:"id,market_id,player_id,side,stake,entry_line,placed_at,resolved_outcome,profit_loss,payout,settled_at",
      user_id:`eq.${user.id}`,
      settled_at:"not.is.null",
      order:"settled_at.desc",
      limit:20
    }
  });

  const playerIds=[...new Set([
    ...holdings.map((holding)=>holding.player_id),
    ...settledTrades.map((trade)=>trade.player_id)
  ])];
  const marketIds=[...new Set([
    ...holdings.map((holding)=>holding.market_id),
    ...settledTrades.map((trade)=>trade.market_id)
  ])];

  const [players,markets,statsRows]=await Promise.all([
    fetchByIds("players",playerIds,"id,full_name,position"),
    fetchByIds("weekly_player_markets",marketIds,"id,current_line,final_fantasy_score"),
    supabaseRequest("portfolio_stats",{
      query:{
        select:"open_trade_count,settled_trade_count,realized_profit_loss,win_rate",
        user_id:`eq.${user.id}`,
        limit:1
      }
    })
  ]);

  const playersById=new Map(players.map((player)=>[player.id,player]));
  const marketsById=new Map(markets.map((market)=>[market.id,market]));
  const stats=statsRows?.[0]||{};

  return {
    balance:user.balance,
    openCount:Number(stats.open_trade_count)||holdings.length,
    realized:Number(stats.realized_profit_loss)||0,
    winRate:Math.round(Number(stats.win_rate)||0),
    openPositions: holdings.map((holding)=>({
      marketId:holding.market_id,
      playerName:playersById.get(holding.player_id)?.full_name||"Unknown player",
      position:playersById.get(holding.player_id)?.position||"Market",
      side:holding.side,
      stake:Number(holding.total_stake)||0,
      entryLine:Number(holding.weighted_entry_line)||0,
      currentLine:Number(marketsById.get(holding.market_id)?.current_line)||0,
      timestamp:holding.updated_at,
      result:null
    })),
    settledPositions: settledTrades.map((trade)=>({
      marketId:trade.market_id,
      playerName:playersById.get(trade.player_id)?.full_name||"Unknown player",
      position:playersById.get(trade.player_id)?.position||"Market",
      side:trade.side,
      stake:Number(trade.stake)||0,
      entryLine:Number(trade.entry_line)||0,
      timestamp:trade.settled_at||trade.placed_at,
      result:{
        outcome:trade.resolved_outcome,
        profit:Number(trade.profit_loss)||0,
        payout:Number(trade.payout)||0,
        finalScore:Number(marketsById.get(trade.market_id)?.final_fantasy_score)||0
      }
    }))
  };
}

async function fetchLeaderboard(){
  const [wallets,stats,holdings]=await Promise.all([
    supabaseRequest("wallet_balances",{query:{select:"user_id,username,current_balance"}}),
    supabaseRequest("portfolio_stats",{query:{select:"user_id,username,open_trade_count,settled_trade_count,realized_profit_loss,win_rate"}}),
    supabaseRequest("holdings",{query:{select:"user_id,player_id,side,total_stake,weighted_entry_line,open_trade_count"}})
  ]);

  const largestByUser=new Map();
  holdings.forEach((holding)=>{
    const current=largestByUser.get(holding.user_id);
    const stake=Number(holding.total_stake)||0;
    if(!current||stake>(Number(current.total_stake)||0)){
      largestByUser.set(holding.user_id,holding);
    }
  });

  const playerIds=[...new Set([...largestByUser.values()].map((holding)=>holding.player_id))];
  const players=await fetchByIds("players",playerIds,"id,full_name");
  const playersById=new Map(players.map((player)=>[player.id,player]));
  const statsByUserId=new Map(stats.map((row)=>[row.user_id,row]));

  return wallets
    .map((wallet)=>({
      userName:wallet.username,
      balance:Number(wallet.current_balance)||0,
      tradesCount:Number(statsByUserId.get(wallet.user_id)?.open_trade_count||0)+Number(statsByUserId.get(wallet.user_id)?.settled_trade_count||0),
      winRate:Math.round(Number(statsByUserId.get(wallet.user_id)?.win_rate)||0),
      realized:Number(statsByUserId.get(wallet.user_id)?.realized_profit_loss)||0,
      largestOpen: largestByUser.get(wallet.user_id)
        ? {
            marketId:null,
            playerName:playersById.get(largestByUser.get(wallet.user_id).player_id)?.full_name||"Unknown player",
            side:largestByUser.get(wallet.user_id).side,
            entryLine:Number(largestByUser.get(wallet.user_id).weighted_entry_line)||0,
            stake:Number(largestByUser.get(wallet.user_id).total_stake)||0
          }
        : null
    }))
    .sort((a,b)=>{
      if(b.balance!==a.balance) return b.balance-a.balance;
      if(b.realized!==a.realized) return b.realized-a.realized;
      return b.tradesCount-a.tradesCount;
    });
}

async function fetchByIds(resource,ids,select){
  if(!ids.length){
    return [];
  }
  return supabaseRequest(resource,{
    query:{
      select,
      id:`in.(${ids.join(",")})`
    }
  });
}

module.exports={fetchSupabaseDashboard};
