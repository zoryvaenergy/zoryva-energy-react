export function adminLogout() {

    localStorage.removeItem("zoryvaAdmin");

    return {
        success: true,
        message: "Logout Successful."
    };

}