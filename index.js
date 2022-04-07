// Create Local Host Connection
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Importing dependencies
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");

const db = mysql.createConnection(
	{
	  host: 'localhost',
	  user: 'root',
	  // Generic Password for homework use.
	  password: 'Password123!',
	  database: 'employee_db'
	},
	console.log(`Connected to the employee_db database.`)
  );

db.connect(function (err) {
	if (err) throw err;
	mainMenu();
})

// this functions acts as container for looping the mainMenu() as it's called;
function loop(){
	mainMenu();
}


// Main Menu Prompt
function mainMenu() {
	inquirer
        .prompt([
		{
			type: "list",
			message: "What would you like to do?",
			choices: [
				"View All Employees",
				"Add Employee",
				"Update Employee Role",
				"View All Roles",
				"Add Roles",
				"View All Departments",
				"Add Department",
				"Quit"
			],
			name: "mainMenu",
		}
    ]).then(function ({ mainMenu }) {
        switch (mainMenu) {

            case "View All Employees":
                console.log(`Viewing all employees ✅`);
                db.query(`SELECT * FROM employee_info`, function(err, res) {
                    console.table(res);
					if (err) throw err;
                })
				loop();
                break;

			case "Add Employee":
				console.log(`Adding Employee ✅`);
				addEmployees();
				break;

			case "Update Employee Role":
				console.log(`Updating employees ✅`);
				updateEmployees();
				break;

			case "View All Roles":
				console.log(`Viewing all roles ✅`);
				db.query(`SELECT * FROM role`, function (err, res) {
					console.table(res);
					if (err) throw err;
				})
				loop();
				break;

			case "Add Roles":
				console.log(`Adding roles ✅`);
				addRoles();
				break;

			case "View All Departments":
				console.log(`Viewing all departments ✅`);
				db.query(`SELECT * FROM department`, function (err, res) {
					console.table(res);
					if (err) throw err;
				})
				loop();
				break;

			case "Add Department":
				console.log(`Adding departments ✅`);
				addDepartment();
				break;

			default:
				break;
            }
        });
}

// Gathers the information to add employees to the database;
function addEmployees() {
	inquirer
		.prompt([
		{
			type: "input",
			message: `What is the employee's ID?`,
			name: "employee_id",
		},
		{
			type: "input",
			message: `What is the employee's first name?`,
			name: "first",
		},
		{
			type: "input",
			message: `What is the employee's last name?`,
			name: "last",
		},
		{
			type: "input",
			message: `What is their role ID?`,
			name: "role",
		},
		{
			type: 'input',
			message: `What is their manager's ID?`,
			name: 'manager'
		}
	])
	.then(function ({ employee_id, first, last, role, manager }) {
		const query = `
		INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
		VALUES ("${employee_id}", "${first}", "${last}", "${role}", "${manager}")`;
		db.query(query, function (err, res) {
			if (err) throw err;
			console.table(res)
		})
		loop();
	});
}