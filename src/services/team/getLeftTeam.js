import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function getLeftTeam(userId) {

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

  // Root ka Left Child
  const leftChildId = rootUser.binary?.leftChild;

  if (!leftChildId) {
    return [];
  }

  const leftTeam = [];

  function collectSubTree(currentUserId) {

    const currentUser = users[currentUserId];

    if (!currentUser) return;

    leftTeam.push(currentUser);

    console.log(
      "Left Member :",
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

  collectSubTree(leftChildId);

  return leftTeam;

}