import React, { useState, useEffect, useCallback } from "react";
import { getTasks } from "../services/api";
import TaskCard from "./TaskCard";
import "./TaskList.css";

function TaskList({ transcriptId }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = useCallback(async () => {
    if (!transcriptId) return;

    try {
      const data = await getTasks(transcriptId);
      setTasks(data.tasks || []); // FIXED
    } catch (err) {
      console.error(err);
    }
  }, [transcriptId]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div className="task-list">
      <h2>📋 Extracted Tasks ({tasks.length})</h2>

      <div className="task-grid">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;