import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function getUserById(userId) {

    const userRef = ref(
        db,
        `users/${userId}`
    );

    const snapshot = await get(userRef);

    if (snapshot.exists()) {

        return snapshot.val();

    }

    return null;
}