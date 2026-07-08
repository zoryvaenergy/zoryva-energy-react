import "../css/TopBar.css";
import { useNavigate } from "react-router-dom";
import { adminLogout } from "../services/adminLogout";

function TopBar() {

  const navigate = useNavigate();

  function handleLogout() {

    adminLogout();

    navigate("/admin-login");

  }

  return (

    <div className="topbar">

      <div className="topbar-left">

        <h2>⚡ ZORYVA ENERGY</h2>

        <p>Developer Admin Panel</p>

      </div>

      <div className="topbar-right">

        <span title="Notifications">🔔</span>

        <span>👤 Admin</span>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>

      </div>

    </div>

  );

}

export default TopBar;