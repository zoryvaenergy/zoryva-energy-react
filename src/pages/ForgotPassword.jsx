import { useState } from "react";
import { resetPassword } from "../services/login/resetPassword";
function ForgotPassword() {

    const [userId, setUserId] = useState("");

    const [mobile, setMobile] = useState("");

    const [newPassword, setNewPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleResetPassword(e) {

    e.preventDefault();

    if (newPassword !== confirmPassword) {

        alert("Passwords do not match");

        return;

    }

    const result = await resetPassword(

        userId,
        mobile,
        newPassword

    );

    alert(result.message);

}

    return (

        <div className="login-container">

            <h2>Forgot Password</h2>
            <p
    style={{
        color: "orange",
        fontSize: "14px",
        marginBottom: "20px",
    }}
>

    🔒 OTP verification will be available soon.

</p>

            <form onSubmit={handleResetPassword}>

                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) =>
                        setUserId(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Registered Mobile Number"
                    value={mobile}
                    onChange={(e) =>
                        setMobile(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) =>
                        setNewPassword(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) =>
                        setConfirmPassword(
                            e.target.value
                        )
                    }
                />

                <button type="submit">

                    Reset Password

                </button>

            </form>

        </div>

    );

}

export default ForgotPassword;