export async function verifyActualMatrix(user) {

    if (!user) {

        return {

            pass: false,

            checks: [],

        };

    }

    let pass = true;

    const checks = [];

    const savedTotalTeam =

        user.matrix?.totalTeam || 0;

    const savedChildrenCount =

        user.matrix?.childrenCount || 0;

    const savedCurrentStep =

        user.matrix?.currentStep || 1;

    const savedCompletedSteps =

        user.matrix?.completedSteps || 0;

    const actualChildrenCount =

        Object.keys(

            user.matrixChildren || {}

        ).length;

    const totalTeamPass =

        savedTotalTeam >= 0;

    const childrenPass =

        savedChildrenCount === actualChildrenCount;

    const currentStepPass =

        savedCurrentStep >= 1;

    const completedStepsPass =

        savedCompletedSteps >= 0;

    if (!totalTeamPass) {

        pass = false;

    }

    if (!childrenPass) {

        pass = false;

    }

    if (!currentStepPass) {

        pass = false;

    }

    if (!completedStepsPass) {

        pass = false;

    }

    checks.push({

        name:

            `Matrix Total Team (Saved: ${savedTotalTeam})`,

        pass: totalTeamPass,

    });

    checks.push({

        name:

            `Children Count (Saved: ${savedChildrenCount}, Actual: ${actualChildrenCount})`,

        pass: childrenPass,

    });

    checks.push({

        name:

            `Current Step (Saved: ${savedCurrentStep})`,

        pass: currentStepPass,

    });

    checks.push({

        name:

            `Completed Steps (Saved: ${savedCompletedSteps})`,

        pass: completedStepsPass,

    });

    return {

        pass,

        checks,

    };

}