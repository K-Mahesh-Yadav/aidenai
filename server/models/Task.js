const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  assigned_to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true, minlength: 3 },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  due_date: { type: Date, required: true },
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Medium",
  },
});

module.exports = mongoose.model("Task", taskSchema);
