function DirectMemberCard({ member, onView }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
        background: "#fff",
      }}
    >
      <h3>{member.name}</h3>

      <p>
        <strong>ID :</strong> {member.userId}
      </p>

      <p>
        <strong>Position :</strong> {member.position}
      </p>

      <p>
        <strong>Status :</strong> {member.status}
      </p>

      <button onClick={() => onView(member)}>
        View Details
      </button>
    </div>
  );
}

export default DirectMemberCard;