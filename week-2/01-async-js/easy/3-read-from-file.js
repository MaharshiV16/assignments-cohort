// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "file.txt");

// fs.readFile(filePath, "utf-8", (err, data) => {
// 	console.log(data);
// });

let b = new Promise((resolve) => {
	fs.readFile(filePath, "utf-8", (err, data) => {
		resolve(data);
	});
});

b.then((data) => {
	console.log(data);
});

let a = 0;
for (let i = 0; i < 1000000; i++) {
	a++;
}
console.log(a);
