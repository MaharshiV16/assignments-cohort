const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://maharishivashistha:9j7SsNekKimGJAad@cluster0.rr3jrgh.mongodb.net/course-selling-1");

// Define schemas
const AdminSchema = new mongoose.Schema({
	// Schema definition here
	username: String,
	password: String,
});

const UserSchema = new mongoose.Schema({
	// Schema definition here
	username: String,
	password: String,
	purchasedCourses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course", // ? Which table to refer
		},
	],
});

const CourseSchema = new mongoose.Schema({
	// Schema definition here
	title: String,
	description: String,
	imageLink: String,
	price: Number,
});

// ? What tables are there, in the RHS is the name with the schema
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
	Admin,
	User,
	Course,
};
