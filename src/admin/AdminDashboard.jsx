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
function AdminDashboard() {
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

<TeamStructure selectedUser={selectedUser} />

<BinaryTree selectedUser={selectedUser} />

<DebugPanel selectedUser={selectedUser} />
  </AdminLayout>
 </AdminProvider>

);
}

export default AdminDashboard;