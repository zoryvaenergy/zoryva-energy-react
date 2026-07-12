function UserBinaryNode({ user, onClick }) {

    if (!user) {
        return null;
    }

    return (

        <div
            className="user-card"
            onClick={() => onClick && onClick(user)}
        >

            <h3>👤 {user.profile?.name}</h3>

            <p>
                <strong>🆔 ID :</strong>
                {" "}
                {user.profile?.userId}
            </p>

            <p>
                <strong>🎯 Sponsor :</strong>
                {" "}
                {user.profile?.sponsorId || "N/A"}
            </p>

            <p>
                <strong>📍 Position :</strong>
                {" "}
                {user.binary?.position?.toUpperCase() || "ROOT"}
            </p>

        </div>

    );

}

export default UserBinaryNode;