import { db } from "../../firebase/firebase";
import {
    ref,
    get,
    update,
    runTransaction
} from "firebase/database";
import { findPlacementParent } from "./findPlacementParent";

export async function placeUser(userId, sponsorId, side) {

    const parent = await findPlacementParent(sponsorId, side);

    if (!parent) {
        return false;
    }
          console.log(
    "PLACEMENT PARENT:",
    parent.profile.userId,
    "NEW USER:",
    userId
);
    const parentRef = ref(
        db,
        `users/${parent.profile.userId}`
    );

    const newUserRef = ref(
        db,
        `users/${userId}`
    );
    const binaryRef = ref(
    db,
    `users/${parent.profile.userId}/binary`
);
       const transactionResult = await runTransaction(

    binaryRef,

    (binary) => {

        if (!binary) {
            return binary;
        }

        if (side === "left") {

            if (binary.leftChild) {

                return;

            }

            binary.leftChild = userId;

        }

        else {

            if (binary.rightChild) {

                return;

            }

            binary.rightChild = userId;

        }

        return binary;

    }

);
if (!transactionResult.committed) {

    console.log(
        "TRANSACTION FAILED:",
        userId
    );

    return false;

}
await update(parentRef, {

    [side === "left"
        ? "binary/nextLeftSlot"
        : "binary/nextRightSlot"]: userId,

});

    await update(newUserRef, {
        "binary/parentId": parent.profile.userId,
        "binary/position": side,
    });

    return true;
}