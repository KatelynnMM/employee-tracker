// connection.js
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || 'company_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const connection = pool.promise();

module.exports = connection;
