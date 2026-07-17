import { db } from "../../firebase/firebase";

import {
    ref,
    get,
    runTransaction
} from "firebase/database";

export async function updateBinaryCounts(userId) {

    console.time("Binary Engine Total");

    let currentChildId = userId;

    let level = 0;

    while (true) {

        level++;

        console.time(`Level ${level}`);

        console.log(
            "Binary Level:",
            level,
            "Current User:",
            currentChildId
        );

        const childRef = ref(
            db,
            `users/${currentChildId}`
        );

        const childSnap = await get(
            childRef
        );

        if (!childSnap.exists()) {

            console.timeEnd(
                `Level ${level}`
            );

            break;
        }

        const child = childSnap.val();

        const parentId =
            child.binary?.parentId;

        console.log(
            "Updating Count For Parent:",
            parentId
        );
          console.log(
    "NEXT PARENT:",
    currentChildId
);
        if (!parentId) {

            console.timeEnd(
                `Level ${level}`
            );

            break;
        }

        const parentRef = ref(
            db,
            `users/${parentId}`
        );

        const parentSnap = await get(
            parentRef
        );

        if (!parentSnap.exists()) {

            console.timeEnd(
                `Level ${level}`
            );

            break;
        }

        const parent =
            parentSnap.val();

        console.log(
            "Left:",
            parent.binary?.leftCount,
            "Right:",
            parent.binary?.rightCount
        );

        // LEFT COUNT

        if (

            parent.binary?.leftChild ===
            currentChildId

        ) {

            await runTransaction(

                ref(
                    db,
                    `users/${parentId}/binary/leftCount`
                ),

                (currentValue) => {

                    return (
                        currentValue || 0
                    ) + 1;

                }

            );

            console.log(
                "LEFT UPDATED:",
                parentId
            );

        }

        // RIGHT COUNT

        else if (

            parent.binary?.rightChild ===
            currentChildId

        ) {

            await runTransaction(

                ref(
                    db,
                    `users/${parentId}/binary/rightCount`
                ),

                (currentValue) => {

                    return (
                        currentValue || 0
                    ) + 1;

                }

            );

            console.log(
                "RIGHT UPDATED:",
                parentId
            );

        }

        console.timeEnd(
            `Level ${level}`
        );

        currentChildId = parentId;

    }

    console.timeEnd(
        "Binary Engine Total"
    );

}