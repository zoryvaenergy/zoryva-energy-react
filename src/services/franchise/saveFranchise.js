import { ref, set } from "firebase/database";

import { db } from "../../firebase/firebase";

import { generateFranchiseId } from "./generateFranchiseId";

export async function saveFranchise(formData) {

    try {

        const franchiseId =
            await generateFranchiseId();

        const franchiseData = {

            franchiseId,

            ...formData,

            status: "PENDING",

            createdAt: Date.now(),

        };

        const franchiseRef = ref(

            db,

            `franchiseApplications/${franchiseId}`

        );

        await set(

            franchiseRef,

            franchiseData

        );

        return {

            success: true,

            franchiseId,

        };

    }

    catch (error) {

        console.error(error);

        return {

            success: false,

        };

    }

}