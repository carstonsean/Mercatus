const {supabaseRequest}=require("./supabase");
const {isSupabaseConfigured}=require("./config");

const ACTIVE_ROUND_SETTINGS_ID="primary";

function isMissingTableError(error){
  const message=String(error?.message||"");
  return /relation .*active_round_settings.* does not exist/i.test(message)
    || /Could not find the table 'public\.active_round_settings' in the schema cache/i.test(message);
}

async function fetchSupabaseActiveRoundSetting(){
  if(!isSupabaseConfigured()){
    return null;
  }
  try{
    const rows=await supabaseRequest("active_round_settings",{
      query:{
        select:"id,active_round_number,updated_at",
        id:`eq.${ACTIVE_ROUND_SETTINGS_ID}`,
        limit:1
      }
    });
    const row=rows?.[0]||null;
    if(!row){
      return null;
    }
    return {
      id:row.id,
      activeRoundNumber:Number(row.active_round_number),
      updatedAt:row.updated_at||null
    };
  }catch(error){
    if(isMissingTableError(error)){
      return null;
    }
    throw error;
  }
}

async function persistSupabaseActiveRoundSetting(activeRoundNumber){
  if(!isSupabaseConfigured()){
    return null;
  }
  try{
    const rows=await supabaseRequest("active_round_settings",{
      method:"POST",
      query:{
        on_conflict:"id",
        select:"id,active_round_number,updated_at"
      },
      headers:{Prefer:"return=representation,resolution=merge-duplicates"},
      body:{
        id:ACTIVE_ROUND_SETTINGS_ID,
        active_round_number:Number(activeRoundNumber)
      }
    });
    const row=rows?.[0]||null;
    return row?{
      id:row.id,
      activeRoundNumber:Number(row.active_round_number),
      updatedAt:row.updated_at||null
    }:null;
  }catch(error){
    if(isMissingTableError(error)){
      return null;
    }
    throw error;
  }
}

module.exports={
  ACTIVE_ROUND_SETTINGS_ID,
  fetchSupabaseActiveRoundSetting,
  persistSupabaseActiveRoundSetting
};
