const fs=require("fs");
const path=require("path");

const ENV_PATH=path.join(__dirname,"..",".env");

if(fs.existsSync(ENV_PATH)){
  const raw=fs.readFileSync(ENV_PATH,"utf8");
  raw.split(/\r?\n/).forEach((line)=>{
    const trimmed=line.trim();
    if(!trimmed||trimmed.startsWith("#")){
      return;
    }
    const separatorIndex=trimmed.indexOf("=");
    if(separatorIndex===-1){
      return;
    }
    const key=trimmed.slice(0,separatorIndex).trim();
    const value=trimmed.slice(separatorIndex+1).trim().replace(/^"|"$/g,"");
    if(key&&!process.env[key]){
      process.env[key]=value;
    }
  });
}
