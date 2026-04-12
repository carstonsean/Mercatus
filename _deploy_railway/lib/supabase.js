const {SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY,SUPABASE_SCHEMA,SUPABASE_REQUEST_TIMEOUT_MS,isSupabaseConfigured}=require("./config");

async function supabaseRequest(resource,{method="GET",query={},body,headers={}}={}){
  if(!isSupabaseConfigured()){
    throw new Error("Supabase is not configured.");
  }
  const controller=new AbortController();
  const timeoutId=setTimeout(()=>controller.abort(),SUPABASE_REQUEST_TIMEOUT_MS);
  const url=new URL(`${SUPABASE_URL}/rest/v1/${resource}`);
  Object.entries(query).forEach(([key,value])=>{
    if(value!==undefined&&value!==null&&value!==""){
      url.searchParams.set(key,String(value));
    }
  });
  try{
    const response=await fetch(url,{
      method,
      signal:controller.signal,
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
    clearTimeout(timeoutId);
    if(!response.ok){
      const errorText=await response.text();
      throw new Error(`Supabase request failed (${response.status}): ${errorText}`);
    }
    if(response.status===204){
      return null;
    }
    const text=await response.text();
    return text?JSON.parse(text):null;
  }catch(error){
    clearTimeout(timeoutId);
    throw error;
  }
}

async function supabaseRequestAll(resource,{method="GET",query={},body,headers={},pageSize=1000}={}){
  if(String(method||"GET").toUpperCase()!=="GET"){
    throw new Error("supabaseRequestAll only supports GET requests.");
  }
  const rows=[];
  let offset=0;
  while(true){
    const page=await supabaseRequest(resource,{
      method,
      query,
      body,
      headers:{
        "Range-Unit":"items",
        Range:`${offset}-${offset+pageSize-1}`,
        ...headers
      }
    });
    if(!Array.isArray(page)||!page.length){
      break;
    }
    rows.push(...page);
    if(page.length<pageSize){
      break;
    }
    offset+=pageSize;
  }
  return rows;
}

module.exports={supabaseRequest,supabaseRequestAll};
