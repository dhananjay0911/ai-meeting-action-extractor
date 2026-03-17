import React, { useState } from "react";
import Upload from "./components/Upload";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {

  const [transcriptId, setTranscriptId] = useState(null);

  const handleUploadSuccess = (response) => {
    setTranscriptId(response.transcript_id);
  };

  return (
    <div className="app">

      <header className="app-header">
        <h1>🤖 AI Meeting Action Extractor</h1>
        <p>Extract actionable tasks from meeting transcripts</p>
      </header>

      <main className="app-main">

        <Upload onUploadSuccess={handleUploadSuccess} />

        {transcriptId && (
          <TaskList transcriptId={transcriptId} />
        )}

      </main>

      <footer className="app-footer">
        <p>AI Meeting Extractor • FastAPI + React</p>
      </footer>

    </div>
  );
}

export default App;