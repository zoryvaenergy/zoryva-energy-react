function UserDetails({ selectedUser }) {

  if (!selectedUser) {

    return (

      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >

        <h2>👤 User Details</h2>

        <p
          style={{
            color: "#666",
            marginTop: "15px",
          }}
        >
          Search a User to view details.
        </p>

      </div>

    );

  }

  return (

    <div
      style={{
        background: "#ffffff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >

      <h2 style={{ marginBottom: "20px" }}>
        👤 User Details
      </h2>

      <p><strong>🆔 User ID :</strong> {selectedUser.profile.userId}</p>

      <p><strong>👤 Name :</strong> {selectedUser.profile.name}</p>

      <p><strong>👥 Sponsor :</strong> {selectedUser.profile.sponsorId}</p>

      <p><strong>🌳 Parent :</strong> {selectedUser.binary.parentId || "-"}</p>

      <p><strong>📍 Position :</strong> {selectedUser.binary.position || "-"}</p>

      <p><strong>🟢 Status :</strong> {selectedUser.profile.status}</p>

      <p><strong>👨‍👩‍👧 Team Count :</strong> {selectedUser.team.totalTeam}</p>

      <p>
        <strong>🌳 Binary Count :</strong>{" "}
        {selectedUser.binary.leftCount + selectedUser.binary.rightCount}
      </p>

    </div>

  );

}

export default UserDetails;