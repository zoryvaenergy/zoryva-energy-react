import { useState } from "react";
import { Link } from "react-router-dom";
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
            Home
          </Link>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#products" onClick={closeMenu}>
            Products
          </a>

          <a href="#opportunity" onClick={closeMenu}>
            Business
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <Link
            to="/login"
            className="login-btn"
            onClick={closeMenu}
          >
            Login
          </Link>

          <Link
            to="/register"
            className="register-btn-nav"
            onClick={closeMenu}
          >
            Register
          </Link>

        </nav>

      </div>

    </header>

  );

}

export default Header;