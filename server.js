const express = require("express");
const path = require("path");
const { clog } = require("./middleware/clog");
const api = require("./routes/index");
const uuid = require("uuid");const { readFromFile, readAndAppend } = require("./helpers/fsUtils");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(clog);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.get("/", (req, res) => res.sendFile("Navigate to /notes or /routes"));

app.get("*", (req, res) => res.send("File Not Found"));

app.listen(PORT, () =>
	console.log(`App listening at http://localhost:${PORT} 🚀`)
);
