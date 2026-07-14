import { useEffect, useState } from "react";

import { getFranchiseApplications } from "../services/getFranchiseApplications";

import { updateFranchiseStatus } from "../services/updateFranchiseStatus";



function FranchiseApplications() {

    const [applications, setApplications] = useState([]);
     const [selectedApplication, setSelectedApplication] = useState(null);
   
     useEffect(() => {

        async function loadApplications() {

            const data =
                await getFranchiseApplications();

            setApplications(data);
        }

        loadApplications();

    }, []);
async function handleStatusChange(
    franchiseId,
    status
) {

    const success = await updateFranchiseStatus(
        franchiseId,
        status
    );

    if (success) {

        alert(
            `Application ${status}`
        );

        window.location.reload();

    }

    else {

        alert(
            "Status update failed"
        );

    }

}
    return (

        <div>

            <h1>

                🏪 Franchise Applications

            </h1>

            <p>

                Total Applications:

                {applications.length}

            </p>

            {

                applications.map(

                    (application) => (

                        <div
                            key={
                                application.franchiseId
                            }

                            style={{

                                background: "#fff",

                                padding: "15px",

                                marginTop: "15px",

                                borderRadius: "10px",

                                border: "1px solid #ddd",

                            }}

                        >

                            <h3>

                                {

                                    application.franchiseId

                                }

                            </h3>

                            <p>

                                👤

                                {

                                    application.name

                                }

                            </p>

                            <p>

                                📱

                                {

                                    application.mobile

                                }

                            </p>

                            <p>

                                📧

                                {

                                    application.email

                                }

                            </p>

                            <p>

                                🏪

                                {

                                    application.category

                                }

                            </p>

                            <p>
<p
    style={{
        color:
            application.status === "APPROVED"
                ? "green"
                : application.status === "REJECTED"
                ? "red"
                : "orange",

        fontWeight: "bold",
    }}
>
    📌 {application.status}
</p>
                                
<div
    style={{
        display: "flex",
        gap: "10px",
        marginTop: "15px",
    }}
>
    <button
    onClick={() =>
        handleStatusChange(
            application.franchiseId,
            "APPROVED"
        )
    }
>

    ✅ Approve

</button>

<button
    onClick={() =>
        handleStatusChange(
            application.franchiseId,
            "REJECTED"
        )
    }
>

    ❌ Reject

</button>
<button
    onClick={() =>
        setSelectedApplication(
            application
        )
    }
>
    👁️ View Details
</button>
</div>
                            </p>
                      
                        </div>

                    )

                )

            }
{
    selectedApplication && (

        <div className="details-popup">

            <div className="details-card">

                <h2>👁️ Franchise Details</h2>

                <p>
                    <strong>ID:</strong>
                    {selectedApplication.franchiseId}
                </p>

                <p><strong>Name:</strong>{" "}{selectedApplication.name}</p>

                <p>
                    <strong>Mobile:</strong>
                    {selectedApplication.mobile}
                </p>

                <p>
                    <strong>Email:</strong>
                    {selectedApplication.email}
                </p>

                <p>
                    <strong>Category:</strong>
                    {selectedApplication.category}
                </p>

                <p><strong>City:</strong>{" "}{selectedApplication.city}</p>

                <p><strong>State:</strong>{" "}{selectedApplication.state}</p>

                <p>
                    <strong>Address:</strong>
                    {selectedApplication.address}
                </p>

                <p>
                    <strong>Status:</strong>
                    {selectedApplication.status}
                </p>
                <p>
    <strong>Apply Date:</strong>{" "}
    {
        new Date(
            selectedApplication.createdAt
        ).toLocaleDateString()
    }
</p>

<p>
    <strong>Apply Time:</strong>{" "}
    {
        new Date(
            selectedApplication.createdAt
        ).toLocaleTimeString()
    }
</p>

<button
    onClick={() =>
        navigator.clipboard.writeText(
            selectedApplication.franchiseId
        )
    }
>
    📋 Copy ID
</button>

<a
    href={`tel:${selectedApplication.mobile}`}
>
    <button>
        📞 Call Applicant
    </button>
</a>

                <button
                    onClick={() =>
                        setSelectedApplication(
                            null
                        )
                    }
                >
                    ❌ Close
                </button>

            </div>

        </div>

    )
}
        </div>

    );

}

export default FranchiseApplications;