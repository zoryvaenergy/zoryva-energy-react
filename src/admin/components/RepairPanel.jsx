import { useState } from "react";

import ConfirmDialog from "../components/ConfirmDialog";

import { repairTeamCounts } from "../services/repairTeamCounts";
import { repairDirectTeam } from "../services/repairDirectTeam";
import { repairBinaryCounts } from "../services/repairBinaryCounts";
import { scanTeamCounts } from "../services/scanTeamCounts";
import { scanDirectTeam } from "../services/scanDirectTeam";
import { scanBinaryCounts } from "../services/scanBinaryCounts";
import { saveRepairHistory } from "../services/repairHistoryService";
import { repairMatrix } from "../services/repairMatrix";
import {
    repairLevels,
} from "../services/repairLevels";
function RepairPanel({
    selectedUser,
}) {

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
const [scanResult, setScanResult] = useState(null);
const [lastRepair, setLastRepair] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
      const [repairType, setRepairType] = useState("");
      async function handleDirectTeamScan() {

    try {

        setLoading(true);

        setMessage("Scanning Direct Team...");

        const result = await scanDirectTeam();

        setScanResult(result);

        setRepairType("directTeam");

        setShowDialog(true);

        setMessage("");

    } catch (error) {

        console.error(error);

        setMessage("❌ Direct Team Scan Failed");

    } finally {

        setLoading(false);

    }

}
      async function handleDirectTeamRepair() {

    try {

        setLoading(true);

        setMessage(
            "Direct Team Repair Started..."
        );

        const result =
            await repairDirectTeam();

        if (result.success) {

            setMessage(

                `✅ Direct Team Repaired (${result.repaired} Users Updated)`

            );
            await saveRepairHistory({

    tool: "Repair Direct Team",

    scannedUsers: scanResult.totalUsers,

    repairedUsers: result.repaired,

    status:

        scanResult.wrongUsers.length === 0

            ? "Healthy"

            : "Repaired",

});

setLastRepair({

    tool: "Repair Direct Team",

    scannedUsers: scanResult.totalUsers,

    repairedUsers: result.repaired,

    status:

        scanResult.wrongUsers.length === 0

            ? "Healthy"

            : "Repaired",

    date: new Date().toLocaleDateString(),

    time: new Date().toLocaleTimeString(),

});

        }

    } catch (error) {

        console.error(error);

        setMessage(
            "❌ Direct Team Repair Failed"
        );

    } finally {

        setLoading(false);

    }

}
async function handleBinaryScan() {

    try {

        setLoading(true);

        setMessage("Scanning Binary Counts...");

        const result = await scanBinaryCounts();

        setScanResult(result);

        setRepairType("binary");

        setShowDialog(true);

        setMessage("");

    }
     catch (error) {

        console.error(error);

        setMessage("❌ Binary Scan Failed");

    } finally {

        setLoading(false);

    }

}
   async function handleLevelsScan() {

    try {

        setLoading(true);

        setMessage(
            "Repairing Levels..."
        );

        if (!selectedUser) {

            setMessage(
                "❌ Please select a user"
            );

            return;
        }

        await repairLevels(

            selectedUser.profile.userId

        );

        setMessage(

            "✅ Levels Repaired"

        );

    } catch (error) {

        console.error(

            error

        );

        setMessage(

            "❌ Repair Failed"

        );

    } finally {

        setLoading(

            false

        );

    }

}
      async function handleMatrixRepair() {

    try {

        setLoading(true);

        setMessage(
            "Repairing Matrix..."
        );

        if (!selectedUser) {

            setMessage(
                "❌ Please select a user"
            );

            return;
        }

        await repairMatrix(

            selectedUser.profile.userId

        );

        setMessage(

            "✅ Matrix Repaired"

        );

    } catch (error) {

        console.error(error);

        setMessage(

            "❌ Matrix Repair Failed"

        );

    } finally {

        setLoading(false);

    }

}
async function handleBinaryRepair() {

    try {

        setLoading(true);

        setMessage(
            "Binary Repair Started..."
        );

        const result =
            await repairBinaryCounts();

        if (result.success) {

            setMessage(

                `✅ Binary Repaired (${result.repaired} Users Updated)`

            );

        }

    } catch (error) {

        console.error(error);

        setMessage(
            "❌ Binary Repair Failed"
        );

    } finally {

        setLoading(false);

    }

}

  async function handleScan() {

    try {

        setLoading(true);

        setMessage("Scanning Users...");

        const result = await scanTeamCounts();

        setScanResult(result);

        setMessage("");
        setShowDialog(true);
    } catch (error) {

        console.error(error);

        setMessage("❌ Scan Failed");

    } finally {

        setLoading(false);

    }

}
  async function handleRepair() {

    try {

      setLoading(true);

      setMessage("Repair Started...");

      const result = await repairTeamCounts();

      if (result.success) {

        setMessage(
          `✅ Repair Completed (${result.repaired} Users Updated)`
        );
await saveRepairHistory({

    tool: "Repair Team Counts",

    scannedUsers: scanResult.totalUsers,

    repairedUsers: result.repaired,

    status:

        scanResult.wrongUsers.length === 0

            ? "Healthy"

            : "Repaired",

});
      setLastRepair({

    tool: "Repair Team Counts",

    scannedUsers: scanResult.totalUsers,

    repairedUsers: result.repaired,

    status:
        scanResult.wrongUsers.length === 0
            ? "Healthy"
            : "Repaired",

    date: new Date().toLocaleDateString(),

    time: new Date().toLocaleTimeString(),

});
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
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)"
      }}
    >

      <h2>🔧 Repair Tools</h2>

      <p>
        Synchronize Team Counts with Binary Counts.
      </p>

      <button
        onClick={handleScan}
        disabled={loading}
        style={{
          padding: "12px 20px",
          background: "#0b4da2",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >

        {loading
          ? "Repairing..."
          : "Repair Team Counts"}

      </button>
      <button
    onClick={handleDirectTeamScan}
    disabled={loading}
    style={{
        padding: "12px 20px",
        background: "#198754",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "10px",
        marginLeft: "10px"
    }}
>

    {loading
        ? "Repairing..."
        : "Repair Direct Team"}

</button>
<button
    onClick={handleBinaryScan}
    disabled={loading}
    style={{
        padding: "12px 20px",
        background: "#6f42c1",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "10px",
        marginLeft: "10px"
    }}
>

    {loading
        ? "Repairing..."
        : "Repair Binary Counts"}

</button>
     <button
    onClick={handleLevelsScan}
    disabled={loading}
    style={{
        padding: "12px 20px",
        background: "#fd7e14",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginTop: "10px",
        marginLeft: "10px"
    }}
>

    {loading
        ? "Repairing..."
        : "Repair Levels"}

</button>
       <button

    onClick={handleMatrixRepair}

    disabled={loading}

    style={{

        padding: "12px 20px",

        background: "#6f42c1",

        color: "#fff",

        border: "none",

        borderRadius: "8px",

        cursor: "pointer",

        marginTop: "10px",

        marginLeft: "10px"

    }}

>

    {

        loading

            ? "Repairing..."

            : "Repair Matrix"

    }

</button>
      <p
        style={{
          marginTop: "15px",
          color: "#0b4da2",
          fontWeight: "600"
        }}
      >

        {message}

      </p>
      {
    lastRepair && (

        <div
            style={{
                marginTop: "20px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                background: "#f7f9fc",
            }}
        >

            <h3>📋 Last Repair Report</h3>

            <p>
                <strong>Tool:</strong> {lastRepair.tool}
            </p>

            <p>
                <strong>Date:</strong> {lastRepair.date}
            </p>

            <p>
                <strong>Time:</strong> {lastRepair.time}
            </p>

            <p>
                <strong>Scanned Users:</strong> {lastRepair.scannedUsers}
            </p>

            <p>
                <strong>Repaired Users:</strong> {lastRepair.repairedUsers}
            </p>

            <p>
                <strong>Status:</strong> {lastRepair.status}
            </p>

        </div>

    )
}
      {showDialog && (

        <ConfirmDialog

title={

    repairType === "directTeam"

        ? "Repair Direct Team"

        : repairType === "binary"

        ? "Repair Binary Counts"

        : "Repair Team Counts"

}

          message={

    scanResult

        ? `Users Scanned: ${scanResult.totalUsers}

Wrong Users: ${scanResult.wrongUsers.length}

${

    scanResult.wrongUsers.length === 0

        ? "✅ System is Healthy"

        : "⚠ Repair Required"

}`

        : "Scanning..."

}

          onCancel={() => setShowDialog(false)}

          onConfirm={() => {

    setShowDialog(false);

    if (repairType === "directTeam") {

        handleDirectTeamRepair();

    }

    else if (repairType === "binary") {

        handleBinaryRepair();

    }

    else {

        handleRepair();

    }

}}

        />

      )}

    </div>

  );

}

export default RepairPanel;