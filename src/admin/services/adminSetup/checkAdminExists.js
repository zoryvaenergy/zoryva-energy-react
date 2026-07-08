import { db } from "../../../firebase/firebase";
import { ref, get } from "firebase/database";

export async function checkAdminExists() {

  const snapshot = await get(ref(db, "admins"));

  return snapshot.exists();

}