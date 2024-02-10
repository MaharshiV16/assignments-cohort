const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://maharishivashistha:vedelMtPvEMFPG8Z@cluster0.ur4mos7.mongodb.net/card-deployment";

// Connect to MongoDB
mongoose.connect(mongoURI, {});

const cardSchema = mongoose.Schema({
	title: String,
	designation: String,
	interest: String,
});

const card = mongoose.model("card", cardSchema);

module.exports = { card };
