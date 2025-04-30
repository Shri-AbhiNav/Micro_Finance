import { Outlet, Link } from "react-router-dom";

function Layout({ handleLogout }) {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light p-3" style={{ width: "250px", minHeight: "100vh" }}>
        <h3>Microfinance</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/my-loans">My Loans</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/apply-loan">Apply Loan</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/emi-payments">EMI Payments</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/payment-history">Payment History</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notifications">Notifications</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile-settings">Profile Settings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/loan-applications">Loan Applications</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/active-loans">Active Loans</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/emi-monitoring">EMI Monitoring</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users-management">Users Management</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reports">Reports</Link>
          </li>
          <li className="nav-item mt-3">
            <button onClick={handleLogout} className="btn btn-danger w-100">
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
