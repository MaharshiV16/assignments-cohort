/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json());

// Below is synchronous methond -> this will run and rest will wait
// app.get("/files", (req, res) => {
// 	let filesList = [];
// 	try {
// 		fs.readdirSync(path.join(__dirname, "./files/")).forEach((file) => {
// 			filesList.push(file);
// 		});
// 		res.status(200).json({ files: filesList });
// 	} catch (err) {
// 		res.status(500).json({ error: "Failed to retrieve files" });
// 	}
// });

// This is asynchronous methond -> this will run and other will too simultaneously
app.get("/files", function (req, res) {
	fs.readdir(path.join(__dirname, "./files/"), (err, files) => {
		if (err) {
			return res.status(500).json({ error: "Failed to retrieve files" });
		}
		res.json(files);
	});
});

app.get("/files/:fileName", (req, res) => {
	const name = req.params.fileName;
	const filePath = path.join(__dirname, "./files", name);

	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			return res.status(404).send("File not found");
		}
		res.status(200).send(data);
	});
	// the below code is run immediately without waiting hence will not work
	// console.log(fileData);
	// res.status(200).json({
	// 	fileData,
	// });
});

app.all('*', (req, res) => {
	res.status(404).send("Route not found");
});

// app.listen(3000, () => {
// 	console.log("Listening on port: 3000");
// });

module.exports = app;
