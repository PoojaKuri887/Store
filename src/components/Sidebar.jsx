import React from 'react';
import '../styles.css';

const Sidebar = ({ toggleSidebar }) => (
  <nav className={`sidebar ${toggleSidebar ? 'hide' : ''}`}>
    <h4 className="text-white" style={{ textAlign: 'center' }}>Task</h4>
    <hr style={{ color: '#fff' }} />
    <a href="#dashboard" className="nav-link">Dashboard</a>
    <a href="#add-user" className="nav-link">Add User</a>
    <a href="#add-store" className="nav-link">Add Store</a>
    <a href="#list-users" className="nav-link">User Management</a>
    <a href="#list-stores" className="nav-link">Store Management</a>
    <a href="#logout" className="nav-link">Logout</a>
  </nav>
);

export default Sidebar;
