import { db } from "../../firebase/firebase";
import { ref, runTransaction } from "firebase/database";

export async function generateUserId() {

    const counterRef = ref(db, "settings/lastUserNumber");

    const result = await runTransaction(counterRef, (currentValue) => {
        return (currentValue || 0) + 1;
    });

    if (!result.committed) {
        throw new Error("User ID generation failed.");
    }

    const nextNumber = result.snapshot.val();

    const userId = `ZEN${String(nextNumber).padStart(6, "0")}`;
    return userId;

}