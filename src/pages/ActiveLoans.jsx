import React from "react";

export default function ActiveLoans() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Active Loans</h2>

      <div className="card shadow-sm">
        <div className="card-body">

          <table className="table table-striped table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">Loan ID</th>
                <th scope="col">Borrower</th>
                <th scope="col">Loan Amount</th>
                <th scope="col">EMI Amount</th>
                <th scope="col">Remaining Tenure</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>#L001</td>
                <td>Rahul Sharma</td>
                <td>₹1,50,000</td>
                <td>₹5,000</td>
                <td>24 months</td>
                <td><span className="badge bg-success">Active</span></td>
              </tr>

              <tr>
                <td>#L002</td>
                <td>Anjali Verma</td>
                <td>₹75,000</td>
                <td>₹3,200</td>
                <td>12 months</td>
                <td><span className="badge bg-success">Active</span></td>
              </tr>

              <tr>
                <td>#L003</td>
                <td>Vikram Singh</td>
                <td>₹2,00,000</td>
                <td>₹8,500</td>
                <td>36 months</td>
                <td><span className="badge bg-warning">Overdue</span></td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
