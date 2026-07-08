import { db } from "../../firebase/firebase";
import { ref, get } from "firebase/database";

/**
 * Get User Data
 */
async function getUser(userId) {

    const userRef = ref(db, `users/${userId}`);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
        return null;
    }

    return snapshot.val();

}
/**
 * Verify Profile
 */
export async function verifyProfile(userId) {

    const user = await getUser(userId);

    if (!user) {
        return {
            success: false,
            message: "User Not Found"
        };
    }

    if (!user.profile) {
        return {
            success: false,
            message: "Profile Missing"
        };
    }

    return {
        success: true,
        message: "Profile Verified",
        data: user.profile
    };

}
/**
 * Verify Wallet
 */
export async function verifyWallet(userId) {

    const user = await getUser(userId);

    if (!user) {
        return {
            success: false,
            message: "User Not Found"
        };
    }

    if (!user.wallet) {
        return {
            success: false,
            message: "Wallet Missing"
        };
    }

    return {
        success: true,
        message: "Wallet Verified",
        data: user.wallet
    };

}/**
 * Verify Binary Parent
 */
export async function verifyBinaryParent(userId) {

    const user = await getUser(userId);

    if (!user) {
        return {
            success: false,
            message: "User Not Found"
        };
    }

    const parentId = user.binary?.parentId;

    // Root User
    if (!parentId) {
        return {
            success: true,
            message: "Root User",
        };
    }

    const parent = await getUser(parentId);

    if (!parent) {
        return {
            success: false,
            message: "Parent Not Found",
        };
    }

    return {
        success: true,
        message: "Parent Verified",
        data: parent.profile.userId,
    };

}/**
 * Verify Binary Position
 */
export async function verifyBinaryPosition(userId) {

    const user = await getUser(userId);

    if (!user) {
        return {
            success: false,
            message: "User Not Found",
        };
    }

    const parentId = user.binary?.parentId;

    // Root User
    if (!parentId) {
        return {
            success: true,
            message: "Root User",
        };
    }

    const parent = await getUser(parentId);

    if (!parent) {
        return {
            success: false,
            message: "Parent Not Found",
        };
    }

    const position = user.binary?.position;

    if (
        position === "left" &&
        parent.binary?.leftChild === userId
    ) {
        return {
            success: true,
            message: "Left Position Verified",
        };
    }

    if (
        position === "right" &&
        parent.binary?.rightChild === userId
    ) {
        return {
            success: true,
            message: "Right Position Verified",
        };
    }

    return {
        success: false,
        message: "Binary Position Mismatch",
    };

}
/**
 * Count Users In One Binary Leg
 */
async function countLegUsers(userId) {

    if (!userId) {
        return 0;
    }

    const user = await getUser(userId);

    if (!user) {
        return 0;
    }

    let count = 1;

    count += await countLegUsers(user.binary?.leftChild);

    count += await countLegUsers(user.binary?.rightChild);

    return count;

}
/**
 * Verify Left Count
 */
export async function verifyLeftCount(userId) {

    const user = await getUser(userId);

    if (!user) {
        return {
            success: false,
            message: "User Not Found",
        };
    }

    const stored = user.binary?.leftCount || 0;

    const actual = await countLegUsers(user.binary?.leftChild);

    return {
        success: stored === actual,
        stored,
        actual,
        message: stored === actual
            ? "Left Count Verified"
            : "Left Count Mismatch",
    };

}
/**
 * Verify Right Count
 */
export async function verifyRightCount(userId) {

    const user = await getUser(userId);

    if (!user) {
        return {
            success: false,
            message: "User Not Found",
        };
    }

    const stored = user.binary?.rightCount || 0;

    const actual = await countLegUsers(user.binary?.rightChild);

    return {
        success: stored === actual,
        stored,
        actual,
        message: stored === actual
            ? "Right Count Verified"
            : "Right Count Mismatch",
    };

}
/**
 * Run Full Binary Debug
 */
export async function runFullBinaryDebug(userId) {

    const profile = await verifyProfile(userId);
    const wallet = await verifyWallet(userId);
    const parent = await verifyBinaryParent(userId);
    const position = await verifyBinaryPosition(userId);
    const leftCount = await verifyLeftCount(userId);
    const rightCount = await verifyRightCount(userId);

    return {
        profile,
        wallet,
        parent,
        position,
        leftCount,
        rightCount,
    };

}
/**
 * Get All Users In One Binary Leg
 */
async function getLegUsers(userId) {

    if (!userId) {
        return [];
    }

    const user = await getUser(userId);

    if (!user) {
        return [];
    }

    let users = [userId];

    const leftUsers = await getLegUsers(user.binary?.leftChild);
    const rightUsers = await getLegUsers(user.binary?.rightChild);

    users = [...users, ...leftUsers, ...rightUsers];

    return users;

}