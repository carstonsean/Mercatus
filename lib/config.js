const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const SUPABASE_SCHEMA = process.env.SUPABASE_SCHEMA || "public";
const SUPABASE_REQUEST_TIMEOUT_MS = Math.max(8000, Number(process.env.SUPABASE_REQUEST_TIMEOUT_MS) || 20000);
const USE_SUPABASE = String(process.env.USE_SUPABASE || "").toLowerCase() === "true";
const SUPABASE_ENVIRONMENT = String(process.env.SUPABASE_ENVIRONMENT || "").toLowerCase();
const SUPABASE_BRANCH_NAME = String(process.env.SUPABASE_BRANCH_NAME || "").trim();
const ALLOW_PRODUCTION_SUPABASE_LOCALLY = String(process.env.ALLOW_PRODUCTION_SUPABASE_LOCALLY || "").toLowerCase() === "true";

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

function isSafeLocalSupabaseTarget() {
  if (ALLOW_PRODUCTION_SUPABASE_LOCALLY) {
    return true;
  }
  return SUPABASE_ENVIRONMENT === "development";
}

function getLocalSupabaseSafetyError() {
  if (!isSupabaseConfigured() || !USE_SUPABASE || isHostedEnvironment()) {
    return "";
  }
  if (isSafeLocalSupabaseTarget()) {
    return "";
  }
  return "Local Supabase access is blocked because SUPABASE_ENVIRONMENT is not set to development. Point .env at the Supabase development branch and set SUPABASE_ENVIRONMENT=development before enabling USE_SUPABASE locally.";
}

function isSupabaseEnabled() {
  if (!isSupabaseConfigured()) return false;
  if (isHostedEnvironment()) return true;
  return USE_SUPABASE && isSafeLocalSupabaseTarget();
}

function shouldUseSupabaseLocally() {
  return isSupabaseConfigured() && USE_SUPABASE && isSafeLocalSupabaseTarget();
}

module.exports = {
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_SCHEMA,
  SUPABASE_REQUEST_TIMEOUT_MS,
  USE_SUPABASE,
  SUPABASE_ENVIRONMENT,
  SUPABASE_BRANCH_NAME,
  ALLOW_PRODUCTION_SUPABASE_LOCALLY,
  isSupabaseConfigured,
  isHostedEnvironment,
  isSupabaseEnabled,
  shouldUseSupabaseLocally,
  isSafeLocalSupabaseTarget,
  getLocalSupabaseSafetyError
};
