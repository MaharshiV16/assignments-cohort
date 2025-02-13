const { User } = require("../db/index");

const userMiddleware = async (req, res, next) => {
	// Implement user auth logic
	// You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
	const username = req.headers.username;
	const password = req.headers.password;
	// ? Need user table access from db
	const user = await User.findOne({ username: username, password: password });

	if (user) {
		next();
	} else {
		res.status(403).json({
			msg: "User not found",
		});
	}
};

module.exports = userMiddleware;
