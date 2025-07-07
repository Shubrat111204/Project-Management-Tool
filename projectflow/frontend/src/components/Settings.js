import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className={`settings-page ${darkMode ? 'dark' : ''}`}>
      <h1>User Settings</h1>
      <p className="settings-subtitle">
        Customize your ProjectFlow experience
      </p>

      <div className="settings-container">
        {/* Dark Mode Toggle */}
        <div className="setting-item">
          <span>🌙 Dark Mode</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Notifications Toggle */}
        <div className="setting-item">
          <span>🔔 Enable Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Profile Info Placeholder */}
        <div className="setting-item profile-info">
          <h3>👤 Profile</h3>
          <p>Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;