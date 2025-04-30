import React from "react";

export default function PaymentHistory() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Payment History</h2>

      <div className="card shadow-sm">
        <div className="card-header">
          EMI Payment Records
        </div>

        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Payment ID</th>
                <th>Loan ID</th>
                <th>Payment Date</th>
                <th>EMI Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>PMT001</td>
                <td>#123456</td>
                <td>15-Apr-2025</td>
                <td>₹2,500</td>
                <td>UPI</td>
                <td><span className="badge bg-success">Paid</span></td>
              </tr>

              <tr>
                <td>PMT002</td>
                <td>#123456</td>
                <td>15-Mar-2025</td>
                <td>₹2,500</td>
                <td>Credit Card</td>
                <td><span className="badge bg-success">Paid</span></td>
              </tr>

              <tr>
                <td>PMT003</td>
                <td>#789012</td>
                <td>14-Feb-2025</td>
                <td>₹3,000</td>
                <td>Net Banking</td>
                <td><span className="badge bg-success">Paid</span></td>
              </tr>

              <tr>
                <td>PMT004</td>
                <td>#345678</td>
                <td>16-Jan-2025</td>
                <td>₹2,800</td>
                <td>Debit Card</td>
                <td><span className="badge bg-success">Paid</span></td>
              </tr>

              {/* Later dynamic mapping will come here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
