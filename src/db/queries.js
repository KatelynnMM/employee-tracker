// queries.js
const inquirer = require('inquirer');
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
        console.table(rows.map(role => ({
            ID: role.id,
            Title: role.title,
            Salary: role.salary,
            Department_ID: role.department_id,
        })));
    } catch (error) {
        console.error('Error viewing roles:', error.message);
    }
}

async function viewEmployees() {
    try {
        const [rows, fields] = await connection.query('SELECT * FROM employee');
        console.table(rows.map(employee => ({
            ID: employee.id,
            First_Name: employee.first_name,
            Last_Name: employee.last_name,
            Title: employee.title, // Assuming there's a way to get the employee's role title
            Salary: employee.salary, // Assuming there's a way to get the employee's salary
            Manager_ID: employee.manager_id,
        })));
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
        const role = await inquirer.prompt([
            // Inquirer prompts for role information
            // For example:
            {
                name: 'title',
                type: 'input',
                message: 'Enter the role title:',
            },
            {
                name: 'salary',
                type: 'input',
                message: 'Enter the role salary:',
            },
            {
                name: 'department_id',
                type: 'input',
                message: 'Enter the department ID:',
            },
        ]);

        const [result] = await connection.query('INSERT INTO role SET ?', role);
        console.log(`Role added with ID ${result.insertId}`);
    } catch (error) {
        console.error('Error adding role:', error.message);
    }
}

async function addEmployee() {
    try {
        const employee = await inquirer.prompt([
            // Inquirer prompts for employee information
            // For example:
            {
                name: 'first_name',
                type: 'input',
                message: 'Enter the employee\'s first name:',
            },
            {
                name: 'last_name',
                type: 'input',
                message: 'Enter the employee\'s last name:',
            },
            {
                name: 'role_id',
                type: 'input',
                message: 'Enter the employee\'s role ID:',
            },
            {
                name: 'manager_id',
                type: 'input',
                message: 'Enter the employee\'s manager ID (optional, press Enter if none):',
            },
        ]);

        const [result] = await connection.query('INSERT INTO employee SET ?', employee);
        console.log(`Employee added with ID ${result.insertId}`);
    } catch (error) {
        console.error('Error adding employee:', error.message);
    }
}

async function updateEmployeeRole() {
    try {
        const updateInfo = await inquirer.prompt([
            // Inquirer prompts for updating employee role
            // For example:
            {
                name: 'employeeId',
                type: 'input',
                message: 'Enter the ID of the employee to update:',
            },
            {
                name: 'newRoleId',
                type: 'input',
                message: 'Enter the ID of the new role:',
            },
        ]);

        // Update the employee role in the database
        const [result] = await connection.query(
            'UPDATE employee SET role_id = ? WHERE id = ?',
            [updateInfo.newRoleId, updateInfo.employeeId]
        );

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


