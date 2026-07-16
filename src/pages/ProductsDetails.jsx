import "../styles/productsDetails.css";
import solarImage from "../assets/products/solar1.png";
import windImage from "../assets/products/wind1.png";
import roImage from "../assets/products/ro1.png";
import { Link } from "react-router-dom";
function ProductsDetails() {

    return (

        <div className="products-page">

            <section className="products-hero">

                <h1>

                    🌞 Our Products

                </h1>

                <h2>

                    Renewable Energy & Water Solutions

                </h2>

                <p>

                    Explore our upcoming solar,
                    wind and water purification
                    products.

                </p>

            </section>
<section className="products-section">

    <h2>⚡ Our Upcoming Products</h2>

    <div className="products-grid">

        <div className="product-card">

    <img
        src={solarImage}
        alt="Solar Product"
        className="product-image"
    />

    <h3>☀️ Solar Products</h3>

    <p>

        Solar Panels, Inverters,
        Batteries, Street Lights
        and Solar Pumps.

    </p>

    <span>Coming Soon</span>

    <Link
    to="/products/solar"
    className="details-btn"
>
    View Details
</Link>

</div>

       <div className="product-card">

    <img
        src={windImage}
        alt="Wind Energy"
        className="product-image"
    />

    <h3>🌬️ Wind Energy</h3>

    <p>

        Small Wind Turbines,
        Hybrid Systems and
        Controllers.

    </p>

    <span>Coming Soon</span>

     <Link
    to="/products/wind"
    className="details-btn"
>

    View Details

</Link>


</div>
<div className="product-card">

    <img
        src={roImage}
        alt="RO Products"
        className="product-image"
    />

    <h3>💧 RO Products</h3>

    <p>

        Domestic RO, Commercial RO
        and Water Purification Systems.

    </p>

    <span>Coming Soon</span>

     <Link
    to="/products/ro"
    className="details-btn"
>

    View Details

</Link>

</div>

       
    </div>

</section>
        </div>

    );

}

export default ProductsDetails;