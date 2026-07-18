import { db } from "../../firebase/firebase";

import {
    ref,
    get,
    update,
} from "firebase/database";

const STEP_LIMITS = [
    4,
    20,
    84,
    340,
    1364,
    5460,
    21844,
    87380,
    349524,
    1398100,
];

export async function updateMatrixCounts(userId) {

    const userRef = ref(
        db,
        `users/${userId}`
    );

    const snapshot = await get(
        userRef
    );

    if (!snapshot.exists()) {

        return;

    }

    const user = snapshot.val();

    const totalTeam =
        user.matrix?.totalTeam || 0;

    let currentStep = 1;
    let completedSteps = 0;

    for (
        let i = 0;
        i < STEP_LIMITS.length;
        i++
    ) {

        if (
            totalTeam >= STEP_LIMITS[i]
        ) {

            completedSteps = i + 1;
            currentStep = i + 2;

        }

    }

    if (currentStep > 10) {

        currentStep = 10;

    }

    const isCompleted =
        completedSteps >= 10;

    await update(
        ref(
            db,
            `users/${userId}/matrix`
        ),
        {
            currentStep,
            completedSteps,
            isCompleted,
        }
    );

}