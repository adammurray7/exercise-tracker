// Imports and packages
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.config");
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
require("dotenv").config();

// Initialise express
const app = express();

// Define which port to use
const port = process.env.PORT || 5000;

// Connect to MongoDB database
connectDB();

//  Middleware handler function to accept JSON data
app.use(cors());
app.use(express.json());

// Middleware handler function for routes
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// Listen on port
app.listen(port, () => {
	console.log(`Server is running on port ${port}.`);
});
