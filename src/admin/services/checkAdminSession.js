export function checkAdminSession() {

    const admin = localStorage.getItem("zoryvaAdmin");

    if (!admin) {
        return false;
    }

    return true;

}