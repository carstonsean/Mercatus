const {SUPABASE_URL,SUPABASE_SERVICE_ROLE_KEY,SUPABASE_SCHEMA,SUPABASE_REQUEST_TIMEOUT_MS,isSupabaseConfigured}=require("./config");
const SUPABASE_FETCH_RETRY_ATTEMPTS=Math.max(1,Number(process.env.SUPABASE_FETCH_RETRY_ATTEMPTS)||3);
const SUPABASE_FETCH_RETRY_DELAY_MS=Math.max(100,Number(process.env.SUPABASE_FETCH_RETRY_DELAY_MS)||300);

const RETRYABLE_FETCH_CODES=new Set(["EAI_AGAIN","ENOTFOUND","ECONNRESET","ETIMEDOUT","UND_ERR_CONNECT_TIMEOUT"]);

function sleep(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms));
}

function isRetryableFetchError(error){
  if(!error){
    return false;
  }
  if(error.name==="AbortError"){
    return true;
  }
  const message=String(error.message||"").toLowerCase();
  if(message.includes("fetch failed")||message.includes("network error")){
    return true;
  }
  const code=String(error.cause?.code||error.code||"").toUpperCase();
  return RETRYABLE_FETCH_CODES.has(code);
}

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
  let lastError=null;
  for(let attempt=1;attempt<=SUPABASE_FETCH_RETRY_ATTEMPTS;attempt+=1){
    const controller=new AbortController();
    const timeoutId=setTimeout(()=>controller.abort(),SUPABASE_REQUEST_TIMEOUT_MS);
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
      lastError=error;
      if(attempt>=SUPABASE_FETCH_RETRY_ATTEMPTS||!isRetryableFetchError(error)){
        const failureCode=String(error?.cause?.code||error?.code||"").toUpperCase();
        const failureDetail=failureCode||error.message||"Unknown fetch error";
        throw new Error(`Supabase fetch failed (${url.origin}): ${failureDetail}`);
      }
      await sleep(SUPABASE_FETCH_RETRY_DELAY_MS*attempt);
    }
  }
  throw lastError||new Error(`Supabase fetch failed (${url.origin})`);
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
