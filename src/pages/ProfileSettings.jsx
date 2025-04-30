import React from "react";

export default function ProfileSettings() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Profile Settings</h2>

      <div className="card shadow-sm">
        <div className="card-body">

          <form>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">New Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter new password" />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm new password" />
            </div>

            <button type="submit" className="btn btn-primary">Update Profile</button>

          </form>

        </div>
      </div>
    </div>
  );
}
