import { getLevelUsers } from "./getLevelUsers";

export async function verifyActualLevels(user) {

    if (!user) {

        return {

            pass: false,

            checks: [],

        };

    }

    let pass = true;

    const checks = [];

    const userId =

        user.profile?.userId;

    for (

        let level = 1;

        level <= 10;

        level++

    ) {

        const actualUsers =

            await getLevelUsers(

                userId,

                level

            );

        const actualCount =

            actualUsers.length;

        const savedCount =

            user.levels?.[

                `level${level}`

            ] || 0;

        const levelPass =

            actualCount === savedCount;

        if (!levelPass) {

            pass = false;

        }

        checks.push({

            name:

                `Level ${level} Correct (Saved: ${savedCount}, Actual: ${actualCount})`,

            pass: levelPass,

        });

    }

    return {

        pass,

        checks,

    };

}