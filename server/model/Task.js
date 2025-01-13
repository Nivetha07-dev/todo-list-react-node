const mongoose = require('mongoose');

// Define the Task schema
const TaskSchema = new mongoose.Schema({
  id:{
    type: Number,
    required: true,
    default: Number(Date.now),
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
});

// Create the Task model
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
