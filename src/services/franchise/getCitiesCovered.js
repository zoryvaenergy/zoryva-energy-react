import { ref, get } from "firebase/database";

import { db } from "../../firebase/firebase";

export async function getCitiesCovered() {

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

        const applications = Object.values(
            snapshot.val()
        );

      const uniqueCities = new Set(

    applications

        .map((item) => item.city)

        .filter(

            (city) => city && city.trim() !== ""

        )

);

        return uniqueCities.size;

    }

    catch (error) {

        console.error(error);

        return 0;

    }

}