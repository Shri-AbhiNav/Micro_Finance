import React from "react";

export default function LoanApplications() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Loan Applications</h2>

      <div className="card shadow-sm">
        <div className="card-body">

          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">Application ID</th>
                <th scope="col">Applicant Name</th>
                <th scope="col">Loan Amount</th>
                <th scope="col">Status</th>
                <th scope="col">Applied On</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>#A123456</td>
                <td>Rahul Sharma</td>
                <td>₹1,50,000</td>
                <td><span className="badge bg-warning">Pending</span></td>
                <td>20-Apr-2025</td>
              </tr>

              <tr>
                <td>#B789012</td>
                <td>Anjali Verma</td>
                <td>₹75,000</td>
                <td><span className="badge bg-success">Approved</span></td>
                <td>18-Apr-2025</td>
              </tr>

              <tr>
                <td>#C345678</td>
                <td>Vikram Singh</td>
                <td>₹2,00,000</td>
                <td><span className="badge bg-danger">Rejected</span></td>
                <td>15-Apr-2025</td>
              </tr>

              <tr>
                <td>#D901234</td>
                <td>Neha Kapoor</td>
                <td>₹1,20,000</td>
                <td><span className="badge bg-info">Under Review</span></td>
                <td>10-Apr-2025</td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
