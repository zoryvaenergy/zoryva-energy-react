import "./Dashboard.css";
import { useEffect, useState } from "react";

import { ref, get } from "firebase/database";

import { db } from "../firebase/firebase";
function LevelTeam() {
    const [user, setUser] = useState(null);

useEffect(() => {

    loadUser();

}, []);

async function loadUser() {

    const savedUser = JSON.parse(

        localStorage.getItem("zoryvaUser")

    );

    if (!savedUser?.profile?.userId) {

        return;

    }

    const snapshot = await get(

        ref(

            db,

            `users/${savedUser.profile.userId}`

        )

    );

    if (snapshot.exists()) {

        setUser(

            snapshot.val()

        );

    }

}

    return (

        <div className="team-page">
       
            <h1>🌐 Level Team</h1>
            <div className="team-grid">
            <div className="team-card">

                <h3>Level 1</h3>

                <p>{user?.levels?.level1 ?? 0} Users</p>

            </div>

            <div className="team-card">

                <h3>Level 2</h3>

                <p>{user?.levels?.level2 ?? 0} Users</p>

            </div>
              
            <div className="team-card">

                <h3>Level 3</h3>

                <p>{user?.levels?.level3 ?? 0} Users</p>

            </div>

            <div className="team-card">

                <h3>Level 4</h3>

                <p>{user?.levels?.level4 ?? 0} Users</p>

            </div>

            <div className="team-card">

                <h3>Level 5</h3>

                <p>{user?.levels?.level5 ?? 0} Users</p>

            </div>

            <div className="team-card">

                <h3>Level 6</h3>

                <p>{user?.levels?.level6 ?? 0} Users</p>

            </div>

            <div className="team-card">

                <h3>Level 7</h3>

                <p>{user?.levels?.level7 ?? 0} Users</p>

            </div>

            <div className="team-card">

                <h3>Level 8</h3>

                <p>{user?.levels?.level8 ?? 0} Users</p>

            </div>

            <div className="team-card">

                <h3>Level 9</h3>

                <p>{user?.levels?.level9 ?? 0} Users</p>

            </div>

            <div className="team-card">

                <h3>Level 10</h3>

                <p>{user?.levels?.level10 ?? 0} Users</p>

            </div>
</div>
        </div>

    );

}

export default LevelTeam;