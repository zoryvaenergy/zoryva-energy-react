import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaHandshake,
  FaPhoneAlt,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import logo from "../images/logo.png";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <header className="header">

      <div className="container header-container">

        {/* Logo */}

        <Link to="/" className="logo" onClick={closeMenu}>

          <img
            src={logo}
            alt="ZORYVA ENERGY"
            className="logo-image"
          />

        </Link>

        {/* Mobile Menu */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Navigation */}

        <nav className={menuOpen ? "nav active" : "nav"}>

        <Link to="/" onClick={closeMenu}>
  <FaHome /> Home
</Link>

      <a href="#about" onClick={closeMenu}>
  <FaInfoCircle /> About
</a>    

          <a href="#products" onClick={closeMenu}>
  <FaBoxOpen /> Products
</a>

          <a href="#opportunity" onClick={closeMenu}>
  <FaHandshake /> Business
</a>

          <a href="#contact" onClick={closeMenu}>
  <FaPhoneAlt /> Contact
</a>

          <Link
  to="/login"
  className="login-btn"
  onClick={closeMenu}
>
  <FaSignInAlt /> Login
</Link>

        <Link
  to="/register"
  className="register-btn-nav"
  onClick={closeMenu}
>
  <FaUserPlus /> Register
</Link>

        </nav>

      </div>

    </header>

  );

}

export default Header;