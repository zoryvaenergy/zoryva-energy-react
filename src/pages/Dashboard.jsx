import { getDirectTeam } from "../services/team/getDirectTeam";
import "./Dashboard.css";
import { useEffect, useMemo, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase/firebase";
import UserBinaryTree from "../components/user/UserBinaryTree";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
const [directTeam, setDirectTeam] = useState([]);
const [selectedDirectUser, setSelectedDirectUser] = useState(null);
  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      const savedUser = JSON.parse(
        localStorage.getItem("zoryvaUser")
      );

      if (!savedUser?.profile?.userId) return;

      const userRef = ref(
        db,
        `users/${savedUser.profile.userId}`
      );

      const snapshot = await get(userRef);

      if (snapshot.exists()) {

    const currentUser = snapshot.val();

    setUser(currentUser);

    const team = await getDirectTeam(
        currentUser.profile.userId
    );

    setDirectTeam(team);
}
    } catch (error) {
      console.error(error);
    }
  }

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

function handleLogout() {

    const confirmLogout = window.confirm(
        "Are you sure you want to logout?"
    );

    if (!confirmLogout) {
        return;
    }

    localStorage.removeItem("zoryvaUser");

    navigate("/login");
}

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

    <div>

        <h1>
            Hello, {user?.profile?.name || "User"} 👋
        </h1>

        <p>
            Welcome to ZORYVA ENERGY Dashboard
        </p>

    </div>

    <button
        className="logout-btn"
        onClick={handleLogout}
    >
        🚪 Logout
    </button>

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
          <p className="active">
            {user?.profile?.status || "-"}
          </p>
        </div>

        <div className="card">
          <h3>Wallet Balance</h3>
          <p>₹{user?.wallet?.balance ?? 0}</p>
        </div>

        <div className="card">
          <h3>Direct Team</h3>
          <p>{user?.team?.directTeam ?? 0}</p>
        </div>

        <div className="card">
          <h3>Total Network</h3>
          <p>{user?.team?.totalTeam ?? 0}</p>
        </div>

        <div className="card">
          <h3>Left Team</h3>
          <p>{user?.binary?.leftCount ?? 0}</p>
        </div>

        <div className="card">
          <h3>Right Team</h3>
          <p>{user?.binary?.rightCount ?? 0}</p>
        </div>

        <div className="card">
          <h3>Total Income</h3>
          <p>₹{user?.wallet?.totalIncome ?? 0}</p>
        </div>

        <div className="card">
          <h3>Total Pairs</h3>
          <p>{user?.binary?.totalPairs ?? 0}</p>
        </div>

        <div className="card">
          <h3>Rewards</h3>
          <p>{user?.rewards?.totalRewards ?? 0}</p>
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
              <button
                onClick={() => copyLink(referralLinks.left)}
              >
                Copy
              </button>

              <button
                onClick={() =>
                  shareOnWhatsApp(referralLinks.left)
                }
              >
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
              <button
                onClick={() => copyLink(referralLinks.right)}
              >
                Copy
              </button>

              <button
                onClick={() =>
                  shareOnWhatsApp(referralLinks.right)
                }
              >
                WhatsApp
              </button>
            </div>

          </div>

        </div>
            )}

      <div style={{ marginTop: "40px" }}>

        <UserBinaryTree
          selectedUser={user}
        />

        <div className="direct-team-section">

          <h2>👥 Direct Team ({directTeam.length})</h2>

          {directTeam.length === 0 ? (

            <p>No Direct Team Found</p>

          ) : (

            <div className="direct-team-grid">

              {directTeam.map((member) => (

                <div
    key={member.profile.userId}
    className="direct-team-card"
    onClick={() => setSelectedDirectUser(member)}
>

                  <h3>
                    👤 {member.profile.name}
                  </h3>

                  <p>
                    🆔 {member.profile.userId}
                  </p>

                  

                  <p>
                    📍 {member.binary?.position?.toUpperCase()}
                  </p>

                  <p>
                    🟢 {member.profile.status}
                  </p>

                </div>
                

              ))}

            </div>

          )}

        </div>

      </div>
{selectedDirectUser && (

    <div className="member-details">
      <button
    className="close-btn"
    onClick={() => setSelectedDirectUser(null)}
>
    ❌ Close
</button>

        <h2>👤 Member Details</h2>

        <p>

            Name: {selectedDirectUser.profile.name}

        </p>

        <p>

            User ID: {selectedDirectUser.profile.userId}

        </p>

        <p>

            Mobile: {selectedDirectUser.profile.mobile}

        </p>

        <p>

            Sponsor: {selectedDirectUser.profile.sponsorId}

        </p>

        <p>

            Position: {selectedDirectUser.binary?.position?.toUpperCase()}

        </p>

        <p>

            Status: {selectedDirectUser.profile.status}

        </p>

    </div>

)}
    </div>
  );
}

export default Dashboard;