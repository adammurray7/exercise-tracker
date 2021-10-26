// Imports and packages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema
const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3,
		},
	},
	{
		timestamps: true,
	}
);

// Create a model from schema
const User = mongoose.model("User", userSchema);

// Export model
module.exports = User;
