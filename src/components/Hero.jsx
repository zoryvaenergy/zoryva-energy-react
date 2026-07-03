import heroImage from "../images/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(15,76,129,0.75), rgba(15,76,129,0.75)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-content">
        <h1>Powering India With Solar Energy</h1>

        <p>
          Smart Solar Solutions for Every Home, Business and Farmer.
          <br />
          Join ZORYVA ENERGY and become a part of India's Green Future.
        </p>

        <div className="hero-buttons">
          <Link to="/register" className="register-btn">
            Register Now
          </Link>

          <a href="#products" className="explore-btn">
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;