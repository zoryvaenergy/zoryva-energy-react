import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";

/**
 * Calculate Actual Direct Team
 */
export async function calculateActualDirectTeam(userId) {

    const snapshot = await get(ref(db, "users"));

    if (!snapshot.exists()) {
        return 0;
    }

    const users = snapshot.val();

    let count = 0;

    Object.values(users).forEach((user) => {

        if (user.profile?.sponsorId === userId) {
            count++;
        }

    });

    return count;

}

/**
 * Count Complete Binary Tree
 */
async function countBinaryTree(userId) {

    if (!userId) {
        return 0;
    }

    const snapshot = await get(ref(db, `users/${userId}`));

    if (!snapshot.exists()) {
        return 0;
    }

    const user = snapshot.val();

    let count = 1;

    count += await countBinaryTree(user.binary?.leftChild);
    count += await countBinaryTree(user.binary?.rightChild);

    return count;

}/**
 * Calculate Actual Left Count
 */
export async function calculateActualLeftCount(userId) {

    const snapshot = await get(ref(db, `users/${userId}`));

    if (!snapshot.exists()) {
        return 0;
    }

    const user = snapshot.val();

    return await countBinaryTree(user.binary?.leftChild);

}