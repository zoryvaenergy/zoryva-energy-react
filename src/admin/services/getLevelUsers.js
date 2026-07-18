import { getDirectLevel } from "./getDirectLevel";

export async function getLevelUsers(
    userId,
    targetLevel
) {

    let currentUsers = [userId];

    for (
        let level = 1;
        level <= targetLevel;
        level++
    ) {

        const nextUsers = [];

        for (const id of currentUsers) {

            const directUsers =
                await getDirectLevel(id);

            nextUsers.push(
                ...directUsers
            );
        }

        currentUsers = nextUsers;
    }

    return currentUsers;
}