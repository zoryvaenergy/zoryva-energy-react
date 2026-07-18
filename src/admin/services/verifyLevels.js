export function verifyLevels(user) {

    if (!user) {

        return {

            pass: false,

            checks: [],
        };
    }

    let pass = true;

    const checks = [];

    for (let i = 1; i <= 10; i++) {

        const value =
            user.levels?.[
                `level${i}`
            ] || 0;

        if (value >= 0) {

            checks.push({

                name:
                    `Level ${i}`,

                pass: true,
            });

        } else {

            pass = false;

            checks.push({

                name:
                    `Level ${i}`,

                pass: false,
            });
        }
    }

    return {

        pass,

        checks,
    };
}