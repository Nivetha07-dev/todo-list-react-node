const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');

const { connectToDatabase } = require("./utils/dbConfig");
const tasksRouter = require('./routes/tasks'); 
const userRouter = require('./routes/user');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }
));
app.use(bodyParser.json());
app.use(cookieParser());
app.use((req, res, next) => {
  console.log(`[${req.method}] - ${req.url}`);
  next(); // Pass the request to the next middleware or route handler
});

// Routers
app.use('/tasks', tasksRouter);
app.use('/auth', userRouter);

// Connect to MongoDB
connectToDatabase();

// Root route
app.get('/', (req, res) => {
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});