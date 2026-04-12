const path=require("path");

const ROOT_DIR=path.resolve(__dirname,"..");
const DEPLOY_DIR=path.join(ROOT_DIR,"_deploy_railway");

const RELEASE_FILES=[
  "app.js",
  "index.html",
  "styles.css",
  "server.js",
  "seed-data.js",
  "package.json",
  "package-lock.json",
  "railway.json",
  ".env.example",
  "README.md",
  "start-mercatus.ps1",
  "lib/derived-fantasy-data.js",
  "lib/onboarding-modal.js",
  "lib/load-env.js",
  "lib/config.js",
  "lib/bot-engine.js",
  "lib/supabase.js",
  "lib/supabase-dashboard.js",
  "lib/supabase-market-sync.js",
  "lib/supabase-runtime-state.js",
  "lib/supabase-state.js",
  "lib/supabase-users.js",
  "scripts/build-derived-fantasy-data.js",
  "scripts/audit-release.js",
  "scripts/import-fantasy-results.js",
  "scripts/migrate-state-to-supabase.js",
  "scripts/release-manifest.js",
  "scripts/smoke-release.js",
  "scripts/sync-deploy-bundle.js",
  "scripts/sync-runtime-to-supabase.js",
  "scripts/cron-import-scores.js"
];

module.exports={ROOT_DIR,DEPLOY_DIR,RELEASE_FILES};
