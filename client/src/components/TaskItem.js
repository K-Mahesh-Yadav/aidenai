import React from "react";

const TaskItem = ({ task }) => {
  const isOverdue = new Date(task.due_date) < new Date();

  return (
    <div className={`task-item ${isOverdue ? "overdue" : ""}`}>
      <h3>{task.title}</h3>
      <p>Due Date: {new Date(task.due_date).toLocaleDateString()}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>User ID: {task.user_id}</p>
      <p>Assigned To: {task.assigned_to}</p>
    </div>
  );
};

export default TaskItem;
