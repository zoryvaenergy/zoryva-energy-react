import { useEffect, useState } from "react";
import { getDirectTeam } from "../services/team/getDirectTeam";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function DirectTeam() {

    const navigate = useNavigate();

    const [directTeam, setDirectTeam] = useState([]);

    const [selectedDirectUser, setSelectedDirectUser] = useState(null);

    useEffect(() => {

        async function loadDirectTeam() {

            const savedUser = JSON.parse(
                localStorage.getItem("zoryvaUser")
            );

            if (!savedUser?.profile?.userId) return;

            const team = await getDirectTeam(
                savedUser.profile.userId
            );

            setDirectTeam(team);
        }

        loadDirectTeam();

    }, []);

    return (

        <div>

            <button onClick={() => navigate("/dashboard")}>

                ⬅ Dashboard

            </button>

            <h1>👥 Direct Team</h1>

            <div className="direct-team-section">

                <h2>
                    👥 Direct Team ({directTeam.length})
                </h2>

                {directTeam.length === 0 ? (

                    <p>No Direct Team Found</p>

                ) : (

                    <div className="direct-team-grid">

                        {directTeam.map((member) => (

                            <div
                                key={member.profile.userId}
                                className="direct-team-card"
                                onClick={() =>
                                    setSelectedDirectUser(member)
                                }
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

            {selectedDirectUser && (

                <div className="member-details">

                    <button
                        className="close-btn"
                        onClick={() =>
                            setSelectedDirectUser(null)
                        }
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

export default DirectTeam;