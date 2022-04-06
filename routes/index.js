const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2')

// Begin Main Menu at load;
async function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: [
                    'View All Employees',
                    'Add Employee',
                    'Update Employee Role',
                    'View All Roles',
                    'Add Roles',
                    'View All Departments',
                    'Add Department'
                ],
                name: 'mainMenu'
            }
        ])
        .then(function ({mainMenu}) {
            console.log(mainMenu);
            switch (mainMenu) {
                case 'View All Employees':
                    console.log(`Viewing all employees ✅`);
                    // console.table(); -- console SQL?
                    break;

                case 'Add Employee':
                    console.log(`Adding Employee ✅`);
                    addEmployees();
                    break;

                case 'Update Employee Role':
                    console.log(`Updating employees ✅`);
                    updateEmployees();
                    break;

                case 'View All Roles':
                    console.log(`Viewing all roles ✅`);
                    allRoles();
                    break;

                case 'Add Roles':
                    console.log(`Adding roles ✅`);
                    addRoles();
                    break;

                case 'View All Departments':
                    console.log(`Viewing all departments ✅`);
                    allDepartments();
                    break;

                case 'Add Department':
                    console.log(`Adding departments ✅`);
                    addDepartments();
                    break;
            }
        })
}



init();
//create addEmployees()
//create updateEmployees()
//create allRoles()
//create addRoles()
//create allDepartments()
//create addDepartments()

module.exports = inquirer