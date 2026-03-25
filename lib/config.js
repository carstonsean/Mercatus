const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const SUPABASE_SCHEMA = process.env.SUPABASE_SCHEMA || "public";
const USE_SUPABASE = String(process.env.USE_SUPABASE || "").toLowerCase() === "true";

function isHostedEnvironment() {
  return Boolean(
    process.env.RAILWAY_ENVIRONMENT ||
    process.env.RAILWAY_PROJECT_ID ||
    process.env.RAILWAY_SERVICE_ID ||
    process.env.RAILWAY_STATIC_URL ||
    process.env.RENDER ||
    process.env.VERCEL ||
    process.env.FLY_APP_NAME
  );
}

function isSupabaseConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);
}

function isSupabaseEnabled() {
  if (!isSupabaseConfigured()) return false;
  return USE_SUPABASE || isHostedEnvironment();
}

module.exports = {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_SCHEMA,
  USE_SUPABASE,
  isSupabaseConfigured,
  isHostedEnvironment,
  isSupabaseEnabled
};
