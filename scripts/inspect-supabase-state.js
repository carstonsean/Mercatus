require("../lib/load-env");

const { supabaseRequest } = require("../lib/supabase");
const { SUPABASE_BRANCH_NAME, SUPABASE_ENVIRONMENT, isSupabaseConfigured, isSupabaseEnabled } = require("../lib/config");

async function countRows(resource, selectColumn) {
  const rows = await supabaseRequest(resource, {
    query: { select: selectColumn }
  });
  return Array.isArray(rows) ? rows.length : 0;
}

async function main() {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured.");
  }

  const summary = {
    supabaseEnabled: isSupabaseEnabled(),
    branch: SUPABASE_BRANCH_NAME || "(unset)",
    environment: SUPABASE_ENVIRONMENT || "(unset)"
  };

  summary.tables = {
    users: await countRows("users", "id"),
    weekly_player_markets: await countRows("weekly_player_markets", "id"),
    trades: await countRows("trades", "id"),
    matched_pairs: await countRows("matched_pairs", "id"),
    wallet_ledger: await countRows("wallet_ledger", "id"),
    wallet_snapshots: await countRows("wallet_snapshots", "user_id"),
    share_sessions: await countRows("share_sessions", "id"),
    app_runtime_state: await countRows("app_runtime_state", "id"),
    active_round_settings: await countRows("active_round_settings", "id").catch(() => 0)
  };

  const walletBalances = await supabaseRequest("wallet_balances", {
    query: { select: "username,current_balance" }
  }).catch(() => []);
  summary.walletBalances = {
    count: Array.isArray(walletBalances) ? walletBalances.length : 0,
    sample: Array.isArray(walletBalances) ? walletBalances.slice(0, 10) : []
  };

  const runtimeRows = await supabaseRequest("app_runtime_state", {
    query: {
      select: "id,state,updated_at",
      id: "eq.primary",
      limit: 1
    }
  });
  const runtimeRow = runtimeRows?.[0] || null;
  const runtimeState = runtimeRow?.state || {};
  summary.runtime = {
    present: Boolean(runtimeRow),
    updatedAt: runtimeRow?.updated_at || null,
    keys: Object.keys(runtimeState),
    walletTransactions: Array.isArray(runtimeState.walletTransactions) ? runtimeState.walletTransactions.length : 0,
    shareSessions: Array.isArray(runtimeState.shareSessions) ? runtimeState.shareSessions.length : 0,
    roundMetricsHistory: Array.isArray(runtimeState.roundMetricsHistory) ? runtimeState.roundMetricsHistory.length : 0,
    prizePoolRounds: runtimeState.prizePool?.rounds ? Object.keys(runtimeState.prizePool.rounds).length : 0,
    jsonBytes: Buffer.byteLength(JSON.stringify(runtimeState), "utf8")
  };

  const activeRoundRows = await supabaseRequest("active_round_settings", {
    query: {
      select: "id,active_round_number,updated_at",
      id: "eq.primary",
      limit: 1
    }
  }).catch(() => []);
  const activeRoundRow = activeRoundRows?.[0] || null;
  summary.activeRoundSetting = {
    present: Boolean(activeRoundRow),
    activeRoundNumber: activeRoundRow?.active_round_number ?? null,
    updatedAt: activeRoundRow?.updated_at || null
  };

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  console.error(error?.message || String(error));
  process.exit(1);
});
