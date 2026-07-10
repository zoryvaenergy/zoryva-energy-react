import { db } from "../../firebase/firebase";

import { ref, get, update } from "firebase/database";

function calculateCounts(userId, users) {

    const user = users[userId];

    if (!user) {

        return {
            leftCount: 0,
            rightCount: 0,
        };

    }

    const leftChild = user.binary?.leftChild;

    const rightChild = user.binary?.rightChild;

    let leftCount = 0;

    let rightCount = 0;

    if (leftChild) {

        const leftData = calculateCounts(
            leftChild,
            users
        );

        leftCount =
            1 +
            leftData.leftCount +
            leftData.rightCount;

    }

    if (rightChild) {

        const rightData = calculateCounts(
            rightChild,
            users
        );

        rightCount =
            1 +
            rightData.leftCount +
            rightData.rightCount;

    }

    return {

        leftCount,

        rightCount,

    };

}

export async function repairBinaryCounts() {

    console.log(
        "BINARY REPAIR STARTED"
    );

    const usersRef = ref(
        db,
        "users"
    );

    const snapshot = await get(
        usersRef
    );

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

        const actual = calculateCounts(
            userId,
            users
        );

        const savedLeft =
            user.binary?.leftCount || 0;

        const savedRight =
            user.binary?.rightCount || 0;

        if (

            savedLeft !== actual.leftCount ||

            savedRight !== actual.rightCount

        ) {

            const userRef = ref(
                db,
                `users/${userId}`
            );

            await update(userRef, {

                "binary/leftCount":
                    actual.leftCount,

                "binary/rightCount":
                    actual.rightCount,

            });

            repaired++;

        }

    }

    console.log(
        "BINARY REPAIR FINISHED"
    );

    return {

        success: true,

        repaired,

    };

}