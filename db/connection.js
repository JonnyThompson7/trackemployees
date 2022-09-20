const mysql = require('mysql2');
const password = require('../password');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trackemployees'
  }
);

module.exports = db;