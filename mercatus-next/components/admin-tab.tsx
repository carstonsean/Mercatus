"use client";

import { Section } from "@/components/common";
import { getMarketSummary, useDemoState } from "@/lib/demo-state";
import { useState } from "react";

export function AdminTab() {
  const { state, resolveAdminMarket } = useDemoState();
  const [marketId, setMarketId] = useState(state.markets[0]?.id ?? "");
  const [finalScore, setFinalScore] = useState("50");

  return (
    <div className="space-y-5 px-4 pb-28 pt-4">
      <div className="rounded-[24px] border border-white/8 bg-panel p-5 shadow-panel">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Admin tools</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">Market controls</h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">Seed mock rounds, set opening midpoints, and resolve final fantasy scores manually in the MVP.</p>
      </div>
      <Section title="Resolve market">
        <div className="space-y-3 rounded-[22px] border border-white/8 bg-panel p-4 shadow-panel">
          <select value={marketId} onChange={(event) => setMarketId(event.target.value)} className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white">
            {state.markets.map((market) => {
              const summary = getMarketSummary(state, market.id);
              return (
                <option key={market.id} value={market.id}>
                  {summary.player.name} · {summary.game.title}
                </option>
              );
            })}
          </select>
          <input value={finalScore} onChange={(event) => setFinalScore(event.target.value)} className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white" />
          <button type="button" onClick={() => resolveAdminMarket(marketId, Number(finalScore))} className="h-12 w-full rounded-2xl bg-white text-base font-semibold text-ink">
            Resolve selected market
          </button>
        </div>
      </Section>
    </div>
  );
}
