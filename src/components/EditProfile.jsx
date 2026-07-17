import "./EditProfile.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, get } from "firebase/database";

import { db } from "../firebase/firebase";
import { update } from "firebase/database";
function EditProfile() {
    const [form, setForm] = useState({

    name: "",

    email: ""

});
const navigate = useNavigate();
async function saveProfile() {

    try {

        const savedUser = JSON.parse(

            localStorage.getItem("zoryvaUser")

        );

        const userId = savedUser?.profile?.userId;

        if (!userId) {

            return;

        }

        const userRef = ref(

            db,

            `users/${userId}/profile`

        );

        await update(userRef, {

            name: form.name,

            email: form.email

        });

        alert("Profile updated successfully");

    }

    catch (error) {

        console.error(error);

        alert("Failed to update profile");

    }

}
useEffect(() => {

    loadProfile();

}, []);
      async function loadProfile() {

    const savedUser = JSON.parse(

        localStorage.getItem("zoryvaUser")

    );

    if (!savedUser?.profile?.userId) {

        return;

    }

    const userRef = ref(

        db,

        `users/${savedUser.profile.userId}`

    );

    const snapshot = await get(userRef);

    if (snapshot.exists()) {

        const data = snapshot.val();

        setForm({

            name: data.profile?.name || "",

            email: data.profile?.email || ""

        });

    }

}
    return (

        <div className="edit-profile-page">

            <div className="edit-profile-card">

                <h1>

                    ✏️ Edit Profile

                </h1>
                <button
    className="back-profile-btn"
    onClick={() => navigate("/profile")}
>

    ⬅ Back to Profile

</button>
                <div className="edit-form">

    <label>Name</label>

    <input
        type="text"
        value={form.name}
        onChange={(e) =>
            setForm({
                ...form,
                name: e.target.value
            })
        }
    />

    <label>Email</label>

    <input
        type="email"
        value={form.email}
        onChange={(e) =>
            setForm({
                ...form,
                email: e.target.value
            })
        }
    />

    <button onClick={saveProfile}>

    Save Changes

</button>

</div>

            </div>

        </div>

    );

}

export default EditProfile;