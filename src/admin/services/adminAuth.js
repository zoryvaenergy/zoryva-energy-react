import { get, ref } from "firebase/database";
import { db } from "../../firebase/firebase";

export async function adminAuth(adminId, password) {

    // Check Empty Fields
    if (!adminId || !password) {
        return {
            success: false,
            message: "Admin ID and Password are required."
        };
    }

    try {

        // Read Admin Data
        const adminRef = ref(db, "admin");

        const snapshot = await get(adminRef);

        if (!snapshot.exists()) {
            return {
                success: false,
                message: "Owner Admin not found."
            };
        }

        const admin = snapshot.val();

        // Verify Admin ID
        if (admin.auth.userId !== adminId) {
            return {
                success: false,
                message: "Invalid Admin ID."
            };
        }

        // Verify Password
        if (admin.auth.password !== password) {
            return {
                success: false,
                message: "Invalid Password."
            };
        }

        return {
            success: true,
            message: "Login Successful.",
            admin
        };

    } catch (error) {

        console.error(error);

        return {
            success: false,
            message: "Something went wrong."
        };

    }

}