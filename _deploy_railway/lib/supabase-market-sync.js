const {roundGames,TEAM_COLORS,buildRoundMarkets,slugify}=require("../seed-data.js");
const {supabaseRequest}=require("./supabase");
const {ensureSupabaseDemoUser,getSupabaseDemoUser}=require("./supabase-users");
const {isSupabaseConfigured}=require("./config");

const CURRENT_SEASON=2026;
const CURRENT_ROUND_NUMBER=2;
const CURRENT_ROUND_LABEL="Round 2";
const STARTING_BANKROLL=1000;

let cachedContext=null;

async function ensureSupabaseSeedData(){
  if(!isSupabaseConfigured()){
    return null;
  }
  if(cachedContext){
    return cachedContext;
  }

  const teams=await upsertTeams();
  const teamsByName=new Map(teams.map((team)=>[team.name,team]));

  const round=(await upsertRows("rounds",[{
    season:CURRENT_SEASON,
    round_number:CURRENT_ROUND_NUMBER,
    label:CURRENT_ROUND_LABEL,
    bankroll_top_up:STARTING_BANKROLL
  }],"season,round_number"))[0];

  const games=await upsertRows("games",roundGames.map((game)=>({
    slug:game.id,
    round_id:round.id,
    venue:game.venue,
    kickoff_at:parseKickoffLabel(game.kickoff),
    home_team_id:teamsByName.get(normalizeTeamName(game.homeTeam)).id,
    away_team_id:teamsByName.get(normalizeTeamName(game.awayTeam)).id
  })),"slug");
  const gamesBySlug=new Map(games.map((game)=>[game.slug,game]));

  const localMarkets=buildRoundMarkets();
  const players=await upsertRows("players",localMarkets.map((market)=>({
    slug:playerSlug(market),
    full_name:market.playerName,
    team_id:teamsByName.get(normalizeTeamName(market.team)).id,
    position:market.position,
    jersey_number:market.jerseyNumber
  })),"slug");
  const playersBySlug=new Map(players.map((player)=>[player.slug,player]));

  const existingMarkets=await supabaseRequest("weekly_player_markets",{
    query:{
      select:"*",
      round_id:`eq.${round.id}`
    }
  });
  const existingMarketsByPlayerId=new Map((existingMarkets||[]).map((market)=>[market.player_id,market]));

  const markets=await upsertRows("weekly_player_markets",localMarkets.map((market)=>({
    round_id:round.id,
    game_id:gamesBySlug.get(market.gameId).id,
    player_id:playersBySlug.get(playerSlug(market)).id,
    team_id:teamsByName.get(normalizeTeamName(market.team)).id,
    opening_line:Number(market.initialLine),
    current_line:Number(existingMarketsByPlayerId.get(playersBySlug.get(playerSlug(market)).id)?.current_line??market.initialLine),
    season_average:Number(market.seasonAverage),
    over_stake_total:Number(existingMarketsByPlayerId.get(playersBySlug.get(playerSlug(market)).id)?.over_stake_total??0),
    under_stake_total:Number(existingMarketsByPlayerId.get(playersBySlug.get(playerSlug(market)).id)?.under_stake_total??0),
    market_status:existingMarketsByPlayerId.get(playersBySlug.get(playerSlug(market)).id)?.market_status??"OPEN",
    final_fantasy_score:existingMarketsByPlayerId.get(playersBySlug.get(playerSlug(market)).id)?.final_fantasy_score??null,
    settled_at:existingMarketsByPlayerId.get(playersBySlug.get(playerSlug(market)).id)?.settled_at??null,
    locked_at:existingMarketsByPlayerId.get(playersBySlug.get(playerSlug(market)).id)?.locked_at??null,
    manual_override:Boolean(existingMarketsByPlayerId.get(playersBySlug.get(playerSlug(market)).id)?.manual_override)
  })),"round_id,player_id");
  const marketIdsByPlayerId=new Map(markets.map((market)=>[`${market.round_id}:${market.player_id}`,market]));

  cachedContext={
    round,
    teamsByName,
    gamesBySlug,
    playersBySlug,
    marketsByLocalId:new Map(localMarkets.map((market)=>[
      market.id,
      {
        localMarket:market,
        market:marketIdsByPlayerId.get(`${round.id}:${playersBySlug.get(playerSlug(market)).id}`),
        game:gamesBySlug.get(market.gameId),
        player:playersBySlug.get(playerSlug(market)),
        team:teamsByName.get(normalizeTeamName(market.team))
      }
    ]))
  };

  return cachedContext;
}

async function persistSupabaseTrade({userName,localMarket,trade,preTradeLine,postTradeLine}){
  if(!isSupabaseConfigured()){
    return null;
  }
  const context=await ensureSupabaseSeedData();
  const marketContext=context?.marketsByLocalId.get(localMarket.id);
  if(!marketContext?.market){
    throw new Error(`No Supabase market mapping found for ${localMarket.id}`);
  }

  const user=await ensureSupabaseDemoUser(userName);
  const tradeRows=await supabaseRequest("trades",{
    method:"POST",
    query:{select:"id,user_id,market_id,stake"},
    headers:{Prefer:"return=representation"},
    body:{
      user_id:user.id,
      market_id:marketContext.market.id,
      round_id:context.round.id,
      game_id:marketContext.game.id,
      player_id:marketContext.player.id,
      side:trade.side,
      stake:trade.stake,
      pre_trade_line:preTradeLine,
      post_trade_line:postTradeLine,
      entry_line:trade.entryLine,
      average_fill_rule:"MIDPOINT",
      placed_at:trade.timestamp
    }
  });
  const dbTrade=tradeRows?.[0];
  const nextBalance=(user.balance??STARTING_BANKROLL)-Number(trade.stake);
  await supabaseRequest("wallet_ledger",{
    method:"POST",
    headers:{Prefer:"return=minimal"},
    body:{
      user_id:user.id,
      round_id:context.round.id,
      trade_id:dbTrade?.id??null,
      entry_type:"TRADE_STAKE",
      amount:-Number(trade.stake),
      balance_after:nextBalance,
      note:`${trade.side} ${localMarket.playerName}`
    }
  });

  await upsertHolding({
    userId:user.id,
    roundId:context.round.id,
    marketId:marketContext.market.id,
    playerId:marketContext.player.id,
    side:trade.side
  });

  await supabaseRequest("weekly_player_markets",{
    method:"PATCH",
    query:{id:`eq.${marketContext.market.id}`},
    headers:{Prefer:"return=minimal"},
    body:{
      current_line:postTradeLine,
      over_stake_total:localMarket.totalOverStake,
      under_stake_total:localMarket.totalUnderStake
    }
  });

  cachedContext.marketsByLocalId.set(localMarket.id,{
    ...marketContext,
    market:{
      ...marketContext.market,
      current_line:postTradeLine,
      over_stake_total:localMarket.totalOverStake,
      under_stake_total:localMarket.totalUnderStake
    }
  });

  return {tradeId:dbTrade?.id,balanceAfter:nextBalance};
}

async function getSupabaseAvailableBalance(userName){
  const user=await getSupabaseDemoUser(userName);
  return user?.balance??null;
}

async function upsertHolding({userId,roundId,marketId,playerId,side}){
  const existing=(await supabaseRequest("holdings",{
    query:{
      select:"id,total_stake,weighted_entry_line,open_trade_count",
      user_id:`eq.${userId}`,
      market_id:`eq.${marketId}`,
      side:`eq.${side}`,
      limit:1
    }
  }))?.[0];

  const tradeRows=await supabaseRequest("trades",{
    query:{
      select:"stake,entry_line",
      user_id:`eq.${userId}`,
      market_id:`eq.${marketId}`,
      side:`eq.${side}`,
      settled_at:"is.null"
    }
  });

  const totalStake=tradeRows.reduce((sum,row)=>sum+(Number(row.stake)||0),0);
  const weightedEntry=totalStake
    ? tradeRows.reduce((sum,row)=>sum+((Number(row.stake)||0)*(Number(row.entry_line)||0)),0)/totalStake
    : null;

  const payload={
    user_id:userId,
    round_id:roundId,
    market_id:marketId,
    player_id:playerId,
    side,
    total_stake:totalStake,
    weighted_entry_line:weightedEntry!==null?Number(weightedEntry.toFixed(1)):null,
    open_trade_count:tradeRows.length,
    updated_at:new Date().toISOString()
  };

  if(existing){
    await supabaseRequest("holdings",{
      method:"PATCH",
      query:{id:`eq.${existing.id}`},
      headers:{Prefer:"return=minimal"},
      body:payload
    });
    return;
  }

  await supabaseRequest("holdings",{
    method:"POST",
    headers:{Prefer:"return=minimal"},
    body:payload
  });
}

async function upsertTeams(){
  const names=[...new Set(roundGames.flatMap((game)=>[normalizeTeamName(game.homeTeam),normalizeTeamName(game.awayTeam)]))];
  const rows=names.map((name)=>({
    slug:slugify(name),
    name,
    short_name:name==="Wests Tigers"?"Tigers":name,
    primary_color:(TEAM_COLORS[name]??TEAM_COLORS["Tigers"]??{primary:"#101722"}).primary,
    secondary_color:(TEAM_COLORS[name]??TEAM_COLORS["Tigers"]??{secondary:"#68d9ff"}).secondary
  }));
  return upsertRows("teams",rows,"slug");
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

function playerSlug(market){
  return slugify(`${market.playerName}-${normalizeTeamName(market.team)}`);
}

function normalizeTeamName(team){
  return team==="Tigers"?"Wests Tigers":team;
}

function parseKickoffLabel(label){
  const [weekday,day,month,time,period]=label.replace(",", "").split(" ");
  void weekday;
  const monthMap={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
  const [hourText,minuteText]=time.split(":");
  let hour=Number(hourText);
  const minute=Number(minuteText);
  if(period==="PM"&&hour!==12) hour+=12;
  if(period==="AM"&&hour===12) hour=0;
  return new Date(Date.UTC(CURRENT_SEASON,monthMap[month],Number(day),hour-13,minute)).toISOString();
}

module.exports={
  ensureSupabaseSeedData,
  getSupabaseAvailableBalance,
  persistSupabaseTrade
};
