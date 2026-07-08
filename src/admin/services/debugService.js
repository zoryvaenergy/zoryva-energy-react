import { calculateActualDirectTeam } from "./teamDebugService";

export async function verifyUser(user) {

  if (!user) {
    return {
      pass: false,
      checks: [],
    };
  }

  let pass = true;
  const checks = [];

  // ==========================
  // Direct Team Verification
  // ==========================

  const actualDirectTeam = await calculateActualDirectTeam(
    user.profile.userId
  );

  const savedDirectTeam = user.team?.directTeam || 0;

  if (savedDirectTeam === actualDirectTeam) {

    checks.push(
      `✅ Direct Team Count Correct (Saved: ${savedDirectTeam}, Actual: ${actualDirectTeam})`
    );

  } else {

    checks.push(
      `❌ Direct Team Count Wrong (Saved: ${savedDirectTeam}, Actual: ${actualDirectTeam})`
    );

    pass = false;
  }

  // ==========================
  // Total Team Verification
  // ==========================

  const leftCount = user.binary?.leftCount || 0;
  const rightCount = user.binary?.rightCount || 0;

  const actualTotalTeam = leftCount + rightCount;

  const savedTotalTeam = user.team?.totalTeam || 0;

  if (savedTotalTeam === actualTotalTeam) {

  checks.push(
    `✅ Total Team Correct (Left: ${leftCount} | Right: ${rightCount} | Total: ${actualTotalTeam})`
  );

} else {

  checks.push(
    `❌ Total Team Wrong (Left: ${leftCount} | Right: ${rightCount} | Saved: ${savedTotalTeam} | Actual: ${actualTotalTeam})`
  );

  pass = false;
}

  // ==========================
  // Profile
  // ==========================

  if (user.profile) {
    checks.push("✅ Profile Found");
  } else {
    checks.push("❌ Profile Missing");
    pass = false;
  }

  // ==========================
  // Binary Parent
  // ==========================

  // ==========================
// Binary Parent
// ==========================

if (user.profile.userId === "ZEN000001") {

  checks.push("✅ Root User (No Parent Required)");

} else if (user.binary?.parentId) {

  checks.push("✅ Binary Parent Found");

} else {

  checks.push("❌ Binary Parent Missing");
  pass = false;

}

  // ==========================
  // Binary Position
  // ==========================

  // ==========================
// Binary Position
// ==========================

if (user.profile.userId === "ZEN000001") {

  checks.push("✅ Root User (No Position Required)");

} else if (user.binary?.position) {

  checks.push("✅ Binary Position Found");

} else {

  checks.push("❌ Binary Position Missing");
  pass = false;

}

  // ==========================
  // Team
  // ==========================

  if (user.team) {
    checks.push("✅ Team Found");
  } else {
    checks.push("❌ Team Missing");
    pass = false;
  }

  // ==========================
  // Wallet
  // ==========================

  if (user.wallet) {
    checks.push("✅ Wallet Found");
  } else {
    checks.push("❌ Wallet Missing");
    pass = false;
  }

  return {
    pass,
    checks,
  };

}