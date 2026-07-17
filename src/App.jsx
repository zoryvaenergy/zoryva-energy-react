import Portal from "./pages/Portal";
import AdminDashboard from "./admin/AdminDashboard";
import "./App.css";
import MyTeam from "./pages/MyTeam";
import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/products.css";
import "./styles/opportunity.css";
import "./styles/footer.css";
import "./styles/responsive.css";
import StressTest from "./admin/StressTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FirebaseTest from "./components/FirebaseTest";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import AdminLogin from "./admin/AdminLogin";
import AdminSetup from "./admin/AdminSetup";
import Profile from "./pages/Profile";
import DirectTeam from "./pages/DirectTeam";
import LeftTeam from "./pages/LeftTeam";
import RightTeam from "./pages/RightTeam";
import TeamTree from "./pages/TeamTree";
import TodayJoining from "./pages/TodayJoining";
import Wallet from "./pages/Wallet";
import Rewards from "./pages/Rewards";
import DashboardHome from "./pages/DashboardHome";
import "./styles/contact.css";
import ComingSoon from "./pages/ComingSoon";
import "./styles/comingSoon.css";
import Franchise from "./pages/Franchise";
import Contact from "./components/Contact";
import AboutCompany from "./pages/AboutCompany";
import ProductsDetails from "./pages/ProductsDetails";
import SolarDetails from "./pages/SolarDetails";
import WindDetails from "./pages/WindDetails";
import RODetails from "./pages/RODetails";
import EditProfile from "./components/EditProfile";
import LevelTeam from "./pages/LevelTeam";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
    path="/dashboard-home"
    element={<DashboardHome />}
/>
        <Route path="/my-team" element={<MyTeam />} />
        <Route
    path="/direct-team"
    element={<DirectTeam />}
/>
        <Route
    path="/left-team"
    element={<LeftTeam />}
/>

<Route
    path="/right-team"
    element={<RightTeam />}
/>

<Route

    path="/level-team"

    element={<LevelTeam />}

/>
<Route
    path="/team-tree"
    element={<TeamTree />}
/>

<Route
    path="/today-joining"
    element={<TodayJoining />}
/>

<Route
    path="/wallet"
    element={
        <ComingSoon
            title="Wallet"
            message="Wallet system is under development."
        />
    }
/>
<Route
    path="/rewards"
    element={
        <ComingSoon
            title="Rewards"
            message="Rewards system is under development."
        />
    }
/>
<Route
    path="/edit-profile"
    element={<EditProfile />}
/>
        <Route path="/" element={<Home />} />
        <Route
    path="/franchise"
    element={<Franchise />}
/>
     <Route
    path="/about-company"
    element={<AboutCompany />}
/>
     <Route
    path="/products-details"
    element={<ProductsDetails />}
/>
     <Route
    path="/products/solar"
    element={<SolarDetails />}
/>
      <Route
    path="/products/wind"
    element={<WindDetails />}
 />
      <Route
    path="/products/ro"
    element={<RODetails />}
/>
       <Route
    path="/contact"
    element={<Contact />}
/>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route
  path="/registration-success"
  element={<RegistrationSuccess />}
/>
        <Route path="/test" element={<FirebaseTest />} />
        <Route path="/admin-setup" element={<AdminSetup />} />
<Route path="/admin-login" element={<AdminLogin />} />
<Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route
    path="/stress-test"
    element={<StressTest />}
/>
     <Route path="/portal" element={<Portal />} />
     <Route
    path="/forgot-password"
    element={<ForgotPassword />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;