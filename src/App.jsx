import Dashboard from "./pages/Dashboard";
import "./App.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/about.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FirebaseTest from "./components/FirebaseTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<FirebaseTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;