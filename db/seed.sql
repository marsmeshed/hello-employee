USE employee_db;

INSERT INTO department (name) VALUES
  ("sales"),
  ("engineering"),
  ("marketing"),
  ("accounting");


INSERT INTO role (title, salary, department_id) VALUES
  ("sales manager", 100000, 1),
  ("account exc", 80000, 1),
  ("software architect", 200000, 2),
  ("Jr. developer", 100000, 2),
  ("director of marketing", 150000, 3),
  ("marketing rep", 80000, 3),
  ("CFO", 400000, 4),
  ("accountant", 75000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ("Joe", "ski", 1, NULL),
  ("Dwight", "Shrout", 2, 1),
  ("John", "Mark", 3, NULL),
  ("Ham", "Lits", 4, 3),
  ("Brad", "Pitt", 5, NULL),
  ("Angelina", "Jolie", 6, 5),
  ("Leo", "Der", 7, NULL),
  ("Kevin", "Malone", 8, 7);