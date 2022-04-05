DROP DATABASE IF EXISTS course_db;

CREATE DATABASE course_db;

USE course_db;

CREATE TABLE courses (
  id INT NOT NULL,
  course_title VARCHAR(30) NOT NULL,
  course_description TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE department (
  id NOT NULL,
  name VARCHAR(30) NOT NULL
)

CREATE TABLE role (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department INT NOT NULL
)

CREATE TABLE employee (
  id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL
)


