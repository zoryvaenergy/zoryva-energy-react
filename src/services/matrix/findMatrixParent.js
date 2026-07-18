import { db } from "../../firebase/firebase";

import {
    ref,
    get,
} from "firebase/database";

export async function findMatrixParent() {

    const usersRef = ref(
        db,
        "users"
    );

    const snapshot = await get(
        usersRef
    );

    if (!snapshot.exists()) {

        return null;

    }

    const users = snapshot.val();

    for (const userId in users) {

        const user = users[userId];

        const childrenCount =
            user.matrix?.childrenCount || 0;

        if (childrenCount < 4) {

            console.log(
                "MATRIX PARENT:",
                userId,
                "LEVEL:",
                user.matrix?.level
            );

            return {

                parentId: userId,

                level:
                    (user.matrix?.level || 0) + 1,

            };

        }

    }

    return null;

}