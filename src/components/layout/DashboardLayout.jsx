import { useState } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerAction, setHeaderAction] = useState(null);

  // We invoke the headerAction function if the active Route has registered one with us
  const handleNewRequest = () => {
    if (typeof headerAction === 'function') {
      headerAction();
    }
  };

  return (
    <div className="dashboard">
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`} 
        onClick={() => setIsSidebarOpen(false)}
      />
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main">
        <Header 
          onNewRequest={handleNewRequest} 
          onToggleSidebar={() => setIsSidebarOpen(true)} 
        />
        <main>
          <Outlet context={{ setHeaderAction }} />
        </main>
      </div>
    </div>
  );
}

DashboardLayout.propTypes = {
  onNewRequest: PropTypes.func,
};

DashboardLayout.defaultProps = {
  onNewRequest: () => {},
};

export default DashboardLayout;
