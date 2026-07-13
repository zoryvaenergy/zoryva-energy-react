import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function getTodayJoining() {

    const usersRef = ref(db, "users");

    const snapshot = await get(usersRef);

    if (!snapshot.exists()) {

        return [];

    }

    const users = snapshot.val();

    const today = new Date();

    const todayDate =
        String(today.getDate()).padStart(2, "0") +
        "/" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "/" +
        today.getFullYear();

    const todayUsers = [];

    Object.values(users).forEach((user) => {

        if (

            user.profile?.registrationDate ===
            todayDate

        ) {

            todayUsers.push(user);

        }

    });

    return todayUsers;

}