const { randomUUID } = require("crypto");

const BOT_ARCHETYPES = {
  conservative: {
    key: "conservative",
    label: "Conservative",
    seasonWeight: 1.15,
    lastGameWeight: 0.2,
    last3Weight: 0.35,
    venueWeight: 0.35,
    opponentWeight: 0.35,
    matchupWeight: 0.2,
    noiseLevel: 0.8,
    edgeThreshold: 2.2,
    activityRate: 0.34,
    cooldownTicks: 2,
    oversBias: 0,
    starBias: 0,
    crowdBias: 0
  },
  recency: {
    key: "recency",
    label: "Recency",
    seasonWeight: 0.85,
    lastGameWeight: 0.75,
    last3Weight: 0.95,
    venueWeight: 0.25,
    opponentWeight: 0.25,
    matchupWeight: 0.2,
    noiseLevel: 1.2,
    edgeThreshold: 1.4,
    activityRate: 0.48,
    cooldownTicks: 1,
    oversBias: 0.15,
    starBias: 0.05,
    crowdBias: 0.15
  },
  matchup: {
    key: "matchup",
    label: "Matchup",
    seasonWeight: 0.95,
    lastGameWeight: 0.25,
    last3Weight: 0.45,
    venueWeight: 0.55,
    opponentWeight: 0.95,
    matchupWeight: 1.05,
    noiseLevel: 0.9,
    edgeThreshold: 1.7,
    activityRate: 0.4,
    cooldownTicks: 2,
    oversBias: 0,
    starBias: 0,
    crowdBias: -0.05
  },
  balanced: {
    key: "balanced",
    label: "Balanced",
    seasonWeight: 1,
    lastGameWeight: 0.45,
    last3Weight: 0.6,
    venueWeight: 0.4,
    opponentWeight: 0.5,
    matchupWeight: 0.45,
    noiseLevel: 0.9,
    edgeThreshold: 1.6,
    activityRate: 0.42,
    cooldownTicks: 1,
    oversBias: 0,
    starBias: 0.05,
    crowdBias: 0
  },
  casual: {
    key: "casual",
    label: "Casual",
    seasonWeight: 0.8,
    lastGameWeight: 0.55,
    last3Weight: 0.5,
    venueWeight: 0.2,
    opponentWeight: 0.15,
    matchupWeight: 0.1,
    noiseLevel: 1.8,
    edgeThreshold: 1.2,
    activityRate: 0.62,
    cooldownTicks: 1,
    oversBias: 0.45,
    starBias: 0.35,
    crowdBias: 0.25
  },
  contrarian: {
    key: "contrarian",
    label: "Contrarian",
    seasonWeight: 1,
    lastGameWeight: 0.25,
    last3Weight: 0.35,
    venueWeight: 0.35,
    opponentWeight: 0.4,
    matchupWeight: 0.5,
    noiseLevel: 1,
    edgeThreshold: 1.8,
    activityRate: 0.36,
    cooldownTicks: 2,
    oversBias: -0.2,
    starBias: -0.05,
    crowdBias: -0.55
  }
};

const DEFAULT_SIMULATION_CONFIG = {
  enabled: false,
  botCounts: {
    conservative: 3,
    recency: 3,
    matchup: 3,
    balanced: 4,
    casual: 4,
    contrarian: 2
  },
  maxMarketsPerBot: 3,
  maxExposurePerPlayer: 3,
  maxTotalExposure: 18,
  globalWeights: {
    season: 1,
    form: 1,
    venue: 1,
    opponent: 1,
    matchup: 1,
    noise: 1,
    activity: 1,
    threshold: 1
  },
  seed: 17,
  tick: 0,
  logs: [],
  maxLogs: 120
};

function normalizeSimulationConfig(input = {}) {
  const botCounts = { ...DEFAULT_SIMULATION_CONFIG.botCounts, ...(input.botCounts || {}) };
  const globalWeights = { ...DEFAULT_SIMULATION_CONFIG.globalWeights, ...(input.globalWeights || {}) };
  return {
    ...DEFAULT_SIMULATION_CONFIG,
    ...input,
    botCounts,
    globalWeights,
    logs: Array.isArray(input.logs) ? input.logs.slice(0, DEFAULT_SIMULATION_CONFIG.maxLogs) : [],
    tick: Number.isFinite(Number(input.tick)) ? Number(input.tick) : 0,
    seed: Number.isFinite(Number(input.seed)) ? Number(input.seed) : DEFAULT_SIMULATION_CONFIG.seed,
    maxLogs: Number.isFinite(Number(input.maxLogs)) ? Number(input.maxLogs) : DEFAULT_SIMULATION_CONFIG.maxLogs
  };
}

function createBotRoster(config) {
  const normalized = normalizeSimulationConfig(config);
  const bots = [];
  Object.entries(normalized.botCounts).forEach(([archetype, count]) => {
    const template = BOT_ARCHETYPES[archetype];
    if (!template) return;
    for (let index = 0; index < Number(count || 0); index += 1) {
      bots.push({
        id: `bot-${archetype}-${index + 1}`,
        userName: `${template.label} Bot ${index + 1}`,
        archetype,
        config: { ...template },
        bankroll: 1000,
        cooldownUntil: 0,
        exposureByPlayer: {}
      });
    }
  });
  return bots;
}

function runSimulationTick({ state, bots, config, tick = 0 }) {
  const normalized = normalizeSimulationConfig({ ...config, tick });
  const nextBots = bots.map((bot) => ({ ...bot, exposureByPlayer: { ...(bot.exposureByPlayer || {}) } }));
  const openMarkets = state.markets.filter((market) => !market.settlement && !market.manuallyLocked);
  const events = [];
  openMarkets.forEach((market) => {
    const openExposure = market.trades
      .filter((trade) => trade.userName?.startsWith("Bot ") || trade.userName?.includes(" Bot "))
      .reduce((sum, trade) => sum + (trade.unmatchedStake || 0) + (trade.matchedStake || 0), 0);
    market.botOpenExposure = openExposure;
  });

  nextBots.forEach((bot) => {
    if (bot.cooldownUntil > tick) return;
    if (randomFor(normalized.seed, `${bot.id}:activity:${tick}`) > bot.config.activityRate * normalized.globalWeights.activity) {
      return;
    }
    const candidateMarkets = shuffle(openMarkets, normalized.seed + tick + stableHash(bot.id)).slice(0, normalized.maxMarketsPerBot);
    candidateMarkets.forEach((market, marketIndex) => {
      if ((bot.exposureByPlayer[market.id] || 0) >= normalized.maxExposurePerPlayer) return;
      const totalExposure = Object.values(bot.exposureByPlayer).reduce((sum, value) => sum + value, 0);
      if (totalExposure >= normalized.maxTotalExposure) return;
      const projection = calculateBotProjection(market, bot, normalized, tick + marketIndex);
      const confidence = calculateConfidence(market, bot, projection, normalized);
      const decision = decideTrade({
        market,
        bot,
        projection,
        confidence,
        config: normalized,
        tick
      });
      if (!decision) return;
      events.push({
        id: randomUUID(),
        tick,
        botId: bot.id,
        botName: bot.userName,
        archetype: bot.archetype,
        marketId: market.id,
        playerName: market.playerName,
        side: decision.side,
        stake: 1,
        projection: projection.value,
        confidence,
        edge: decision.edge,
        reason: decision.reason,
        factors: projection.factors
      });
      bot.exposureByPlayer[market.id] = (bot.exposureByPlayer[market.id] || 0) + 1;
      bot.cooldownUntil = tick + Math.max(1, bot.config.cooldownTicks);
    });
  });

  const logs = [...events.map((event) => summarizeEvent(event)), ...normalized.logs].slice(0, normalized.maxLogs);
  return {
    bots: nextBots,
    events,
    config: {
      ...normalized,
      logs,
      tick: tick + 1
    }
  };
}

function calculateBotProjection(player, bot, simulationConfig, tick = 0) {
  const weights = simulationConfig.globalWeights;
  const baseline = player.lastSeasonAverage ?? player.seasonAverage ?? player.initialLine ?? 0;
  const recentDelta = player.last3Average - baseline;
  const lastGameDelta = player.lastGameScore - baseline;
  const venueAdjustment = (player.isHome ? 1 : -1) * bot.config.venueWeight * weights.venue;
  const opponentDifficultyAdjustment = (1 - (player.opponentDifficulty ?? 1)) * 6 * bot.config.opponentWeight * weights.opponent;
  const positionalMatchupAdjustment = (player.positionalMatchupAdjustment ?? 0) * bot.config.matchupWeight * weights.matchup;
  const starBiasAdjustment = ((player.popularity ?? 3) - 3) * bot.config.starBias;
  const crowdAdjustment = getMovementValue(player) * bot.config.crowdBias;
  const formAdjustment =
    recentDelta * bot.config.last3Weight * weights.form +
    lastGameDelta * bot.config.lastGameWeight * weights.form;
  const baselineContribution = baseline * bot.config.seasonWeight * weights.season;
  const denominator = Math.max(0.35, bot.config.seasonWeight * weights.season);
  const normalizedBaseline = baselineContribution / denominator;
  const noise = randomNoise(simulationConfig.seed, `${bot.id}:${player.id}:${tick}`) * bot.config.noiseLevel * weights.noise;
  const value = roundToHalf(
    normalizedBaseline +
    formAdjustment +
    venueAdjustment +
    opponentDifficultyAdjustment +
    positionalMatchupAdjustment +
    starBiasAdjustment +
    crowdAdjustment +
    bot.config.oversBias +
    noise
  );
  return {
    value,
    factors: {
      baseline: roundToHalf(normalizedBaseline),
      formAdjustment: roundToHalf(formAdjustment),
      venueAdjustment: roundToHalf(venueAdjustment),
      opponentDifficultyAdjustment: roundToHalf(opponentDifficultyAdjustment),
      positionalMatchupAdjustment: roundToHalf(positionalMatchupAdjustment),
      starBiasAdjustment: roundToHalf(starBiasAdjustment),
      crowdAdjustment: roundToHalf(crowdAdjustment),
      oversBias: roundToHalf(bot.config.oversBias || 0),
      noise: roundToHalf(noise)
    }
  };
}

function calculateConfidence(player, bot, projection, simulationConfig) {
  const edge = Math.abs(projection.value - player.currentLine);
  const volatilityPenalty = Math.min(0.35, ((player.scoreVolatility ?? 8) - 4) * 0.03);
  const factorAlignment = [
    projection.factors.formAdjustment,
    projection.factors.opponentDifficultyAdjustment,
    projection.factors.positionalMatchupAdjustment
  ].filter((value) => Math.abs(value) > 0.25);
  const alignmentBonus = Math.min(0.24, factorAlignment.length * 0.08);
  const edgeScore = Math.min(0.55, edge / 8);
  return clamp(roundToHalf((0.45 + edgeScore + alignmentBonus - volatilityPenalty) * simulationConfig.globalWeights.activity), 0.1, 0.95);
}

function decideTrade({ market, bot, projection, confidence, config, tick }) {
  const effectiveThreshold = Math.max(0.5, bot.config.edgeThreshold * config.globalWeights.threshold - confidence * 0.8);
  const edge = roundToHalf(projection.value - market.currentLine);
  if (Math.abs(edge) < effectiveThreshold) {
    return null;
  }
  const side = edge > 0 ? "OVER" : "UNDER";
  const reason = buildReasonSummary({
    market,
    bot,
    projection,
    edge,
    side
  });
  return {
    side,
    edge,
    confidence,
    tick,
    reason
  };
}

function buildReasonSummary({ market, bot, projection, edge, side }) {
  const sortedFactors = Object.entries(projection.factors)
    .filter(([, value]) => Math.abs(value) > 0.2)
    .sort((left, right) => Math.abs(right[1]) - Math.abs(left[1]))
    .slice(0, 2)
    .map(([key]) => humanizeFactor(key));
  const drivers = sortedFactors.length ? sortedFactors.join(" and ") : "small model edge";
  return `${BOT_ARCHETYPES[bot.archetype].label} bot projected ${projection.value.toFixed(1)} vs market ${market.currentLine.toFixed(1)} driven mainly by ${drivers}. Took $1 ${side.toLowerCase()}.`;
}

function summarizeEvent(event) {
  return {
    id: event.id,
    tick: event.tick,
    botName: event.botName,
    playerName: event.playerName,
    side: event.side,
    projection: event.projection,
    edge: event.edge,
    reason: event.reason
  };
}

function stableHash(value) {
  return [...String(value)].reduce((sum, char, index) => sum + char.charCodeAt(0) * (index + 11), 0);
}

function randomFor(seed, key) {
  const base = Math.sin(seed * 997 + stableHash(key) * 31) * 10000;
  return base - Math.floor(base);
}

function randomNoise(seed, key) {
  return (randomFor(seed, key) - 0.5) * 2.2;
}

function shuffle(items, seed) {
  const copy = items.slice();
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(randomFor(seed, `${index}:${copy[index]?.id || index}`) * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function roundToHalf(value) {
  return Math.round(value * 2) / 2;
}

function getMovementValue(market) {
  return roundToHalf((market.currentLine ?? market.initialLine ?? 0) - (market.initialLine ?? 0));
}

function humanizeFactor(key) {
  const labels = {
    baseline: "baseline scoring",
    formAdjustment: "recent form",
    venueAdjustment: "venue split",
    opponentDifficultyAdjustment: "opponent difficulty",
    positionalMatchupAdjustment: "positional matchup",
    starBiasAdjustment: "star bias",
    crowdAdjustment: "crowd momentum",
    oversBias: "overs bias",
    noise: "noise"
  };
  return labels[key] || key;
}

module.exports = {
  BOT_ARCHETYPES,
  DEFAULT_SIMULATION_CONFIG,
  normalizeSimulationConfig,
  createBotRoster,
  runSimulationTick,
  calculateBotProjection,
  calculateConfidence,
  decideTrade
};
