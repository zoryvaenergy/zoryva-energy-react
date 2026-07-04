export function validateLogin(data) {

    if (!data.userId) {
        return {
            success: false,
            message: "User ID Required"
        };
    }

    if (!data.password) {
        return {
            success: false,
            message: "Password Required"
        };
    }

    return {
        success: true
    };
}