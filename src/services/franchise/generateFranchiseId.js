import { ref, get, set } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function generateFranchiseId() {

    const counterRef = ref(
        db,
        "system/franchiseCounter"
    );

    const snapshot = await get(counterRef);

    let nextNumber = 1;

    if (snapshot.exists()) {

        nextNumber = snapshot.val() + 1;
    }

    await set(counterRef, nextNumber);

    const franchiseId =
        "FRA" +
        String(nextNumber).padStart(6, "0");

    return franchiseId;
}