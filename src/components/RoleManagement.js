import React, { useState } from "react";
import "../styles/RoleManagement.css";

const initialRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "User", permissions: ["Read"] },
  { id: 3, name: "Manager", permissions: ["Read", "Write"] },
];

function RoleManagement() {
  const [roles, setRoles] = useState(initialRoles);
  const [showModal, setShowModal] = useState(false);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const addRole = (e) => {
    e.preventDefault();
    setRoles([...roles, { ...newRole, id: roles.length + 1 }]);
    setShowModal(false);
    setNewRole({ name: "", permissions: [] });
  };

  const togglePermission = (permission) => {
    setNewRole((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter((p) => p !== permission)
        : [...prev.permissions, permission],
    }));
  };

  return (
    <div>
      <h2>Role Management</h2>
      <button onClick={() => setShowModal(true)}>Add New Role</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Role</h3>
            <form onSubmit={addRole}>
              <input
                type="text"
                placeholder="Role Name"
                value={newRole.name}
                onChange={(e) =>
                  setNewRole({ ...newRole, name: e.target.value })
                }
                required
              />
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={newRole.permissions.includes("Read")}
                    onChange={() => togglePermission("Read")}
                  />{" "}
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={newRole.permissions.includes("Write")}
                    onChange={() => togglePermission("Write")}
                  />{" "}
                  Write
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={newRole.permissions.includes("Delete")}
                    onChange={() => togglePermission("Delete")}
                  />{" "}
                  Delete
                </label>
              </div>
              <button type="submit">Add Role</button>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoleManagement;
