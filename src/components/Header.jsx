import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        ⚡ ZORYVA ENERGY
      </div>

      <nav className="nav">

        <Link to="/">Home</Link>

        <a href="#about">About</a>

        <a href="#products">Products</a>

        <a href="#opportunity">Business</a>

        <a href="#contact">Contact</a>

        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="register-btn-nav">
          Register
        </Link>

      </nav>

    </header>
  );
}

export default Header;