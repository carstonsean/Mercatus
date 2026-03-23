"use client";

import { EmptyState, Section, SummaryCard, formatMoney } from "@/components/common";
import { describePair, getLeaderboardRows, useDemoState } from "@/lib/demo-state";

export function LeaderboardTab() {
  const { state } = useDemoState();
  const rows = getLeaderboardRows(state);

  return (
    <div className="space-y-5 px-4 pb-28 pt-4">
      <div className="grid grid-cols-2 gap-3">
        <SummaryCard label="Leader" value={rows[0]?.user.username ?? "Casey"} />
        <SummaryCard label="Top balance" value={rows[0] ? formatMoney(rows[0].balance) : "$100"} />
        <SummaryCard label="Most trades" value={String(Math.max(0, ...rows.map((row) => row.tradesCount), 0))} />
        <SummaryCard label="Best win rate" value={`${Math.max(0, ...rows.map((row) => row.winRate), 0)}%`} />
      </div>
      <Section title="Top Mercatus traders">
        <div className="space-y-3">
          {rows.length ? rows.map((row, index) => (
            <article key={row.user.id} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-[22px] border border-white/8 bg-panel px-4 py-4 shadow-panel">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold">{index + 1}</div>
              <div className="min-w-0">
                <strong className="block truncate text-base font-semibold">{row.user.username}</strong>
                <span className="mt-1 block text-sm text-muted">{row.tradesCount} trades · {row.winRate}% win rate</span>
                <span className="mt-1 block truncate text-xs text-slate-400">{row.largestPosition ? describePair(state, row.largestPosition, row.user.id) : "No open matched position"}</span>
              </div>
              <div className="text-right">
                <strong className="block text-lg font-semibold">{formatMoney(row.balance)}</strong>
                <span className={`mt-1 block text-sm ${row.realizedPnL > 0 ? "text-gain" : row.realizedPnL < 0 ? "text-loss" : "text-muted"}`}>
                  {row.realizedPnL >= 0 ? "+" : ""}{formatMoney(row.realizedPnL)}
                </span>
              </div>
            </article>
          )) : <EmptyState text="No traders have placed a position yet." />}
        </div>
      </Section>
    </div>
  );
}
