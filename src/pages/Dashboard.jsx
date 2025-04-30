import React from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function Dashboard() {
  // Sample Data
  const loanApplicationsData = [
    { month: 'Jan', applications: 30 },
    { month: 'Feb', applications: 45 },
    { month: 'Mar', applications: 60 },
    { month: 'Apr', applications: 40 },
    { month: 'May', applications: 70 },
  ];

  const transactionsData = [
    { day: 'Mon', transactions: 400 },
    { day: 'Tue', transactions: 300 },
    { day: 'Wed', transactions: 500 },
    { day: 'Thu', transactions: 200 },
    { day: 'Fri', transactions: 700 },
  ];

  const emiStatusData = [
    { name: "Paid", value: 8 },
    { name: "Pending", value: 4 },
  ];

  const COLORS = ["#00C49F", "#FF8042"]; // Paid = greenish, Pending = orange

  return (
    <div className="dashboard-container p-4" style={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      
      {/* Summary Cards */}
      <div className="row mb-5">
        {/* Cards same as before */}
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3" style={{ border: "none", borderRadius: "16px" }}>
            <h6 className="text-muted">Active Loan Amount</h6>
            <h3>₹ 250,000</h3>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3" style={{ border: "none", borderRadius: "16px" }}>
            <h6 className="text-muted">Next EMI Due</h6>
            <h3>June 10, 2024</h3>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3" style={{ border: "none", borderRadius: "16px" }}>
            <h6 className="text-muted">Paid EMIs</h6>
            <h3>8</h3>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm p-3" style={{ border: "none", borderRadius: "16px" }}>
            <h6 className="text-muted">Pending EMIs</h6>
            <h3>4</h3>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="row">
        
        {/* Notifications */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4" style={{ border: "none", borderRadius: "16px" }}>
            <h5 className="fw-bold mb-4">Recent Notifications</h5>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <i className="bi bi-clock-history me-2 text-primary"></i> EMI due soon on June 10, 2024
                </div>
                <small className="text-muted">1 day ago</small>
              </li>
              <li className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="bi bi-check-circle me-2 text-success"></i> Payment of ₹12,000 confirmed
                </div>
                <small className="text-muted">3 days ago</small>
              </li>
            </ul>
          </div>
        </div>

        {/* EMI Reminder */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4 d-flex flex-column align-items-start" style={{ border: "none", borderRadius: "16px" }}>
            <h5 className="fw-bold mb-4">EMI Reminder</h5>
            <p className="mb-2">June 10, 2024</p>
            <h3 className="fw-bold mb-2">₹12,000</h3>
            <p className="text-muted mb-4">Loan #2241</p>
            <button className="btn btn-primary px-4 py-2">Pay Now</button>
          </div>
        </div>

        {/* Loan Applications Line Chart */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4" style={{ border: "none", borderRadius: "16px" }}>
            <h5 className="fw-bold mb-4">Loan Applications</h5>
            <div style={{ height: "250px", backgroundColor: "#eef2f7", borderRadius: "10px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={loanApplicationsData}>
                  <Line type="monotone" dataKey="applications" stroke="#8884d8" strokeWidth={3} />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Transactions Bar Chart */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4" style={{ border: "none", borderRadius: "16px" }}>
            <h5 className="fw-bold mb-4">Transactions</h5>
            <div style={{ height: "250px", backgroundColor: "#eef2f7", borderRadius: "10px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={transactionsData}>
                  <Bar dataKey="transactions" fill="#82ca9d" radius={[10, 10, 0, 0]} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* EMI Status Pie Chart */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-4" style={{ border: "none", borderRadius: "16px" }}>
            <h5 className="fw-bold mb-4">EMI Status</h5>
            <div style={{ height: "250px", backgroundColor: "#eef2f7", borderRadius: "10px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={emiStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {emiStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
