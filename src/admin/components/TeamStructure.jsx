import { getRightTeam } from "../../services/team/getRightTeam";
import { useEffect, useState } from "react";
import { getDirectTeam } from "../../services/team/getDirectTeam";
import { getLeftTeam } from "../../services/team/getLeftTeam";
function TeamStructure({ selectedUser }) {

  const [directTeam, setDirectTeam] = useState([]);
  const [leftTeam, setLeftTeam] = useState([]);
  const [rightTeam, setRightTeam] = useState([]);

  useEffect(() => {

    async function loadDirectTeam() {

      if (!selectedUser) return;

      const team = await getDirectTeam(
        selectedUser.profile.userId
      );

      console.log("Direct Team :", team);

      setDirectTeam(team);
      const left = await getLeftTeam(
  selectedUser.profile.userId
);

console.log("Left Team :", left);

setLeftTeam(left);
const right = await getRightTeam(
  selectedUser.profile.userId
);

console.log("Right Team :", right);

setRightTeam(right);

    }

    loadDirectTeam();

  }, [selectedUser]);

  if (!selectedUser) return null;

  return (
    <div>

      <h2>🌳 Team Structure</h2>

      <hr />

      <h3>Direct Team</h3>

      {directTeam.length === 0 ? (

        <p>No Direct Team Found</p>

      ) : (

        directTeam.map((member) => (

          <div
            key={member.profile.userId}
            style={{
              border: "1px solid #ccc",
              marginBottom: "10px",
              padding: "10px",
            }}
          >

            <strong>{member.profile.name}</strong>

            <br />

            ID : {member.profile.userId}

            <br />

            Position : {member.binary.position}

            <br />

            Status : {member.profile.status}

          </div>

        ))

      )}

      <h3>⬅ Left Team ({leftTeam.length})</h3>

{leftTeam.length === 0 ? (

  <p>No Left Team Found</p>

) : (

  leftTeam.map((member) => (

    <div
      key={member.profile.userId}
      style={{
        border: "1px solid #2196F3",
        marginBottom: "10px",
        padding: "10px",
      }}
    >

      <strong>{member.profile.name}</strong>

      <br />

      ID : {member.profile.userId}

      <br />

      Position : {member.binary.position}

      <br />

      Status : {member.profile.status}

    </div>

  ))

)}

      <h3>➡ Right Team ({rightTeam.length})</h3>

{rightTeam.length === 0 ? (

  <p>No Right Team Found</p>

) : (

  rightTeam.map((member) => (

    <div
      key={member.profile.userId}
      style={{
        border: "1px solid green",
        marginBottom: "10px",
        padding: "10px",
      }}
    >

      <strong>{member.profile.name}</strong>

      <br />

      ID : {member.profile.userId}

      <br />

      Position : {member.binary.position}

      <br />

      Status : {member.profile.status}

    </div>

  ))

)}

    </div>
  );

}

export default TeamStructure;