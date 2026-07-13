import "./Profile.css";

import { useEffect, useState } from "react";

import { ref, get } from "firebase/database";

import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {

        loadProfile();

    }, []);

    async function loadProfile() {

        try {

            const savedUser = JSON.parse(

                localStorage.getItem("zoryvaUser")

            );

            if (!savedUser?.profile?.userId) {

                return;

            }

            const userRef = ref(

                db,

                `users/${savedUser.profile.userId}`

            );

            const snapshot = await get(userRef);

            if (snapshot.exists()) {

                setUser(snapshot.val());

            }

        }

        catch (error) {

            console.error(error);

        }

    }

    return (

        <div className="profile-page">

            <div className="profile-card">

                <h1>👤 My Profile</h1>
                   <div className="profile-buttons">

    <button
        onClick={() => navigate("/dashboard")}
    >
        ⬅ Dashboard
    </button>

    <button>
        ✏️ Edit Profile
    </button>

</div>
                <div className="profile-row">

                    <strong>User ID:</strong>

                    <span>

                        {user?.profile?.userId}

                    </span>

                </div>

                <div className="profile-row">

                    <strong>Name:</strong>

                    <span>

                        {user?.profile?.name}

                    </span>

                </div>

                <div className="profile-row">

                    <strong>Mobile:</strong>

                    <span>

                        {user?.profile?.mobile}

                    </span>

                </div>

                <div className="profile-row">

                    <strong>Email:</strong>

                    <span>

                        {user?.profile?.email || "N/A"}

                    </span>

                </div>

                <div className="profile-row">

                    <strong>Sponsor ID:</strong>

                    <span>

                        {user?.profile?.sponsorId}

                    </span>

                </div>

                <div className="profile-row">

                    <strong>Position:</strong>

                    <span>

                        {user?.binary?.position?.toUpperCase()}

                    </span>

                </div>

                <div className="profile-row">

                    <strong>Status:</strong>

                    <span className="status-badge">

                        {user?.profile?.status}

                    </span>

                </div>

            </div>

        </div>

    );

}

export default Profile;