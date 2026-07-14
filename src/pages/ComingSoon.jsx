import { useNavigate } from "react-router-dom";

function ComingSoon({ title, message }) {
  const navigate = useNavigate();

  return (
    <div className="coming-soon-page">

      <button onClick={() => navigate("/dashboard")}>
        ⬅ Dashboard
      </button>

      <h1>🚧 {title}</h1>

      <h2>Coming Soon</h2>

      <p>{message}</p>

    </div>
  );
}

export default ComingSoon;