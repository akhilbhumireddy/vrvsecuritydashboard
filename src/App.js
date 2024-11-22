import React, { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManagement from "./components/PermissionManagement";
import "./styles/globals.css";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implement search logic here
    console.log("Searching for:", query);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <UserManagement searchQuery={searchQuery} />;
      case "roles":
        return <RoleManagement searchQuery={searchQuery} />;
      case "permissions":
        return <PermissionManagement searchQuery={searchQuery} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="app-container">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="main-content">
          <Header onSearch={handleSearch} />
          <main className="content">{renderContent()}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
