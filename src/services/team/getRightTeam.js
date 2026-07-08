import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function getRightTeam(userId) {

  const snapshot = await get(ref(db, "users"));

  if (!snapshot.exists()) {
    return [];
  }

  const users = snapshot.val();

  // Root User
  const rootUser = users[userId];

  if (!rootUser) {
    return [];
  }

  // Root ka Right Child
  const rightChildId = rootUser.binary?.rightChild;

  if (!rightChildId) {
    return [];
  }

  const rightTeam = [];

  function collectSubTree(currentUserId) {

    const currentUser = users[currentUserId];

    if (!currentUser) return;

    rightTeam.push(currentUser);

    console.log(
      "Right Member :",
      currentUser.profile.userId,
      currentUser.profile.name
    );

    if (currentUser.binary?.leftChild) {
      collectSubTree(currentUser.binary.leftChild);
    }

    if (currentUser.binary?.rightChild) {
      collectSubTree(currentUser.binary.rightChild);
    }

  }

  collectSubTree(rightChildId);

  return rightTeam;

}