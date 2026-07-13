import { useNavigate } from "react-router-dom";

function Wallet() {

    const navigate = useNavigate();

    return (

        <div>

            <button
                onClick={() =>
                    navigate("/dashboard")
                }
            >
                ⬅ Dashboard
            </button>

            <h1>🏆 Rewards</h1>

            <div className="coming-soon-box">

                <h2>🚧 Coming Soon</h2>

                <p>
                    Wallet system is under development.
                </p>

            </div>

        </div>

    );

}

export default Wallet;