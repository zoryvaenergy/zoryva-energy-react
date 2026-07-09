import "../styles/products.css";

import solarPanel from "../images/solar-panel.jpg";
import lantern from "../images/lantern.jpg";
import miniKit from "../images/mini-kit.jpg";

function Products() {

  return (

    <section className="products" id="products">

      <div className="products-header">

        <span className="section-tag">

          OUR PRODUCTS

        </span>

        <h2>

          Premium <span>Solar</span> Solutions

        </h2>

        <p>

          High quality solar products for your home,
          business and daily energy needs.

          <br />

          Reliable. Efficient. Sustainable.

        </p>

      </div>

      <div className="products-grid">

        {/* ===========================
              SOLAR PANEL
        =========================== */}

        <div className="product-card">

          <div className="card-badge best">

            🔥 BEST SELLER

          </div>

          <img

            src={solarPanel}

            alt="Solar Panel"

          />

          <div className="icon-circle">

            ☀

          </div>

          <div className="card-content">

            <h3>

              Solar Panel

            </h3>

            <div className="line"></div>

            <ul>

              <li>✔ High Efficiency</li>

              <li>✔ 25 Year Performance</li>

              <li>✔ Residential & Commercial</li>

            </ul>

            <button>

              Know More →

            </button>

          </div>

        </div>

        {/* ===========================
              SOLAR LANTERN
        =========================== */}

        <div className="product-card">

          <div className="card-badge popular">

            ⭐ POPULAR

          </div>

          <img

            src={lantern}

            alt="Solar Lantern"

          />

          <div className="icon-circle">

            💡

          </div>

          <div className="card-content">

            <h3>

              Solar Lantern

            </h3>

            <div className="line"></div>

            <ul>

              <li>✔ Rechargeable</li>

              <li>✔ Portable</li>

              <li>✔ Emergency Lighting</li>

            </ul>

            <button>

              Know More →

            </button>

          </div>

        </div>
                {/* ===========================
              MINI SOLAR KIT
        =========================== */}

        <div className="product-card">

          <div className="card-badge new">

            ⚡ NEW ARRIVAL

          </div>

          <img

            src={miniKit}

            alt="Mini Solar Kit"

          />

          <div className="icon-circle">

            ⚡

          </div>

          <div className="card-content">

            <h3>

              Mini Solar Kit

            </h3>

            <div className="line"></div>

            <ul>

              <li>✔ LED Light Support</li>

              <li>✔ Mobile Charging</li>

              <li>✔ WiFi Router Support</li>

            </ul>

            <button>

              Know More →

            </button>

          </div>

        </div>

        {/* ===========================
            UPCOMING PRODUCTS
        =========================== */}

        <div className="product-card upcoming">

          <div className="card-badge coming">

            🚀 COMING SOON

          </div>

          <div className="upcoming-image">

            🚀

          </div>

          <div className="card-content">

            <h3>

              Upcoming Products

            </h3>

            <div className="line"></div>

            <p className="coming-title">

              Launching Soon

            </p>

            <ul>

              <li>🔋 Solar Battery</li>

              <li>🏠 Solar Fan</li>

              <li>💧 Solar RO System</li>

              <li>🌞 Solar Street Light</li>

              <li>🚜 Solar Water Pump</li>

              <li>📷 Solar CCTV Camera</li>

              <li>⚡ Solar Inverter</li>

              <li>🔌 EV Charging Station</li>

            </ul>

            <button className="coming-btn">

              Launching Soon

            </button>

          </div>

        </div>

      </div>
            <div className="products-cta">

        <div className="cta-left">

          <div className="cta-icon">

            🛍️

          </div>

          <div>

            <h3>

              Explore Our Complete Product Range

            </h3>

            <p>

              Quality products you can trust,
              performance you can rely on.

            </p>

          </div>

        </div>

        <button className="view-all-btn">

          View All Products →

        </button>

      </div>

    </section>

  );

}

export default Products;