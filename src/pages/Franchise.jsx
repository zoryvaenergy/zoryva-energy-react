import "./Franchise.css";
import { useState } from "react";
import { saveFranchise } from "../services/franchise/saveFranchise";

function Franchise() {

    const [showForm, setShowForm] = useState(false);

   const [formData, setFormData] = useState({

    name: "",

    mobile: "",

    email: "",

    category: "",

    city: "",

    state: "",

    address: "",

});

    function handleChange(event) {

        setFormData({

            ...formData,

            [event.target.name]: event.target.value,

        });

    }
async function handleSubmit() {

     if (

    !formData.name ||

    !formData.mobile ||

    !formData.email ||

    !formData.city ||

    !formData.state ||

    !formData.address ||

    !formData.category

) {

        alert("सभी जानकारी भरें");

        return;
    }

    const result = await saveFranchise(
        formData
    );

    if (result.success) {

        alert(

            `Application Submitted Successfully

Franchise ID: ${result.franchiseId}`

        );

        setFormData({

    name: "",

    mobile: "",

    email: "",

    city: "",

    state: "",

    address: "",

    category: "",

});

        setShowForm(false);

    }

    else {

        alert(
            "Application Submit Failed"
        );

    }

}
    return (

        <div className="franchise-page">

            <div className="franchise-card">

                <h1>🏪 ZORYVA ENERGY Franchise Program</h1>

                <p>

                    अपने शहर में ZORYVA ENERGY की Franchise या Dealership के लिए आवेदन करें।

                </p>

                <h2 className="franchise-heading">
    🤝 Franchise & Dealership Model
</h2>

                <div className="investment-box">

                    <div className="investment-card">

                        <h3>🥉 Dealer Partner</h3>

                        <p>₹25,000 – ₹50,000</p>

                        <span>छोटे शहर और गाँवों के लिए</span>

                    </div>

                    <div className="investment-card">

                        <h3>🥈 Distributor Partner</h3>

                        <p>₹50,000 – ₹2,00,000</p>

                        <span>तहसील और जिला स्तर के लिए</span>

                    </div>

                    <div className="investment-card">

                        <h3>🥇 Franchise Partner</h3>

                        <p>₹2,00,000 – ₹5,00,000</p>

                        <span>बड़े शहर और शो-रूम के लिए</span>

                    </div>

                </div>

                <p className="franchise-note">

                    ⚠️ Franchise Ship, terms and conditions will be announced at the time of launch.

                </p>

                <button
                    className="apply-btn"
                    onClick={() => setShowForm(true)}
                >

                    📝 Apply Now

                </button>

                {

                    showForm && (

                        <div className="franchise-form">

                            <h2>📝 Franchise Application Form</h2>

                            <input
                                type="text"
                                name="name"
                                placeholder="पूरा नाम"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="mobile"
                                placeholder="मोबाइल नंबर"
                                value={formData.mobile}
                                onChange={handleChange}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="ईमेल"
                                value={formData.email}
                                onChange={handleChange}
                            />
                         <input
    type="text"
    name="city"
    placeholder="City"
    value={formData.city}
    onChange={handleChange}
/>

<input
    type="text"
    name="state"
    placeholder="State"
    value={formData.state}
    onChange={handleChange}
/>

<textarea
    name="address"
    placeholder="Full Address"
    value={formData.address}
    onChange={handleChange}
/>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Category चुनें
                                </option>

                                <option value="Dealer Partner">
                                    Dealer Partner
                                </option>

                                <option value="Distributor Partner">
                                    Distributor Partner
                                </option>

                                <option value="Franchise Partner">
                                    Franchise Partner
                                </option>

                            </select>
<button
    className="submit-btn"
    onClick={handleSubmit}
>

    Submit Application

</button>
                           
                        </div>

                    )

                }

            </div>

        </div>

    );

}

export default Franchise;