const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const SUPABASE_SCHEMA = process.env.SUPABASE_SCHEMA || "public";
const SUPABASE_REQUEST_TIMEOUT_MS = Math.max(8000, Number(process.env.SUPABASE_REQUEST_TIMEOUT_MS) || 20000);
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

function getLocalSupabaseSafetyError() {
  if (isHostedEnvironment()) return "";
  if (isSupabaseConfigured()) return "";
  if (USE_SUPABASE) {
    return "USE_SUPABASE is enabled but Supabase credentials are missing. Falling back to local file-backed state.";
  }
  return "";
}

module.exports = {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_SCHEMA,
  SUPABASE_REQUEST_TIMEOUT_MS,
  USE_SUPABASE,
  getLocalSupabaseSafetyError,
  isSupabaseConfigured,
  isHostedEnvironment,
  isSupabaseEnabled
};
