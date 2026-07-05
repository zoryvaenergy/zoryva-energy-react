import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { registerUser } from "../services/registration/registerUser";

function Register() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

const referralSponsor = searchParams.get("ref");
const referralSide = searchParams.get("side");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    sponsorId: "",
    side: "",
  });

  useEffect(() => {
  setFormData((prev) => ({
    ...prev,
    sponsorId: referralSponsor || "",
    side: referralSide || "",
  }));
}, [referralSponsor, referralSide]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const result = await registerUser(formData);

    console.log(result);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert(result.message);

    console.log("Generated User ID :", result.userId);
    navigate("/dashboard");

    // Form Reset
    setFormData({
      name: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
      sponsorId: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "50px auto",
        padding: "25px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 10px #ddd",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        ZORYVA ENERGY Registration
      </h2>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email (Optional)"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="text"
          name="sponsorId"
          placeholder="Sponsor ID"
          value={formData.sponsorId}
          onChange={handleChange}
          readOnly={!!referralSponsor}
          style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#0a7f2e",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;