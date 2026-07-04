import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/login/loginUser";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        userId: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async () => {

        const result = await loginUser(formData);

        if (result.success) {
            alert("Login Successful");
            navigate("/dashboard");
        } else {
            alert(result.message);
        }

    };

    return (
        <div style={{ padding: "50px", textAlign: "center" }}>

            <h2>ZORYVA ENERGY LOGIN</h2>

            <br />

            <input
                type="text"
                name="userId"
                placeholder="User ID"
                value={formData.userId}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>

        </div>
    );
}

export default Login;