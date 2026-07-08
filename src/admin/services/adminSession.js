export function adminSession(admin) {

    if (!admin) {
        return {
            success: false,
            message: "Admin data not found."
        };
    }

    localStorage.setItem(
        "zoryvaAdmin",
        JSON.stringify(admin)
    );

    return {
        success: true,
        message: "Admin Session Created."
    };

}