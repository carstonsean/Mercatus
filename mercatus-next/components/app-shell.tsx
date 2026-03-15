"use client";

import { DemoStateProvider, useDemoState } from "@/lib/demo-state";
import { Header, LoginGate, TabButton } from "@/components/common";
import { MatchCentre } from "@/components/match-centre";
import { PortfolioTab } from "@/components/portfolio-tab";
import { LeaderboardTab } from "@/components/leaderboard-tab";
import { ProfileTab } from "@/components/profile-tab";
import { AdminTab } from "@/components/admin-tab";
import type { TabId } from "@/lib/models";

function AppContent() {
  const { activeTab } = useDemoState();

  const titles: Record<TabId, string> = {
    markets: "Fantasy Markets",
    portfolio: "Portfolio",
    leaderboard: "Leaderboard",
    profile: "Profile",
    admin: "Admin"
  };

  const screens: Record<TabId, React.ReactNode> = {
    markets: <MatchCentre />,
    portfolio: <PortfolioTab />,
    leaderboard: <LeaderboardTab />,
    profile: <ProfileTab />,
    admin: <AdminTab />
  };

  return (
    <div className="mx-auto min-h-screen max-w-md bg-ink">
      <Header title={titles[activeTab]} />
      {screens[activeTab]}
      <nav className="fixed bottom-0 left-1/2 z-20 flex w-full max-w-md -translate-x-1/2 gap-1 border-t border-white/5 bg-ink/92 px-3 pb-6 pt-3 backdrop-blur">
        <TabButton id="markets" label="Markets" />
        <TabButton id="portfolio" label="Portfolio" />
        <TabButton id="leaderboard" label="Leaderboard" />
        <TabButton id="profile" label="Profile" />
        <TabButton id="admin" label="Admin" />
      </nav>
    </div>
  );
}

function ShellRouter() {
  const { state } = useDemoState();
  if (!state.currentUserId) {
    return <LoginGate />;
  }
  return <AppContent />;
}

export function PrototypeApp() {
  return (
    <DemoStateProvider>
      <ShellRouter />
    </DemoStateProvider>
  );
}
