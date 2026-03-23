"use client";

import { getMarketSummary, useDemoState } from "@/lib/demo-state";
import { Section } from "@/components/common";
import { TradeSheet } from "@/components/trade-sheet";

export function MatchCentre() {
  const { state, selectedGameId, selectedTeamId, setSelectedGameId, setSelectedTeamId, selectedMarketId, setSelectedMarketId } = useDemoState();
  const game = state.games.find((entry) => entry.id === selectedGameId)!;
  const teams = [state.teams.find((entry) => entry.id === game.homeTeamId)!, state.teams.find((entry) => entry.id === game.awayTeamId)!];
  const topProjectionMarkets = state.markets.filter((market) => market.gameId === selectedGameId).slice().sort((a, b) => b.currentMidpoint - a.currentMidpoint).slice(0, 5);
  const biggestMovers = state.markets.filter((market) => market.gameId === selectedGameId).slice().sort((a, b) => Math.abs(b.currentMidpoint - b.openingMidpoint) - Math.abs(a.currentMidpoint - a.openingMidpoint)).slice(0, 5);
  const visibleMarkets = state.markets.filter((market) => market.gameId === selectedGameId).filter((market) => getMarketSummary(state, market.id).player.teamId === selectedTeamId);

  return (
    <div className="space-y-6 px-4 pb-28 pt-4">
      <section className="rounded-[28px] border border-white/10 bg-panel p-5 shadow-panel">
        <div
          className="rounded-[24px] border border-white/10 p-5"
          style={{ background: `linear-gradient(145deg, ${teams[0].primary}2f, transparent 50%), linear-gradient(225deg, ${teams[1].secondary}30, transparent 55%), #10151f` }}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-200">Round 2</span>
            <span className="text-xs text-muted">{state.games.findIndex((entry) => entry.id === selectedGameId) + 1} of {state.games.length}</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{game.title}</h2>
          <p className="mt-2 text-sm text-slate-300">{game.kickoff}</p>
          <p className="mt-1 text-sm text-muted">{game.venue}</p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex gap-2">
              {state.games.map((fixture) => (
                <button key={fixture.id} type="button" onClick={() => setSelectedGameId(fixture.id)} className={`h-2 w-2 rounded-full ${fixture.id === selectedGameId ? "bg-white" : "bg-white/15"}`} />
              ))}
            </div>
            <span className="rounded-full bg-white/8 px-3 py-1 text-[11px] font-medium text-slate-300">Matched spread market</span>
          </div>
        </div>
      </section>

      <Section title="Top projections today">
        <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-1">
          {topProjectionMarkets.map((market) => {
            const summary = getMarketSummary(state, market.id);
            return (
              <button key={market.id} type="button" onClick={() => { setSelectedTeamId(summary.player.teamId); setSelectedMarketId(market.id); }} className="w-[220px] shrink-0 rounded-[22px] border border-white/8 bg-panel p-4 text-left shadow-panel">
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted">Projection</span>
                <strong className="mt-2 block text-base font-semibold">{summary.player.name}</strong>
                <span className="mt-1 block text-sm text-muted">{summary.player.position} · {summary.team.shortName}</span>
                <span className="mt-4 block text-3xl font-bold tracking-[-0.05em]">{summary.lines.midpoint.toFixed(1)}</span>
              </button>
            );
          })}
        </div>
      </Section>

      <Section title="Biggest movers">
        <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-1">
          {biggestMovers.map((market) => {
            const summary = getMarketSummary(state, market.id);
            const movementClass = summary.movement > 0 ? "text-gain" : summary.movement < 0 ? "text-loss" : "text-muted";
            return (
              <button key={market.id} type="button" onClick={() => { setSelectedTeamId(summary.player.teamId); setSelectedMarketId(market.id); }} className="w-[210px] shrink-0 rounded-[22px] border border-white/8 bg-panel p-4 text-left shadow-panel">
                <span className="text-[11px] uppercase tracking-[0.15em] text-muted">Momentum</span>
                <strong className="mt-2 block text-base font-semibold">{summary.player.name}</strong>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <span className="text-3xl font-bold tracking-[-0.05em]">{summary.lines.midpoint.toFixed(1)}</span>
                  <span className={`text-sm font-semibold ${movementClass}`}>{summary.movement > 0 ? "↑" : summary.movement < 0 ? "↓" : "→"} {Math.abs(summary.movement).toFixed(1)}</span>
                </div>
                <span className="mt-2 block text-sm text-muted">Avg {summary.player.seasonAverage.toFixed(1)}</span>
              </button>
            );
          })}
        </div>
      </Section>

      <section className="space-y-4">
        <div className="rounded-full border border-white/8 bg-panel p-1">
          <div className="grid grid-cols-2 gap-1">
            {teams.map((team) => (
              <button
                key={team.id}
                type="button"
                onClick={() => setSelectedTeamId(team.id)}
                className={`rounded-full px-4 py-3 text-sm font-semibold ${selectedTeamId === team.id ? "text-white shadow-panel" : "text-muted"}`}
                style={selectedTeamId === team.id ? { background: `linear-gradient(135deg, ${team.primary}, ${team.secondary}55)` } : undefined}
              >
                {team.shortName}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {visibleMarkets.map((market) => {
            const summary = getMarketSummary(state, market.id);
            const movementClass = summary.movement > 0 ? "text-gain" : summary.movement < 0 ? "text-loss" : "text-muted";
            return (
              <div key={market.id} className="space-y-2">
                <button type="button" onClick={() => setSelectedMarketId(selectedMarketId === market.id ? null : market.id)} className="grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 rounded-[22px] border border-white/8 bg-panel px-4 py-4 text-left shadow-panel">
                  <div className="min-w-0">
                    <strong className="block truncate text-base font-semibold">{summary.player.name}</strong>
                    <span className="mt-1 block text-sm text-muted">{summary.player.position} · Avg {summary.player.seasonAverage.toFixed(1)}</span>
                  </div>
                  <div className="text-right">
                    <strong className="block text-3xl font-bold tracking-[-0.05em]">{summary.lines.midpoint.toFixed(1)}</strong>
                    <span className={`mt-1 block text-sm font-semibold ${movementClass}`}>{summary.movement > 0 ? "↑" : summary.movement < 0 ? "↓" : "→"} {Math.abs(summary.movement).toFixed(1)}</span>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white/80">+</div>
                </button>
                {selectedMarketId === market.id ? <TradeSheet marketId={market.id} /> : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
