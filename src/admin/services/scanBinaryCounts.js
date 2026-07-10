import { db } from "../../firebase/firebase";

import { ref, get } from "firebase/database";

function countBinaryUsers(userId, users) {

    const user = users[userId];

    if (!user) {

        return 0;

    }

    let total = 0;

    const leftChild = user.binary?.leftChild;

    const rightChild = user.binary?.rightChild;

    if (leftChild) {

        total += 1;

        total += countBinaryUsers(
            leftChild,
            users
        );

    }

    if (rightChild) {

        total += 1;

        total += countBinaryUsers(
            rightChild,
            users
        );

    }

    return total;

}

export async function scanBinaryCounts() {

    console.log(
        "BINARY COUNT SCAN STARTED"
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

        const actualBinaryCount =
            countBinaryUsers(
                userId,
                users
            );

        const savedBinaryCount =

            (user.binary?.leftCount || 0)

            +

            (user.binary?.rightCount || 0);

        if (

            actualBinaryCount !==

            savedBinaryCount

        ) {
console.log(
    userId,
    "Saved:",
    savedBinaryCount,
    "Actual:",
    actualBinaryCount
);
            wrongUsers.push({

                userId,

                saved:

                    savedBinaryCount,

                actual:

                    actualBinaryCount,

            });

        }

    }

    console.log(
        "BINARY COUNT SCAN FINISHED"
    );

    return {

        success: true,

        totalUsers,

        wrongUsers,

    };

}