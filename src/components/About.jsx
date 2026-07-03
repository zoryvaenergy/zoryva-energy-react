import aboutImage from "../images/about.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img src={aboutImage} alt="About Zoryva Energy" />
      </div>

      <div className="about-content">

        <h2>About ZORYVA ENERGY</h2>

        <p>
          ZORYVA ENERGY is committed to making clean and affordable solar
          energy available to every home, business and farmer across India.
        </p>

        <p>
          Our mission is to empower people with innovative solar products,
          smart energy solutions and business opportunities while building
          a greener and sustainable future.
        </p>

        <ul>
          <li>✔ Premium Solar Products</li>
          <li>✔ Affordable Pricing</li>
          <li>✔ Dealer & Distributor Network</li>
          <li>✔ PAN India Support</li>
          <li>✔ Smart Renewable Energy Solutions</li>
        </ul>

      </div>

    </section>
  );
}

export default About;