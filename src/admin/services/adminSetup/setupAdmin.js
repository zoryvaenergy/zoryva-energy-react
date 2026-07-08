import { validateAdminForm } from "./validateAdminForm";
import { checkAdminExists } from "./checkAdminExists";
import { saveAdmin } from "./saveAdmin";

export async function setupAdmin(formData) {

    // Validate Form
    const validation = validateAdminForm(formData);

    if (!validation.success) {
        return validation;
    }

    // Check Existing Admin
    const adminExists = await checkAdminExists();

    if (adminExists) {
        return {
            success: false,
            message: "Owner Admin already exists."
        };
    }

    // Get Form Data
    const {
        name,
        mobile,
        email,
        password
    } = formData;

    // Current Date & Time
    const now = new Date();

    const createdDate = now.toLocaleDateString();

    const createdTime = now.toLocaleTimeString();

    // Admin Object
    const adminData = {

        auth: {
            userId: "zoryvaadmin234",
            password
        },

        profile: {
            name,
            mobile,
            email,
            role: "OWNER",
            status: "ACTIVE",
            createdDate,
            createdTime,
            lastLogin: ""
        }

    };

    // Save Admin
    const saveResult = await saveAdmin(adminData);

    if (!saveResult.success) {
        return saveResult;
    }

    return {
        success: true,
        message: "Owner Admin Created."
    };

}