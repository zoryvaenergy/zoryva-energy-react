import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function getDirectTeam(userId) {

  const snapshot = await get(ref(db, "users"));

  if (!snapshot.exists()) {
    return [];
  }

  const users = snapshot.val();

  const directTeam = [];

  Object.values(users).forEach((user) => {

    if (user.profile?.sponsorId === userId) {

      // Return Full User Object
      directTeam.push(user);

    }

  });

  return directTeam;

}