// Create Local Host Connection
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Importing dependencies
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");

const db = mysql.createConnection(
	{
		host: "localhost",
		user: "root",
		// Generic Password for homework use.
		password: "Password123!",
		database: "employee_db",
	},
	console.log(`Connected to the employee_db database.`)
);

db.connect(function (err) {
	if (err) throw err;
	mainMenu();
});

// this functions acts as container for looping the mainMenu() as it's called;
function loop() {
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
					"View All Roles",
					"View All Departments",
					"Add Department",
					"Add Roles",
					"Add Employee",
					"Update Employee Role",
					"Quit",
				],
				name: "mainMenu",
			},
		])
		.then(function ({ mainMenu }) {
			switch (mainMenu) {
				case "View All Employees":
					db.query(`SELECT * FROM employees`, function (err, res) {
						console.log(`Viewing all employees ✅`);
						console.table(res);
						loop();
					});
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
					db.query(`SELECT * FROM role`, function (err, res) {
						console.log(`Viewing all roles ✅`);
						console.table(res);
						loop();
					});
					break;

				case "Add Roles":
					console.log(`Adding roles ✅`);
					addRoles();
					break;

				case "View All Departments":
					db.query(`SELECT * FROM department`, function (err, res) {
						console.log(`Viewing all departments ✅`);
						console.table(res);
						loop();
					});
					break;

				case "Add Department":
					console.log(`Adding departments ✅`);
					addDepartment();
					break;

				default:
					"Quit";
					quit();
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
				type: "input",
				message: `What is their manager's ID?`,
				name: "manager",
			},
		])
		.then(function ({ employee_id, first, last, role, manager }) {
			// Replace role INT for title;
			db.query(
				`INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
			VALUES ("${employee_id}", "${first}", "${last}", "${role}", "${manager}")`,
				function (err, res) {
					console.table(res);
				}
			);
		})
		.then(() => loop());
}

function updateEmployees() {
	const employDb = `SELECT * FROM employees`
	dbconnection.promise().query(employDb, (err, res) => {
		const employ = res.map(({id, firstName, lastName}) => {
			({name: firstName + " " + lastName, value: id});
		inquirer
		.prompt([
			{
				type: "list",
				message: `Which employee would you like to update?`,
				choices: employ,
				name: "employee",
			}
		])
		.then(({ employee }) => {
			let sql = `
				SELECT employee.id, employee.first_name, employee.last_name, role.id AS "role_id"
				FROM employee, role, department 
				WHERE department.id = role.department_id AND role.id = employee.role_id`;
			db.query(sql, (err, employee) => {
				let employArr = [];
				employee.
					})
				})
			});
		})
	})
}


function addRoles() {
	inquirer
		.prompt([
			{
				type: `input`,
				message: `What is the new role?`,
				name: `roles`,
			},
			{
				type: `number`,
				message: `What is the salary?`,
				name: "salary",
			},
			{
				type: `number`,
				message: `What is the department ID?`,
				name: `department`,
			},
		])
		.then(function ({ employee_id, first, last, role, manager }) {
			// Replace role IN for title;
			db.query(
				`INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
			VALUES ("${employee_id}", "${first}", "${last}", "${role}", "${manager}")`,
				function (err, res) {
					console.table(res);
				}
			);
		})
		.then(() => loop());
}

function addDepartment() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "What is the name of the new department?",
				name: "department",
			},
		])
		.then(function ({ employee_id, first, last, role, manager }) {
			// Replace role IN for title;
			db.query(
				`INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
		VALUES ("${employee_id}", "${first}", "${last}", "${role}", "${manager}")`,
				function (err, res) {
					console.table(res);
				}
			);
		})
		.then(() => loop());
}

function quit() {
	db.end();
}

