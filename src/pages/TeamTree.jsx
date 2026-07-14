import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../firebase/firebase";
import UserBinaryTree from "../components/user/UserBinaryTree";
import { getUserById } from "../services/team/getUserById";
import { isUserInNetwork } from "../services/team/isUserInNetwork";
import { useNavigate } from "react-router-dom";

function TeamTree() {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const [searchId, setSearchId] = useState("");

    const [searchedUser, setSearchedUser] = useState(null);

    useEffect(() => {

        async function loadUser() {

            const savedUser = JSON.parse(
                localStorage.getItem("zoryvaUser")
            );

            if (!savedUser?.profile?.userId) return;

            const userRef = ref(
                db,
                `users/${savedUser.profile.userId}`
            );

            const snapshot = await get(userRef);

            if (snapshot.exists()) {

                setUser(snapshot.val());

            }

        }

        loadUser();

    }, []);

    async function handleSearch() {

    try {

        console.log("Search button clicked");

        if (!searchId.trim()) {

            alert("User ID enter kijiye");

            return;
        }

        const savedUser = JSON.parse(
            localStorage.getItem("zoryvaUser")
        );

        const targetId = searchId
            .trim()
            .toUpperCase();

        const allowed = await isUserInNetwork(
            savedUser.profile.userId,
            targetId
        );

        console.log(
            "Root User:",
            savedUser.profile.userId
        );

        console.log(
            "Target User:",
            targetId
        );

        console.log(
            "Allowed:",
            allowed
        );

        if (!allowed) {

            alert(
                "Yeh user aapki team mein nahi hai"
            );

            return;
        }

        const foundUser = await getUserById(
            targetId
        );

        console.log(
            "Found User:",
            foundUser
        );

        if (!foundUser) {

            alert("User not found");

            return;
        }

        setSearchedUser(foundUser);

    } catch (error) {

        console.error(
            "Search Error:",
            error
        );

        alert(
            "Search mein error aa gaya"
        );
    }
}

    return (

        <div>

            <button
    className="dashboard-btn"
    onClick={() => navigate("/dashboard")}
>
    ⬅ Dashboard
</button>

            <h1>🌳 Team Tree</h1>

            <div className="team-search-box">

                <input
                    type="text"
                    placeholder="Enter User ID"
                    value={searchId}
                    onChange={(e) =>
                        setSearchId(
                            e.target.value
                        )
                    }
                />

                <button
                    onClick={handleSearch}
                >
                    🔍 Search
                </button>

            </div>

            <UserBinaryTree
                selectedUser={
                    searchedUser || user
                }
            />

        </div>

    );

}

export default TeamTree;