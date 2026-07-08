import { useEffect, useState } from "react";
import { verifyUser } from "../services/debugService";
import { calculateActualLeftCount } from "../services/teamDebugService";
function DebugPanel({ selectedUser }) {

  const [result, setResult] = useState({
    pass: false,
    checks: [],
  });

  useEffect(() => {

  async function loadDebug() {

    const debugResult = await verifyUser(selectedUser);

    console.log("Debug Result :", debugResult);

    setResult(debugResult);

  }

  loadDebug();

}, [selectedUser]);

  return (
    <div>
      <h3>System Debug</h3>

      {result.checks.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      {result.checks.length > 0 && (
        <h2>{result.pass ? "PASS ✅" : "FAIL ❌"}</h2>
      )}

    </div>
  );
}

export default DebugPanel;