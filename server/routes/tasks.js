const express = require('express');
const router = express.Router();

const Task = require('../model/Task');
const { authenticateJWT } = require('../utils/jwtAuth');

// GET /tasks - Fetch all tasks
router.get('/', authenticateJWT, async (req, res) => {
  try {
    console.log(` -- reqquery : ${JSON.stringify(req.query)}`)
    const { userId } = req.query; // Extract userId from query params

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
    const tasks = await Task.find({ user: userId });
    
    res.status(200).json(tasks);
  } catch (error) {

    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// POST /tasks - Create a new task
router.post('/', authenticateJWT, async (req, res) => {

  console.log(` -- req : ${JSON.stringify(req.body)}`)
  const { id, name, completed, userId } = req.body;

  try {
    const newTask = new Task({ id, name, completed, user: userId });
    await newTask.save();
    //await User.findByIdAndUpdate(userId, { $push: { tasks: task._id } });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }

});

// PUT /tasks/:id - Update a task
router.put('/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const updatedTask = await Task.findOneAndUpdate(
      { id: Number(id)},
      { completed },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// DELETE /tasks/:id - Delete a task
router.delete('/:id', authenticateJWT, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await Task.deleteOne({ id: Number(id) });

    console.log(`deleted task : ${deletedTask}`)
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
