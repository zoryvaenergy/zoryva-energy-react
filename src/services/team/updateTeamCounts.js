import { db } from "../../firebase/firebase";
import { ref, get, update } from "firebase/database";

export async function updateTeamCounts(sponsorId) {

    console.log("Team Engine Started:", sponsorId);

    let currentId = sponsorId;

    while (currentId) {

        console.log("Updating Team For:", currentId);

        const userRef = ref(db, `users/${currentId}`);

        const snapshot = await get(userRef);

        if (!snapshot.exists()) {

            console.log("User Not Found:", currentId);

            break;

        }

        const user = snapshot.val();

        const team = user.team || {};

        const leftCount = user.binary?.leftCount || 0;

        const rightCount = user.binary?.rightCount || 0;

        const updatedTeam = {

            ...team,

            totalTeam: leftCount + rightCount,

        };

        if (currentId === sponsorId) {

            updatedTeam.directTeam =
                (team.directTeam || 0) + 1;

        }

        console.log("Updating Team Data:", updatedTeam);

        await update(userRef, {

            team: updatedTeam,

        });

        currentId = user.profile?.sponsorId || "";

    }

    console.log("Team Engine Finished");

}