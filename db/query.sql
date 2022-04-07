SELECT role.id, role.title, role.salary
FROM role
JOIN department ON role.department_id = department.id;

SELECT employees.id, employees.first_name, employees.last_name
FROM employees
JOIN role ON employees.role_id = role.id;

SELECT
    e.first_name + ' ' + e.last_name employee,
    m.first_name + ' ' + m.last_name manager
FROM
    sales.staffs e
INNER JOIN sales.staffs m ON m.staff_id = e.manager_id;