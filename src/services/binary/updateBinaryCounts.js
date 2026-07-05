import { db } from "../../firebase/firebase";
import { ref, get, update } from "firebase/database";

export async function updateBinaryCounts(userId) {

    let currentChildId = userId;

    while (true) {

        const childRef = ref(db, `users/${currentChildId}`);
        const childSnap = await get(childRef);

        if (!childSnap.exists()) break;

        const child = childSnap.val();

        const parentId = child.binary?.parentId;

        if (!parentId) break;

        const parentRef = ref(db, `users/${parentId}`);
        const parentSnap = await get(parentRef);

        if (!parentSnap.exists()) break;

        const parent = parentSnap.val();

        if (parent.binary.leftChild === currentChildId) {

            await update(parentRef, {
                "binary/leftCount": (parent.binary.leftCount || 0) + 1,
            });

        } else if (parent.binary.rightChild === currentChildId) {

            await update(parentRef, {
                "binary/rightCount": (parent.binary.rightCount || 0) + 1,
            });

        }

        currentChildId = parentId;

    }

}