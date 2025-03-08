const mongoose = require("mongoose");
const User = require("./User"); // Ensure User model is required

const taskSchema = new mongoose.Schema({
  task_id: {
    type: Number,
    required: true,
    unique: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  assigned_to: { type: Number },
  title: {
    type: String,
    required: true,
    minlength: 3,
    validate: {
      validator: function (v) {
        return v.length >= 3;
      },
      message: (props) => `${props.value} is too short!`,
    },
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  due_date: {
    type: Date,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{4}-\d{2}-\d{2}$/.test(v.toISOString().split("T")[0]);
      },
      message: (props) => `${props.value} is not a valid date!`,
    },
  },
  priority: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Medium",
  },
});

module.exports = mongoose.model("Task", taskSchema);
