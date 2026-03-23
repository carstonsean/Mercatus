# Mercatus Product Principles

This document defines the permanent product operating principles for Mercatus. These are not cosmetic UI preferences. They are decision rules that should guide product strategy, UX, feature prioritization, market design, backend logic, and admin tooling.

## Core objective

Mercatus exists to generate accurate NRL Fantasy score projections by aggregating the wisdom of the crowd.

The projection must emerge from trading activity. It must not be centrally determined.

That means the primary job of the product is to make it easy, rewarding, and compelling for users to participate in the market and express disagreement through trades.

## Product principles

### 1. Maximise participation

Market accuracy improves when more people participate. Participation and liquidity are not side metrics. They are the foundation of meaningful price signals.

Implications:

- Prefer features that increase active users, repeat sessions, and first-trade conversion.
- Reduce reasons for users to watch without trading.
- Favour broad engagement in active markets over depth in empty or fragmented markets.

### 2. Maximise trading activity

Market quality improves when more trades happen and more positions match.

Every feature should be evaluated for its impact on:

- number of trades
- frequency of trades
- number of matched positions
- speed from discovery to execution

If a feature is interesting but does not increase trading activity, it should be deprioritised.

### 3. Enable efficient price discovery

Projections should move dynamically based on supply and demand. Users must be able to disagree with the current projection and express that view immediately through trading.

Implications:

- The market line should be responsive to genuine order flow.
- Mispricings should be correctable quickly.
- Users should be able to see where the market is and act with minimal delay.
- Product logic should reinforce crowd-led repricing, not hidden central adjustment.

### 4. Minimise friction

Lower friction increases participation, which increases trades, which improves projections.

The app should:

- require minimal clicks to trade
- feel fast and responsive
- present clear and simple information
- avoid unnecessary complexity before a user can act

Any extra step, field, explanation, or screen should justify itself by improving trust or execution quality.

### 5. Use incentive-centered design

The product should align user motivation with market accuracy.

Users should feel rewarded for:

- finding mispriced projections
- acting quickly on perceived value
- participating frequently
- returning when new edges appear

The best engagement loops are the ones that also make the market smarter.

### 6. Encourage value discovery

People trade when they believe they have an edge. The product should help users find reasons to act.

Useful discovery signals include:

- large projection movements
- meaningful disagreement between model and market
- trending players
- unusual liquidity or activity changes
- newly opened or newly active markets

Discovery should create trading opportunities, not passive browsing.

### 7. Encourage competition and status

Competition drives repeat engagement. Rankings, performance metrics, and visible status can motivate users to participate more often and with more conviction.

Implications:

- leaderboards should reward meaningful trading performance
- user status systems should reinforce market participation
- social proof should make active trading feel alive and competitive

### 8. Prioritise liquidity and market health

A prediction market only works if markets feel alive.

Prefer:

- active markets over inactive breadth
- fast execution over theoretical completeness
- visible activity over hidden state
- concentrated liquidity over fragmented liquidity

Avoid launching or keeping markets that are unlikely to attract enough participation to produce useful signals.

### 9. Keep the experience simple and intuitive

The mechanism can be sophisticated while the product remains easy to use.

Users should experience Mercatus as:

- simple
- clean
- intuitive
- quick to learn

Avoid overwhelming users with too much data, too many controls, or too much explanation at the point of action.

## Business model

Revenue is a secondary outcome, generated from the spread between over and under projections.

As trading volume rises:

- matched positions rise
- market quality improves
- platform revenue improves

This means the business model works best when the product first optimises for participation, trading activity, liquidity, and efficient price discovery.

## Decision framework for all future changes

Every feature, UX change, workflow, and logic update should be tested against the following questions:

1. Will this increase participation?
2. Will this increase trades, trade frequency, or matched positions?
3. Will this improve liquidity or market health?
4. Will this make it easier to express disagreement with the current projection?
5. Will this reduce friction to discovery or execution?
6. Will this keep projections crowd-led rather than centrally determined?
7. Will this keep the experience simple enough for fast action?

If the answer to most of these is no, the change should be reconsidered.

## What this means in practice

### Product and UX

- Optimise for faster path-to-trade.
- Highlight opportunities, not just information.
- Make active markets feel active.
- Prefer prompts to act over passive dashboards.

### Market design

- Favour mechanisms that improve matching and line responsiveness.
- Avoid features that weaken the connection between order flow and projection movement.
- Treat liquidity as a product feature, not only a market metric.

### Admin and operations

- Admin tools should support market health, not replace crowd judgment.
- Manual intervention should be exceptional and transparent.
- Operational work should prioritise uptime, speed, settlement reliability, and active-market integrity.

### Analytics and prioritisation

- Default success metrics should be participation, trades, matched volume, liquidity, and repeat engagement.
- Treat projection accuracy as an output of market quality, not a substitute for it.

## Anti-patterns

The following should be treated as warning signs:

- features that add complexity without increasing trading
- experiences that make users read too much before acting
- inactive or empty markets that dilute attention
- central logic that determines projections instead of letting trades determine them
- discovery surfaces that inform but do not motivate action
- metrics that optimise for page views instead of market participation
