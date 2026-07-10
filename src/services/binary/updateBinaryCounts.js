import { db } from "../../firebase/firebase";
import { ref, get, update } from "firebase/database";

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

        const childRef = ref(db, `users/${currentChildId}`);
        const childSnap = await get(childRef);

        if (!childSnap.exists()) {

            console.timeEnd(`Level ${level}`);
            break;

        }

        const child = childSnap.val();

        const parentId = child.binary?.parentId;

        console.log(
            "Parent Found:",
            parentId
        );

        if (!parentId) {

            console.timeEnd(`Level ${level}`);
            break;

        }

        const parentRef = ref(db, `users/${parentId}`);
        const parentSnap = await get(parentRef);

        if (!parentSnap.exists()) {

            console.timeEnd(`Level ${level}`);
            break;

        }

        const parent = parentSnap.val();

        if (parent.binary.leftChild === currentChildId) {

            await update(parentRef, {
                "binary/leftCount":
                    (parent.binary.leftCount || 0) + 1,
            });

        } else if (parent.binary.rightChild === currentChildId) {

            await update(parentRef, {
                "binary/rightCount":
                    (parent.binary.rightCount || 0) + 1,
            });

        }

        console.timeEnd(`Level ${level}`);

        currentChildId = parentId;

    }

    console.timeEnd("Binary Engine Total");

}