import { useEffect, useState } from "react";
import { getRightTeam } from "../services/team/getRightTeam";
import { useNavigate } from "react-router-dom";
function RightTeam() {
const navigate = useNavigate();
const [rightTeam, setRightTeam] = useState([]);
   useEffect(() => {

    async function loadRightTeam() {

        const savedUser = JSON.parse(
            localStorage.getItem("zoryvaUser")
        );

        if (!savedUser?.profile?.userId) return;

        const team = await getRightTeam(
            savedUser.profile.userId
        );

        setRightTeam(team);
    }

    loadRightTeam();

}, []);
return (

        <div>
          <button
    className="dashboard-btn"
    onClick={() => navigate("/dashboard")}
>
    ⬅ Dashboard
</button>
            <h1>➡ Right Team</h1>
            <div className="direct-team-section">

    <h2>
        ➡ Right Team ({rightTeam.length})
    </h2>

    {rightTeam.length === 0 ? (

        <p>No Right Team Found</p>

    ) : (

        <div className="direct-team-grid">

            {rightTeam.map((member) => (

                <div
                    key={member.profile.userId}
                    className="direct-team-card"
                >

                    <h3>
                        👤 {member.profile.name}
                    </h3>

                    <p>
                        🆔 {member.profile.userId}
                    </p>

                    <p>
                        🎯 {member.profile.sponsorId}
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

    );

}

export default RightTeam;