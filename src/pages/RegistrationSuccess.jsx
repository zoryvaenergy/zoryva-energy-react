import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/registrationSuccess.css";
import logo from "../images/logo.png";
import {
  FaUser,
  FaIdCard,
  FaUsers,
  FaMapMarkerAlt,
  FaCopy,
  FaCheckCircle,
  FaHome,
  FaSignInAlt,
} from "react-icons/fa";
function RegistrationSuccess() {

    const navigate = useNavigate();
    const { state } = useLocation();

    const user = state || {};
    const [copied, setCopied] = useState(false);

const copyUserId = () => {

    navigator.clipboard.writeText(user.userId);

    setCopied(true);

    setTimeout(() => {

        setCopied(false);

    }, 2000);

};

    return (

        <div className="success-page">

            <div className="success-card">

                <img
                    src={logo}
                    alt="ZORYVA ENERGY"
                    className="success-logo"
                />

                <div className="success-icon">
                    ✅
                </div>

                <h1>
    🎉 Congratulations {user.name}!
</h1>

<h2>
    Welcome To
</h2>

<h2 className="company-name">
    ZORYVA ENERGY
</h2>

<p className="tag-line">
    Clean Energy • Bright Future
</p>

                <p className="success-message">

                    Your Registration has been completed successfully.

                </p>

                <div className="member-box">

                    <div className="row">

    <span className="info-label">
    <FaUser className="info-icon" />
    Member Name
</span>

<strong>{user.name}</strong>

</div>

                    <div className="row">

    <span className="info-label">
    <FaIdCard className="info-icon" />
    User ID
</span>

    <div>

        <strong>{user.userId}</strong>

        <button
            className="copy-btn"
            onClick={copyUserId}
        >
            <FaCopy />
        </button>

    </div>

</div>

                    <div className="row">

                        <span>👨 Sponsor ID</span>

                        <strong>{user.sponsorId}</strong>

                    </div>

                    <div className="row">

                        <span>📍 Position</span>

                        <strong>{user.side}</strong>

                    </div>

                </div>
                {
                copied && (
        <p className="copy-message">
            ✅ User ID Copied Successfully
        </p>
    )
}

                <div className="button-group">

                    <button
                        className="success-login-btn"
                        onClick={() => navigate("/login")}
                    >
                        Login Now
                    </button>

                    <button
                        className="success-home-btn"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </button>

                </div>

            </div>

        </div>

    );

}

export default RegistrationSuccess;