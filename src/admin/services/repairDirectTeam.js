import { db } from "../../firebase/firebase";

import { ref, get, update } from "firebase/database";

export async function repairDirectTeam() {

    console.log("DIRECT TEAM REPAIR STARTED");

    const usersRef = ref(db, "users");

    const snapshot = await get(usersRef);

    if (!snapshot.exists()) {

        return {

            success: false,

            repaired: 0,

        };

    }

    const users = snapshot.val();

    let repaired = 0;

    for (const userId in users) {

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

            const userRef = ref(
                db,
                `users/${userId}`
            );

            await update(userRef, {

                "team/directTeam":
                    actualDirectTeam,

            });

            repaired++;

        }

    }

    console.log("DIRECT TEAM REPAIR FINISHED");

    return {

        success: true,

        repaired,

    };

}