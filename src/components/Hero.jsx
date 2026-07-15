import heroImage from "../images/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(15,76,129,.60),rgba(15,76,129,.60)),url(${heroImage})`,
      }}
    >
      <div className="container hero-content">

        <div className="hero-badge">
          ☀️ India's Trusted Solar Energy Brand
        </div>

        <h1>
          Smart Solar Solutions
          <br />
          For Every Indian
        </h1>

        <p>
          High Quality Solar Products for Homes,
          Businesses and Agriculture.
          <br />
          <br />
          Build your future with ZORYVA ENERGY and
          become a part of India's Green Energy Mission.
        </p>

        <div className="hero-features">

          <span>✔ Premium Quality</span>

          <span>✔ Energy Efficient</span>

          <span>✔ Nationwide Support</span>

        </div>

        <div className="hero-buttons">

          <a
            href="#opportunity"
            className="register-btn"
          >
            🤝 Become a Partner
          </a>

         <Link
    to="/products-details"
    className="about-btn"
>

    Explore Products →

</Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;