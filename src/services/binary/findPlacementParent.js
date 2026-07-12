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

        while (
            currentUser &&
            currentUser.binary &&
            currentUser.binary.leftChild
        ) {

            const nextUser =
                users[currentUser.binary.leftChild];

            if (!nextUser) {
                break;
            }

            currentUser = nextUser;
        }

    } else {

        while (
            currentUser &&
            currentUser.binary &&
            currentUser.binary.rightChild
        ) {

            const nextUser =
                users[currentUser.binary.rightChild];

            if (!nextUser) {
                break;
            }

            currentUser = nextUser;
        }

    }

    return currentUser;
}