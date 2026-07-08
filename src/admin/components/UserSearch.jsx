
import { useState } from "react";
import { getUserById } from "../services/userService";

function UserSearch({ setSelectedUser }) {

  const [userId, setUserId] = useState("");

  async function handleSearch() {

    const id = userId.trim().toUpperCase();

    console.log("Searching:", id);

    const user = await getUserById(id);

    console.log("Result:", user);

    if (user) {

      setSelectedUser(user);

    } else {

      setSelectedUser(null);
      alert("User Not Found");

    }

  }

  return (

    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >

      <h2 style={{ marginBottom: "20px" }}>
        🔍 User Search
      </h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >

        <input
          type="text"
          placeholder="Enter User ID (Example : ZEN000001)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          style={{
            flex: "1",
            minWidth: "250px",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            background: "#1976d2",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🔍 Search
        </button>

      </div>

    </div>

  );

}

export default UserSearch;