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
} = require('./db/queries');

async function startApp() {
    while (true) {
        const { action } = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Exit'],
        });

        switch (action) {
            case 'View Departments':
                await viewDepartments();
                break;

            case 'View Roles':
                await viewRoles();
                break;

            case 'View Employees':
                await viewEmployees();
                break;

            case 'Add Department':
                await addDepartment();
                break;

            case 'Add Role':
                await addRole();
                break;

            case 'Add Employee':
                await addEmployee();
                break;

            case 'Update Employee Role':
                await updateEmployeeRole();
                break;

            case 'Exit':
                console.log('Exiting application.');
                return;
        }
    }
}

startApp();
