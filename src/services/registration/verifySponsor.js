import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function verifySponsor(sponsorId) {

    const usersRef = ref(db, "users");
    const snapshot = await get(usersRef);

    // First Company User (No Sponsor Required)
    if (!snapshot.exists()) {
        return {
            success: true,
            sponsor: null
        };
    }

    // Sponsor Required After First User
    if (!sponsorId || sponsorId.trim() === "") {
        return {
            success: false,
            message: "Sponsor ID is required."
        };
    }

    const users = snapshot.val();

    for (const key in users) {

        if (users[key].profile.userId === sponsorId.trim()) {

            return {
                success: true,
                sponsor: users[key].profile
            };

        }

    }

    return {
        success: false,
        message: "Invalid Sponsor ID!"
    };

}