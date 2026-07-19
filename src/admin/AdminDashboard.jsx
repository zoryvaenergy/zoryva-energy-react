import LevelMatrixPanel
from "./components/LevelMatrixPanel";
import RepairPanel from "./components/RepairPanel";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkAdminSession } from "./services/checkAdminSession";
import { AdminProvider } from "./context/AdminContext";
import { useState } from "react";
import TopBar from "./components/TopBar";
import SideMenu from "./components/SideMenu";
import DashboardCards from "./components/DashboardCards";
import UserSearch from "./components/UserSearch";
import UserDetails from "./components/UserDetails";
import DebugPanel from "./components/DebugPanel";
import TeamStructure from "./components/TeamStructure";
import AdminLayout from "./layouts/AdminLayout";
import "./css/admin.css";
import BinaryTree from "./components/BinaryTree";
import FranchiseApplications from "./pages/FranchiseApplications";
import MatrixTree from "./components/MatrixTree";
function AdminDashboard() {
  const navigate = useNavigate();
      useEffect(() => {

    const isLoggedIn = checkAdminSession();

    if (!isLoggedIn) {
        navigate("/admin-login");
    }

}, [navigate]);
    const [selectedUser, setSelectedUser] = useState(null);
  return (
      <AdminProvider>
  <AdminLayout
    sidebar={<SideMenu />}
    topbar={<TopBar />}
  >

    <DashboardCards />

<UserSearch setSelectedUser={setSelectedUser} />

<UserDetails selectedUser={selectedUser} />
<LevelMatrixPanel
    selectedUser={
        selectedUser
    }
/>
<TeamStructure selectedUser={selectedUser} />

<BinaryTree selectedUser={selectedUser} />
<MatrixTree selectedUser={selectedUser} />
<DebugPanel selectedUser={selectedUser} />
  <RepairPanel
    selectedUser={selectedUser}
/>
  <FranchiseApplications />
  </AdminLayout>
 </AdminProvider>

);
}

export default AdminDashboard;