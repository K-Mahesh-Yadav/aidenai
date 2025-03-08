import React, { useState } from "react";
import axios from "axios";

const TaskForm = () => {
  const [taskId, setTaskId] = useState(""); // New state for task ID
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium"); // Default priority
  const [userId, setUserId] = useState(12345); // Sample user ID as number
  const [assignedTo, setAssignedTo] = useState(""); // New state for assigned to user ID

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/tasks", {
        task_id: taskId,
        title,
        due_date: dueDate,
        priority,
        user_id: Number(userId), // Ensure user ID is a number
        assigned_to: Number(assignedTo), // Ensure assigned to user ID is a number
      })
      .then((response) => {
        console.log(response.data);
        alert("Task created successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to create task.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task ID:</label>
        <input
          type="number"
          placeholder="Task ID"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Task Title:</label>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div>
        <label>User ID:</label>
        <input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Assigned To:</label>
        <input
          type="number"
          placeholder="Assigned To"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
