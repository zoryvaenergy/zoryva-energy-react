import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAdminExists } from "./services/adminSetup/checkAdminExists";
import { adminAuth } from "./services/adminAuth";
import { adminSession } from "./services/adminSession";
function AdminLogin() {
  const navigate = useNavigate();

    const [adminExists, setAdminExists] = useState(null);

    const [formData, setFormData] = useState({
        adminId: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    useEffect(() => {

        async function checkAdmin() {
            const exists = await checkAdminExists();
            setAdminExists(exists);
        }

        checkAdmin();

    }, []);

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

    }

    async function handleSubmit(e) {

        e.preventDefault();

        const result = await adminAuth(
    formData.adminId,
    formData.password
);

setMessage(result.message);

if (result.success) {

    adminSession(result.admin);
    navigate("/admin-dashboard");

}

console.log(result);

    }

    if (adminExists === null) {
        return <h2>Checking Admin...</h2>;
    }

    if (!adminExists) {
        return (
            <div>
                <h2>Create Super Admin</h2>
                <p>No Admin Found.</p>
            </div>
        );
    }

    return (

        <div style={{ maxWidth: "400px", margin: "50px auto" }}>

            <h2>Admin Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="adminId"
                    placeholder="Admin ID"
                    value={formData.adminId}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>

            <br />

            <h3>{message}</h3>

        </div>

    );

}

export default AdminLogin;