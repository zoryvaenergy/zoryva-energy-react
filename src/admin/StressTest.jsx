import { useState } from "react";
import { registerUser } from "../services/registration/registerUser";

function StressTest() {

    const [sponsorId, setSponsorId] = useState("");

    const [side, setSide] = useState("left");

    const [totalUsers, setTotalUsers] = useState(10);

    const [loading, setLoading] = useState(false);

    async function startStressTest() {

    if (!sponsorId) {

        alert("Please enter Sponsor ID");

        return;

    }

    setLoading(true);

    console.time("STRESS TEST");

    for (let i = 1; i <= totalUsers; i++) {

        const mobile = `9${String(
            Date.now() + i
        ).slice(-9)}`;

        const userData = {

            name: `Test User ${i}`,

            mobile,

            email: "",

            password: "123456",

            confirmPassword: "123456",

            sponsorId,

            side,

        };

        console.log(
            `Creating User ${i}`
        );

        await registerUser(userData);

    }

    console.timeEnd("STRESS TEST");

    alert("Stress Test Finished");

    setLoading(false);

}

    return (

        <div style={{ padding: "30px" }}>

            <h1>🚀 Stress Test Tool</h1>

            <br />

            <input
                value={sponsorId}
                onChange={(e) =>
                    setSponsorId(e.target.value)
                }
                placeholder="Sponsor ID"
            />

            <br />
            <br />

            <select
                value={side}
                onChange={(e) =>
                    setSide(e.target.value)
                }
            >

                <option value="left">
                    Left
                </option>

                <option value="right">
                    Right
                </option>

            </select>

            <br />
            <br />

            <input
                type="number"
                value={totalUsers}
                onChange={(e) =>
                    setTotalUsers(
                        Number(e.target.value)
                    )
                }
                placeholder="Total Users"
            />

            <br />
            <br />

            <button
                onClick={startStressTest}
                disabled={loading}
            >

                {
                    loading
                        ? "Running..."
                        : "Start Stress Test"
                }

            </button>

        </div>

    );

}

export default StressTest;