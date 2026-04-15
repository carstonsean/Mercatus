require("../lib/load-env");

const {supabaseRequestAll}=require("../lib/supabase");
const {fetchSupabaseRuntimeState}=require("../lib/supabase-runtime-state");
const {ensureSupabaseSeedData}=require("../lib/supabase-market-sync");
const {isSupabaseConfigured}=require("../lib/config");
const {fetchSupabaseActiveRoundSetting}=require("../lib/supabase-active-round");

async function main(){
  if(!isSupabaseConfigured()){
    throw new Error("Supabase is not configured.");
  }

  const runtimeState=await fetchSupabaseRuntimeState();
  const activeRoundSetting=await fetchSupabaseActiveRoundSetting();
  const context=await ensureSupabaseSeedData();
  const settingsActiveRoundNumber=Number(activeRoundSetting?.activeRoundNumber);
  const runtimeActiveRoundNumber=Number(runtimeState?.activeRoundNumber);
  const activeRoundNumber=Number.isFinite(settingsActiveRoundNumber)
    ? settingsActiveRoundNumber
    : runtimeActiveRoundNumber;
  const activeRound=context?.roundsByNumber?.get(activeRoundNumber)||null;
  const roundIds=[...((context?.roundsByNumber&&context.roundsByNumber.values())||[])].map((round)=>round.id).filter(Boolean);

  const [markets,trades,matchedPairs,walletBalances]=await Promise.all([
    roundIds.length
      ? supabaseRequestAll("weekly_player_markets",{
        query:{select:"id,round_id"}
      })
      : [],
    roundIds.length
      ? supabaseRequestAll("trades",{
        query:{select:"id,round_id"}
      })
      : [],
    roundIds.length
      ? supabaseRequestAll("matched_pairs",{
        query:{select:"id,round_id"}
      })
      : [],
    supabaseRequestAll("wallet_balances",{
      query:{select:"username,current_balance"}
    }).catch(()=>supabaseRequestAll("wallet_snapshots",{
      query:{select:"username,current_balance"}
    }))
  ]);

  const activeRoundId=activeRound?.id||null;
  const activeRoundMarketCount=activeRoundId ? markets.filter((market)=>market.round_id===activeRoundId).length : 0;
  const activeRoundTradeCount=activeRoundId ? trades.filter((trade)=>trade.round_id===activeRoundId).length : 0;
  const activeRoundMatchedPairCount=activeRoundId ? matchedPairs.filter((pair)=>pair.round_id===activeRoundId).length : 0;

  const summary={
    activeRoundSource:Number.isFinite(settingsActiveRoundNumber)?"settings":"runtime",
    configuredActiveRoundNumber:Number.isFinite(activeRoundNumber)?activeRoundNumber:null,
    settingsActiveRoundNumber:Number.isFinite(settingsActiveRoundNumber)?settingsActiveRoundNumber:null,
    runtimeActiveRoundNumber:Number.isFinite(runtimeActiveRoundNumber)?runtimeActiveRoundNumber:null,
    runtimeOverlayPresent:Boolean(runtimeState),
    activeRoundSettingPresent:Boolean(activeRoundSetting),
    roundCount:roundIds.length,
    totalMarketCount:markets.length,
    totalTradeCount:trades.length,
    totalMatchedPairCount:matchedPairs.length,
    walletBalanceCount:Array.isArray(walletBalances)?walletBalances.length:0,
    activeRoundMarketCount,
    activeRoundTradeCount,
    activeRoundMatchedPairCount,
    failures:[],
    warnings:[]
  };

  if(!runtimeState){
    summary.failures.push("Runtime overlay row is missing.");
  }
  if(!Number.isFinite(activeRoundNumber)){
    summary.failures.push("Active round is missing from both dedicated settings and runtime overlay.");
  }
  if(Number.isFinite(activeRoundNumber)&&!activeRound){
    summary.failures.push(`Runtime active round ${activeRoundNumber} is not mapped in seeded round metadata.`);
  }
  if(!activeRoundSetting){
    summary.warnings.push("Dedicated active round setting is missing; hosted round selection is falling back to runtime overlay.");
  }
  if(Number.isFinite(settingsActiveRoundNumber)&&Number.isFinite(runtimeActiveRoundNumber)&&settingsActiveRoundNumber!==runtimeActiveRoundNumber){
    summary.warnings.push(`Dedicated active round setting (${settingsActiveRoundNumber}) does not match runtime overlay (${runtimeActiveRoundNumber}).`);
  }
  if(activeRound&&activeRoundMarketCount===0){
    summary.failures.push(`No markets were found for active round ${activeRoundNumber}.`);
  }
  if(activeRound&&summary.totalTradeCount>0&&activeRoundTradeCount===0){
    summary.failures.push(`Active round ${activeRoundNumber} has zero trades while other rounds still have trades.`);
  }
  if(activeRound&&summary.totalMatchedPairCount>0&&activeRoundTradeCount>0&&activeRoundMatchedPairCount===0){
    summary.warnings.push(`Active round ${activeRoundNumber} has trades but zero matched pairs while other rounds still have matched pairs.`);
  }

  console.log(JSON.stringify(summary,null,2));
  if(summary.failures.length){
    process.exitCode=1;
  }
}

main().catch((error)=>{
  console.error(JSON.stringify({error:error.message||String(error)},null,2));
  process.exit(1);
});
