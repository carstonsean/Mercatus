const {SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY,SUPABASE_SCHEMA,isSupabaseConfigured}=require("./config");

async function supabaseRequest(resource,{method="GET",query={},body,headers={}}={}){
  if(!isSupabaseConfigured()){
    throw new Error("Supabase is not configured.");
  }
  const url=new URL(`${SUPABASE_URL}/rest/v1/${resource}`);
  Object.entries(query).forEach(([key,value])=>{
    if(value!==undefined&&value!==null&&value!==""){
      url.searchParams.set(key,String(value));
    }
  });
  const response=await fetch(url,{
    method,
    headers:{
      "Content-Type":"application/json",
      apikey:SUPABASE_SERVICE_ROLE_KEY,
      Authorization:`Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "Accept-Profile":SUPABASE_SCHEMA,
      "Content-Profile":SUPABASE_SCHEMA,
      ...headers
    },
    body:body?JSON.stringify(body):undefined
  });
  if(!response.ok){
    const errorText=await response.text();
    throw new Error(`Supabase request failed (${response.status}): ${errorText}`);
  }
  if(response.status===204){
    return null;
  }
  const text=await response.text();
  return text?JSON.parse(text):null;
}

module.exports={supabaseRequest};
