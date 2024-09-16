import React from 'react';

const Dashboard = () => (
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
);

export default Dashboard;
