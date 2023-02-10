const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection
  }
  findAllEmployees() {
    return this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
    )
  }
  findAllDepartments() {
    return this.connection.promise().query(
      "SELECT * FROM department;"
    )
  }
  
  findAllRoles() {
    return this.connection.promise().query(
      "SELECT * FROM role;"
    )
  }
  addDepartment(depName) {
    return this.connection.promise().query(
      "INSERT INTO department SET ?", depName 
    )
  }
  addRole(roleQual) {
    return this.connection.promise().query(
      "INSERT INTO role SET ?", roleQual
    )
  }
addEmployee(addEmp) {
  return this.connection.promise().query(
    "INSERT INTO employee SET ?", addEmp
  )
}
updateEmp(role_id, id) {
  return this.connection.promise().query(
    "UPDATE employee SET role_id = ? WHERE ID = ?", [
      role_id, id
    ],
  )
}
updateMan(upd_man, id) {
  return this.connection.promise().query(
    "UPDATE employee SET manager_id = ? WHERE ID = ?", [
      upd_man, id
    ]
  )
}

}

module.exports = new DB(connection);