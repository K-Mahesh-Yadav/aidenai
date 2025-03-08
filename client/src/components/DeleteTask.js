import React, { useState } from "react";
import axios from "axios";

const DeleteTask = () => {
  const [taskId, setTaskId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
      alert("Task deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete task.");
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <div>
        <label>Task ID:</label>
        <input
          type="number"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
          required
        />
      </div>
      <button type="submit">Delete Task</button>
    </form>
  );
};

export default DeleteTask;
