const mongoose = require('mongoose');
const User = require('./User');

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
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  }
});

// Create the Task model
const Task = mongoose.model('task', TaskSchema);

module.exports = Task;
