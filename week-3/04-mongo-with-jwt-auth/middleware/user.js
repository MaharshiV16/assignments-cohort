const jwt = require("jsonwebtoken");
const secret = require("../config");

function userMiddleware(req, res, next) {
	// Implement user auth logic
	// You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
	const token = req.headers.authorization;
	const words = token.split(" ");
	const jwtToken = words[1];

	const decoded = jwt.verify(jwtToken, secret);
	if (decoded.username) {
		req.username = decoded.username; // ! this will be required in one of the apis
		next();
	} else {
		res.status(403).json({
			message: "You are not authenticated",
		});
	}
}

module.exports = userMiddleware;
