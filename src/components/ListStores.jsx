import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'datatables.net-dt/css/jquery.dataTables.min.css'; // Import DataTables CSS
import 'datatables.net'; // Import DataTables JS

const ListStores = () => {
  useEffect(() => {
    // Initialize DataTables after component mounts
    $('#store-table').DataTable();

    // Cleanup function to destroy DataTable instance
    return () => {
      $('#store-table').DataTable().destroy();
    };
  }, []);

  return (
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
          {/* Example stores */}
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
  );
};

export default ListStores;
