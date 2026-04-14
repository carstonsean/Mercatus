const fs=require("fs");
const path=require("path");
const crypto=require("crypto");
const {ROOT_DIR,DEPLOY_DIR,RELEASE_FILES}=require("./release-manifest");

function fileHash(filePath){
  let lastError=null;
  for(let attempt=0;attempt<5;attempt+=1){
    try{
      return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
    }catch(error){
      lastError=error;
      if(error?.code!=="EBUSY"){
        throw error;
      }
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,50);
    }
  }
  throw lastError;
}

function auditFile(relativePath){
  const rootPath=path.join(ROOT_DIR,relativePath);
  const deployPath=path.join(DEPLOY_DIR,relativePath);
  if(!fs.existsSync(rootPath)){
    return {file:relativePath,status:"missing_root"};
  }
  if(!fs.existsSync(deployPath)){
    return {file:relativePath,status:"missing_deploy"};
  }
  const rootHash=fileHash(rootPath);
  const deployHash=fileHash(deployPath);
  return {
    file:relativePath,
    status:rootHash===deployHash?"match":"mismatch",
    rootHash,
    deployHash
  };
}

function main(){
  const results=RELEASE_FILES.map(auditFile);
  const mismatches=results.filter((entry)=>entry.status!=="match");
  const summary={
    deployDir:DEPLOY_DIR,
    total:results.length,
    mismatches:mismatches.length,
    results:mismatches
  };
  console.log(JSON.stringify(summary,null,2));
  if(mismatches.length){
    process.exitCode=1;
  }
}

main();
