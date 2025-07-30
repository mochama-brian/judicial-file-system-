import React, { useState } from "react";

const FileForm = ({ onAddFile }) => {
  const [formData, setFormData] = useState({
    caseId: "",
    type: "Civil",
    receivedFrom: "",
    status: "Received",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeReceived = new Date().toLocaleString();
    onAddFile({ ...formData, timeReceived });
    setFormData({ caseId: "", type: "Civil", receivedFrom: "", status: "Received" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-4 rounded mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="caseId"
          placeholder="Case ID"
          value={formData.caseId}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="receivedFrom"
          placeholder="Received From"
          value={formData.receivedFrom}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <select name="type" value={formData.type} onChange={handleChange} className="border p-2 rounded">
          <option>Civil</option>
          <option>Criminal</option>
          <option>Family</option>
          <option>Commercial</option>
        </select>
        <select name="status" value={formData.status} onChange={handleChange} className="border p-2 rounded">
          <option>Received</option>
          <option>In Review</option>
          <option>Archived</option>
        </select>
      </div>
      <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Add File
      </button>
    </form>
  );
};

export default FileForm;
