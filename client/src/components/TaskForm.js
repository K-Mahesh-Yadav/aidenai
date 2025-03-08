import React, { useState } from "react";
import axios from "axios";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setpriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/tasks", { title, due_date: dueDate, priority })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Task Priority"
        value={priority}
        onChange={(e) => setpriority(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
