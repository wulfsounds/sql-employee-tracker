// Retrieves the dependency modules;
const express = require("express");
const path = require("path");
const { clog } = require("./middleware/clog");
const api = require("./routes/index");
const uuid = require("uuid");
const { readFromFile, readAndAppend } = require("./helpers/fsUtils");

// This instantiates Express; connecting to default PORT or most available;
const app = express();
const PORT = process.env.PORT || 3001;

// Addressing middleware
app.use(clog);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", api);


// app.get("/", (req, res) => res.sendFile("Navigate to /notes or /routes"));

// Connecting to mySQL database
const db = mysql.createConnection(
	{
	  host: 'localhost',
	  // MySQL username,
	  user: 'root',
	  // MySQL password
	  password: 'Password123!',
	  database: 'classlist_db'
	},
	console.log(`Connected to the classlist_db database.`)
  );
  
  // Query database
  db.query('SELECT * FROM students', function (err, results) {
	console.log(results);
  });

app.get("*", (req, res) => res.send("File Not Found"));

app.listen(PORT, () =>
	console.log(`App listening at http://localhost:${PORT} 🚀`)
);
