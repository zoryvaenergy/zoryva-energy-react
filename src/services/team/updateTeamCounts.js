import { db } from "../../firebase/firebase";

import {
    ref,
    get,
    runTransaction
} from "firebase/database";

export async function updateTeamCounts(sponsorId) {

    console.time("Team Engine Total");

    console.log(
        "Team Engine Started:",
        sponsorId
    );

    let currentId = sponsorId;

    while (currentId) {

        console.log(
            "Updating Team For:",
            currentId
        );

        const userRef = ref(
            db,
            `users/${currentId}`
        );

        const snapshot = await get(userRef);

        if (!snapshot.exists()) {

            console.log(
                "User Not Found:",
                currentId
            );

            break;
        }

        const user = snapshot.val();

        const leftCount =
            user.binary?.leftCount || 0;

        const rightCount =
            user.binary?.rightCount || 0;

        console.log(
            "TEAM DEBUG",
            currentId,
            "Left:",
            leftCount,
            "Right:",
            rightCount,
            "Saving:",
            leftCount + rightCount
        );

        await runTransaction(

            ref(
                db,
                `users/${currentId}/team`
            ),

            (currentTeam) => {

                const teamData =
                    currentTeam || {};

                const updatedTeam = {

                    ...teamData,

                    totalTeam:
                        leftCount +
                        rightCount,

                };

                if (
                    currentId === sponsorId
                ) {

                    updatedTeam.directTeam =
                        (
                            teamData.directTeam ||
                            0
                        ) + 1;
                }

                console.log(
                    "Updating Team Data:",
                    updatedTeam
                );

                return updatedTeam;
            }

        );

        currentId =
            user.profile?.sponsorId || "";

    }

    console.log(
        "Team Engine Finished"
    );

    console.timeEnd(
        "Team Engine Total"
    );

}