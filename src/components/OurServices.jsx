import "./OurServices.css";
function OurServices() {

  return (

    <section
      className="services"
      id="services"
    >

      <div className="services-header">

        <span className="section-tag">

          OUR SERVICES

        </span>

        <h2>

          Complete <span>Solar</span> Solutions

        </h2>

        <p>

          From consultation to installation and after-sales
          support, ZORYVA ENERGY provides complete renewable
          energy solutions.

        </p>

      </div>

      <div className="services-grid">

        {/* Service 1 */}

        <div className="service-card">

          <div className="service-icon">

            ☀

          </div>

          <h3>

            Solar Installation

          </h3>

          <p>

            Professional rooftop and ground mounted
            solar installation for homes,
            businesses and industries.

          </p>

        </div>

        {/* Service 2 */}

        <div className="service-card">

          <div className="service-icon">

            🔋

          </div>

          <h3>

            Battery Solutions

          </h3>

          <p>

            High performance solar batteries
            for reliable backup and
            uninterrupted power supply.

          </p>

        </div>
                {/* Service 3 */}

        <div className="service-card">

          <div className="service-icon">

            💧

          </div>

          <h3>

            Water Solutions

          </h3>

          <p>

            Domestic and commercial RO
            systems with reliable water
            purification technology.

          </p>

        </div>

        {/* Service 4 */}

        <div className="service-card">

          <div className="service-icon">

            🚜

          </div>

          <h3>

            Agriculture Solutions

          </h3>

          <p>

            Solar water pumps, irrigation
            systems and smart farming
            energy solutions.

          </p>

        </div>

        {/* Service 5 */}

        <div className="service-card">

          <div className="service-icon">

            🛠

          </div>

          <h3>

            Maintenance & Support

          </h3>

          <p>

            Preventive maintenance,
            technical support and quick
            service assistance.

          </p>

        </div>

        {/* Service 6 */}

        <div className="service-card">

          <div className="service-icon">

            🎓

          </div>

          <h3>

            Training & Consultation

          </h3>

          <p>

            Expert guidance, business
            consultation and technical
            training for partners.

          </p>

        </div>

      </div>
          </section>

  );

}

export default OurServices;