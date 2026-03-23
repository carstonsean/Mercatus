"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { cancelOrder, getMarketLines, getPendingImbalance, getUserBalance, getUserReservedCash, placeOrder, resolveMarket } from "@/lib/matching-engine";
import type { DemoState, MatchedPair, Side, TabId } from "@/lib/models";
import { createInitialState } from "@/lib/seed-data";

interface DemoContextValue {
  state: DemoState;
  activeTab: TabId;
  selectedGameId: string;
  selectedTeamId: string;
  selectedMarketId: string | null;
  usernameDraft: string;
  setUsernameDraft: (value: string) => void;
  login: () => void;
  logout: () => void;
  setActiveTab: (value: TabId) => void;
  setSelectedGameId: (value: string) => void;
  setSelectedTeamId: (value: string) => void;
  setSelectedMarketId: (value: string | null) => void;
  createOrder: (marketId: string, side: Side, stake: number) => void;
  cancelUserOrder: (orderId: string) => void;
  resolveAdminMarket: (marketId: string, score: number) => void;
}

const DemoContext = createContext<DemoContextValue | null>(null);
const USERNAME_KEY = "mercatus-next-username";

function getStoredUserName() {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(USERNAME_KEY) ?? "";
}

function bootstrapState() {
  const initial = createInitialState();
  const stored = getStoredUserName();
  if (!stored) {
    initial.currentUserId = "";
    return initial;
  }
  const existing = initial.users.find((user) => user.username.toLowerCase() === stored.toLowerCase());
  if (existing) {
    initial.currentUserId = existing.id;
    return initial;
  }
  const created = { id: `user-${stored.toLowerCase().replace(/\s+/g, "-")}`, username: stored, startingBalance: 100 };
  initial.users.push(created);
  initial.currentUserId = created.id;
  return initial;
}

export function DemoStateProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<DemoState>(() => bootstrapState());
  const [activeTab, setActiveTab] = useState<TabId>("markets");
  const [selectedGameId, setSelectedGameIdState] = useState(state.games[0].id);
  const [selectedTeamId, setSelectedTeamIdState] = useState(state.games[0].homeTeamId);
  const [selectedMarketId, setSelectedMarketId] = useState<string | null>(null);
  const [usernameDraft, setUsernameDraft] = useState(getStoredUserName());

  const value = useMemo<DemoContextValue>(
    () => ({
      state,
      activeTab,
      selectedGameId,
      selectedTeamId,
      selectedMarketId,
      usernameDraft,
      setUsernameDraft,
      login: () => {
        const cleaned = usernameDraft.trim();
        if (!cleaned) return;
        setState((current) => {
          const next = structuredClone(current) as DemoState;
          const existing = next.users.find((user) => user.username.toLowerCase() === cleaned.toLowerCase());
          if (existing) {
            next.currentUserId = existing.id;
          } else {
            const created = { id: `user-${cleaned.toLowerCase().replace(/\s+/g, "-")}`, username: cleaned, startingBalance: 100 };
            next.users.push(created);
            next.currentUserId = created.id;
          }
          return next;
        });
        window.localStorage.setItem(USERNAME_KEY, cleaned);
      },
      logout: () => {
        window.localStorage.removeItem(USERNAME_KEY);
        setUsernameDraft("");
        setState((current) => ({ ...current, currentUserId: "" }));
      },
      setActiveTab,
      setSelectedGameId: (value) => {
        setSelectedGameIdState(value);
        const game = state.games.find((entry) => entry.id === value);
        if (game) setSelectedTeamIdState(game.homeTeamId);
        setSelectedMarketId(null);
      },
      setSelectedTeamId: setSelectedTeamIdState,
      setSelectedMarketId,
      createOrder: (marketId, side, stake) => {
        setState((current) => {
          const next = structuredClone(current) as DemoState;
          placeOrder(next, { marketId, side, stake, userId: next.currentUserId });
          return next;
        });
      },
      cancelUserOrder: (orderId) => {
        setState((current) => {
          const next = structuredClone(current) as DemoState;
          cancelOrder(next, orderId, next.currentUserId);
          return next;
        });
      },
      resolveAdminMarket: (marketId, score) => {
        setState((current) => {
          const next = structuredClone(current) as DemoState;
          resolveMarket(next, marketId, score);
          return next;
        });
      }
    }),
    [activeTab, selectedGameId, selectedMarketId, selectedTeamId, state, usernameDraft]
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemoState() {
  const context = useContext(DemoContext);
  if (!context) throw new Error("useDemoState must be used within DemoStateProvider");
  return context;
}

export function useCurrentUser() {
  const { state } = useDemoState();
  return state.users.find((entry) => entry.id === state.currentUserId) ?? null;
}

export function selectMarket(state: DemoState, marketId: string) {
  return state.markets.find((market) => market.id === marketId) ?? null;
}

export function getMarketSummary(state: DemoState, marketId: string) {
  const market = selectMarket(state, marketId)!;
  const player = state.players.find((entry) => entry.id === market.playerId)!;
  const team = state.teams.find((entry) => entry.id === player.teamId)!;
  const game = state.games.find((entry) => entry.id === market.gameId)!;
  return {
    market,
    player,
    team,
    game,
    lines: getMarketLines(market),
    movement: market.currentMidpoint - market.openingMidpoint,
    imbalance: getPendingImbalance(state, market.id)
  };
}

export function getPortfolioData(state: DemoState, userId: string) {
  const userOrders = state.orders.filter((order) => order.userId === userId);
  const openPairs = state.matchedPairs.filter((pair) => pair.status === "OPEN" && (pair.overUserId === userId || pair.underUserId === userId));
  const settledPairs = state.matchedPairs.filter((pair) => pair.status === "SETTLED" && (pair.overUserId === userId || pair.underUserId === userId));
  const pendingOrders = userOrders.filter((order) => order.status === "PENDING" || order.status === "PARTIALLY_MATCHED");
  const wins = settledPairs.filter((pair) => pair.winnerUserId === userId).length;
  return {
    balance: getUserBalance(state, userId),
    reservedCash: getUserReservedCash(state, userId),
    openPairs,
    settledPairs,
    pendingOrders,
    realizedPnL: settledPairs.reduce((sum, pair) => sum + (pair.winnerUserId === userId ? pair.stake : pair.winnerUserId ? -pair.stake : -pair.stake), 0),
    winRate: settledPairs.length ? Math.round((wins / settledPairs.length) * 100) : 0
  };
}

export function getLeaderboardRows(state: DemoState) {
  return state.users
    .map((user) => {
      const portfolio = getPortfolioData(state, user.id);
      const largestPosition = portfolio.openPairs.slice().sort((a, b) => b.stake - a.stake)[0];
      return {
        user,
        balance: portfolio.balance,
        tradesCount: state.orders.filter((order) => order.userId === user.id).length,
        winRate: portfolio.winRate,
        realizedPnL: portfolio.realizedPnL,
        largestPosition
      };
    })
    .sort((a, b) => b.balance - a.balance);
}

export function describePair(state: DemoState, pair: MatchedPair, userId: string) {
  const market = selectMarket(state, pair.marketId)!;
  const player = state.players.find((entry) => entry.id === market.playerId)!;
  const side: Side = pair.overUserId === userId ? "OVER" : "UNDER";
  const line = side === "OVER" ? pair.overEntryLine : pair.underEntryLine;
  return `${player.name} ${side} ${line.toFixed(1)} · $${pair.stake}`;
}
