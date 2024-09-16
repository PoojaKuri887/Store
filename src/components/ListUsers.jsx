import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net';

const ListUsers = () => {
  useEffect(() => {
    $('#user-table').DataTable();
  }, []);

  return (
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
          {/* Example users */}
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
  );
};

export default ListUsers;
