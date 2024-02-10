const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

const { card } = require("./db");

// *expected body
// *{
// *	title: string,
// *	designation: string,
// *	interest: string
// *}
app.post("/cards", async (req, res) => {
	const response = await card.create({
		title: req.body.title,
		designation: req.body.designation,
		interest: req.body.interest,
	});
	res.json({
		message: "Card Created",
	});
});

app.get("/cards", async (req, res) => {
	const cards = await card.find({});
	res.json({ cards: cards });
});

app.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}`);
});
