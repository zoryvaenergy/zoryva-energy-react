import { db } from "../../firebase/firebase";

import {
    ref,
    get,
    runTransaction,
} from "firebase/database";

export async function updateMatrixTotalCounts(
    userId
) {

    let currentUserId = userId;

    while (currentUserId) {

        const snapshot = await get(
            ref(
                db,
                `users/${currentUserId}/matrix/parentId`
            )
        );

        const parentId =
            snapshot.val();

        if (!parentId) {

            break;

        }

        await runTransaction(

            ref(
                db,
                `users/${parentId}/matrix/totalTeam`
            ),

            (count) => {

                return (
                    count || 0
                ) + 1;

            }

        );

        currentUserId =
            parentId;

    }

}