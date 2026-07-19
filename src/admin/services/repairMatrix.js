import { db } from "../../firebase/firebase";

import {

    ref,

    get,

    update

} from "firebase/database";

async function calculateMatrixTotalTeam(userId) {

    const snapshot = await get(

        ref(

            db,

            `users/${userId}`

        )

    );

    if (!snapshot.exists()) {

        return 0;

    }

    const user = snapshot.val();

    let total = 0;

    const children =

        user.matrixChildren || {};

    for (

        const childId of Object.values(

            children

        )

    ) {

        total += 1;

        total += await calculateMatrixTotalTeam(

            childId

        );

    }

    return total;

}

export async function repairMatrix(userId) {

    const snapshot = await get(

        ref(

            db,

            `users/${userId}`

        )

    );

    if (!snapshot.exists()) {

        return;

    }

    const user = snapshot.val();

    const children =

        user.matrixChildren || {};

    const childrenCount =

        Object.keys(

            children

        ).length;

    const totalTeam =

        await calculateMatrixTotalTeam(

            userId

        );

    const stepTargets = [

        4,

        16,

        64,

        256,

        1024,

        4096,

        16384,

        65536,

        262144,

        1048576

    ];

    let completedSteps = 0;

    let currentStep = 1;

    for (

        let i = 0;

        i < stepTargets.length;

        i++

    ) {

        if (

            totalTeam >=

            stepTargets[i]

        ) {

            completedSteps = i + 1;

            currentStep = i + 2;

        }

    }

    await update(

        ref(

            db,

            `users/${userId}/matrix`

        ),

        {

            childrenCount,

            totalTeam,

            completedSteps,

            currentStep

        }

    );

    return {

        childrenCount,

        totalTeam,

        completedSteps,

        currentStep

    };

}