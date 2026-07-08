import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function getUserById(userId) {
  const snapshot = await get(ref(db, `users/${userId}`));

  if (snapshot.exists()) {
    return snapshot.val();
  }

  return null;
}