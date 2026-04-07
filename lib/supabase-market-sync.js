const {roundGames,TEAM_COLORS,buildRoundMarkets,slugify}=require("../seed-data.js");
const {supabaseRequest}=require("./supabase");
const {ensureSupabaseDemoUser,getSupabaseDemoUser}=require("./supabase-users");
const {isSupabaseConfigured}=require("./config");

const CURRENT_SEASON=2026;
const ALL_ROUND_NUMBERS=[...new Set(roundGames.map((game)=>parseRoundNumber(game.roundLabel)).filter(Number.isFinite))].sort((left,right)=>left-right);
const CURRENT_ROUND_NUMBER=ALL_ROUND_NUMBERS.at(-1)||1;
const ROUND_LABEL_BY_NUMBER=new Map(ALL_ROUND_NUMBERS.map((roundNumber)=>[
  roundNumber,
  roundGames.find((game)=>parseRoundNumber(game.roundLabel)===roundNumber)?.roundLabel||`Round ${roundNumber}`
]));
const STARTING_BANKROLL=200;

let cachedContext=null;

async function ensureSupabaseSeedData(){
  if(!isSupabaseConfigured()){
    return null;
  }
  if(cachedContext){
    return cachedContext;
  }

  const localMarkets=buildRoundMarkets();
  const roundNumberByGameId=new Map(roundGames.map((game)=>[game.id,parseRoundNumber(game.roundLabel)]));

  const teams=await upsertTeams();
  const teamsByName=new Map(teams.map((team)=>[team.name,team]));

  const rounds=await upsertRows("rounds",ALL_ROUND_NUMBERS.map((roundNumber)=>({
    season:CURRENT_SEASON,
    round_number:roundNumber,
    label:ROUND_LABEL_BY_NUMBER.get(roundNumber)||`Round ${roundNumber}`,
    bankroll_top_up:STARTING_BANKROLL
  })),"season,round_number");
  const roundsByNumber=new Map((rounds||[]).map((round)=>[Number(round.round_number),round]));

  const games=await upsertRows("games",roundGames.map((game)=>{
    const roundNumber=roundNumberByGameId.get(game.id);
    const round=roundsByNumber.get(roundNumber);
    return {
      slug:game.id,
      round_id:round.id,
      venue:game.venue,
      kickoff_at:game.kickoffAt||parseKickoffLabel(game.kickoff),
      home_team_id:teamsByName.get(normalizeTeamName(game.homeTeam)).id,
      away_team_id:teamsByName.get(normalizeTeamName(game.awayTeam)).id
    };
  }),"slug");
  const gamesBySlug=new Map(games.map((game)=>[game.slug,game]));

  const players=await upsertRows("players",localMarkets.map((market)=>({
    slug:playerSlug(market),
    full_name:market.playerName,
    team_id:teamsByName.get(normalizeTeamName(market.team)).id,
    position:market.position,
    jersey_number:market.jerseyNumber
  })),"slug");
  const playersBySlug=new Map(players.map((player)=>[player.slug,player]));

  const roundIds=[...roundsByNumber.values()].map((round)=>round.id).filter(Boolean);
  const existingMarkets=roundIds.length
    ? await supabaseRequest("weekly_player_markets",{
      query:{
        select:"*",
        round_id:`in.(${roundIds.join(",")})`
      }
    })
    : [];
  const existingMarketsByKey=new Map((existingMarkets||[]).map((market)=>[`${market.round_id}:${market.player_id}`,market]));

  const markets=await upsertRows("weekly_player_markets",localMarkets.map((market)=>{
    const roundNumber=roundNumberByGameId.get(market.gameId);
    const round=roundsByNumber.get(roundNumber);
    const player=playersBySlug.get(playerSlug(market));
    const existing=existingMarketsByKey.get(`${round.id}:${player.id}`);
    return {
      round_id:round.id,
      game_id:gamesBySlug.get(market.gameId).id,
      player_id:player.id,
      team_id:teamsByName.get(normalizeTeamName(market.team)).id,
      opening_line:Number(market.initialLine),
      current_line:Number(existing?.current_line??market.initialLine),
      season_average:Number(market.seasonAverage),
      over_stake_total:Number(existing?.over_stake_total??0),
      under_stake_total:Number(existing?.under_stake_total??0),
      market_status:existing?.market_status??"OPEN",
      final_fantasy_score:existing?.final_fantasy_score??null,
      settled_at:existing?.settled_at??null,
      locked_at:existing?.locked_at??null,
      manual_override:Boolean(existing?.manual_override)
    };
  }),"round_id,player_id");
  const marketsByKey=new Map(markets.map((market)=>[`${market.round_id}:${market.player_id}`,market]));

  cachedContext={
    round:roundsByNumber.get(CURRENT_ROUND_NUMBER)||null,
    roundsByNumber,
    teamsByName,
    gamesBySlug,
    playersBySlug,
    marketsByLocalId:new Map(localMarkets.map((market)=>{
      const roundNumber=roundNumberByGameId.get(market.gameId);
      const round=roundsByNumber.get(roundNumber)||null;
      const player=playersBySlug.get(playerSlug(market));
      return [
        market.id,
        {
          localMarket:market,
          roundNumber,
          round,
          market:round&&player?marketsByKey.get(`${round.id}:${player.id}`):null,
          game:gamesBySlug.get(market.gameId),
          player,
          team:teamsByName.get(normalizeTeamName(market.team))
        }
      ];
    }))
  };

  return cachedContext;
}

async function persistSupabaseTrade({userName,localMarket,trade,preTradeLine,postTradeLine}){
  if(!isSupabaseConfigured()){
    return null;
  }
  const context=await ensureSupabaseSeedData();
  const marketContext=context?.marketsByLocalId.get(localMarket.id);
  if(!marketContext?.market||!marketContext?.round){
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
      round_id:marketContext.round.id,
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
      round_id:marketContext.round.id,
      trade_id:dbTrade?.id??null,
      entry_type:"TRADE_STAKE",
      amount:-Number(trade.stake),
      balance_after:nextBalance,
      note:`${trade.side} ${localMarket.playerName}`
    }
  });

  await upsertHolding({
    userId:user.id,
    roundId:marketContext.round.id,
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

async function persistSupabaseMarketState(localMarket,targetState){
  if(!isSupabaseConfigured()){
    return null;
  }
  const context=await ensureSupabaseSeedData();
  const marketContext=context?.marketsByLocalId.get(localMarket.id);
  if(!marketContext?.market||!marketContext?.round){
    throw new Error(`No Supabase market mapping found for ${localMarket.id}`);
  }

  const userNames=[...new Set([
    ...(localMarket.trades||[]).map((trade)=>trade.userName),
    ...(localMarket.matchedPairs||[]).flatMap((pair)=>[pair.overUserName,pair.underUserName,pair.winnerUserName])
  ].filter(Boolean))];
  const users=await upsertRows("users",userNames.map((userName)=>({
    username:userName,
    display_name:userName,
    last_seen_at:new Date().toISOString()
  })),"username");
  const usersByName=new Map(users.map((user)=>[user.username,user]));

  const tradeRows=await upsertRows("trades",(localMarket.trades||[]).map((trade)=>buildTradeRow(trade,localMarket,marketContext,usersByName)).filter(Boolean),"id");
  const tradeIdsByLocalId=new Map((tradeRows||[]).map((row)=>[row.id,row.id]));
  await Promise.all([
    upsertRows("matched_pairs",(localMarket.matchedPairs||[]).map((pair)=>buildMatchedPairRow(pair,marketContext,usersByName)).filter(Boolean),"id"),
    syncMarketHoldings(localMarket,marketContext,usersByName),
    syncWalletLedger(targetState,marketContext.round.id,usersByName,tradeIdsByLocalId,{
      marketId:localMarket.id,
      userNames
    }),
    upsertRows("wallet_snapshots",userNames.map((userName)=>{
      const user=usersByName.get(userName);
      if(!user){
        return null;
      }
      return {
        user_id:user.id,
        username:userName,
        current_balance:Number(targetState?.bankrolls?.[userName])||0
      };
    }).filter(Boolean),"user_id"),
    supabaseRequest("weekly_player_markets",{
      method:"PATCH",
      query:{id:`eq.${marketContext.market.id}`},
      headers:{Prefer:"return=minimal"},
      body:{
        current_line:Number(localMarket.currentLine)||0,
        over_stake_total:Number(localMarket.totalOverStake)||0,
        under_stake_total:Number(localMarket.totalUnderStake)||0,
        market_status:localMarket.settlement?"RESOLVED":localMarket.manuallyLocked?"LOCKED":"OPEN",
        final_fantasy_score:Number.isFinite(Number(localMarket.settlement?.finalScore))?Number(localMarket.settlement.finalScore):null,
        settled_at:localMarket.settlement?.settledAt||null,
        locked_at:localMarket.manuallyLocked?(localMarket.settlement?.settledAt||new Date().toISOString()):null,
        manual_override:Boolean(localMarket.manuallyLocked)
      }
    })
  ]);

  cachedContext.marketsByLocalId.set(localMarket.id,{
    ...marketContext,
    market:{
      ...marketContext.market,
      current_line:Number(localMarket.currentLine)||0,
      over_stake_total:Number(localMarket.totalOverStake)||0,
      under_stake_total:Number(localMarket.totalUnderStake)||0,
      market_status:localMarket.settlement?"RESOLVED":localMarket.manuallyLocked?"LOCKED":"OPEN",
      final_fantasy_score:Number.isFinite(Number(localMarket.settlement?.finalScore))?Number(localMarket.settlement.finalScore):null,
      settled_at:localMarket.settlement?.settledAt||null,
      locked_at:localMarket.manuallyLocked?(localMarket.settlement?.settledAt||new Date().toISOString()):null,
      manual_override:Boolean(localMarket.manuallyLocked)
    }
  });

  return {
    tradeCount:(localMarket.trades||[]).length,
    matchedPairCount:(localMarket.matchedPairs||[]).length,
    walletCount:userNames.length
  };
}

async function syncWalletLedger(targetState,roundId,usersByName,tradeIdsByLocalId,options={}){
  const relevantUserNames=new Set((options.userNames||[]).filter(Boolean));
  const relevantTradeIds=new Set((tradeIdsByLocalId&&typeof tradeIdsByLocalId.keys==="function")?[...tradeIdsByLocalId.keys()]:[]);
  const marketId=options.marketId||null;
  const ledgerRows=(targetState?.walletTransactions||[])
    .filter((transaction)=>{
      if(!transaction){
        return false;
      }
      if(relevantUserNames.size&&transaction.userName&&!relevantUserNames.has(transaction.userName)){
        return false;
      }
      if(marketId&&transaction.marketId===marketId){
        return true;
      }
      if(transaction.tradeId&&relevantTradeIds.has(transaction.tradeId)){
        return true;
      }
      return false;
    })
    .map((transaction)=>buildLedgerRow(transaction,roundId,usersByName,tradeIdsByLocalId))
    .filter(Boolean);
  if(!ledgerRows.length){
    return;
  }
  const dedupedRows=new Map();
  ledgerRows.forEach((row,index)=>{
    const key=row.external_ledger_key||`__no_key__${index}`;
    dedupedRows.set(key,row);
  });
  const uniqueRows=[...dedupedRows.values()];
  const keys=[...new Set(uniqueRows.map((row)=>row.external_ledger_key).filter(Boolean))];
  const existingRows=keys.length
    ? await supabaseRequest("wallet_ledger",{
      query:{
        select:"id,external_ledger_key",
        external_ledger_key:`in.(${keys.map((key)=>`"${String(key).replace(/"/g,'\\"')}"`).join(",")})`
      }
    })
    : [];
  const existingByKey=new Map((existingRows||[]).map((row)=>[row.external_ledger_key,row]));
  for(const row of uniqueRows){
    const existing=row.external_ledger_key?existingByKey.get(row.external_ledger_key):null;
    if(existing?.id){
      await supabaseRequest("wallet_ledger",{
        method:"PATCH",
        query:{id:`eq.${existing.id}`},
        headers:{Prefer:"return=minimal"},
        body:row
      });
    }else{
      await supabaseRequest("wallet_ledger",{
        method:"POST",
        headers:{Prefer:"return=minimal"},
        body:row
      });
    }
  }
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

async function syncMarketHoldings(localMarket,marketContext,usersByName){
  const existingHoldings=await supabaseRequest("holdings",{
    query:{
      select:"id,user_id,side",
      market_id:`eq.${marketContext.market.id}`
    }
  });
  const desiredHoldings=buildMarketHoldings(localMarket,marketContext,usersByName);
  const existingByKey=new Map((existingHoldings||[]).map((holding)=>[`${holding.user_id}:${holding.side}`,holding]));
  const desiredKeys=new Set(desiredHoldings.map((holding)=>`${holding.user_id}:${holding.side}`));
  const staleIds=(existingHoldings||[])
    .filter((holding)=>!desiredKeys.has(`${holding.user_id}:${holding.side}`))
    .map((holding)=>holding.id);

  if(desiredHoldings.length){
    for(const holding of desiredHoldings){
      const existing=existingByKey.get(`${holding.user_id}:${holding.side}`);
      if(existing?.id){
        await supabaseRequest("holdings",{
          method:"PATCH",
          query:{id:`eq.${existing.id}`},
          headers:{Prefer:"return=minimal"},
          body:holding
        });
      }else{
        await supabaseRequest("holdings",{
          method:"POST",
          headers:{Prefer:"return=minimal"},
          body:holding
        });
      }
    }
  }
  if(staleIds.length){
    await supabaseRequest("holdings",{
      method:"DELETE",
      query:{id:`in.(${staleIds.join(",")})`},
      headers:{Prefer:"return=minimal"}
    });
  }
}

function buildMarketHoldings(localMarket,marketContext,usersByName){
  const holdings=new Map();
  (localMarket.trades||[]).forEach((trade)=>{
    if(trade.result||!(Number(trade.matchedStake)>0)){
      return;
    }
    const user=usersByName.get(trade.userName);
    if(!user){
      return;
    }
    const key=`${user.id}:${trade.side}`;
    const current=holdings.get(key)||{
      user_id:user.id,
      round_id:marketContext.round.id,
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
  return [...holdings.values()].map((holding)=>({
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
}

function buildTradeRow(trade,localMarket,marketContext,usersByName){
  const user=usersByName.get(trade.userName);
  if(!user){
    return null;
  }
  return {
    id:trade.id,
    user_id:user.id,
    market_id:marketContext.market.id,
    round_id:marketContext.round.id,
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
    settled_at:trade.result?localMarket?.settlement?.settledAt||trade.timestamp||new Date().toISOString():null,
    status:trade.status||"PENDING",
    matched_stake:Number(trade.matchedStake)||0,
    unmatched_stake:Number(trade.unmatchedStake)||0,
    refunded_stake:Number(trade.refundedStake)||0,
    engine_version:trade.engineVersion||null
  };
}

function buildMatchedPairRow(pair,marketContext,usersByName){
  const overUser=usersByName.get(pair.overUserName);
  const underUser=usersByName.get(pair.underUserName);
  if(!overUser||!underUser){
    return null;
  }
  return {
    id:pair.id,
    market_id:marketContext.market.id,
    round_id:marketContext.round.id,
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
  };
}

function buildLedgerRow(transaction,roundId,usersByName,tradeIdsByLocalId){
  const user=usersByName.get(transaction?.userName);
  if(!user){
    return null;
  }
  const entryType=mapWalletEntryType(transaction?.type);
  if(!entryType){
    return null;
  }
  return {
    user_id:user.id,
    round_id:roundId||null,
    trade_id:transaction?.tradeId&&tradeIdsByLocalId.has(transaction.tradeId)?tradeIdsByLocalId.get(transaction.tradeId):null,
    entry_type:entryType,
    amount:Number(transaction?.amount)||0,
    balance_after:Number(transaction?.balanceAfter)||0,
    note:transaction?.subtitle||transaction?.title||"",
    created_at:transaction?.createdAt||new Date().toISOString(),
    external_ledger_key:transaction?.id||null
  };
}

function mapWalletEntryType(type){
  switch(String(type||"").toUpperCase()){
    case "TRADE_STAKE":
    case "TRADE_MATCH":
      return "TRADE_STAKE";
    case "TRADE_REFUND":
      return "SETTLEMENT_REFUND";
    case "TRADE_SETTLEMENT_WIN":
      return "SETTLEMENT_PAYOUT";
    case "DEPOSIT":
    case "PRIZE_POOL_ENTRY":
    case "PRIZE_POOL_PAYOUT":
      return "ADMIN_ADJUSTMENT";
    default:
      return null;
  }
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
  const dedupedRows=dedupeRowsByConflict(rows,conflict);
  return supabaseRequest(resource,{
    method:"POST",
    query:{
      on_conflict:conflict,
      select:"*"
    },
    headers:{Prefer:"return=representation,resolution=merge-duplicates"},
    body:dedupedRows
  });
}

function dedupeRowsByConflict(rows,conflict){
  const conflictKeys=String(conflict||"")
    .split(",")
    .map((value)=>value.trim())
    .filter(Boolean);
  if(!conflictKeys.length){
    return rows;
  }
  const uniqueRows=new Map();
  rows.forEach((row)=>{
    const key=conflictKeys.map((field)=>String(row?.[field]??"")).join("::");
    uniqueRows.set(key,row);
  });
  return [...uniqueRows.values()];
}

function playerSlug(market){
  return slugify(`${market.playerName}-${normalizeTeamName(market.team)}`);
}

function normalizeTeamName(team){
  return team==="Tigers"?"Wests Tigers":team;
}

function parseRoundNumber(label){
  const match=String(label||"").match(/round\s+(\d+)/i);
  return match?Number(match[1]):null;
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
  persistSupabaseMarketState,
  persistSupabaseTrade
};
