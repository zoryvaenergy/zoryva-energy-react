import { useEffect, useState } from "react";
import "./LaunchBanner.css";
import { Link } from "react-router-dom";
function LaunchBanner() {
  const launchDate = new Date("2026-11-06T10:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();

      const distance = launchDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),

        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),

        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="launch-banner">

      <h1>🚀 ZORYVA ENERGY GRAND LAUNCH</h1>

      <p className="launch-quote">
        आज जुड़िए, कल सफलता की नई कहानी लिखिए।
      </p>

      <div className="timer-box">

        <div>
          <h2>{timeLeft.days}</h2>
          <span>day</span>
        </div>

        <div>
          <h2>{timeLeft.hours}</h2>
          <span>hour</span>
        </div>

        <div>
          <h2>{timeLeft.minutes}</h2>
          <span>min</span>
        </div>

        <div>
          <h2>{timeLeft.seconds}</h2>
          <span>sec</span>
        </div>

      </div>

      

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