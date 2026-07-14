import { Link } from "react-router-dom";
import "./FranchiseBanner.css";
import { useEffect, useState } from "react";
import { getFranchiseCount } from "../services/franchise/getFranchiseCount";
import { getCitiesCovered } from "../services/franchise/getCitiesCovered";
function FranchiseBanner() {
    const [citiesCovered, setCitiesCovered] = useState(0);
const [franchiseCount, setFranchiseCount] = useState(0);

useEffect(() => {

    async function loadData() {

        const count = await getFranchiseCount();

        setFranchiseCount(count);

        const cities = await getCitiesCovered();

        setCitiesCovered(cities);

    }

    loadData();

}, []);
    return (

        <section className="franchise-banner">

            <div className="franchise-banner-content">

                <h2>

                  Start Your Own Solar Business With ZORYVA ENERGY

                </h2>
<p>

    Build your future with clean energy solutions.

</p>
               

                <div className="franchise-levels">

                    <div className="franchise-box">

                        <h3>🥉 Dealer Partner</h3>

                        <span>₹25,000+</span>

                    </div>

                    <div className="franchise-box">

                        <h3>🥈 Distributor Partner</h3>

                        <span>₹50,000+</span>

                    </div>

                    <div className="franchise-box">

                        <h3>🥇 Franchise Partner</h3>

                        <span>₹2,00,000+</span>

                    </div>

                </div>

                <p className="franchise-text">

    🔥 Limited Franchise Opportunities Available

</p>
<p className="franchise-count">

    📍 Applications Received: {franchiseCount}

</p>
<p className="franchise-count">

    🏙️ Cities Covered: {citiesCovered}

</p>
                <div className="franchise-actions">

                    <Link to="/franchise?apply=true">

                        <button>

                            🚀 Apply Now

                        </button>

                    </Link>

                    <a href="/contact">

                        <button>

                            📞 Contact Us

                        </button>

                    </a>

                </div>

            </div>

        </section>

    );

}

export default FranchiseBanner;