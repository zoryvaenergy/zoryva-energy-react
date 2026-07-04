export function verifyPassword(user, password) {

    if (user.auth.password !== password) {
        return {
            success: false,
            message: "Invalid Password"
        };
    }

    return {
        success: true
    };
}