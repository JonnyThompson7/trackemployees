const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db/connection');
const cTable = require('console.table');
let showResults = require('./logic');

initializeProgram = function () {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'directory',
        message: 'Welcome to Anime INC. Please choose an option from the menu',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Update Employee Role']
      }
    ])
    .then(({ directory }) => {
      showResults(directory);
    })
}

initializeProgram();
