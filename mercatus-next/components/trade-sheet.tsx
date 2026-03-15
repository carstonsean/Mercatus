"use client";

import { useState } from "react";
import { getMarketSummary, useDemoState } from "@/lib/demo-state";
import type { Side } from "@/lib/models";
import { formatMoney } from "@/components/common";

export function TradeSheet({ marketId }: { marketId: string }) {
  const { state, createOrder } = useDemoState();
  const summary = getMarketSummary(state, marketId);
  const [side, setSide] = useState<Side>("OVER");
  const [stake, setStake] = useState(10);
  const pendingOpposite = state.orders
    .filter((order) => order.marketId === marketId && order.side !== side && (order.status === "PENDING" || order.status === "PARTIALLY_MATCHED"))
    .reduce((sum, order) => sum + order.unmatchedStake, 0);

  return (
    <div className="rounded-[22px] border border-accent/25 bg-panelSoft p-4 shadow-panel">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{summary.player.position} · {summary.team.shortName}</p>
          <h4 className="mt-1 text-lg font-semibold">{summary.player.name}</h4>
        </div>
        <div className="text-right">
          <div className="text-5xl font-bold tracking-[-0.06em]">{summary.lines.midpoint.toFixed(1)}</div>
          <div className="text-xs uppercase tracking-[0.15em] text-muted">Midpoint</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button type="button" onClick={() => setSide("OVER")} className={`rounded-[20px] border px-4 py-4 text-left ${side === "OVER" ? "border-gain bg-gain/10" : "border-white/10 bg-white/5"}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Over</span>
          <strong className="mt-2 block text-2xl font-semibold">{summary.lines.over.toFixed(1)}</strong>
        </button>
        <button type="button" onClick={() => setSide("UNDER")} className={`rounded-[20px] border px-4 py-4 text-left ${side === "UNDER" ? "border-loss bg-loss/10" : "border-white/10 bg-white/5"}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Under</span>
          <strong className="mt-2 block text-2xl font-semibold">{summary.lines.under.toFixed(1)}</strong>
        </button>
      </div>
      <div className="mt-4 flex gap-2">
        {[5, 10, 25].map((amount) => (
          <button key={amount} type="button" onClick={() => setStake((current) => current + amount)} className="h-10 rounded-full border border-white/10 bg-white/5 px-4 text-sm font-semibold">
            +{amount}
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] gap-3">
        <input type="number" min={1} value={stake} onChange={(event) => setStake(Number(event.target.value))} className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none" />
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
          <div className="text-[11px] uppercase tracking-[0.15em] text-muted">Potential return</div>
          <strong className="mt-1 block text-base font-semibold">{formatMoney(stake * 2)}</strong>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-sm text-slate-300">
        <p>Spread: Under {summary.lines.under.toFixed(1)} / Over {summary.lines.over.toFixed(1)}</p>
        <p>Available opposite liquidity: {formatMoney(pendingOpposite)}</p>
        <p>Unmatched size stays pending until another user takes the other side or you cancel it.</p>
      </div>
      <button type="button" onClick={() => createOrder(marketId, side, stake)} className="mt-5 h-12 w-full rounded-2xl bg-white text-base font-semibold text-ink">
        Place {side === "OVER" ? "Over" : "Under"} order
      </button>
    </div>
  );
}
