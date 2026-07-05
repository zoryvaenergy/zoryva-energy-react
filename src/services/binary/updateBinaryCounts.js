import { db } from "../../firebase/firebase";
import { ref, get, update } from "firebase/database";

export async function updateBinaryCounts(userId) {
    const userRef = ref(db, `users/${userId}`);
const snapshot = await get(userRef);

if (!snapshot.exists()) {
    return false;
}

const user = snapshot.val();
let currentParentId = user.binary.parentId;
const position = user.binary.position;
while (currentParentId) {

    const parentRef = ref(db, `users/${currentParentId}`);
    const parentSnapshot = await get(parentRef);

    if (!parentSnapshot.exists()) {
        break;
    }

    const parent = parentSnapshot.val();
    if (position === "left") {

    await update(parentRef, {
        "binary/leftCount": (parent.binary?.leftCount || 0) + 1,
    });

} else {

    await update(parentRef, {
        "binary/rightCount": (parent.binary?.rightCount || 0) + 1,
    });

}
currentParentId = parent.binary?.parentId || "";

}

}