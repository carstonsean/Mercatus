"use client";

import { SummaryCard, formatMoney } from "@/components/common";
import { getPortfolioData, useCurrentUser, useDemoState } from "@/lib/demo-state";

export function ProfileTab() {
  const { state, logout } = useDemoState();
  const user = useCurrentUser();
  if (!user) return null;
  const portfolio = getPortfolioData(state, user.id);

  return (
    <div className="space-y-5 px-4 pb-28 pt-4">
      <div className="rounded-[24px] border border-white/8 bg-panel p-5 shadow-panel">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Demo account</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">{user.username}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">Username-only access for the MVP. Real auth, live imports, and official data scraping can be layered in later.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <SummaryCard label="Cash balance" value={formatMoney(portfolio.balance)} />
        <SummaryCard label="Reserved" value={formatMoney(portfolio.reservedCash)} />
      </div>
      <button type="button" onClick={logout} className="h-12 w-full rounded-2xl border border-white/10 bg-panel text-base font-semibold text-white">
        Log out
      </button>
    </div>
  );
}
