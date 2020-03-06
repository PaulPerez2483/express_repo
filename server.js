const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
	const indexHTML = path.join(__dirname, "index.html");
	res.sendFile(indexHTML);
});

app.get("/api/products", (req, res, next) => {
	db.readJSON("./products.json").then((result) => res.send(result));
});

app.get("/api/companies", (req, res, next) => {
	db.readJSON("./companies.json").then((result) => res.send(result));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
