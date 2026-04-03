const baseUrl=(process.argv[2]||process.env.SMOKE_BASE_URL||"http://127.0.0.1:8000").replace(/\/$/,"");

async function fetchText(pathname){
  const response=await fetch(`${baseUrl}${pathname}`);
  const text=await response.text();
  return {ok:response.ok,status:response.status,text};
}

async function fetchJson(pathname,body){
  const response=await fetch(`${baseUrl}${pathname}`,{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(body)
  });
  const text=await response.text();
  let json=null;
  try{
    json=JSON.parse(text);
  }catch(error){
    json=null;
  }
  return {ok:response.ok,status:response.status,json,text};
}

async function run(){
  const failures=[];
  const index=await fetchText("/");
  const session=await fetchJson("/api/session",{userName:""});
  const buildId=session.json?.build?.id||null;
  const assetVersion=buildId ? `?v=${encodeURIComponent(buildId)}` : "";
  const css=await fetchText(`/styles.css${assetVersion}`);
  const onboarding=await fetchText(`/lib/onboarding-modal.js${assetVersion}`);

  const checks=[
    ["GET / returns 200",index.ok],
    ["index contains header menu button",/header-menu-button/.test(index.text)],
    ["index loads versioned stylesheet",new RegExp(`styles\\.css\\?v=${escapeRegExp(buildId||"")}`).test(index.text)],
    ["index loads versioned onboarding bundle",new RegExp(`lib/onboarding-modal\\.js\\?v=${escapeRegExp(buildId||"")}`).test(index.text)],
    ["styles contain app chrome host",/\.app-chrome-host/.test(css.text)],
    ["styles contain app menu panel",/\.app-menu-panel/.test(css.text)],
    ["styles contain app modal shell",/\.app-modal-shell/.test(css.text)],
    ["onboarding contains new numbered title",/1\. The crowd sets the projection\./.test(onboarding.text)],
    ["onboarding contains 'How to win'",/3\. How to win\./.test(onboarding.text)],
    ["onboarding contains pm overlay",/pm-overlay/.test(onboarding.text)],
    ["POST /api/session returns 200",session.ok],
    ["session exposes active round number",Number.isFinite(Number(session.json?.state?.activeRoundNumber))],
    ["session exposes build id",Boolean(session.json?.build?.id)]
  ];

  for(const [label,passed] of checks){
    if(!passed){
      failures.push(label);
    }
  }

  const summary={
    baseUrl,
    buildId,
    activeRoundNumber:session.json?.state?.activeRoundNumber||null,
    failures
  };

  console.log(JSON.stringify(summary,null,2));

  if(failures.length){
    process.exitCode=1;
  }
}

run().catch((error)=>{
  console.error(JSON.stringify({baseUrl,error:error.message},null,2));
  process.exit(1);
});

function escapeRegExp(value){
  return String(value).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
}
