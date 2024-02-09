// Middleware for handling auth

const { Admin } = require("../db/index");

const adminMiddleware = async (req, res, next) => {
	// Implement admin auth logic
	// You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
	const username = req.headers.username;
	const password = req.headers.password;
	// ? Need admin table access from db
	const admin = await Admin.findOne({ username: username, password: password });

	if (admin) {
		next();
	} else {
		res.status(403).json({
			msg: "Admin not found",
		});
	}
};

module.exports = adminMiddleware;
