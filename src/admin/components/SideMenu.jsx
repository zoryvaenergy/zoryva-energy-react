import "../css/SideMenu.css";

function SideMenu() {
  return (
    <aside className="sidebar">

      <div className="sidebar-title">
        ⚡ ZORYVA
      </div>

      <div className="sidebar-subtitle">
        Admin Panel
      </div>

      <ul>

        <li className="active">
          🏠 Dashboard
        </li>

        <li>
          🔍 User Search
        </li>

        <li>
          🌳 Binary Tree
        </li>

        <li>
          👥 Team Explorer
        </li>

        <li>
          🐞 Debug Center
        </li>

        <li>
          📋 Registration Log
        </li>

        <li>
          💰 Wallet
        </li>

        <li>
          📈 Income
        </li>

        <li>
          🎁 Rewards
        </li>

        <li>
          📊 Reports
        </li>

        <li>
          ⚙ Settings
        </li>

        <li className="logout">
          🚪 Logout
        </li>

      </ul>

    </aside>
  );
}

export default SideMenu;