import { db } from "../../firebase/firebase";

import { ref, get } from "firebase/database";

export async function scanDirectTeam() {

    console.log("DIRECT TEAM SCAN STARTED");

    const usersRef = ref(db, "users");

    const snapshot = await get(usersRef);

    if (!snapshot.exists()) {

        return {

            success: false,

            totalUsers: 0,

            wrongUsers: [],

        };

    }

    const users = snapshot.val();

    const wrongUsers = [];

    let totalUsers = 0;

    for (const userId in users) {

        totalUsers++;

        const user = users[userId];

        let actualDirectTeam = 0;

        for (const checkUserId in users) {

            const checkUser = users[checkUserId];

            if (
                checkUser.profile?.sponsorId === userId
            ) {

                actualDirectTeam++;

            }

        }

        const savedDirectTeam =
            user.team?.directTeam || 0;

        if (
            savedDirectTeam !== actualDirectTeam
        ) {

            wrongUsers.push({

                userId,

                saved: savedDirectTeam,

                actual: actualDirectTeam,

            });

        }

    }

    console.log("DIRECT TEAM SCAN FINISHED");

    return {

        success: true,

        totalUsers,

        wrongUsers,

    };

}