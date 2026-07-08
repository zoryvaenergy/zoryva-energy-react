import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase/firebase";
import { getDirectTeam } from "../services/team/getDirectTeam";
import DirectMemberCard from "../components/team/DirectMemberCard";
import "./Dashboard.css";

function MyTeam() {

  const [user, setUser] = useState(null);
  const [directTeam, setDirectTeam] = useState([]);

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

  return (

    <div className="dashboard">

      <div className="dashboard-header">
        <h1>🌳 My Team</h1>
        <p>Welcome to My Network Explorer</p>
      </div>

      <div className="dashboard-grid">

        <div className="card">
          <h3>Direct Team</h3>
          <p>{user?.team?.directTeam ?? 0}</p>
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
          <h3>Total Team</h3>
          <p>{user?.team?.totalTeam ?? 0}</p>
        </div>

      </div>

      <div className="referral-section">

        <h2>Direct Team</h2>

        <div className="referral-box">

          {directTeam.length === 0 ? (

            <p>No Direct Team Found</p>

          ) : (

            directTeam.map((member) => (

              <DirectMemberCard
                key={member.userId}
                member={member}
                onView={(member) => {
                  alert(member.userId);
                }}
              />

            ))

          )}

        </div>

        <h2>Left Team</h2>

        <div className="referral-box">
          <p>No Data Available</p>
        </div>

        <h2>Right Team</h2>

        <div className="referral-box">
          <p>No Data Available</p>
        </div>

      </div>

    </div>

  );

}

export default MyTeam;