const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db/connection');
const cTable = require('console.table');
const { rawListeners } = require('process');

// Function that takes you to chosen directory
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

// View All Employees
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

// View All Roles
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

// View All Departments
function allDepartments() {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    console.log(err);
    console.table(rows);
    initializeProgram();
  })
};

// Add a new Role
function addRole() {
  const sql2 = `SELECT id, name FROM departments`;
  db.query(sql2, (err, rows) => {
    let departments = rows.map(function (row) {
      return { name: row.name, value: row.id }
    })
    inquirer
      .prompt([
        {
          type: 'text',
          name: 'roleName',
          message: 'What is the name of the role?',
          validate: input => {
            if (input) {
              return true;
            } else {
              console.log('You must enter a name for the role!');
              return false;
            }
          }
        },
        {
          type: 'list',
          name: 'salary',
          message: 'Choose a salary this role is offered',
          choices: [35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 110000, 125000, 150000, 200000, 250000]
        },
        {
          type: 'list',
          name: 'departmentSelection',
          message: 'Which department is this role apart of?',
          choices: departments
        }
      ])
      .then(({ roleName, salary, departmentSelection }) => {
        const sql = `INSERT INTO roles (title, salary, department)
      VALUES (?,?,?)`;
        const params = [roleName, salary, departmentSelection];
        db.query(sql, params, (err, result) => {
          console.log('Role was added to database!');
          initializeProgram();
        })
      })
  })
};

// Add a new Department
function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'text',
        name: 'departmentName',
        message: 'What is the name of the Department?',
        validate: input => {
          if (input) {
            return true;
          } else {
            console.log('You must enter a name for the role!');
            return false;
          }
        }
      }
    ])
    .then(({ deparartmentName }) => {
      const sql = `INSERT INTO departments (name)
      VALUES (?)`;
      const params = [deparartmentName];
      db.query(sql, params, (err, result) => {
        console.log('New Department was added to the database!');
        initializeProgram();
      })
    })
};

// function updateEmployeeRole()




module.exports = showResults;