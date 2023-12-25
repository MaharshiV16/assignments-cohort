// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "file.txt");

let f = new Promise((resolve) => {
	fs.writeFile(filePath, "This is to be added to file", "utf-8", (err) => {
		resolve(err);
	});
});

f.then((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("File read successfully");
	}
});
