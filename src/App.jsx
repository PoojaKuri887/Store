import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  // Simulate componentDidMount for DataTables integration
  useEffect(() => {
    // Initialize DataTables on mount
    const $ = window.jQuery;
    if ($) {
      $('#store-table').DataTable();
      $('#user-table').DataTable();
    }
  }, []);

  return (
    <div>
      <button
        className="btn btn-primary toggle-sidebar"
        id="toggle-sidebar"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <nav className={`sidebar ${sidebarHidden ? 'hidden' : ''}`}>
        <h4 className="text-white" style={{ textAlign: 'center' }}>Task</h4>
        <hr style={{ color: '#fff' }} />
        <a href="#dashboard" className="nav-link">Dashboard</a>
        <a href="#add-user" className="nav-link">Add User</a>
        <a href="#add-store" className="nav-link">Add Store</a>
        <a href="#list-users" className="nav-link">User Management</a>
        <a href="#list-stores" className="nav-link">Store Management</a>
        <a href="#logout" className="nav-link">Logout</a>
      </nav>

      <div className={`content ${sidebarHidden ? 'full-width' : ''}`}>
        <h1 style={{ textAlign: 'center' }}>Welcome to the Admin Dashboard</h1>

        <div id="dashboard" className="row">
          <div className="col-md-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Total Users</div>
              <div className="card-body">
                <h5 className="card-title" id="total-users">0</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-header">Total Stores</div>
              <div className="card-body">
                <h5 className="card-title" id="total-stores">0</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning mb-3">
              <div className="card-header">Total Users Submitted Rating</div>
              <div className="card-body">
                <h5 className="card-title" id="total-ratings">0</h5>
              </div>
            </div>
          </div>
        </div>

        <div id="add-user" className="mt-5">
          <h2>Add User</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="user-name" className="form-label">Name</label>
              <input type="text" className="form-control" id="user-name" placeholder="Enter Name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="user-email" className="form-label">Email</label>
              <input type="email" className="form-control" id="user-email" placeholder="Enter Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="user-password" className="form-label">Password</label>
              <input type="password" className="form-control" id="user-password" placeholder="Enter Password" required />
            </div>
            <div className="mb-3">
              <label htmlFor="user-address" className="form-label">Address</label>
              <input type="text" className="form-control" id="user-address" placeholder="Enter Address" required />
            </div>
            <div className="mb-3">
              <label htmlFor="user-role" className="form-label">Role</label>
              <select className="form-control" id="user-role" required>
                <option value="normal">Normal User</option>
                <option value="admin">Admin User</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Add User</button>
          </form>
        </div>

        <div id="add-store" className="mt-5">
          <h2>Add Store</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="store-name" className="form-label">Store Name</label>
              <input type="text" className="form-control" id="store-name" placeholder="Enter Store Name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="store-email" className="form-label">Email</label>
              <input type="email" className="form-control" id="store-email" placeholder="Enter Store Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="store-address" className="form-label">Address</label>
              <input type="text" className="form-control" id="store-address" placeholder="Enter Store Address" required />
            </div>
            <button type="submit" className="btn btn-primary">Add Store</button>
          </form>
        </div>

        <div id="list-stores" className="mt-5">
          <h2>Store Management</h2>
          <table className="table table-striped" id="store-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Store One</td>
                <td>store1@example.com</td>
                <td>Boston</td>
                <td>4.5</td>
              </tr>
              <tr>
                <td>Store Two</td>
                <td>store2@example.com</td>
                <td>San Diego</td>
                <td>3.8</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="list-users" className="mt-5">
          <h2>User Management</h2>
          <table className="table table-striped" id="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Admin</td>
                <td>john@admin.com</td>
                <td>New York</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>Jane User</td>
                <td>jane@user.com</td>
                <td>Chicago</td>
                <td>Normal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="logout" className="mt-5">
          <button className="btn btn-danger">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default App;
