const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

// Task routes
router.post("/tasks", taskController.createTask);
router.get("/tasks", taskController.getAllTasks);
router.put("/tasks/:task_id", taskController.updateTask); // Add task_id to URL
router.delete("/tasks/:task_id", taskController.deleteTask);

module.exports = router;
