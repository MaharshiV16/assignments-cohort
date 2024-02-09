const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const router = Router();
const { Admin, Course } = require("../db/index");
const secret = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
	// Implement admin signup logic
	const username = req.body.username;
	const password = req.body.password;

	const newAdmin = await Admin.create({
		username,
		password,
	});
	if (newAdmin) {
		res.json({
			message: "Admin created successfully",
		});
	} else {
		res.json({
			message: "Admin not created",
		});
	}
});

router.post("/signin", async (req, res) => {
	// Implement admin signup logic
	const username = req.body.username;
	const password = req.body.password;

	const user = await Admin.findOne({
		username,
		password,
	});
	if (user) {
		const token = jwt.sign({ username }, secret);
		res.json({ token });
	} else {
		res.status(411).json({
			message: "Incorrect Credentials",
		});
	}
});

router.post("/courses", adminMiddleware, async (req, res) => {
	// Implement course creation logic
	const title = req.body.title;
	const description = req.body.description;
	const price = req.body.price;
	const imageLink = req.body.imageLink;

	const newCourse = await Course.create({
		title,
		description,
		price,
		imageLink,
	});

	if (newCourse) {
		res.json({
			message: "Course created successfully",
			courseId: newCourse._id,
		});
	} else {
		res.json({
			message: "Course not created",
		});
	}
});

router.get("/courses", adminMiddleware, async (req, res) => {
	// Implement fetching all courses logic
	const courses = await Course.find({});
	res.json({ courses: courses });
});

module.exports = router;
