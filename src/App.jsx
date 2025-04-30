import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyLoans from "./pages/MyLoans";
import ApplyLoan from "./pages/ApplyLoan";
import EmiPayments from "./pages/EmiPayments";
import PaymentHistory from "./pages/PaymentHistory";
import Notifications from "./pages/Notifications";
import ProfileSettings from "./pages/ProfileSettings";
import LoanApplications from "./pages/LoanApplications";
import ActiveLoans from "./pages/ActiveLoans";
import EmiMonitoring from "./pages/EmiMonitoring";
import UsersManagement from "./pages/UsersManagement";
import Reports from "./pages/Reports";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<Layout handleLogout={handleLogout} />}>
              {/* All dashboard routes inside Layout */}
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="my-loans" element={<MyLoans />} />
              <Route path="apply-loan" element={<ApplyLoan />} />
              <Route path="emi-payments" element={<EmiPayments />} />
              <Route path="payment-history" element={<PaymentHistory />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="profile-settings" element={<ProfileSettings />} />
              <Route path="loan-applications" element={<LoanApplications />} />
              <Route path="active-loans" element={<ActiveLoans />} />
              <Route path="emi-monitoring" element={<EmiMonitoring />} />
              <Route path="users-management" element={<UsersManagement />} />
              <Route path="reports" element={<Reports />} />
            </Route>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
