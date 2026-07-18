export function verifyMatrix(user) {

    if (!user) {

        return {

            pass: false,

            checks: [],
        };
    }

    const matrix =
        user.matrix || {};

    const checks = [

        {

            name: "Matrix Found",

            pass:
                matrix !== undefined,
        },

        {

            name: "Total Team",

            pass:
                matrix.totalTeam >= 0,
        },

        {

            name: "Children Count",

            pass:
                matrix.childrenCount >= 0,
        },

        {

            name: "Current Step",

            pass:
                matrix.currentStep > 0,
        },

        {

            name: "Completed Steps",

            pass:
                matrix.completedSteps >= 0,
        },

        {

            name: "Completion Status",

            pass:
                typeof matrix.isCompleted ===
                "boolean",
        },
    ];

    const pass = checks.every(
        (item) => item.pass
    );

    return {

        pass,

        checks,
    };
}