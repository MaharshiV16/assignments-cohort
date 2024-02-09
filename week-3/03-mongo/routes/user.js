const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// User Routes
router.post("/signup", async (req, res) => {
	// Implement user signup logic
	const username = req.body.username;
	const password = req.body.password;

	const newUser = await User.create({
		username,
		password,
	});
	if (newUser) {
		res.json({
			message: "User created successfully",
		});
	} else {
		res.json({
			message: "User not created",
		});
	}
});

router.get("/courses", async (req, res) => {
	// Implement listing all courses logic
	const courses = await Course.find({});
	res.json({ courses: courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
	// Implement course purchase logic
	const id = req.params.courseId;
	const username = req.headers.username;
	const user = await User.updateOne(
		{
			username: username,
		},
		{
			$push: {
				purchasedCourses: id,
			},
		},
	);
	if (user) {
		res.json({
			message: "Course purchased successfully",
		});
	} else {
		res.json({ message: "Failed Purchase" });
	}
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
	// Implement fetching purchased courses logic
	const username = req.headers.username;
	const user = await User.findOne({ username: username });
	if (user) {
		const courses = await Course.find({
			_id: {
				$in: user.purchasedCourses,
			},
		});
		res.json({ purchasedCourses: courses });
	} else {
		res.json({ message: "No Courses" });
	}
});

module.exports = router;
