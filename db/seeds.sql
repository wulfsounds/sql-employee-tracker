INSERT INTO department (id, name)
VALUES (1, 'SALES'),
       (2, 'ENGINEERING'),
       (3, 'FINANCE'),
       (4, 'LEGAL');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'SALES LEAD', 130000, 1),
        (2, 'SALES CONSULTANT', 100000, 1),
        (3, 'LEAD ENGINEER', 150000, 2),
        (4, 'SOFTWARE ENGINEER', 120000, 2),
        (5, 'ACCOUNT MANAGER', 160000, 3),
        (6, 'ACCOUNTANT', 125000, 3),
        (7, 'LEGAL TEAM LEAD', 250000, 4),
        (8, 'LAWYER', 190000, 4);

INSERT INTO employee_info (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'John', 'Doe', 1, 0),
        (2, 'Mike', 'Chan', 2, 1),
        (3, 'Ashley', 'Rodriguez', 1, 0);