import { useNavigate } from "react-router-dom";
import "../styles/portal.css";
import logo from "../images/logo.png";
function Portal() {

  const navigate = useNavigate();

  return (

    <div className="portal-container">

      <div className="portal-card">
       <div className="portal-logo">

  <img
    src={logo}
    alt="ZORYVA ENERGY"
  />

</div>
        <h1 className="portal-title">
          ZORYVA ENERGY
        </h1>

        <h2 className="portal-subtitle">
          Official Member Portal
        </h2>

        <p className="portal-text">
          Welcome to ZORYVA ENERGY
        </p>

        <div className="portal-buttons">

          <button onClick={() => navigate("/login")}>
            Login
          </button>

          <button onClick={() => navigate("/register")}>
            Register
          </button>

        </div>

        <hr />
<h3 className="portal-section-title">
  Quick Access
</h3>
        <div className="portal-links">

          <p>🔑 Forgot Password (Coming Soon)</p>

          <p>📲 Download App (Coming Soon)</p>

          <p>🎧 Support Center (Coming Soon)</p>

          <p>📢 Announcements (Coming Soon)</p>

          <p>📰 Company Updates (Coming Soon)</p>

          <p>🎓 Training Center (Coming Soon)</p>

          <p>💬 Help Desk (Coming Soon)</p>

        </div>

        <div className="portal-footer">

    <p>Portal Version 1.0 Beta</p>

    <small>
        Powered By ZORYVA ENERGY
    </small>

</div>

      </div>

    </div>

  );

}

export default Portal;