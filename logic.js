const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db/connection');
const cTable = require('console.table');

function showResults(directory) {
  if (directory === 'View All Employees') {
    allEmployees(directory);
  } else if (directory === 'View All Roles') {
    allRoles(directory);
  } else if (directory === 'View All Departments') {
    allDepartments(directory);
  } else if (directory === 'Add Role') {
    addRole(directory);
  } else if (directory === 'Add Department') {
    addDepartment(directory);
  } else if (directory === 'Update Employee Role') {
    updateEmployeeRole(directory);
  }
};


module.exports = showResults;