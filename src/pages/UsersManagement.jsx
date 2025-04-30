import React, { useState } from "react";

export default function UsersManagement() {
  const [users, setUsers] = useState([
    {
      id: "U001",
      fullName: "Rahul Sharma",
      phone: "9876543210",
      email: "rahul@example.com",
      role: "Borrower",
      status: "Active",
    },
    {
      id: "U002",
      fullName: "Anjali Verma",
      phone: "9123456780",
      email: "anjali@example.com",
      role: "Borrower",
      status: "Inactive",
    },
    {
      id: "U003",
      fullName: "Vikram Singh",
      phone: "9988776655",
      email: "vikram@example.com",
      role: "Borrower",
      status: "Active",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [userToDelete, setUserToDelete] = useState(null);

  const usersPerPage = 5;

  // Toast function
  const showToast = (message) => {
    const toastElement = document.getElementById("liveToast");
    if (toastElement) {
      const toastBody = toastElement.querySelector(".toast-body");
      toastBody.innerText = message;
      const toast = new window.bootstrap.Toast(toastElement);
      toast.show();
    }
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
  };

  const handleConfirmDelete = () => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== userToDelete.id));
    showToast("User deleted successfully! 🗑️");
  };

  // Filtered and paginated users
  const filteredUsers = users.filter((user) =>
    `${user.fullName} ${user.email} ${user.phone} ${user.role} ${user.status}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Users Management</h2>

      {/* Add User + Search */}
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-primary">
          + Add New User
        </button>
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Users Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>User ID</th>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>#{user.id}</td>
                    <td>{user.fullName}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <span
                        className={`badge ${
                          user.status === "Active"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-warning me-2">Edit</button>
                      <button
                        className="btn btn-sm btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteUserModal"
                        onClick={() => handleDeleteClick(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav>
              <ul className="pagination justify-content-center">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() => paginate(index + 1)}
                      className="page-link"
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>

      {/* Delete Modal */}
      {userToDelete && (
        <div
          className="modal fade"
          id="deleteUserModal"
          tabIndex="-1"
          aria-labelledby="deleteUserModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title" id="deleteUserModalLabel">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                Are you sure you want to delete <strong>{userToDelete.fullName}</strong>?
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={handleConfirmDelete}
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <div
        className="toast-container position-fixed bottom-0 end-0 p-3"
        style={{ zIndex: 9999 }}
      >
        <div
          id="liveToast"
          className="toast align-items-center text-white bg-success border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              Success message here
            </div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
