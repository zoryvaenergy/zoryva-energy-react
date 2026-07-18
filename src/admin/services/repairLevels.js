import {

    getLevelUsers,

} from "./getLevelUsers";
import {
    ref,
    get,
    update,
} from "firebase/database";

import { db } from "../../firebase/firebase";

export async function repairLevels(
    userId
) {

    const snapshot = await get(
        ref(
            db,
            "users"
        )
    );

    if (
        !snapshot.exists()
    ) {

        return;
    }

    

    const levels = {

        level1: 0,
        level2: 0,
        level3: 0,
        level4: 0,
        level5: 0,
        level6: 0,
        level7: 0,
        level8: 0,
        level9: 0,
        level10: 0,
    };

    console.log(
        "Repair Started:",
        userId
    );
for (

    let level = 1;

    level <= 10;

    level++

) {

    const usersAtLevel =

        await getLevelUsers(

            userId,

            level

        );

    levels[
        `level${level}`
    ] = usersAtLevel.length;
}
    await update(

    ref(

        db,

        `users/${userId}/levels`

    ),

    levels

);

console.log(

    "Levels Repaired:",

    userId,

    levels

);
    return levels;
}