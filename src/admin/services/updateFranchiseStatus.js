import { ref, update } from "firebase/database";

import { db } from "../../firebase/firebase";

export async function updateFranchiseStatus(
    franchiseId,
    status
) {

    try {

        const franchiseRef = ref(

            db,

            `franchiseApplications/${franchiseId}`

        );

        await update(

            franchiseRef,

            {

                status,

            }

        );

        return true;

    }

    catch (error) {

        console.error(error);

        return false;

    }

}