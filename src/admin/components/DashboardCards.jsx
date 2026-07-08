import { useEffect, useState } from "react";
import { getDashboardStats } from "../services/dashboardService";

function DashboardCards() {

  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    todayRegistrations: 0,
    totalBinaryMembers: 0,
    totalTeamMembers: 0,
  });

  useEffect(() => {

    async function loadStats() {

      const data = await getDashboardStats();

      setStats(data);

    }

    loadStats();

  }, []);

  return (

    <div>

      <h2 style={{ marginBottom: "20px" }}>
        📊 Dashboard Overview
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >

        <div
          style={{
            background: "#1976d2",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>👥 Total Users</h3>
          <h1>{stats.totalUsers}</h1>
        </div>

        <div
          style={{
            background: "#2e7d32",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>🟢 Active Users</h3>
          <h1>{stats.activeUsers}</h1>
        </div>

        <div
          style={{
            background: "#ef6c00",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>📅 Today's Registrations</h3>
          <h1>{stats.todayRegistrations}</h1>
        </div>

        <div
          style={{
            background: "#7b1fa2",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>🌳 Binary Members</h3>
          <h1>{stats.totalBinaryMembers}</h1>
        </div>

        <div
          style={{
            background: "#00897b",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>👨‍👩‍👧 Team Members</h3>
          <h1>{stats.totalTeamMembers}</h1>
        </div>

      </div>

    </div>

  );

}

export default DashboardCards;