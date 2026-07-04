import "./OurServices.css";

function OurServices() {

  const services = [
    {
      icon: "☀️",
      title: "Solar Panel Installation",
      text: "Professional rooftop and ground-mounted solar installation services.",
    },
    {
      icon: "🔋",
      title: "Solar Battery Solutions",
      text: "High-performance batteries for reliable energy storage and backup.",
    },
    {
      icon: "💡",
      title: "Solar Home Systems",
      text: "Complete solar solutions for homes with maximum energy savings.",
    },
    {
      icon: "🏭",
      title: "Commercial Solar",
      text: "Customized solar power systems for businesses and industries.",
    },
    {
      icon: "🛠",
      title: "Maintenance & Support",
      text: "Regular maintenance and technical support for long-lasting performance.",
    },
    {
      icon: "🤝",
      title: "Dealer & Distributor",
      text: "Join our growing business network as a dealer or distributor.",
    },
  ];

  return (
    <section className="services">

      <h2>Our Services</h2>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default OurServices;