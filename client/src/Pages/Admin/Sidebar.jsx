import React, { useState } from 'react';
import { FiCalendar, FiBarChart2, FiImage, FiSettings, FiLogOut, FiMenu } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      {/* Mobile Menu Toggle Button */}
      <div className="mobile-menu-toggle" onClick={toggleSidebar}>
        <FiMenu />
      </div>
      {/* Sidebar */}
      <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <div className="sidebar-header">
          <h3>My App</h3>
        </div>
        <ul className="sidebar-links">
          <li><FiCalendar /><a href="#">Appointments</a></li>
          <li><FiBarChart2 /><a href="#">Dashboard</a></li>
          <li><FiImage /><a href="#">Images</a></li>
          <li><FiSettings /><a href="#">Services</a></li>
        </ul>
        <button className="logout-btn"><FiLogOut />Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
