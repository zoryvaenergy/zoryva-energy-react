import { db } from "../../firebase/firebase";
import { ref, get, update } from "firebase/database";
import { findPlacementParent } from "./findPlacementParent";

export async function placeUser(userId, sponsorId, side) {

    const parent = await findPlacementParent(sponsorId, side);

    if (!parent) {
        return false;
    }
    const parentRef = ref(db, `users/${parent.profile.userId}`);
const newUserRef = ref(db, `users/${userId}`);

    // Placement Logic Next Step

    return true;

}