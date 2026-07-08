function BinaryNode({ user, onClick }) {

  if (!user) {
    return null;
  }

  const teamCount = user.team?.totalTeam || 0;

  const binaryCount =
    (user.binary?.leftCount || 0) +
    (user.binary?.rightCount || 0);

  return (

    <div
      className="user-card"
      onClick={() => onClick && onClick(user)}
    >

      <h3>👤 {user.profile.name}</h3>

      <p><strong>🆔 ID :</strong> {user.profile.userId}</p>

      <p><strong>📍 Position :</strong> {user.matrix?.position || "ROOT"}</p>

      <p><strong>👥 Team :</strong> {teamCount}</p>

      <p><strong>🌳 Binary :</strong> {binaryCount}</p>

      <p><strong>🟢 Status :</strong> {user.profile.status}</p>

    </div>

  );

}

export default BinaryNode;