import { validateLogin } from "./validateLogin";
import { checkUser } from "./checkUser";
import { verifyPassword } from "./verifyPassword";
import { createSession } from "./createSession";

export async function loginUser(formData) {

    console.log("Login Engine Started");

    // Step 1 : Validate Input
    const validation = validateLogin(formData);

    if (!validation.success) {
        return validation;
    }

    // Step 2 : Check User
    const userCheck = await checkUser(formData.userId);

    if (!userCheck.success) {
        return userCheck;
    }

    // Step 3 : Verify Password
    const passwordCheck = verifyPassword(
        userCheck.user,
        formData.password
    );

    if (!passwordCheck.success) {
        return passwordCheck;
    }

    // Step 4 : Create Session
    const session = createSession(userCheck.user);

    return session;
}