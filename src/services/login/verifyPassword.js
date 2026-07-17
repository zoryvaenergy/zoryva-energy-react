export function verifyPassword(user, password) {

    if (
        String(user.auth.password) !== String(password)
    ) {

        return {

            success: false,

            message: "Invalid Password"

        };

    }

    return {

        success: true

    };

}