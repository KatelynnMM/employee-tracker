// index.js
const inquirer = require('inquirer');
const {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
} = require('./src/db/queries');

function startApp() {
    // Inquirer prompt and logic using the new models
}

startApp();
