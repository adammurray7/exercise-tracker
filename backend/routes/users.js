// Imports and packages
const router = require("express").Router();
const User = require("../models/user.model");

// JSON document of all users
router.route("/").get((req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Add a new user
router.route("/").post((req, res) => {
	const username = req.body.username;

	const newUser = new User({ username });

	newUser
		.save()
		.then(() => res.json("User added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

// Edit an existing user with specific ID
router.route("/edit/:id").post((req, res) => {
	User.findById(req.params.id)
		.then((user) => {
			user.username = req.body.username;

			user.save()
				.then(() => res.json("User updated!"))
				.catch((err) => res.status(400).json("Error: " + err));
		})
		.catch((err) => res.status(4000).json("Error: " + err));
});

module.exports = router;
