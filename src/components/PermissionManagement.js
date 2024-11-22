import React, { useState } from "react";
import "../styles/PermissionManagement.css";

const initialPermissions = [
  { id: 1, name: "Read", description: "Allows reading data" },
  { id: 2, name: "Write", description: "Allows creating and updating data" },
  { id: 3, name: "Delete", description: "Allows deleting data" },
];

function PermissionManagement() {
  const [permissions, setPermissions] = useState(initialPermissions);
  const [showModal, setShowModal] = useState(false);
  const [newPermission, setNewPermission] = useState({
    name: "",
    description: "",
  });

  const addPermission = (e) => {
    e.preventDefault();
    setPermissions([
      ...permissions,
      { ...newPermission, id: permissions.length + 1 },
    ]);
    setShowModal(false);
    setNewPermission({ name: "", description: "" });
  };

  return (
    <div>
      <h2>Permission Management</h2>
      <button onClick={() => setShowModal(true)}>Add New Permission</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.name}</td>
              <td>{permission.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Permission</h3>
            <form onSubmit={addPermission}>
              <input
                type="text"
                placeholder="Permission Name"
                value={newPermission.name}
                onChange={(e) =>
                  setNewPermission({ ...newPermission, name: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Description"
                value={newPermission.description}
                onChange={(e) =>
                  setNewPermission({
                    ...newPermission,
                    description: e.target.value,
                  })
                }
                required
              ></textarea>
              <button type="submit">Add Permission</button>
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

export default PermissionManagement;
