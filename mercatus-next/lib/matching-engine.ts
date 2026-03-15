import type { DemoState, Market, MatchedPair, Order, OrderStatus, Side, UserAccount } from "@/lib/models";

const SHIFT_STEP = 0.5;
const IMBALANCE_PER_SHIFT = 5;

function createId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function nowIso() {
  return new Date().toISOString();
}

function getLines(market: Market) {
  return {
    midpoint: market.currentMidpoint,
    under: market.currentMidpoint - market.spreadWidth / 2,
    over: market.currentMidpoint + market.spreadWidth / 2
  };
}

function getMarketOrders(state: DemoState, marketId: string) {
  return state.orders.filter((order) => order.marketId === marketId && (order.status === "PENDING" || order.status === "PARTIALLY_MATCHED"));
}

function getUser(state: DemoState, userId: string) {
  return state.users.find((user) => user.id === userId) as UserAccount;
}

export function getUserBalance(state: DemoState, userId: string) {
  const user = getUser(state, userId);
  const spent = state.orders
    .filter((order) => order.userId === userId && order.status !== "CANCELLED")
    .reduce((sum, order) => sum + order.stake, 0);
  const winnings = state.matchedPairs.reduce((sum, pair) => {
    if (pair.status !== "SETTLED" || pair.winnerUserId !== userId) return sum;
    return sum + pair.stake * 2;
  }, 0);
  return user.startingBalance - spent + winnings;
}

export function getUserReservedCash(state: DemoState, userId: string) {
  return state.orders
    .filter((order) => order.userId === userId && (order.status === "PENDING" || order.status === "PARTIALLY_MATCHED"))
    .reduce((sum, order) => sum + order.unmatchedStake, 0);
}

function refreshMarketMidpoint(state: DemoState, marketId: string) {
  const market = state.markets.find((entry) => entry.id === marketId);
  if (!market) return;
  const activeOrders = getMarketOrders(state, marketId);
  const overPending = activeOrders.filter((order) => order.side === "OVER").reduce((sum, order) => sum + order.unmatchedStake, 0);
  const underPending = activeOrders.filter((order) => order.side === "UNDER").reduce((sum, order) => sum + order.unmatchedStake, 0);
  const imbalance = overPending - underPending;
  const shifts = Math.trunc(imbalance / IMBALANCE_PER_SHIFT);
  market.currentMidpoint = market.openingMidpoint + shifts * SHIFT_STEP;
  if (market.midpointHistory[market.midpointHistory.length - 1] !== market.currentMidpoint) {
    market.midpointHistory.push(market.currentMidpoint);
  }
}

function setOrderStatus(order: Order): OrderStatus {
  if (order.unmatchedStake === order.stake) return "PENDING";
  if (order.unmatchedStake > 0) return "PARTIALLY_MATCHED";
  return "MATCHED";
}

export function placeOrder(state: DemoState, params: { userId: string; marketId: string; side: Side; stake: number }) {
  const market = state.markets.find((entry) => entry.id === params.marketId);
  if (!market) throw new Error("Market not found.");
  if (market.lockStatus !== "OPEN") throw new Error("This market is locked.");
  if (params.stake <= 0) throw new Error("Stake must be greater than zero.");

  const availableCash = getUserBalance(state, params.userId) - getUserReservedCash(state, params.userId);
  if (availableCash < params.stake) throw new Error(`Available balance is $${availableCash.toFixed(0)}.`);

  const lines = getLines(market);
  const order: Order = {
    id: createId("order"),
    userId: params.userId,
    marketId: params.marketId,
    side: params.side,
    stake: params.stake,
    unmatchedStake: params.stake,
    matchedStake: 0,
    status: "PENDING",
    entryUnderLine: lines.under,
    entryOverLine: lines.over,
    midpointAtEntry: lines.midpoint,
    matchedPairIds: [],
    createdAt: nowIso()
  };

  const restingOrders = getMarketOrders(state, params.marketId)
    .filter((entry) => entry.side !== params.side && entry.userId !== params.userId)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  for (const resting of restingOrders) {
    if (order.unmatchedStake <= 0) break;
    if (resting.entryUnderLine !== order.entryUnderLine || resting.entryOverLine !== order.entryOverLine) continue;

    const matchedStake = Math.min(order.unmatchedStake, resting.unmatchedStake);
    const pair: MatchedPair = {
      id: createId("pair"),
      marketId: params.marketId,
      overUserId: params.side === "OVER" ? params.userId : resting.userId,
      underUserId: params.side === "UNDER" ? params.userId : resting.userId,
      overOrderId: params.side === "OVER" ? order.id : resting.id,
      underOrderId: params.side === "UNDER" ? order.id : resting.id,
      stake: matchedStake,
      overEntryLine: order.entryOverLine,
      underEntryLine: order.entryUnderLine,
      createdAt: nowIso(),
      status: "OPEN"
    };

    order.unmatchedStake -= matchedStake;
    order.matchedStake += matchedStake;
    order.matchedPairIds.push(pair.id);
    resting.unmatchedStake -= matchedStake;
    resting.matchedStake += matchedStake;
    resting.matchedPairIds.push(pair.id);
    resting.status = setOrderStatus(resting);
    state.matchedPairs.push(pair);
  }

  order.status = setOrderStatus(order);
  state.orders.push(order);
  refreshMarketMidpoint(state, params.marketId);
  return order;
}

export function cancelOrder(state: DemoState, orderId: string, userId: string) {
  const order = state.orders.find((entry) => entry.id === orderId && entry.userId === userId);
  if (!order) throw new Error("Order not found.");
  if (order.unmatchedStake <= 0) throw new Error("Only unmatched stake can be cancelled.");
  order.stake -= order.unmatchedStake;
  order.unmatchedStake = 0;
  order.status = order.matchedStake > 0 ? "MATCHED" : "CANCELLED";
  refreshMarketMidpoint(state, order.marketId);
}

export function resolveMarket(state: DemoState, marketId: string, finalScore: number) {
  const market = state.markets.find((entry) => entry.id === marketId);
  if (!market) throw new Error("Market not found.");
  market.finalScore = finalScore;
  market.lockStatus = "RESOLVED";
  state.settlements = [...state.settlements.filter((entry) => entry.marketId !== marketId), { marketId, finalScore, settledAt: nowIso() }];

  state.matchedPairs.forEach((pair) => {
    if (pair.marketId !== marketId || pair.status !== "OPEN") return;
    if (finalScore > pair.overEntryLine) {
      pair.winnerUserId = pair.overUserId;
      pair.platformRevenue = 0;
    } else if (finalScore < pair.underEntryLine) {
      pair.winnerUserId = pair.underUserId;
      pair.platformRevenue = 0;
    } else {
      pair.platformRevenue = pair.stake * 2;
    }
    pair.status = "SETTLED";
  });

  state.orders.forEach((order) => {
    if (order.marketId !== marketId) return;
    if (order.status === "PENDING" || order.status === "PARTIALLY_MATCHED") {
      order.status = order.matchedStake > 0 ? "SETTLED" : "CANCELLED";
      order.unmatchedStake = 0;
    } else if (order.status === "MATCHED") {
      order.status = "SETTLED";
    }
  });
}

export function getMarketLines(market: Market) {
  return getLines(market);
}

export function getPendingImbalance(state: DemoState, marketId: string) {
  const orders = getMarketOrders(state, marketId);
  return orders.reduce((sum, order) => sum + (order.side === "OVER" ? order.unmatchedStake : -order.unmatchedStake), 0);
}
