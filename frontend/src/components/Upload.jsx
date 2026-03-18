import React, { useState } from "react";
import { uploadTranscript } from "../services/api";
import "./Upload.css";

function UploadComponent({ onUploadSuccess }) {

  const [file,setFile] = useState(null);
  const [loading,setLoading] = useState(false);
  const [message,setMessage] = useState("");

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(!file){
      setMessage("Select a file");
      return;
    }

    setLoading(true);

    try{

      const result = await uploadTranscript(file);

      setMessage("Transcript processed successfully");

      onUploadSuccess(result);

    }catch(err){

      setMessage("Upload failed");

    }

    setLoading(false);
  };

  return(

<div className="upload-card">

<h2>Upload Meeting Transcript</h2>

<form onSubmit={handleSubmit}>

<input
type="file"
accept=".txt"
onChange={handleFile}
/>

<button type="submit">
{loading ? "Processing..." : "Extract Tasks"}
</button>

<p>{message}</p>

</form>

</div>
);
}

export default UploadComponent;