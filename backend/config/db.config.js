// Imports and packages
const mongoose = require("mongoose");
require("dotenv").config();
const URI = process.env.ATLAS_URI;

// Connect to MongoDB
const connectDB = async () => {
	try {
		await mongoose.connect(URI);
		console.log("Connected to MongoDB database...");
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};

// Export connectDB function
module.exports = connectDB;
