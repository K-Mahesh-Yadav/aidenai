import React, { useState } from "react";
import axios from "axios";

const UpdateTask = () => {
  const [taskId, setTaskId] = useState(""); // Add state for task ID
  const [task, setTask] = useState(null);
  const [status, setStatus] = useState("Pending");

  const fetchTask = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/tasks/${taskId}`
      );
      const taskData = response.data;
      setTask(taskData);
      setStatus(taskData.status);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch task.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/tasks/${taskId}`, {
        // Include task_id in URL
        status,
      });
      alert("Task updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update task.");
    }
  };

  return (
    <div>
      {!task ? (
        <div>
          <label>Task ID:</label>
          <input
            type="text"
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
            required
          />
          <button onClick={fetchTask}>Fetch Task</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Task Title:</label>
            <input type="text" value={task.title} readOnly />
          </div>
          <div>
            <label>Due Date:</label>
            <input type="date" value={task.due_date.split("T")[0]} readOnly />
          </div>
          <div>
            <label>Priority:</label>
            <select value={task.priority} disabled>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div>
            <label>Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <label>Assigned To:</label>
            <input type="number" value={task.assigned_to} readOnly />
          </div>
          <button type="submit">Update Task</button>
        </form>
      )}
    </div>
  );
};

export default UpdateTask;
