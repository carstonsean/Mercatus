"use client";

import { getPortfolioData, useCurrentUser, useDemoState } from "@/lib/demo-state";
import type { TabId } from "@/lib/models";

export function formatMoney(value: number) {
  return `$${value.toFixed(0)}`;
}

export function LoginGate() {
  const { usernameDraft, setUsernameDraft, login, state } = useDemoState();
  if (state.currentUserId) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 py-8">
      <div className="w-full max-w-sm rounded-[28px] border border-white/10 bg-panel p-6 shadow-panel">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Projection market</p>
        <h1 className="mt-2 text-3xl font-bold tracking-[-0.05em]">Mercatus</h1>
        <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
          <h2 className="text-xl font-semibold text-white">Enter a username</h2>
          <p>Mercatus is a play-money market where users match Over and Under positions on weekly NRL Fantasy score spreads.</p>
          <p>The projection line shifts with demand, unmatched orders stay pending, and matched pairs settle against the official fantasy score.</p>
        </div>
        <div className="mt-5 space-y-3">
          <input
            value={usernameDraft}
            onChange={(event) => setUsernameDraft(event.target.value)}
            placeholder="Johnny"
            className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-base text-white outline-none transition focus:border-accent/50"
          />
          <button type="button" onClick={login} className="h-12 w-full rounded-2xl bg-white text-base font-semibold text-ink">
            Enter Mercatus
          </button>
        </div>
      </div>
    </div>
  );
}

export function Header({ title }: { title: string }) {
  const { state } = useDemoState();
  const user = useCurrentUser();
  const portfolio = user ? getPortfolioData(state, user.id) : null;

  return (
    <div className="sticky top-0 z-20 border-b border-white/5 bg-ink/85 px-4 pb-4 pt-5 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Mercatus</p>
          <h1 className="mt-2 text-[2rem] font-bold tracking-[-0.06em] text-white">{title}</h1>
        </div>
        <div className="rounded-full border border-white/10 bg-panel px-4 py-2 shadow-panel">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">Wallet</p>
          <strong className="mt-1 block text-sm font-semibold text-white">{portfolio ? formatMoney(portfolio.balance) : "$100"}</strong>
        </div>
      </div>
    </div>
  );
}

export function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-panel p-4 shadow-panel">
      <span className="text-[11px] uppercase tracking-[0.15em] text-muted">{label}</span>
      <strong className="mt-2 block text-xl font-semibold tracking-[-0.03em]">{value}</strong>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h3 className="text-lg font-semibold tracking-[-0.03em]">{title}</h3>
      {children}
    </section>
  );
}

export function EmptyState({ text }: { text: string }) {
  return <div className="rounded-[22px] border border-dashed border-white/10 bg-white/[0.03] px-4 py-6 text-sm text-muted">{text}</div>;
}

export function TabButton({ id, label }: { id: TabId; label: string }) {
  const { activeTab, setActiveTab } = useDemoState();
  const active = activeTab === id;
  return (
    <button type="button" onClick={() => setActiveTab(id)} className={`flex flex-1 flex-col items-center gap-2 rounded-2xl px-3 py-2 text-xs font-medium ${active ? "text-white" : "text-muted"}`}>
      <span className={`h-1.5 w-8 rounded-full ${active ? "bg-accent" : "bg-white/10"}`} />
      {label}
    </button>
  );
}
