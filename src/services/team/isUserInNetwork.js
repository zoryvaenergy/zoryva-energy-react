import { getUserById } from "./getUserById";

export async function isUserInNetwork(
    rootUserId,
    targetUserId
) {

    if (rootUserId === targetUserId) {

        return true;

    }

    const rootUser = await getUserById(
        rootUserId
    );

    if (!rootUser) {

        return false;

    }

    async function checkNode(
        currentUserId
    ) {

        if (!currentUserId) {

            return false;

        }

        if (
            currentUserId === targetUserId
        ) {

            return true;

        }

        const currentUser =
            await getUserById(
                currentUserId
            );

        if (!currentUser) {

            return false;

        }

        const leftFound =
            await checkNode(
                currentUser.binary
                    ?.leftChild
            );

        if (leftFound) {

            return true;

        }

        return await checkNode(
            currentUser.binary
                ?.rightChild
        );
    }

    return await checkNode(
        rootUser.binary?.leftChild
    ) || await checkNode(
        rootUser.binary?.rightChild
    );
}