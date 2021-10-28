// Imports and packages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema
const exerciseSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
		},
		description: { type: String, required: true },
		duration: { type: Number, required: true },
		date: { type: Date, required: true },
	},
	{
		timestamps: true,
	}
);

// Create a model from schema
const Exercise = mongoose.model("Exercise", exerciseSchema);

// Export model
module.exports = Exercise;
