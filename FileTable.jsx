import React from "react";

const FileTable = ({ files }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Case ID</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Received From</th>
            <th className="border p-2">Time Received</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {files.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500">No files received yet.</td>
            </tr>
          ) : (
            files.map((file, index) => (
              <tr key={index}>
                <td className="border p-2">{file.caseId}</td>
                <td className="border p-2">{file.type}</td>
                <td className="border p-2">{file.receivedFrom}</td>
                <td className="border p-2">{file.timeReceived}</td>
                <td className="border p-2">{file.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FileTable;
