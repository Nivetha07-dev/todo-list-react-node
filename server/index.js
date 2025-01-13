const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const { connectToDatabase } = require("./utils/database");
const tasksRouter = require('./routes/tasks'); 

// Middleware to parse JSON
app.use(express.json());

app.use(cors());

// Connect to MongoDB
(async () => {
  await connectToDatabase();

app.use((req, res, next) => {
  console.log(`[${req.method}] - ${req.url}`);
  next(); // Pass the request to the next middleware or route handler
});

// Root route
app.get('/', (req, res) => {
  
});

// Use tasks router
app.use('/tasks', tasksRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
})();