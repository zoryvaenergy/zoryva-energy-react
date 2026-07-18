import {
    ref,
    get,
} from "firebase/database";

import {
    db,
} from "../../firebase/firebase";

export async function getDirectLevel(
    sponsorId
) {

    const snapshot = await get(
        ref(
            db,
            "users"
        )
    );

    if (!snapshot.exists()) {

        return [];

    }

    const users =
        snapshot.val();

    const directUsers = [];

    Object.values(users).forEach(
        (user) => {

            if (

                user.profile?.sponsorId === sponsorId

            ) {

                directUsers.push(
                    user.profile.userId
                );

            }

        }
    );

    return directUsers;

}