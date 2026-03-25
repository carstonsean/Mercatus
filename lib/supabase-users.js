const {supabaseRequest}=require("./supabase");
const {isSupabaseConfigured}=require("./config");

const STARTING_BANKROLL=200;

async function ensureSupabaseDemoUser(userName){
  if(!isSupabaseConfigured()){
    return null;
  }
  const username=normalizeUserName(userName);
  const existing=await findUserByUsername(username);
  const user=existing||await createUser(username);
  const balance=await ensureOpeningBalance(user.id);
  return {
    id:user.id,
    username:user.username,
    displayName:user.display_name,
    balance
  };
}

async function getSupabaseDemoUser(userName){
  if(!isSupabaseConfigured()){
    return null;
  }
  const username=normalizeUserName(userName);
  const user=await findUserByUsername(username);
  if(!user){
    return null;
  }
  const balance=await ensureOpeningBalance(user.id);
  return {
    id:user.id,
    username:user.username,
    displayName:user.display_name,
    balance
  };
}

async function findUserByUsername(username){
  const rows=await supabaseRequest("users",{
    query:{
      select:"id,username,display_name",
      username:`eq.${escapeFilter(username)}`,
      limit:1
    }
  });
  return rows?.[0]||null;
}

async function createUser(username){
  const rows=await supabaseRequest("users",{
    method:"POST",
    query:{select:"id,username,display_name"},
    headers:{Prefer:"return=representation,resolution=merge-duplicates"},
    body:{
      username,
      display_name:username,
      last_seen_at:new Date().toISOString()
    }
  });
  return rows?.[0]||findUserByUsername(username);
}

async function ensureOpeningBalance(userId){
  if(await hasWalletLedgerEntries(userId)){
    const balance=await fetchWalletBalance(userId);
    if(Number.isFinite(balance)){
      await upsertWalletSnapshot(userId,balance);
    }
    return balance;
  }
  await supabaseRequest("wallet_ledger",{
    method:"POST",
    headers:{Prefer:"return=minimal"},
    body:{
      user_id:userId,
      entry_type:"ACCOUNT_CREATED",
      amount:STARTING_BANKROLL,
      balance_after:STARTING_BANKROLL,
      note:"Demo account created"
    }
  });
  await upsertWalletSnapshot(userId,STARTING_BANKROLL);
  return STARTING_BANKROLL;
}

async function hasWalletLedgerEntries(userId){
  const rows=await supabaseRequest("wallet_ledger",{
    query:{
      select:"id",
      user_id:`eq.${userId}`,
      limit:1
    }
  });
  return Boolean(rows?.length);
}

async function fetchWalletBalance(userId){
  try{
    const snapshotRows=await supabaseRequest("wallet_snapshots",{
      query:{
        select:"current_balance",
        user_id:`eq.${userId}`,
        limit:1
      }
    });
    if(snapshotRows?.length){
      return Number(snapshotRows[0].current_balance)||0;
    }
  }catch(error){
    void error;
  }
  try{
    const balanceRows=await supabaseRequest("wallet_balances",{
      query:{
        select:"current_balance",
        user_id:`eq.${userId}`,
        limit:1
      }
    });
    if(balanceRows?.length){
      return Number(balanceRows[0].current_balance)||0;
    }
  }catch(error){
    void error;
  }
  return null;
}

async function upsertWalletSnapshot(userId,balance){
  const userRows=await supabaseRequest("users",{
    query:{
      select:"username",
      id:`eq.${userId}`,
      limit:1
    }
  });
  const username=userRows?.[0]?.username;
  if(!username){
    return;
  }
  await supabaseRequest("wallet_snapshots",{
    method:"POST",
    query:{
      on_conflict:"user_id",
      select:"user_id"
    },
    headers:{Prefer:"return=representation,resolution=merge-duplicates"},
    body:{
      user_id:userId,
      username,
      current_balance:Number(balance)||0
    }
  });
}

function normalizeUserName(userName){
  return (userName||"Demo Trader").trim()||"Demo Trader";
}

function escapeFilter(value){
  return String(value).replaceAll(",","\\,");
}

module.exports={
  ensureSupabaseDemoUser,
  getSupabaseDemoUser
};
