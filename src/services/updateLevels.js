import {

    ref,
    get,
    update

} from "firebase/database";

import { db } from "../firebase/firebase";

export async function updateLevels(
    sponsorId
) {

    console.log(

        "Updating levels for:",

        sponsorId

    );
let currentSponsor = sponsorId;

for (

    let level = 1;

    level <= 10;

    level++

) {

    if (!currentSponsor) {

        break;

    }

    const userRef = ref(

        db,

        `users/${currentSponsor}`

    );

    const snapshot = await get(

        userRef

    );

    if (!snapshot.exists()) {

        break;

    }

    const user = snapshot.val();
const currentCount =

    user.levels?.[`level${level}`] || 0;

await update(

    ref(

        db,

        `users/${currentSponsor}/levels`

    ),

    {

        [`level${level}`]:

            currentCount + 1

    }

);
    console.log(

        `Level ${level}:`,

        currentSponsor

    );
currentSponsor =

    user.profile?.sponsorId;
}
}