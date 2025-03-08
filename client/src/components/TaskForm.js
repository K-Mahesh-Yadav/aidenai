import React, { useState } from "react";
import axios from "axios";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium"); // Default priority
  const [userId, setUserId] = useState(""); // New state for user ID
  const [assignedTo, setAssignedTo] = useState(""); // New state for assigned to user ID

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/tasks", {
        title,
        due_date: dueDate,
        priority,
        user_id: userId, // Include user ID in the request
        assigned_to: assignedTo, // Include assigned to user ID in the request
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
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Assigned To:</label>
        <input
          type="text"
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
