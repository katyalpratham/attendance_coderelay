import PropTypes from "prop-types";
import { LayoutDashboard } from "lucide-react";

function Header({ onNewRequest, onToggleSidebar, hasNewRequests = true }) {
  return (
    <header className="header">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div>
          <h2 className="header__title" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LayoutDashboard size={24} />
            Manager Dashboard
            {hasNewRequests && (
              <span 
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "var(--red)",
                  borderRadius: "50%",
                  boxShadow: "0 0 5px var(--red)"
                }}
                title="New Leave Requests Available"
              />
            )}
          </h2>
          <p className="header__subtitle">Monitor team leave requests</p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button 
          className="primary-btn" 
          onClick={onToggleSidebar} 
          type="button" 
        >
          Leave Sync Menu
        </button>
        <button className="primary-btn" onClick={onNewRequest} type="button">
          New Leave Request
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  onNewRequest: PropTypes.func,
  onToggleSidebar: PropTypes.func,
  hasNewRequests: PropTypes.bool,
};

Header.defaultProps = {
  onNewRequest: () => {},
  onToggleSidebar: () => {},
  hasNewRequests: true,
};

export default Header;
