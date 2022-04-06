SELECT *
FROM department;

SELECT role.id, role.title, role.salary
FROM role
JOIN department ON role.department_id = department.id;

SELECT employee_info.id, employee_info.first_name, employee_info.last_name
FROM employee_info
JOIN role ON employee_info.role_id = role.id;

SELECT
    e.first_name + ' ' + e.last_name employee,
    m.first_name + ' ' + m.last_name manager
FROM
    sales.staffs e
INNER JOIN sales.staffs m ON m.staff_id = e.manager_id;