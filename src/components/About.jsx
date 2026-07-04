import aboutImage from "../images/about.jpg";

function About() {

  return (

<section className="about" id="about">

<div className="container about-container">

<div className="about-image">

<img

src={aboutImage}

alt="About ZORYVA ENERGY"

/>

</div>

<div className="about-content">

<span className="section-tag">

ABOUT ZORYVA ENERGY

</span>

<h2>

Building India's

Green Energy Future

</h2>

<p>

ZORYVA ENERGY is committed to making clean,
affordable and smart solar energy available
to every home, business and farmer.

</p>

<p>

We provide innovative solar products,
renewable energy solutions and profitable
business opportunities across India.

</p>

<ul>

<li>✔ Premium Solar Products</li>

<li>✔ Affordable Pricing</li>

<li>✔ PAN India Network</li>

<li>✔ Smart Renewable Solutions</li>

</ul>

<a href="#products" className="about-btn">

Explore Products →

</a>

</div>

</div>

</section>

);

}

export default About;