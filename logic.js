const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db/connection');
const cTable = require('console.table');
const { rawListeners } = require('process');

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

function allEmployees() {
  const sql = `SELECT employees.id AS id,
  employees.first_name AS first_name,
  employees.last_name AS last_name,
  roles.title AS role,
  departments.name AS department
  FROM employees
  LEFT JOIN roles ON employees.role = roles.id
  LEFT JOIN departments ON roles.department = departments.id`;
  db.query(sql, (err, rows) => {
    console.log(err);
    console.table(rows);
    initializeProgram();
  })
};

function allRoles() {
  const sql = `SELECT roles.*, departments.name
  AS department
  FROM roles
  LEFT JOIN departments
  ON roles.department = departments.id`;
  db.query(sql, (err, rows) => {
    console.log(err);
    console.table(rows);
    initializeProgram();
  })
};

function allDepartments() {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    console.log(err);
    console.table(rows);
    initializeProgram();
  })
};

// function addRole()
// function addDepartment()
// function updateEmployeeRole()




module.exports = showResults;