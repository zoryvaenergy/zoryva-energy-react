export function createSession(user) {

    localStorage.setItem("zoryvaUser", JSON.stringify(user));

    return {
        success: true,
        message: "Login Successful"
    };

}