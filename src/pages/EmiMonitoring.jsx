import React from "react";

export default function EmiMonitoring() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">EMI Monitoring</h2>

      <div className="card shadow-sm">
        <div className="card-body">

          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">Loan ID</th>
                <th scope="col">Borrower</th>
                <th scope="col">Next EMI Due</th>
                <th scope="col">EMI Amount</th>
                <th scope="col">Last Payment Date</th>
                <th scope="col">Payment Status</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>#L001</td>
                <td>Rahul Sharma</td>
                <td>05-May-2025</td>
                <td>₹5,000</td>
                <td>05-Apr-2025</td>
                <td><span className="badge bg-success">On Time</span></td>
              </tr>

              <tr>
                <td>#L002</td>
                <td>Anjali Verma</td>
                <td>07-May-2025</td>
                <td>₹3,200</td>
                <td>07-Apr-2025</td>
                <td><span className="badge bg-success">On Time</span></td>
              </tr>

              <tr>
                <td>#L003</td>
                <td>Vikram Singh</td>
                <td>03-May-2025</td>
                <td>₹8,500</td>
                <td>03-Apr-2025</td>
                <td><span className="badge bg-danger">Missed</span></td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
