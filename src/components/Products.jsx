import "../styles/products.css";
import solarPanel from "../images/solar-panel.jpg";
import lantern from "../images/lantern.jpg";
import miniKit from "../images/mini-kit.jpg";

function Products() {
  return (
    <section className="products" id="products">

      <h2>Our Products</h2>

      <div className="cards">

        {/* Solar Panel */}
        <div className="card">
          <img src={solarPanel} alt="Solar Panel" />

          <h3>☀ Solar Panel</h3>

          <p>
            High efficiency rooftop solar panels for homes,
            offices and industries.
          </p>

          <button>Know More</button>
        </div>

        {/* Solar Lantern */}
        <div className="card">
          <img src={lantern} alt="Solar Lantern" />

          <h3>💡 Solar Lantern</h3>

          <p>
            Portable solar lantern for villages,
            emergency lighting and outdoor use.
          </p>

          <button>Know More</button>
        </div>

        {/* Mini Solar Kit */}
        <div className="card">
          <img src={miniKit} alt="Mini Solar Kit" />

          <h3>⚡ Mini Solar Kit</h3>

          <p>
            Perfect for LED lights, mobile charging,
            DC fan and Wi-Fi router.
          </p>

          <button>Know More</button>
        </div>

      </div>

    </section>
  );
}

export default Products;