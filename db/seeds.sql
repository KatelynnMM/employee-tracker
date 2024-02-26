-- seeds.sql

USE company_db;

-- Insert sample departments
INSERT INTO departments (name) VALUES
  ('Marketing'),
  ('Sales'),
  ('HR'),
  ('Accounting');

-- Insert sample roles
INSERT INTO roles (title, salary, department_id) VALUES
  ('Marketing Manager', 80000.00, 1),
  ('Marketing Specialist', 60000.00, 1),
  ('Account Rep', 70000.00, 2),
  ('Account Rep', 70000.00, 2),
  ('Sales Associate', 65000.00, 2),
  ('HR Manager', 75000.00, 3),
  ('Accounting Manager', 85000.00, 4);

-- Insert sample employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
  ('Luoise', 'Vuton', 1, NULL),    -- Marketing Manager
  ('Robert', 'Brown', 2, 1),       -- Marketing Specialist
  ('Marcus', 'Fisher', 3, NULL),   -- Account Rep
  ('Katelyn', 'Spade', 3, NULL),   -- Account Rep
  ('Thomas', 'Ford', 5, NULL),     -- Sales Associate
  ('Stella', 'McHeartney', 6, NULL), -- HR Manager
  ('Sara', 'Wang', 7, NULL);        -- Accounting Manager

