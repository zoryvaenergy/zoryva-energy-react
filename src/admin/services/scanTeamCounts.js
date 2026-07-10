import { db } from "../../firebase/firebase";

import { ref, get } from "firebase/database";

export async function scanTeamCounts() {

    console.log("TEAM SCAN STARTED");

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

        const leftCount = user.binary?.leftCount || 0;

        const rightCount = user.binary?.rightCount || 0;

        const actualTotal = leftCount + rightCount;

        const savedTotal = user.team?.totalTeam || 0;

        if (actualTotal !== savedTotal) {

            wrongUsers.push({

                userId,

                saved: savedTotal,

                actual: actualTotal,

            });

        }

    }

    console.log("TEAM SCAN FINISHED");

    return {

        success: true,

        totalUsers,

        wrongUsers,

    };

}