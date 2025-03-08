const Task = require("../models/Task");

// Create a new task
exports.createTask = async (req, res) => {
  try {
    console.log(req.body);
    const { user_id, assigned_to, title, status, due_date, priority } =
      req.body;
    const task = new Task({
      user_id,
      assigned_to,
      title,
      status,
      due_date,
      priority,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("user_id assigned_to");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(204).json({ message: "Task deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
