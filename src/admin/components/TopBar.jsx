import "../css/TopBar.css";

function TopBar() {
  return (
    <div className="topbar">

      <div className="topbar-left">

        <h2>⚡ ZORYVA ENERGY</h2>

        <p>Developer Admin Panel</p>

      </div>

      <div className="topbar-right">

        <span title="Notifications">🔔</span>

        <span>👤 Admin</span>

        <button className="logout-btn">
          🚪 Logout
        </button>

      </div>

    </div>
  );
}

export default TopBar;