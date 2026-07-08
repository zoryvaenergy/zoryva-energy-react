import { db } from "../../firebase/firebase";
import { ref, get } from "firebase/database";

export async function getBinaryNode(userId) {

  const snapshot = await get(ref(db, `users/${userId}`));

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.val();

}

export async function getChildNode(userId) {

  if (!userId) {
    return null;
  }

  const snapshot = await get(ref(db, `users/${userId}`));

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.val();

}