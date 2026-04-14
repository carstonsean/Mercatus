const { randomUUID } = require("crypto");

const POSITION_OPPONENT_MULTIPLIERS = {
  Fullback: {
    HEAVY_FAVOURITE: 1.7,
    FAVOURITE: 1.45,
    SLIGHT_FAVOURITE: 1.2,
    EVEN: 1,
    SLIGHT_UNDERDOG: 0.86,
    UNDERDOG: 0.74,
    HEAVY_UNDERDOG: 0.62
  },
  Winger: {
    HEAVY_FAVOURITE: 2,
    FAVOURITE: 1.65,
    SLIGHT_FAVOURITE: 1.3,
    EVEN: 1,
    SLIGHT_UNDERDOG: 0.8,
    UNDERDOG: 0.65,
    HEAVY_UNDERDOG: 0.5
  },
  Centre: {
    HEAVY_FAVOURITE: 1.8,
    FAVOURITE: 1.5,
    SLIGHT_FAVOURITE: 1.22,
    EVEN: 1,
    SLIGHT_UNDERDOG: 0.84,
    UNDERDOG: 0.72,
    HEAVY_UNDERDOG: 0.58
  },
  "Five-Eighth": {
    HEAVY_FAVOURITE: 1.5,
    FAVOURITE: 1.32,
    SLIGHT_FAVOURITE: 1.16,
    EVEN: 1,
    SLIGHT_UNDERDOG: 0.89,
    UNDERDOG: 0.8,
    HEAVY_UNDERDOG: 0.7
  },
  Halfback: {
    HEAVY_FAVOURITE: 1.45,
    FAVOURITE: 1.3,
    SLIGHT_FAVOURITE: 1.15,
    EVEN: 1,
    SLIGHT_UNDERDOG: 0.9,
    UNDERDOG: 0.82,
    HEAVY_UNDERDOG: 0.74
  },
  Prop: {
    HEAVY_FAVOURITE: 1.3,
    FAVOURITE: 1.18,
    SLIGHT_FAVOURITE: 1.1,
    EVEN: 1,
    SLIGHT_UNDERDOG: 0.92,
    UNDERDOG: 0.86,
    HEAVY_UNDERDOG: 0.8
  },
  Hooker: {
    HEAVY_FAVOURITE: 1.3,
    FAVOURITE: 1.2,
    SLIGHT_FAVOURITE: 1.1,
    EVEN: 1,
    SLIGHT_UNDERDOG: 0.92,
    UNDERDOG: 0.86,
    HEAVY_UNDERDOG: 0.78
  },
  "2nd Row": {
    HEAVY_FAVOURITE: 1.35,
    FAVOURITE: 1.22,
    SLIGHT_FAVOURITE: 1.12,
    EVEN: 1,
    SLIGHT_UNDERDOG: 0.9,
    UNDERDOG: 0.82,
    HEAVY_UNDERDOG: 0.74
  },
  Lock: {
    HEAVY_FAVOURITE: 1.28,
    FAVOURITE: 1.18,
    SLIGHT_FAVOURITE: 1.1,
    EVEN: 1,
    SLIGHT_UNDERDOG: 0.92,
    UNDERDOG: 0.85,
    HEAVY_UNDERDOG: 0.78
  },
  DEFAULT: {
    HEAVY_FAVOURITE: 1.35,
    FAVOURITE: 1.2,
    SLIGHT_FAVOURITE: 1.1,
    EVEN: 1,
    SLIGHT_UNDERDOG: 0.9,
    UNDERDOG: 0.82,
    HEAVY_UNDERDOG: 0.74
  }
};

const MULTIPLIER_BOUNDS = {
  lastGame: { min: 0.65, max: 1.5 },
  last3: { min: 0.75, max: 1.35 },
  homeAway: { min: 0.9, max: 1.12 },
  opponent: { min: 0.5, max: 2.0 },
  positionalImpact: { min: 0.8, max: 1.25 }
};

const DEFAULT_SIMULATION_CONFIG = {
  enabled: false,
  defaultBotCount: 3,
  maxMarketsPerBot: 3,
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

const BOT_NAME_PREFIXES = [
  "Ari",
  "Beau",
  "Cruz",
  "Dax",
  "Eli",
  "Finn",
  "Hudson",
  "Jett",
  "Kai",
  "Luca",
  "Milo",
  "Nash",
  "Remy",
  "Rory",
  "Taj",
  "Zeke"
];

const BOT_NAME_SUFFIXES = [
  "Aces",
  "Atlas",
  "Comets",
  "Crew",
  "Dash",
  "Flux",
  "Forge",
  "Nova",
  "Orbit",
  "Raiders",
  "Shift",
  "Signal",
  "Slate",
  "Volt",
  "Wave",
  "Yard"
];

function normalizeSimulationConfig(input = {}) {
  const globalWeights = { ...DEFAULT_SIMULATION_CONFIG.globalWeights, ...(input.globalWeights || {}) };
  return {
    ...DEFAULT_SIMULATION_CONFIG,
    ...input,
    globalWeights,
    logs: Array.isArray(input.logs) ? input.logs.slice(0, DEFAULT_SIMULATION_CONFIG.maxLogs) : [],
    tick: Number.isFinite(Number(input.tick)) ? Number(input.tick) : 0,
    seed: Number.isFinite(Number(input.seed)) ? Number(input.seed) : DEFAULT_SIMULATION_CONFIG.seed,
    maxLogs: Number.isFinite(Number(input.maxLogs)) ? Number(input.maxLogs) : DEFAULT_SIMULATION_CONFIG.maxLogs,
    defaultBotCount: Math.max(0, Number.isFinite(Number(input.defaultBotCount))
      ? Number(input.defaultBotCount)
      : DEFAULT_SIMULATION_CONFIG.defaultBotCount)
  };
}

function createRandomBotName(existingBots = []) {
  const usedNames = new Set(existingBots.map((bot) => bot?.userName).filter(Boolean));
  for (let attempt = 0; attempt < 32; attempt += 1) {
    const prefix = BOT_NAME_PREFIXES[Math.floor(Math.random() * BOT_NAME_PREFIXES.length)] || "Milo";
    const suffix = BOT_NAME_SUFFIXES[Math.floor(Math.random() * BOT_NAME_SUFFIXES.length)] || "Nova";
    const name = `${prefix} ${suffix}`;
    if (!usedNames.has(name)) {
      return name;
    }
  }
  return `Bot ${existingBots.length + 1}`;
}

function createRandomProbBot(existingBots = []) {
  const randomProbCount = existingBots.filter((bot) => bot.source === "random-prob").length + 1;
  return {
    id: `bot-random-prob-${randomProbCount}`,
    userName: createRandomBotName(existingBots),
    archetype: "random-prob",
    source: "random-prob",
    startingBankroll: 200,
    config: {
      key: "random-prob",
      label: "Random Prob",
      baseLabel: "Random Prob",
      decisionMode: "random-prob",
      seasonWeight: 1,
      lastGameWeight: 0.22,
      last3Weight: 0.45,
      venueWeight: 0.42,
      opponentWeight: 0.43,
      matchupWeight: 0.42,
      noiseLevel: 0.3,
      edgeThreshold: 1.7,
      activityRate: 0.7,
      cooldownTicks: 4,
      oversBias: 0,
      starBias: 0,
      crowdBias: 0
    },
    bankroll: 200,
    cooldownUntil: 0,
    exposureByPlayer: {}
  };
}

function createBotRoster(config = {}) {
  const normalized = normalizeSimulationConfig(config);
  if (!normalized.enabled) {
    return [];
  }
  const roster = [];
  const targetCount = Math.max(1, Number(normalized.defaultBotCount) || DEFAULT_SIMULATION_CONFIG.defaultBotCount);
  for (let index = 0; index < targetCount; index += 1) {
    roster.push(createRandomProbBot(roster));
  }
  return roster;
}

function runSimulationTick({ state, bots, config, tick = 0 }) {
  const normalized = normalizeSimulationConfig({ ...config, tick });
  const nextBots = bots.map((bot) => ({ ...bot, exposureByPlayer: { ...(bot.exposureByPlayer || {}) } }));
  const openMarkets = state.markets.filter((market) => !market.settlement && !market.manuallyLocked);
  const events = [];
  openMarkets.forEach((market) => {
    const openExposure = market.trades
      .filter((trade) => isBotTrade(trade))
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

function calculateBotProjection(player, bot, simulationConfig) {
  const baseline = player.lastSeasonAverage ?? player.seasonAverage ?? player.initialLine ?? 0;
  const lastGameContext = calculateLastGameFormContext(player, bot, simulationConfig, baseline);
  const last3Context = calculateLast3FormContext(player, bot, simulationConfig, baseline);
  const homeAwayContext = calculateHomeAwayContext(player, bot, simulationConfig, baseline);
  const opponentContext = calculateOpponentContext(player, bot, simulationConfig);
  const positionalContext = calculatePositionalImpactContext(player, bot, simulationConfig);
  const value = roundToHalf(
    baseline *
      lastGameContext.effectiveMultiplier *
      last3Context.effectiveMultiplier *
      homeAwayContext.effectiveMultiplier *
      opponentContext.effectiveMultiplier *
      positionalContext.effectiveMultiplier
  );
  return {
    value,
    factors: {
      baseline: roundTo(baseline, 1),
      fullLastGameFormMultiplier: roundTo(lastGameContext.fullMultiplier, 2),
      effectiveLastGameFormMultiplier: roundTo(lastGameContext.effectiveMultiplier, 2),
      fullLast3FormMultiplier: roundTo(last3Context.fullMultiplier, 2),
      effectiveLast3FormMultiplier: roundTo(last3Context.effectiveMultiplier, 2),
      fullHomeAwayMultiplier: roundTo(homeAwayContext.fullMultiplier, 2),
      effectiveHomeAwayMultiplier: roundTo(homeAwayContext.effectiveMultiplier, 2),
      opponentOddsBand: opponentContext.band,
      rawOpponentMultiplier: roundTo(opponentContext.rawMultiplier, 2),
      effectiveOpponentDifficultyMultiplier: roundTo(opponentContext.effectiveMultiplier, 2),
      fullPositionalImpactMultiplier: roundTo(positionalContext.fullMultiplier, 2),
      effectivePositionalImpactMultiplier: roundTo(positionalContext.effectiveMultiplier, 2),
      homeAwayMode: homeAwayContext.mode,
      lastGameScore: roundTo(player.lastGameScore ?? baseline, 1),
      last3Average: roundTo(player.last3Average ?? baseline, 1),
      opponentPositionAverage: roundTo(player.opponentPositionAverage ?? player.leaguePositionAverage ?? baseline, 1),
      leaguePositionAverage: roundTo(player.leaguePositionAverage ?? baseline, 1),
      finalProjection: roundTo(value, 1)
    }
  };
}

function calculateConfidence(player, bot, projection, simulationConfig) {
  const edge = Math.abs(projection.value - player.currentLine);
  const volatilityPenalty = Math.min(0.35, ((player.scoreVolatility ?? 8) - 4) * 0.03);
  const factorAlignment = [
    projection.factors.effectiveLastGameFormMultiplier - 1,
    projection.factors.effectiveLast3FormMultiplier - 1,
    projection.factors.effectiveOpponentDifficultyMultiplier - 1,
    projection.factors.effectivePositionalImpactMultiplier - 1
  ].filter((value) => Math.abs(value) > 0.05);
  const alignmentBonus = Math.min(0.24, factorAlignment.length * 0.08);
  const edgeScore = Math.min(0.55, edge / 8);
  return clamp(roundToHalf((0.45 + edgeScore + alignmentBonus - volatilityPenalty) * simulationConfig.globalWeights.activity), 0.1, 0.95);
}

function decideTrade({ market, bot, projection, confidence, config, tick }) {
  const side = randomFor(config.seed, `${bot.id}:${market.id}:${tick}:side`) >= 0.5 ? "OVER" : "UNDER";
  return {
    side,
    edge: 0,
    confidence: 0.5,
    tick,
    reason: `Random Prob bot made a 50/50 coin-flip decision and took $1 ${side.toLowerCase()}.`
  };
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

function isBotTrade(trade) {
  return Boolean(
    trade?.botId ||
    trade?.botSource ||
    trade?.archetype ||
    trade?.userName?.startsWith("Bot ") ||
    trade?.userName?.includes(" Bot ")
  );
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

function roundTo(value, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round((Number(value) || 0) * factor) / factor;
}

function getMovementValue(market) {
  return roundToHalf((market.currentLine ?? market.initialLine ?? 0) - (market.initialLine ?? 0));
}

function calculateLastGameFormContext(player, bot, simulationConfig, baseline) {
  const rawMultiplier = safeRatio(player.lastGameScore, baseline);
  const fullMultiplier = clampMultiplier(rawMultiplier, MULTIPLIER_BOUNDS.lastGame);
  const effectiveWeight = clamp((bot.config.lastGameWeight ?? 0) * (simulationConfig.globalWeights.form ?? 0), 0, 1);
  return {
    rawMultiplier,
    fullMultiplier,
    effectiveWeight,
    effectiveMultiplier: blendMultiplier(fullMultiplier, effectiveWeight)
  };
}

function calculateLast3FormContext(player, bot, simulationConfig, baseline) {
  const rawMultiplier = safeRatio(player.last3Average, baseline);
  const fullMultiplier = clampMultiplier(rawMultiplier, MULTIPLIER_BOUNDS.last3);
  const effectiveWeight = clamp((bot.config.last3Weight ?? 0) * (simulationConfig.globalWeights.form ?? 0), 0, 1);
  return {
    rawMultiplier,
    fullMultiplier,
    effectiveWeight,
    effectiveMultiplier: blendMultiplier(fullMultiplier, effectiveWeight)
  };
}

function calculateHomeAwayContext(player, bot, simulationConfig, baseline) {
  const splitValue = player.isHome ? player.homeAverage : player.awayAverage;
  const rawMultiplier = safeRatio(splitValue, baseline);
  const fullMultiplier = clampMultiplier(rawMultiplier, MULTIPLIER_BOUNDS.homeAway);
  const effectiveWeight = clamp((bot.config.venueWeight ?? 0) * (simulationConfig.globalWeights.venue ?? 0), 0, 1);
  return {
    mode: player.isHome ? "HOME" : "AWAY",
    rawMultiplier,
    fullMultiplier,
    effectiveWeight,
    effectiveMultiplier: blendMultiplier(fullMultiplier, effectiveWeight)
  };
}

function calculateOpponentContext(player, bot, simulationConfig) {
  const rawMultiplier = getOpponentMultiplier(player);
  const fullMultiplier = clampMultiplier(rawMultiplier, MULTIPLIER_BOUNDS.opponent);
  const effectiveWeight = clamp((bot.config.opponentWeight ?? 0) * (simulationConfig.globalWeights.opponent ?? 0), 0, 1);
  const effectiveMultiplier = blendMultiplier(fullMultiplier, effectiveWeight);
  return {
    rawMultiplier,
    fullMultiplier,
    weight: effectiveWeight,
    band: classifyOddsBand(player.teamOdds, player.opponentOdds),
    effectiveMultiplier
  };
}

function calculatePositionalImpactContext(player, bot, simulationConfig) {
  const rawMultiplier = safeRatio(player.opponentPositionAverage, player.leaguePositionAverage);
  const fullMultiplier = clampMultiplier(rawMultiplier, MULTIPLIER_BOUNDS.positionalImpact);
  const effectiveWeight = clamp((bot.config.matchupWeight ?? 0) * (simulationConfig.globalWeights.matchup ?? 0), 0, 1);
  return {
    rawMultiplier,
    fullMultiplier,
    effectiveWeight,
    effectiveMultiplier: blendMultiplier(fullMultiplier, effectiveWeight)
  };
}

function getOpponentMultiplier(player) {
  const band = classifyOddsBand(player.teamOdds, player.opponentOdds);
  const positionTable = POSITION_OPPONENT_MULTIPLIERS[player.position] || POSITION_OPPONENT_MULTIPLIERS.DEFAULT;
  return positionTable[band] ?? 1;
}

function classifyOddsBand(teamOdds, opponentOdds) {
  const normalizedTeamOdds = Number(teamOdds);
  const normalizedOpponentOdds = Number(opponentOdds);
  if (!Number.isFinite(normalizedTeamOdds) || !Number.isFinite(normalizedOpponentOdds)) {
    return "EVEN";
  }
  if (Math.abs(normalizedTeamOdds - normalizedOpponentOdds) <= 0.15) {
    return "EVEN";
  }
  if (normalizedTeamOdds <= 1.3) {
    return "HEAVY_FAVOURITE";
  }
  if (normalizedTeamOdds <= 1.55) {
    return "FAVOURITE";
  }
  if (normalizedTeamOdds < 1.85) {
    return "SLIGHT_FAVOURITE";
  }
  if (normalizedTeamOdds <= 2.15) {
    return "EVEN";
  }
  if (normalizedTeamOdds < 2.75) {
    return "SLIGHT_UNDERDOG";
  }
  if (normalizedTeamOdds < 3.5) {
    return "UNDERDOG";
  }
  return "HEAVY_UNDERDOG";
}

function blendMultiplier(rawMultiplier, weight) {
  return 1 + (rawMultiplier - 1) * weight;
}

function safeRatio(numerator, denominator) {
  const top = Number(numerator);
  const bottom = Number(denominator);
  if (!Number.isFinite(top) || !Number.isFinite(bottom) || bottom <= 0) {
    return 1;
  }
  return top / bottom;
}

function clampMultiplier(value, bounds) {
  return clamp(Number.isFinite(value) ? value : 1, bounds.min, bounds.max);
}

module.exports = {
  DEFAULT_SIMULATION_CONFIG,
  normalizeSimulationConfig,
  createBotRoster,
  createRandomProbBot,
  runSimulationTick,
  calculateBotProjection,
  calculateConfidence,
  decideTrade
};
