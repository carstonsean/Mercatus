const fs=require("fs");
const path=require("path");

require("../lib/load-env");

const {persistSupabaseRuntimeState}=require("../lib/supabase-runtime-state");
const {isSupabaseConfigured,getLocalSupabaseSafetyError}=require("../lib/config");

const STATE_PATH=path.resolve(process.argv[2]||path.join(__dirname,"..","server-state.json"));

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
  await persistSupabaseRuntimeState(state);
  console.log(`Runtime snapshot synced from ${STATE_PATH}`);
}

main().catch((error)=>{
  console.error(error.message||error);
  process.exitCode=1;
});
