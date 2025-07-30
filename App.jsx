import React, { useState } from "react";
import FileForm from "./FileForm";
import FileTable from "./FileTable";

const App = () => {
  const [files, setFiles] = useState([]);

  const handleAddFile = (fileData) => {
    setFiles((prevFiles) => [...prevFiles, fileData]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">Judicial File Management System</h1>
      <FileForm onAddFile={handleAddFile} />
      <FileTable files={files} />
    </div>
  );
};

export default App;
