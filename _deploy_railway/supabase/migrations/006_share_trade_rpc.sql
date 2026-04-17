create or replace function public.refresh_share_holding(
  p_user_id uuid,
  p_market_id uuid,
  p_side trade_side
)
returns void
language plpgsql
as $function$
declare
  v_round_id uuid;
  v_player_id uuid;
  v_total_stake numeric(12,2);
  v_weighted_entry_line numeric(8,1);
  v_open_trade_count integer;
begin
  select
    min(t.round_id),
    min(t.player_id),
    coalesce(sum(coalesce(t.matched_stake, 0)), 0)::numeric(12,2),
    case
      when coalesce(sum(coalesce(t.matched_stake, 0)), 0) > 0 then round(
        (
          sum(coalesce(t.matched_stake, 0) * coalesce(t.entry_line, 0))
          / sum(coalesce(t.matched_stake, 0))
        )::numeric,
        1
      )::numeric(8,1)
      else null
    end,
    count(*)::integer
  into
    v_round_id,
    v_player_id,
    v_total_stake,
    v_weighted_entry_line,
    v_open_trade_count
  from public.trades t
  where t.user_id = p_user_id
    and t.market_id = p_market_id
    and t.side = p_side
    and t.settled_at is null
    and coalesce(t.matched_stake, 0) > 0;

  if coalesce(v_total_stake, 0) <= 0 then
    delete from public.holdings
    where user_id = p_user_id
      and market_id = p_market_id
      and side = p_side;
    return;
  end if;

  insert into public.holdings (
    user_id,
    round_id,
    market_id,
    player_id,
    side,
    total_stake,
    weighted_entry_line,
    open_trade_count,
    updated_at
  ) values (
    p_user_id,
    v_round_id,
    p_market_id,
    v_player_id,
    p_side,
    v_total_stake,
    v_weighted_entry_line,
    v_open_trade_count,
    now()
  )
  on conflict (user_id, market_id, side)
  do update set
    round_id = excluded.round_id,
    player_id = excluded.player_id,
    total_stake = excluded.total_stake,
    weighted_entry_line = excluded.weighted_entry_line,
    open_trade_count = excluded.open_trade_count,
    updated_at = excluded.updated_at;
end;
$function$;

create or replace function public.accept_share_trade(
  p_share_session_id uuid,
  p_trade_id uuid,
  p_accepting_user_id uuid
)
returns table(matched_trade_id uuid)
language plpgsql
as $function$
declare
  v_session public.share_sessions%rowtype;
  v_original public.trades%rowtype;
  v_kickoff_at timestamptz;
  v_accepting_balance numeric(12,2);
  v_accepting_balance_after numeric(12,2);
  v_original_balance numeric(12,2);
  v_original_balance_after numeric(12,2);
  v_match_stake numeric(12,2);
  v_accepting_side trade_side;
  v_accepting_entry_line numeric(8,1);
  v_new_trade public.trades%rowtype;
  v_pair_id uuid := gen_random_uuid();
  v_remaining_actionable integer := 0;
  v_remaining_unmatched integer := 0;
begin
  select *
  into v_session
  from public.share_sessions
  where id = p_share_session_id
  for update;

  if not found then
    raise exception 'This challenge link is no longer valid';
  end if;

  if v_session.status <> 'active' then
    raise exception 'This challenge is no longer active';
  end if;

  if v_session.created_by_user_id = p_accepting_user_id then
    raise exception 'You cannot accept your own trade';
  end if;

  if not (p_trade_id = any(v_session.trade_ids)) then
    raise exception 'This trade is not part of this challenge';
  end if;

  select t.*
  into v_original
  from public.trades t
  where t.id = p_trade_id
  for update;

  if not found then
    raise exception 'This trade is no longer available';
  end if;

  select g.kickoff_at
  into v_kickoff_at
  from public.games g
  where g.id = v_original.game_id
  limit 1;

  if v_original.user_id = p_accepting_user_id then
    raise exception 'You cannot accept your own trade';
  end if;

  if v_original.settled_at is not null
    or v_original.status not in ('PENDING', 'PARTIALLY_MATCHED')
    or coalesce(v_original.unmatched_stake, 0) <= 0 then
    raise exception 'This trade is no longer available';
  end if;

  if v_kickoff_at <= now() then
    raise exception 'This trade is no longer available';
  end if;

  select current_balance
  into v_accepting_balance
  from public.wallet_balances
  where user_id = p_accepting_user_id
  limit 1;

  select current_balance
  into v_original_balance
  from public.wallet_balances
  where user_id = v_original.user_id
  limit 1;

  v_accepting_balance := coalesce(v_accepting_balance, 0);
  v_original_balance := coalesce(v_original_balance, 0);
  v_match_stake := coalesce(v_original.unmatched_stake, 0);

  if v_accepting_balance < v_match_stake then
    raise exception 'Insufficient balance';
  end if;

  if v_original_balance < v_match_stake then
    raise exception 'This trade is no longer available';
  end if;

  v_accepting_side := case when v_original.side = 'OVER' then 'UNDER' else 'OVER' end;
  v_accepting_entry_line := case
    when v_accepting_side = 'OVER' then coalesce(v_original.entry_over_line, v_original.entry_line)
    else coalesce(v_original.entry_under_line, v_original.entry_line)
  end;

  insert into public.trades (
    user_id,
    market_id,
    round_id,
    game_id,
    player_id,
    side,
    stake,
    pre_trade_line,
    post_trade_line,
    entry_line,
    quantity,
    average_fill_rule,
    placed_at,
    status,
    matched_stake,
    unmatched_stake,
    refunded_stake,
    entry_under_line,
    entry_over_line,
    engine_version
  ) values (
    p_accepting_user_id,
    v_original.market_id,
    v_original.round_id,
    v_original.game_id,
    v_original.player_id,
    v_accepting_side,
    v_match_stake,
    v_accepting_entry_line,
    v_accepting_entry_line,
    v_accepting_entry_line,
    1,
    'MIDPOINT',
    now(),
    'MATCHED',
    v_match_stake,
    0,
    0,
    coalesce(v_original.entry_under_line, v_original.entry_line),
    coalesce(v_original.entry_over_line, v_original.entry_line),
    coalesce(v_original.engine_version, 'hybrid-v2')
  )
  returning *
  into v_new_trade;

  v_accepting_balance_after := v_accepting_balance - v_match_stake;
  v_original_balance_after := v_original_balance - v_match_stake;

  insert into public.wallet_ledger (
    user_id,
    round_id,
    trade_id,
    entry_type,
    amount,
    balance_after,
    note,
    external_ledger_key
  ) values (
    p_accepting_user_id,
    v_original.round_id,
    v_new_trade.id,
    'TRADE_STAKE',
    -v_match_stake,
    v_accepting_balance_after,
    'Challenge trade matched',
    'challenge_match_accepting_' || v_new_trade.id::text
  );

  insert into public.wallet_ledger (
    user_id,
    round_id,
    trade_id,
    entry_type,
    amount,
    balance_after,
    note,
    external_ledger_key
  ) values (
    v_original.user_id,
    v_original.round_id,
    v_original.id,
    'TRADE_STAKE',
    -v_match_stake,
    v_original_balance_after,
    'Challenge trade matched',
    'challenge_match_' || v_original.id::text
  );

  insert into public.wallet_snapshots (
    user_id,
    username,
    current_balance,
    updated_at
  )
  select
    u.id,
    u.username,
    case
      when u.id = p_accepting_user_id then v_accepting_balance_after
      else v_original_balance_after
    end,
    now()
  from public.users u
  where u.id in (p_accepting_user_id, v_original.user_id)
  on conflict (user_id)
  do update set
    username = excluded.username,
    current_balance = excluded.current_balance,
    updated_at = excluded.updated_at;

  update public.trades
  set
    matched_stake = coalesce(matched_stake, 0) + v_match_stake,
    unmatched_stake = greatest(coalesce(unmatched_stake, 0) - v_match_stake, 0),
    status = 'MATCHED'
  where id = v_original.id;

  insert into public.matched_pairs (
    id,
    market_id,
    round_id,
    game_id,
    player_id,
    created_at,
    status,
    stake,
    over_user_id,
    under_user_id,
    over_order_id,
    under_order_id,
    over_entry_line,
    under_entry_line,
    winner_user_id,
    voided,
    platform_revenue
  ) values (
    v_pair_id,
    v_original.market_id,
    v_original.round_id,
    v_original.game_id,
    v_original.player_id,
    now(),
    'OPEN',
    v_match_stake,
    case when v_original.side = 'OVER' then v_original.user_id else p_accepting_user_id end,
    case when v_original.side = 'UNDER' then v_original.user_id else p_accepting_user_id end,
    case when v_original.side = 'OVER' then v_original.id else v_new_trade.id end,
    case when v_original.side = 'UNDER' then v_original.id else v_new_trade.id end,
    coalesce(v_original.entry_over_line, v_original.entry_line),
    coalesce(v_original.entry_under_line, v_original.entry_line),
    null,
    false,
    0
  );

  perform public.refresh_share_holding(v_original.user_id, v_original.market_id, v_original.side);
  perform public.refresh_share_holding(p_accepting_user_id, v_original.market_id, v_accepting_side);

  update public.weekly_player_markets
  set
    over_stake_total = coalesce((
      select sum(t.unmatched_stake)
      from public.trades t
      where t.market_id = v_original.market_id
        and t.side = 'OVER'
        and t.settled_at is null
        and t.status in ('PENDING', 'PARTIALLY_MATCHED')
        and coalesce(t.unmatched_stake, 0) > 0
    ), 0),
    under_stake_total = coalesce((
      select sum(t.unmatched_stake)
      from public.trades t
      where t.market_id = v_original.market_id
        and t.side = 'UNDER'
        and t.settled_at is null
        and t.status in ('PENDING', 'PARTIALLY_MATCHED')
        and coalesce(t.unmatched_stake, 0) > 0
    ), 0)
  where id = v_original.market_id;

  select count(*)
  into v_remaining_actionable
  from unnest(v_session.trade_ids) as share_trade_id
  join public.trades t on t.id = share_trade_id
  join public.games g on g.id = t.game_id
  where t.settled_at is null
    and t.status in ('PENDING', 'PARTIALLY_MATCHED')
    and coalesce(t.unmatched_stake, 0) > 0
    and g.kickoff_at > now();

  if v_remaining_actionable = 0 then
    select count(*)
    into v_remaining_unmatched
    from unnest(v_session.trade_ids) as share_trade_id
    join public.trades t on t.id = share_trade_id
    where t.settled_at is null
      and t.status in ('PENDING', 'PARTIALLY_MATCHED')
      and coalesce(t.unmatched_stake, 0) > 0;

    update public.share_sessions
    set status = case when v_remaining_unmatched > 0 then 'expired' else 'completed' end
    where id = v_session.id;
  end if;

  matched_trade_id := v_new_trade.id;
  return next;
end;
$function$;
