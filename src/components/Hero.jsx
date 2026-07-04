import heroImage from "../images/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(15,76,129,.75),rgba(15,76,129,.75)),url(${heroImage})`
      }}
    >

      <div className="container hero-content">

        <div className="hero-badge">

          ⚡ India's Trusted Solar Partner

        </div>

        <h1>

          Powering India With
          <br />
          Solar Energy

        </h1>

        <p>

          Smart Solar Solutions for Every Home,
          Business and Farmer.

          <br />

          Join ZORYVA ENERGY and become part of
          India's Green Future.

        </p>

        <div className="hero-buttons">

          <Link
            to="/register"
            className="register-btn"
          >

            Register Now

          </Link>

          <a
            href="#products"
            className="explore-btn"
          >

            Explore Products

          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;