import { useState } from "react";
import { setupAdmin } from "./services/adminSetup/setupAdmin";

function AdminSetup() {

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [message, setMessage] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const result = await setupAdmin(formData);

        setMessage(result.message);

        if (result.success) {
            setFormData({
                name: "",
                mobile: "",
                email: "",
                password: ""
            });
        }
    }

    return (
        <div style={{ maxWidth: "450px", margin: "50px auto" }}>

            <h2>Owner Admin Setup</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                

                <br /><br />

                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
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

<input
    type="password"
    name="confirmPassword"
    placeholder="Confirm Password"
    value={formData.confirmPassword}
    onChange={handleChange}
/>

                <br /><br />

                <button type="submit">
                    Create Owner Admin
                </button>

            </form>

            <br />

            <h3>{message}</h3>

        </div>
    );
}

export default AdminSetup;