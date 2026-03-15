export type Side = "OVER" | "UNDER";
export type OrderStatus = "PENDING" | "PARTIALLY_MATCHED" | "MATCHED" | "SETTLED" | "CANCELLED";
export type PairStatus = "OPEN" | "SETTLED" | "CANCELLED";
export type TabId = "markets" | "portfolio" | "leaderboard" | "profile" | "admin";

export interface Team {
  id: string;
  name: string;
  shortName: string;
  primary: string;
  secondary: string;
}

export interface Player {
  id: string;
  name: string;
  position: string;
  teamId: string;
  seasonAverage: number;
}

export interface Game {
  id: string;
  roundId: string;
  title: string;
  homeTeamId: string;
  awayTeamId: string;
  venue: string;
  kickoff: string;
}

export interface Market {
  id: string;
  roundId: string;
  gameId: string;
  playerId: string;
  openingMidpoint: number;
  currentMidpoint: number;
  spreadWidth: number;
  midpointHistory: number[];
  lockStatus: "OPEN" | "LOCKED" | "RESOLVED";
  finalScore?: number;
}

export interface UserAccount {
  id: string;
  username: string;
  startingBalance: number;
}

export interface Order {
  id: string;
  userId: string;
  marketId: string;
  side: Side;
  stake: number;
  unmatchedStake: number;
  matchedStake: number;
  status: OrderStatus;
  entryUnderLine: number;
  entryOverLine: number;
  midpointAtEntry: number;
  matchedPairIds: string[];
  createdAt: string;
}

export interface MatchedPair {
  id: string;
  marketId: string;
  overUserId: string;
  underUserId: string;
  overOrderId: string;
  underOrderId: string;
  stake: number;
  overEntryLine: number;
  underEntryLine: number;
  createdAt: string;
  status: PairStatus;
  winnerUserId?: string;
  platformRevenue?: number;
}

export interface SettlementRecord {
  marketId: string;
  finalScore: number;
  settledAt: string;
}

export interface DemoState {
  teams: Team[];
  players: Player[];
  games: Game[];
  markets: Market[];
  users: UserAccount[];
  orders: Order[];
  matchedPairs: MatchedPair[];
  settlements: SettlementRecord[];
  currentUserId: string;
}
