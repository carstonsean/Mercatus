"use client";

import { EmptyState, Section, SummaryCard, formatMoney } from "@/components/common";
import { describePair, getMarketSummary, getPortfolioData, useCurrentUser, useDemoState } from "@/lib/demo-state";

export function PortfolioTab() {
  const { state, cancelUserOrder } = useDemoState();
  const user = useCurrentUser();
  if (!user) return null;
  const portfolio = getPortfolioData(state, user.id);

  return (
    <div className="space-y-5 px-4 pb-28 pt-4">
      <div className="grid grid-cols-2 gap-3">
        <SummaryCard label="Balance" value={formatMoney(portfolio.balance)} />
        <SummaryCard label="Open positions" value={String(portfolio.openPairs.length)} />
        <SummaryCard label="Pending orders" value={String(portfolio.pendingOrders.length)} />
        <SummaryCard label="Win rate" value={`${portfolio.winRate}%`} />
      </div>

      <Section title="Pending unmatched orders">
        <div className="space-y-3">
          {portfolio.pendingOrders.length ? portfolio.pendingOrders.map((order) => {
            const summary = getMarketSummary(state, order.marketId);
            return (
              <article key={order.id} className="rounded-[22px] border border-white/8 bg-panel p-4 shadow-panel">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <strong className="block text-base font-semibold">{summary.player.name}</strong>
                    <span className="mt-1 block text-sm text-muted">{order.side} {order.side === "OVER" ? order.entryOverLine.toFixed(1) : order.entryUnderLine.toFixed(1)}</span>
                  </div>
                  <button type="button" onClick={() => cancelUserOrder(order.id)} className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-muted">
                    Cancel
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
                  <span>Matched {formatMoney(order.matchedStake)}</span>
                  <span>Pending {formatMoney(order.unmatchedStake)}</span>
                </div>
              </article>
            );
          }) : <EmptyState text="No pending orders. Unmatched orders will show here." />}
        </div>
      </Section>

      <Section title="Open matched positions">
        <div className="space-y-3">
          {portfolio.openPairs.length ? portfolio.openPairs.map((pair) => (
            <article key={pair.id} className="rounded-[22px] border border-white/8 bg-panel p-4 shadow-panel">
              <strong className="block text-base font-semibold">{describePair(state, pair, user.id)}</strong>
              <div className="mt-2 flex items-center justify-between text-sm text-muted">
                <span>Matched pot {formatMoney(pair.stake * 2)}</span>
                <span>{new Date(pair.createdAt).toLocaleDateString()}</span>
              </div>
            </article>
          )) : <EmptyState text="No open matched positions yet." />}
        </div>
      </Section>

      <Section title="Settled positions">
        <div className="space-y-3">
          {portfolio.settledPairs.length ? portfolio.settledPairs.map((pair) => {
            const platformWin = !pair.winnerUserId;
            const won = pair.winnerUserId === user.id;
            return (
              <article key={pair.id} className="rounded-[22px] border border-white/8 bg-panel p-4 shadow-panel">
                <strong className="block text-base font-semibold">{describePair(state, pair, user.id)}</strong>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className={platformWin ? "text-muted" : won ? "text-gain" : "text-loss"}>
                    {platformWin ? "Landed in the spread" : won ? `Won ${formatMoney(pair.stake)}` : `Lost ${formatMoney(pair.stake)}`}
                  </span>
                  <span className="text-muted">Settled</span>
                </div>
              </article>
            );
          }) : <EmptyState text="Settled positions will appear after admin resolution." />}
        </div>
      </Section>
    </div>
  );
}
