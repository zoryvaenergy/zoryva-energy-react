const TEST_MODE = true;

import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function checkDuplicateMobile(mobile) {

    if (TEST_MODE) {

        return {
            success: true,
        };

    }

    const usersRef = ref(db, "users");

    const snapshot = await get(usersRef);

    if (snapshot.exists()) {

        const users = snapshot.val();

        for (const key in users) {

            if (users[key].profile.mobile === mobile) {

                return {
                    success: false,
                    message: "Mobile Number Already Registered!",
                };

            }

        }

    }

    return {
        success: true,
    };

}