const Task = require("../models/Task");

// Create a new task
exports.createTask = async (req, res) => {
  try {
    console.log(req.body);
    const { task_id, user_id, assigned_to, title, status, due_date, priority } =
      req.body;
    const task = new Task({
      task_id,
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
    console.log("Fetching all tasks"); // Add logging
    const tasks = await Task.find();
    console.log(tasks);
    res.status(200).json(
      tasks.map((task) => ({
        _id: task._id,
        task_id: task.task_id,
        user_id: task.user_id,
        assigned_to: task.assigned_to,
        title: task.title,
        status: task.status,
        due_date: task.due_date,
        priority: task.priority,
        __v: task.__v,
      }))
    );
  } catch (error) {
    console.error("Error fetching tasks:", error); // Add logging
    res.status(500).json({ error: error.message });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const { task_id } = req.params; // Get task_id from params
    const { status, assigned_to } = req.body;
    if (status === "Completed" && !assigned_to) {
      return res.status(400).json({
        error:
          "Task cannot be marked as 'Completed' without an assigned owner.",
      });
    }
    const task = await Task.findOneAndUpdate({ task_id }, req.body, {
      new: true,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    await Task.findOneAndDelete({ task_id });
    res.status(204).json({ message: "Task deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
