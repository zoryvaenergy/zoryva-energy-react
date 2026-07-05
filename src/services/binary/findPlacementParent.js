import { db } from "../../firebase/firebase";
import { ref, get } from "firebase/database";

export async function findPlacementParent(sponsorId, side) {

    const usersRef = ref(db, "users");
    const snapshot = await get(usersRef);

    if (!snapshot.exists()) {
        return null;
    }

    const users = snapshot.val();
    const sponsor = users[sponsorId];

if (!sponsor) {
    return null;
}
let currentUser = sponsor;
if (side === "left") {
    while (currentUser.binary.leftChild) {

    currentUser = users[currentUser.binary.leftChild];

}

    // Left Chain Logic

} else if (side === "right") {
    while (currentUser.binary.rightChild) {

    currentUser = users[currentUser.binary.rightChild];

}

    // Right Chain Logic

}

    // Logic next step me likhenge

    return currentUser;

}