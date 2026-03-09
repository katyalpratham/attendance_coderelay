import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/dashboard.js";
import { HeartPulse } from "lucide-react";

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`} aria-label="Main navigation">
      <h2 className="sidebar__brand" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <HeartPulse size={24} />
        LeaveSync
      </h2>

      <nav>
        <ul className="sidebar__nav-list">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  `sidebar__nav-item${isActive ? " sidebar__nav-item--active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  activePath: PropTypes.string,
};

export default Sidebar;
