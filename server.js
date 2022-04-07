// Retrieves the dependency modules;
const express = require("express");
const path = require("path");
const { clog } = require("./middleware/clog");
const api = require("./routes/index");
const uuid = require("uuid");
const { readFromFile, readAndAppend } = require("./helpers/fsUtils");
const cTable = require('console.table');
const dotenv = require('dotenv').config()
console.log(process.env) 
// This instantiates Express; connecting to default PORT or most available;
const app = express();
const PORT = process.env.PORT || 3001;

// Addressing middleware
app.use(clog);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", api);

// Connecting to mySQL database
const db = mysql.createConnection(
	{
		host: "localhost",
		// MySQL username,
		user: "root",
		// MySQL password
		password: "Password123!",
		database: "employee_db",
	},
	console.log(`Connected to the employee_db database.`)
);

// Query database
db.query("SELECT * FROM employee", function (err, results) {
	console.log(results);
});

// Directs api to pull database
app.get("api/employee", (req, res) => {
	db.query ('employee_db', (err, results) => {
	  res.status(200).json(results)
	});
  })

app.use((req, res) => {
	res.status(404).end();
});

app.get("*", (req, res) => res.send("File Not Found"));

app.listen(PORT, () =>
	console.log(`App listening at http://localhost:${PORT} 🚀`)
);
