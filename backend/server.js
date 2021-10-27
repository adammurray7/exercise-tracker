// Imports and packages
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.config");

// Initialise express
const app = express();

// Define which port to use
require("dotenv").config();
const port = process.env.PORT || 5000;

// Connect to MongoDB database
connectDB();

//  Middleware handler function to accept JSON data
app.use(cors());
app.use(express.json());

const exercisesRouter = require('./routes/exercises');
const usersRoutes = require('./routes/users')

app.use('/exercises' , exercisesRouter);
app.use('/users', usersRoutes);

// Listen on port
app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});
