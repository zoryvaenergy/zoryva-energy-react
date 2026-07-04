import { db } from "../../firebase/firebase";
import { ref, set } from "firebase/database";

export async function saveUser(userData) {

    const userRef = ref(db, `users/${userData.profile.userId}`);

    await set(userRef, userData);

}