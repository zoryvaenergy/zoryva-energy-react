import { ref, get } from "firebase/database";

import { db } from "../../firebase/firebase";

export async function getFranchiseApplications() {

    try {

        const franchiseRef = ref(

            db,

            "franchiseApplications"

        );

        const snapshot = await get(

            franchiseRef

        );

        if (!snapshot.exists()) {

            return [];

        }

        return Object.values(

            snapshot.val()

        );

    }

    catch (error) {

        console.error(error);

        return [];

    }

}