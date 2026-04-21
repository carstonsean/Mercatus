const {supabaseRequest}=require("./supabase");
const {isSupabaseConfigured}=require("./config");

const RUNTIME_STATE_ID="primary";

async function fetchSupabaseRuntimeState(){
  if(!isSupabaseConfigured()){
    return null;
  }
  const rows=await supabaseRequest("app_runtime_state",{
    query:{
      select:"state,updated_at",
      id:`eq.${RUNTIME_STATE_ID}`,
      limit:1
    }
  });
  return rows?.[0]?.state||null;
}

async function persistSupabaseRuntimeState(state){
  if(!isSupabaseConfigured()){
    return null;
  }
  await upsertRows("app_runtime_state",[{
    id:RUNTIME_STATE_ID,
    state:buildRuntimeOverlay(state)
  }],"id");

  return {
    shareSessionCount:Array.isArray(state?.shareSessions)?state.shareSessions.length:0,
    walletTransactionCount:Array.isArray(state?.walletTransactions)?state.walletTransactions.length:0
  };
}

function buildRuntimeOverlay(state){
  const botSimulation=state?.botSimulation&&typeof state.botSimulation==="object"
    ? {
      ...state.botSimulation,
      config:state.botSimulation.config&&typeof state.botSimulation.config==="object"
        ? {
          ...state.botSimulation.config,
          logs:Array.isArray(state.botSimulation.config.logs)
            ? state.botSimulation.config.logs.slice(0,40)
            : []
        }
        : state.botSimulation.config
    }
    : state?.botSimulation;
  return {
    activeRoundNumber:state?.activeRoundNumber,
    activeRoundLabel:state?.activeRoundLabel,
    forceOpenGameIds:Array.isArray(state?.forceOpenGameIds)?state.forceOpenGameIds:[],
    walletTransactions:Array.isArray(state?.walletTransactions)?state.walletTransactions:[],
    contactMessages:Array.isArray(state?.contactMessages)?state.contactMessages:[],
    affiliateReferrals:Array.isArray(state?.affiliateReferrals)?state.affiliateReferrals:[],
    shareSessions:Array.isArray(state?.shareSessions)?state.shareSessions:[],
    lastSettlementBatch:state?.lastSettlementBatch||null,
    roundMetricsHistory:Array.isArray(state?.roundMetricsHistory)?state.roundMetricsHistory:[],
    prizePool:state?.prizePool||null,
    botSimulation
  };
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

module.exports={
  fetchSupabaseRuntimeState,
  persistSupabaseRuntimeState
};
