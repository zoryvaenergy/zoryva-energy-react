import { db } from "../../firebase/firebase";

import {
    ref,
    get,
    update
} from "firebase/database";

export async function resetPassword(
    userId,
    mobile,
    newPassword
) {

    const userRef = ref(
        db,
        `users/${userId}`
    );

    const snapshot = await get(userRef);

    if (!snapshot.exists()) {

        return {
            success: false,
            message: "User not found"
        };

    }

    const user = snapshot.val();

    if (
        user.profile?.mobile !== mobile
    ) {

        return {
            success: false,
            message: "Mobile number is incorrect"
        };

    }

    await update(userRef, {

        auth: {
            ...user.auth,
            password: newPassword
        }

    });

    return {

        success: true,
        message: "Password reset successful"

    };

}