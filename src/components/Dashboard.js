import React from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Users</h3>
          <p className="dashboard-number">1,234</p>
          <p className="dashboard-change positive">+20.1% from last month</p>
        </div>
        <div className="dashboard-card">
          <h3>Active Users</h3>
          <p className="dashboard-number">1,089</p>
          <p className="dashboard-change positive">+10.5% from last month</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Roles</h3>
          <p className="dashboard-number">15</p>
          <p className="dashboard-change positive">+2 new roles added</p>
        </div>
        <div className="dashboard-card">
          <h3>Security Alerts</h3>
          <p className="dashboard-number">3</p>
          <p className="dashboard-change negative">-2 from last week</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
