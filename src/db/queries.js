// queries.js
const connection = require('./connection');

async function viewDepartments() {
    try {
        const [rows, fields] = await connection.query('SELECT * FROM department');
        console.table(rows);
    } catch (error) {
        console.error('Error viewing departments:', error.message);
    }
}

async function viewRoles() {
    try {
        const [rows, fields] = await connection.query('SELECT * FROM role');
        console.table(rows);
    } catch (error) {
        console.error('Error viewing roles:', error.message);
    }
}

async function viewEmployees() {
    try {
        const [rows, fields] = await connection.query('SELECT * FROM employee');
        console.table(rows);
    } catch (error) {
        console.error('Error viewing employees:', error.message);
    }
}

async function addDepartment() {
    try {
        const department = await inquirer.prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the department name:',
            },
        ]);

        const [result] = await connection.query('INSERT INTO department SET ?', department);
        console.log(`Department added with ID ${result.insertId}`);
    } catch (error) {
        console.error('Error adding department:', error.message);
    }
}

async function addRole() {
    try {
        // Inquirer prompts for role information
        // ...

        const [result] = await connection.query('INSERT INTO role SET ?', role);
        console.log(`Role added with ID ${result.insertId}`);
    } catch (error) {
        console.error('Error adding role:', error.message);
    }
}

async function addEmployee() {
    try {
        // Inquirer prompts for employee information
        // ...

        const [result] = await connection.query('INSERT INTO employee SET ?', employee);
        console.log(`Employee added with ID ${result.insertId}`);
    } catch (error) {
        console.error('Error adding employee:', error.message);
    }
}

async function updateEmployeeRole() {
    try {
        // Inquirer prompts for updating employee role
        // ...

        // Update the employee role in the database
        // ...

        console.log('Employee role updated successfully');
    } catch (error) {
        console.error('Error updating employee role:', error.message);
    }
}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
};

