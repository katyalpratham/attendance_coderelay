import { useState, useEffect } from "react";

export default function Settings() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );
  const [notifications, setNotifications] = useState(true);

  // Sync state to local storage and dispatch an event so App.jsx applies it globally
  useEffect(() => {
    localStorage.setItem("theme", theme);
    window.dispatchEvent(new Event("storage"));
  }, [theme]);

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="card">
      <h2>Settings</h2>
      <p style={{ color: "var(--muted)", marginTop: "4px" }}>Configure your application preferences.</p>
      
      <form style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "var(--text)" }}>Theme</label>
          <select 
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{ 
              padding: "10px", 
              borderRadius: "8px", 
              border: "1px solid var(--border)", 
              background: "var(--card)", 
              color: "var(--text)",
              width: "100%",
              maxWidth: "300px"
            }}
          >
            <option value="system">System Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div>
          <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontWeight: "600", color: "var(--text)", cursor: "pointer" }}>
            <input 
              type="checkbox" 
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              style={{ width: "18px", height: "18px", accentColor: "var(--primary)" }} 
            />
            Enable Email Notifications
          </label>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <button 
            type="button" 
            className="primary-btn"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
