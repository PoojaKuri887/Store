import React, { useState } from 'react';

import Dashboard from './Dashboard';
import AddUser from './AddUser';

import ListUsers from './ListUsers';
import ListStores from './ListStores';
import Logout from './Logout';
import './styles.css';

const App = () => {
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  return (
    <div className="app-container">
      <button
        className="btn btn-primary toggle-sidebar"
        id="toggle-sidebar"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <Sidebar toggleSidebar={sidebarHidden} />
      <div className={`content ${sidebarHidden ? 'expanded' : ''}`}>
        <Dashboard />
        <AddUser />
        <AddStore />
        <ListUsers />
        <ListStores />
        <Logout />
      </div>
    </div>
  );
};

export default App;
