import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/login/loginUser";
import { Link } from "react-router-dom";
import "../styles/login.css";
import logo from "../images/logo.png";
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

    <div className="login-page">

        <div className="login-card">
           <img
    src={logo}
    alt="Zoryva Logo"
    className="login-logo"
/>
            <h1>ZORYVA ENERGY</h1>

            <h3>Login</h3>

            <input
                type="text"
                name="userId"
                placeholder="User ID"
                value={formData.userId}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />

            <button
                className="login-btn"
                onClick={handleLogin}
            >
                Login
            </button>

            <p className="forgot-link">

                <Link to="/forgot-password">

                    Forgot Password?

                </Link>

            </p>

            <p className="coming-soon">

                ⚡ OTP Reset Coming Soon

            </p>

        </div>

    </div>

);

}

export default Login;
