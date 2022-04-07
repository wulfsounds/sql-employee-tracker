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
                    // log employee table
                    // init()
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
                    // log roles table
                    // init()
                    break;

                case 'Add Roles':
                    console.log(`Adding roles ✅`);
                    addRoles();
                    break;

                case 'View All Departments':
                    console.log(`Viewing all departments ✅`);
                    // log departments table
                    // init()
                    break;

                case 'Add Department':
                    console.log(`Adding departments ✅`);
                    addDepartments();
                    break;
            }
        })
}

async function addEmployees() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the employee's first name?`,
                name: 'firstName'
            },
            {
                type: 'input',
                message: `What is the employee's last name?`,
                name: 'lastName'
            },
            {
                type: 'list',
                message: `What is their role?`,
                choices: [
                    'SALES LEAD',
                    'SALES CONSULTANT',
                    'LEAD ENGINEER',
                    'SOFTWARE ENGINEER',
                    'ACCOUNT MANAGER',
                    'ACCOUNTANT',
                    'LEGAL TEAM LEAD',
                    'LAWYER',
                    'ADD NEW ROLE'
                ],
                name: 'title'
            }
        ]).then(function ({firstName, lastName, title}){
            // if existing role, assign to new employee
            // else addRole, then assign to new employee
            // then init()
        })

}

async function updateEmployees() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: `Which employee would you ike to update?`,
                choices: [
                    // add existing
                ],
                name: 'profile'
            }
        ]).then(function ({profile}) {
            // if profile exists
            inquirer
                .prompt([
                    {
                        type: 'list',
                        message: `What is the employee's new role?`,
                        choices: [
                            'SALES LEAD',
                            'SALES CONSULTANT',
                            'LEAD ENGINEER',
                            'SOFTWARE ENGINEER',
                            'ACCOUNT MANAGER',
                            'ACCOUNTANT',
                            'LEGAL TEAM LEAD',
                            'LAWYER',
                            'ADD NEW ROLE'
                        ],
                        name: 'update'
                    }
                ]).then(function ({update}){
                    // if role exists, assign by list
                    // else role does not exist, addRole()
                    // then init()
                })
        })
}

async function addRoles() {
    inquirer
        .prompt([
            {
                type: `input`,
                message: `What is the new role?`,
                name: `roles`
            }
        ]).then(function({roles}) {
            inquirer
                .prompt([
                    {
                        type: `number`,
                        message: `What is the salary?`,
                        name: 'salary'
                    }
                ]).then(function({salary}){
                    inquirer
                        .prompt([
                            {
                                type: `list`,
                                message: `Which department does the new role belong to?`,
                                choices: [
                                    'SALES',
                                    'LEGAL',
                                    'FINANCE',
                                    'ENGINEERING'
                                ],
                                name: `department`
                            }
                        ]).then(function ({department}){
                            // ASSIGN ROLE TO DEPARTMENT
                        })
                })
        })
}

async function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the new department?',
                name: 'departmentName'
            }
        ]).then(function ({departmentName}) {
            //add new department to table
        })
}

init();
addEmployees();
updateEmployees();
addRoles();
addDepartment();

module.exports = inquirer