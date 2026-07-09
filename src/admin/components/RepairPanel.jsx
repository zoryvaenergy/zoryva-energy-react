import { useState } from "react";
import { repairTeamCounts } from "../services/repairTeamCounts";

function RepairPanel() {

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  async function handleRepair() {

    try {

      setLoading(true);

      setMessage("Repair Started...");

      const result = await repairTeamCounts();

      if (result.success) {

        setMessage(
          `✅ Repair Completed (${result.repaired} Users Updated)`
        );

      } else {

        setMessage("❌ Repair Failed");

      }

    } catch (error) {

      console.error(error);

      setMessage("❌ Repair Error");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div
      style={{
        background:"#fff",
        padding:"20px",
        borderRadius:"12px",
        marginBottom:"20px",
        boxShadow:"0 2px 10px rgba(0,0,0,.1)"
      }}
    >

      <h2>🔧 Repair Tools</h2>

      <p>
        Synchronize Team Counts with Binary Counts.
      </p>

      <button
        onClick={handleRepair}
        disabled={loading}
        style={{
          padding:"12px 20px",
          background:"#0b4da2",
          color:"#fff",
          border:"none",
          borderRadius:"8px",
          cursor:"pointer",
          marginTop:"10px"
        }}
      >

        {loading
          ? "Repairing..."
          : "Repair Team Counts"}

      </button>

      <p
        style={{
          marginTop:"15px",
          color:"#0b4da2",
          fontWeight:"600"
        }}
      >

        {message}

      </p>

    </div>

  );

}

export default RepairPanel;