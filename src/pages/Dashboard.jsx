import "./Dashboard.css";
import { useEffect, useMemo, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("zoryvaUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Referral Links
  const referralLinks = useMemo(() => {
    const referralCode = user?.profile?.userId;

    if (!referralCode) return null;

    const baseUrl = window.location.origin;

    return {
      left: `${baseUrl}/register?ref=${encodeURIComponent(
        referralCode
      )}&side=left`,
      right: `${baseUrl}/register?ref=${encodeURIComponent(
        referralCode
      )}&side=right`,
    };
  }, [user]);

  const copyLink = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      alert("Referral Link Copied Successfully!");
    } catch (error) {
      console.error(error);
      alert("Unable to copy referral link.");
    }
  };
  const shareOnWhatsApp = (link) => {
  const message =
    `🌞 Join ZORYVA ENERGY\n\n` +
    `Register using my referral link:\n\n${link}`;

  window.open(
    `https://wa.me/?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Hello, {user?.profile?.name || "User"} 👋</h1>
        <p>Welcome to ZORYVA ENERGY Dashboard</p>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>User ID</h3>
          <p>{user?.profile?.userId || "Loading..."}</p>
        </div>

        <div className="card">
          <h3>Sponsor ID</h3>
          <p>{user?.profile?.sponsorId || "No Sponsor"}</p>
        </div>

        <div className="card">
          <h3>Status</h3>
          <p className="active">{user?.profile?.status || "-"}</p>
        </div>

        <div className="card">
          <h3>Wallet Balance</h3>
          <p>₹0</p>
        </div>

        <div className="card">
          <h3>Direct Team</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Total Network</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Total Income</h3>
          <p>₹0</p>
        </div>

        <div className="card">
          <h3>Rewards</h3>
          <p>0</p>
        </div>
      </div>

      {referralLinks && (
        <div className="referral-section">
          <h2>Binary Referral Links</h2>

          <div className="referral-box">
            <h3>Left Referral Link</h3>

            <input
              type="text"
              value={referralLinks.left}
              readOnly
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                boxSizing: "border-box",
              }}
            />

            <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button onClick={() => copyLink(referralLinks.left)}>
    Copy
  </button>

  <button onClick={() => shareOnWhatsApp(referralLinks.left)}>
    WhatsApp
  </button>
</div>
          </div>

          <div className="referral-box">
            <h3>Right Referral Link</h3>

            <input
              type="text"
              value={referralLinks.right}
              readOnly
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                boxSizing: "border-box",
              }}
            />

            <div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  }}
>
  <button onClick={() => copyLink(referralLinks.right)}>
    Copy
  </button>

  <button onClick={() => shareOnWhatsApp(referralLinks.right)}>
    WhatsApp
  </button>
</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
