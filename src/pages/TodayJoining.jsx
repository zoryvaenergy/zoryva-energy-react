import { useEffect, useState } from "react";
import { getTodayJoining } from "../services/team/getTodayJoining";
import { useNavigate } from "react-router-dom";
import "./TodayJoining.css";
function TodayJoining() {
const navigate = useNavigate();
const [todayUsers, setTodayUsers] = useState([]);
  useEffect(() => {

    async function loadTodayUsers() {

        const users = await getTodayJoining();

        setTodayUsers(users);

    }

    loadTodayUsers();

}, []);
    return (

        <div className="today-page">

         <button
    className="dashboard-btn"
    onClick={() => navigate("/dashboard")}
>
    ⬅ Dashboard
</button>

            <h1 className="today-title">
    📅 Today Joining
</h1>
            <p className="today-subtitle">
    New members who register today will appear here.
</p>
            <div className="direct-team-section">

    

    {todayUsers.length === 0 ? (

        <div className="today-empty">

    <h2>📅 Today Joining (0)</h2>

    <p>No User Joined Today</p>

</div>

    ) : (

        <div
    className="direct-team-grid"
    style={{
        gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
    }}
>

            {todayUsers.map((member) => (

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

                        📅 {member.profile.registrationDate}

                    </p>

                    <p>

                        🕒 {member.profile.registrationTime}

                    </p>

                </div>

            ))}

        </div>

    )}

</div>
        </div>

    );

}

export default TodayJoining;