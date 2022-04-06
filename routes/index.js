const inquirer = require('inquirer');
const cTable = require('console.table');

async function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Question?',
                name: 'name'
            }
        ])
        .then((response) => {
            console.log(response);
            // Write response to database;
        })
}



init();


module.exports = inquirer