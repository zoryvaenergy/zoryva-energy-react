import { ref, get } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function getFranchiseCount() {

    try {

        const franchiseRef = ref(
            db,
            "franchiseApplications"
        );

        const snapshot = await get(
            franchiseRef
        );

        if (!snapshot.exists()) {

            return 0;

        }

        return Object.keys(
            snapshot.val()
        ).length;

    }

    catch (error) {

        console.error(error);

        return 0;

    }

}