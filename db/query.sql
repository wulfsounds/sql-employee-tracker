-- Department
SELECT role.id, role.title, role.salary
FROM role
JOIN department ON role.department_id = department.name;

-- Role
SELECT employees.id, employees.first_name, employees.last_name
FROM employees
JOIN role ON employees.role_id = role.title;

-- Employees
SELECT
    e.first_name + ' ' + e.last_name employee,
    m.first_name + ' ' + m.last_name manager
FROM
    employees e
INNER JOIN employees m ON m.id = e.manager_id;