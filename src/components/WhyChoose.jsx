import "./WhyChoose.css";

function WhyChoose() {
  const features = [
    {
      icon: "☀️",
      title: "Premium Solar Products",
      text: "High-quality solar products designed for long life and maximum efficiency.",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      text: "Best value products with competitive prices for every customer.",
    },
    {
      icon: "🌍",
      title: "Eco-Friendly Energy",
      text: "Promoting clean, green and sustainable energy solutions for everyone.",
    },
    {
      icon: "🤝",
      title: "Business Opportunity",
      text: "Become a Distributor, Dealer or Business Partner and grow with us.",
    },
    {
      icon: "⚡",
      title: "Trusted Brand",
      text: "Committed to quality, transparency and customer satisfaction.",
    },
    {
      icon: "🛠",
      title: "After Sales Support",
      text: "Reliable technical support and customer service whenever you need it.",
    },
  ];

  return (
    <section className="why">
      <h2>Why Choose ZORYVA ENERGY?</h2>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;