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

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FirebaseTest from "./components/FirebaseTest";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import AdminLogin from "./admin/AdminLogin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
  path="/registration-success"
  element={<RegistrationSuccess />}
/>
        <Route path="/test" element={<FirebaseTest />} />
<Route path="/admin-login" element={<AdminLogin />} />
<Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;