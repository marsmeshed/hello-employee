require('console.table');

const inquirer = require('inquirer');

const db = require('./db');

mainPrompts();
function mainPrompts() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        {
          name: 'View all employees',
          value: 'VIEW_EMPLOYEES'
        },
        {
          name: 'View all departments',
          value: 'VIEW_DEPARTMENTS'
        },
        {
          name: 'View all roles',
          value: 'VIEW_ROLES'
        },
        {
          name: 'Add a department',
          value: 'ADD_DEPARTMENT'
        },
        {
          name: 'Add a role',
          value: 'ADD_ROLE'
        },
        {
          name: 'Add an employee',
          value: 'ADD_EMPLOYEE'
        },
        {
          name: 'Update an employee role',
          value: 'UPDATE_EMPLOYEE'
        }
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    switch (choice) {
      case 'VIEW_EMPLOYEES':
        viewEmployees();
        break;
      case 'VIEW_DEPARTMENTS':
        viewDepartments();
        break;
      case 'VIEW_ROLES':
        viewRole();
        break;
      case 'ADD_DEPARTMENT':
        addDepartment();
        break;
      case 'ADD_ROLE':
        addRole();
        break;
      case 'ADD_EMPLOYEE':
        addEmployee();
        break;
      case 'UPDATE_EMPLOYEE':
        updateEmployee();
        break;
    }
  })
}

function viewEmployees() {
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => mainPrompts())
}



function viewDepartments() {
  db.findAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => mainPrompts())


}



function viewRole() {
  db.findAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => mainPrompts())
}



function addDepartment() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter department name:"
    }
  ]).then((ansDep) => {
    db.addDepartment(ansDep)
      .then(() => {
        console.log("Department Added!")
        mainPrompts()
      })
  })
}

function addRole() {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the role?"
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary?"
    },
    {
      type: "input",
      name: "department_id",
      message: "Which department are they in?"
    }
  ]).then((ansRole) => {
    db.addRole(ansRole)
      .then(() => {
        console.log("Role Added!")
        mainPrompts()
      })
  })

}

function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What's the employee's first name?"
    },
    {
      type: "input",
      name: "last_name",
      message: "What's the employee's last name?"
    },
    {
      type: "input",
      name: "role_id",
      message: "What's the employee's role id?"
    }
  ]).then((ansEmp) => {
    db.addEmployee(ansEmp)
      .then(() => {
        console.log("Employee added!")
        mainPrompts()
      })
  })
}

function updateEmployee() {
 inquirer.prompt([
  // {
  //   type: "update",
  //   name: "first_name",
  //   message: "What's your employee's first name?"
  // },
  // {
  //   type: "update",
  //   name: "last_name",
  //   message: "What's your employee's last name?"
  // },
  {
    type: "input",
    name: "role_id",
    message: "What's the employee's role id?"
  },
  {
    type: "input",
    name: "manager_id",
    message: "Who's the employee's manager?"
  },
  {
    type: "input",
    name: "employee_id",
    message: "What's the employee's ID number?"
  }
 ]).then((answers) => {
  console.log(answers)
  db.updateEmp(answers.role_id,answers.employee_id).then(() => {
    db.updateMan(answers.manager_id, answers.employee_id)
  })
  .then(() => {
    console.log("Employee updated!")
    mainPrompts()
  });
 });
};