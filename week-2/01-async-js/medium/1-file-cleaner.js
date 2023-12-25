// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "file.txt");

const removeExtraSpaces = (s) => {
	s = s.replace(/\s+/g, " ").trim();
	return new Promise((resolve) => {
		fs.writeFile(filePath, s, "utf-8", (err) => {
			resolve(err);
		});
	});
};

let a = new Promise((resolve) => {
	fs.readFile(filePath, "utf-8", (err, data) => {
		resolve(data);
	});
});

a = a.then(removeExtraSpaces).then((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Success");
	}
});
