import { db } from "../../firebase/firebase";
import { ref, get } from "firebase/database";

export async function checkUser(userId) {

    const userRef = ref(db, `users/${userId}`);

    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
        return {
            success: false,
            message: "User Not Found"
        };
    }

    return {
        success: true,
        user: snapshot.val()
    };
}