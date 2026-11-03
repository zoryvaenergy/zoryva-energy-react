import "./LaunchBanner.css";
import { Link } from "react-router-dom";

function LaunchBanner() {
  return (
    <div className="launch-banner">

      <h1>🚀 ZORYVA ENERGY GRAND LAUNCH</h1>

      <p className="launch-quote">
        आज जुड़िए, कल सफलता की नई कहानी लिखिए।
      </p>

      <div className="launch-buttons">

        <a
          href="https://t.me/zoryvaenergy"
          target="_blank"
          rel="noreferrer"
          className="launch-btn"
        >
          📢 Telegram Join
        </a>

        <Link
          to="/contact"
          className="launch-btn"
        >
          📞 Contact Us
        </Link>

      </div>

    </div>
  );
}

export default LaunchBanner;