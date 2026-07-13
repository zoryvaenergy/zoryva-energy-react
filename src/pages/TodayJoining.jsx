import { useEffect, useState } from "react";
import { getTodayJoining } from "../services/team/getTodayJoining";
import { useNavigate } from "react-router-dom";
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

        <div>
         <button onClick={() => navigate("/dashboard")}>

    ⬅ Dashboard

</button>
            <h1>📅 Today Joining</h1>
            <div className="direct-team-section">

    <h2>

        📅 Today Joining ({todayUsers.length})

    </h2>

    {todayUsers.length === 0 ? (

        <p>No User Joined Today</p>

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