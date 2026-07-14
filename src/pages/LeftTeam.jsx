import { useEffect, useState } from "react";
import { getLeftTeam } from "../services/team/getLeftTeam";
import { useNavigate } from "react-router-dom";
function LeftTeam() {
const navigate = useNavigate();
const [leftTeam, setLeftTeam] = useState([]);

   useEffect(() => {

    async function loadLeftTeam() {

        const savedUser = JSON.parse(
            localStorage.getItem("zoryvaUser")
        );

        if (!savedUser?.profile?.userId) return;

        const team = await getLeftTeam(
            savedUser.profile.userId
        );

        setLeftTeam(team);
    }

    loadLeftTeam();

}, []);
return (

        <div>
           <button
    className="dashboard-btn"
    onClick={() => navigate("/dashboard")}
>
    ⬅ Dashboard
</button>
           
            <h1>⬅ Left Team</h1>
            <div className="direct-team-section">

    <h2>
        ⬅ Left Team ({leftTeam.length})
    </h2>

    {leftTeam.length === 0 ? (

        <p>No Left Team Found</p>

    ) : (

        <div className="direct-team-grid">

            {leftTeam.map((member) => (

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

export default LeftTeam;