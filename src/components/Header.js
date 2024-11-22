import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import "../styles/Header.css";

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="header">
      <h1 className="header-title">VRV Security RBAC Dashboard</h1>
      <div className="header-actions">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </form>
        <button className="notifications-btn" aria-label="Notifications">
          <span className="notification-badge">3</span>
          <i className="notification-icon"></i>
        </button>
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <div
          className="user-menu"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <img
            src="https://ui-avatars.com/api/?name=John+Doe&background=random&color=fff"
            alt="User Avatar"
            className="avatar"
          />
          <div className={`user-dropdown ${showDropdown ? "show" : ""}`}>
            <a href="#profile" className="dropdown-item">
              Profile
            </a>
            <a href="#settings" className="dropdown-item">
              Settings
            </a>
            <a href="#logout" className="dropdown-item">
              Log out
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
