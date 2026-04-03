const fs=require("fs");
const path=require("path");
const {ROOT_DIR,DEPLOY_DIR,RELEASE_FILES}=require("./release-manifest");

function ensureDir(dirPath){
  fs.mkdirSync(dirPath,{recursive:true});
}

function syncFile(relativePath){
  const sourcePath=path.join(ROOT_DIR,relativePath);
  const targetPath=path.join(DEPLOY_DIR,relativePath);
  ensureDir(path.dirname(targetPath));
  fs.copyFileSync(sourcePath,targetPath);
  return relativePath;
}

function main(){
  const copied=RELEASE_FILES.map(syncFile);
  console.log(JSON.stringify({deployDir:DEPLOY_DIR,copiedCount:copied.length,copied},null,2));
}

main();
