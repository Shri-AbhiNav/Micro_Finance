import React from "react";

export default function Reports() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Financial Reports</h2>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-primary shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Loans Disbursed</h5>
              <p className="card-text fs-4">₹50,00,000</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-white bg-success shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total EMI Received</h5>
              <p className="card-text fs-4">₹35,00,000</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-white bg-warning shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Pending Dues</h5>
              <p className="card-text fs-4">₹15,00,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="card shadow-sm">
        <div className="card-body">

          <h5 className="card-title mb-3">Detailed Report</h5>

          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Report ID</th>
                <th>Type</th>
                <th>Generated On</th>
                <th>Status</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>#R001</td>
                <td>Loan Disbursement Report</td>
                <td>25-Apr-2025</td>
                <td><span className="badge bg-success">Ready</span></td>
                <td><button className="btn btn-sm btn-primary">Download</button></td>
              </tr>

              <tr>
                <td>#R002</td>
                <td>EMI Collection Report</td>
                <td>25-Apr-2025</td>
                <td><span className="badge bg-success">Ready</span></td>
                <td><button className="btn btn-sm btn-primary">Download</button></td>
              </tr>

              <tr>
                <td>#R003</td>
                <td>Pending Dues Report</td>
                <td>24-Apr-2025</td>
                <td><span className="badge bg-warning text-dark">Processing</span></td>
                <td><button className="btn btn-sm btn-secondary" disabled>Pending</button></td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>

    </div>
  );
}
