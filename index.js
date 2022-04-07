const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const connection = require("./config/connection");

// Connecting to mySQL database
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

sequelize.connect(function (err) {
	if (err) throw err;
	init();
})

function init() {
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
                let employee = 'SELECT * FROM employee_info';
                Sequelize.query(employee, function(err, res) {
                    console.table(res);
					if (err) throw err;
                })
				init();
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
					let roles = 'SELECT * FROM role';
					Sequelize.query(roles, function (err, res) {
						console.table(res);
						if (err) throw err;
					})
					init();
					break;

				case "Add Roles":
					console.log(`Adding roles ✅`);
					addRoles();
					break;

				case "View All Departments":
					console.log(`Viewing all departments ✅`);
					let dept = 'SELECT * FROM department';
					Sequelize.query(dept, function (err, res) {
						console.table(res);
						if (err) throw err;
					})
					init();
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

function addEmployees() {
        inquirer
			.prompt([
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
		.then(function ({ first, last, role, manager }) {
			const query = `
			INSERT INTO employee_info (id, first_name, last_name, role_id, manager_id)
			VALUES ("${first}", "${last}", "${role}", "${manager}")`;
			Sequelize.query(query, function (err, res) {
				if (err) throw err;
				console.table(res)
			})
			init();
		});
}

function updateEmployees() {
	inquirer
		.prompt([
		{
			type: "list",
			message: `Which employee would you like to update?`,
			choices: function () {
					let nameArr = [];
					for (let i = 0; i < res.length; i++) {
						nameArr.push(res[i].title);
					}
					return nameArr;
			},
			name: "profile",
		},
		{
			type: "list",
			message: `What is the employee's new role?`,
			choices: function () {
				let roleArr = [];
				for (let j = 0; j < res.length; j++) {
					roleArr.push(res[j].title);
				}
				return roleArr;
			},
			name: "update",
		}
	])
	.then(function ({ profile, update }) {
		const query = `
		UPDATE employee_info
		SET role_id = "${update}"
		WHERE id = "${profile}"`;
		Sequelize.query(query, function (err, res) {
			if (err) throw err;
			console.table(res)
		})
		init();
	});
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
			}
		])
		.then(function ({ roles, salary, department }) {
			const query = `
			INSERT INTO role (id, title, salary, department_id)
			VALUES (("${id}", "${roles}", "${salary}", "${department}"))`
			Sequelize.query(query, function (err, res) {
				if (err) throw err;
				console.table(res)
			})
			init();
		});
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
		.then(function ({ department }) {
			const query = `
			INSERT INTO role (id, name)
			VALUES (ID, '${department}')`
			Sequelize.query(query, function (err, res) {
				if (err) throw err;
				console.table(res)
			})
			init();
		});
}