// Employee registry application
// Thursday February 2, 2023
const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require('express');

// New console.table npm package
require("console.table")

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json())

const database = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Vinpocetine7#',
        database: 'employee_database'

    },
    console.log(`Connected to the employee_database`)
);

// Initiate an inquirer start menu
function startApplication() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Please select one of the following options:',
                name: 'start_menu',
                choices: ['view all departments', 
                'view all jobs', 
                'view all employees',
                'add a department',
                'add a job',
                'add an employee',
                'update an employee job',
                'delete a department',
                'delete a job',
                'delete an employee',
                'exit'],
            }
        ]).then((response) => {
            // console.log("Value of response from .then promise", response)
            // let newVariable = response;
            // let newVariable3 = '';
            
            
            // console.log(response)
            // console.log("Value of newVariable", newVariable)
            // console.log("Value of typeof(newVariable)", typeof(newVariable))
            // console.log("((TEST))Stringify values of newVariable object", JSON.stringify(newVariable))
            // let newVariable2 = JSON.stringify(newVariable)
            // console.log("Value of newVariable2", newVariable2)
            // console.log("property of object newVariable:", JSON.stringify(newVariable,["start_menu"]))
            // console.log(JSON.stringify(newVariable))
            // console.log(newVariable, `${value}`)

            // New sytax from stack overflow:
            // for (const [key, value] of Object.entries(newVariable))
            // {
                // console.log(`${value}`)
                // newVariable3 = value
                // console.log("Value of newVariable3:", newVariable3) 
            // }
            // console.log("Value of newVariable3", newVariable3)
            // console.log("property of object newVariable2:", JSON.stringify(newVariable2,["start_menu"]))
            // console.log("Value of newVariable2.value", newVariable2.value)
            // console.log("Value of newVariable2.start_menu", newVariable2.start_menu)
            // console.log("Value of newVariable2(start_menu))", newVariable2(start_menu))
            // console.log("Value of newVariable.children[1]", newVariable.children[1])
            // console.log("Value of response.value from .then promise", response.value)
            // console.log("Value of response[0] from .then promise", response[0])
            // console.log("Value of response from .then promise", response)

            // 'view all departments', 
            // 'view all jobs', 
            // 'view all employees',
            // 'add a department',
            // 'add a job',
            // 'add an employee',
            // 'update an employee job',
            // 'delete a department',
            // 'delete a job',
            // 'delete an employee',
            // 'exit'

            switch (response.start_menu) {
                case "view all departments":
                    // console.log("ADD all departments")
                    // viewAllDepartments();
                    // return all view departments
                    return viewAllDepartments()
                    // break;
                case "view all jobs":
                    return viewAllJobs()
                case "view all employees":
                    return viewAllemployees()
                case "add a department":
                    return addADepartment()
                case "add a job":
                    return addAJob()
                case "add an employee":
                    return addAemployee()
                case "update an employee job":
                    return updateAnEmployeeJob()
                case "delete a department":
                    return deleteADepartment()
                case "delete a job":
                    return deleteAJob()
                case "delete an employee":
                    return deleteAnEmployee()
                case "exit":
                    quit();
                    break;

                default:
                        break;
            }
        })
}

function viewAllDepartments() {
    console.log("Add function viewAllDepartments")
    inquirer.prompt([
        {
            type: 'list',
            message: 'Please select one of the Departments:',
            name: 'department_list',
            choices: ['driving department', 'security department', 'IT department', ,'mechanic department', 'maintenance department', 'cooking department', 'cleaning department', 'exit'],
        }
    ]).then((response) => {
        switch (response.department_list) {
            case "driving department":
                // makemore();

                // let viewdrivingdepartment = 'SELECT * FROM department';
                let viewdrivingdepartment = 'SELECT name as DEPARTMENT FROM department';
                database.query(viewdrivingdepartment, function(error, data) {
                    if (error) throw error;
                    console.table("The driving department is one of several departments, all departments:", data);
                    database.end();
                })
                // quit();
                break;
                // console.log("ADD all departments")
                // viewAllDepartments();
                // return all view departments
                
            case "security department":
                // let viewsecuritydepartment = 'SELECT * FROM department';
                let viewsecuritydepartment = 'SELECT name as DEPARTMENT FROM department';
                database.query(viewsecuritydepartment, function(error, data) {
                    if (error) throw error;
                    console.table("The security department is one of several departments, all departments:", data);
                    database.end();
                })
                // quit();
                break;

            case "IT department":
                let viewITdepartment = 'SELECT name as DEPARTMENT FROM department';
                database.query(viewITdepartment, function(error, data) {
                    if (error) throw error;
                    console.table("The IT department is one of several departments, all departments:", data);
                    database.end();
                })
                // quit();
               break;

               case "mechanic department":
                let viewMechanicDepartment = 'SELECT name as DEPARTMENT FROM department';
                database.query(viewMechanicDepartment, function(error, data) {
                    if (error) throw error;
                    console.table("The mechanic department is one of several departments, all departments:", data);
                    database.end();
                })
                // quit();
               break;

               case "maintenance department":
                let viewMaintenanceDepartment = 'SELECT name as DEPARTMENT FROM department';
                database.query(viewMaintenanceDepartment, function(error, data) {
                    if (error) throw error;
                    console.table("The maintenance department is one of several departments, all departments:", data);
                    database.end();
                })
                // quit();
               break;

               case "cooking department":
                let viewCookingDepartment = 'SELECT name as DEPARTMENT FROM department';
                database.query(viewCookingDepartment, function(error, data) {
                    if (error) throw error;
                    console.table("The cooking department is one of several departments, all departments:", data);
                    database.end();
                })
                // quit();
               break;

               case "cleaning department":
                let viewCleaningDepartment = 'SELECT name as DEPARTMENT FROM department';
                database.query(viewCleaningDepartment, function(error, data) {
                    if (error) throw error;
                    console.table("The cleaning department is one of several departments, all departments:", data);
                    database.end();
                })
                // quit();
               break;

            case "exit":
                quit();
                break;

            default:
                    break;
        }
    })
    
}

function quit() {
    console.log("Goodbye!");
    process.exit(0);
}

function makemore() {
    console.log("Need to develop this more Goodbye!");
    process.exit(0);
}

function viewAllJobs() {
    // console.log("Need to develop the viewAllJobs function Goodbye!");
    let viewjobs = 'SELECT title as JOB FROM job';
    database.query(viewjobs, function(error, data) {
        if (error) throw error;
        console.table("All jobs:", data);
        database.end();
    })
    // process.exit(0);
}

function viewAllemployees() {
    // console.log("Need to develop the viewAllemployees function Goodbye!");
    // process.exit(0);
    let viewemployees = 'SELECT first_name, last_name FROM employee ';
    database.query(viewemployees, function(error, data) {
        if (error) throw error;
        console.table("All employees:", data);
        database.end();
    })
}

function addADepartment() {
    // console.log("Need to develop the addADepartment function Goodbye!");
    // process.exit(0);
    inquirer.prompt([
        {
            type: 'input', name: 'name', message: 'You have chosen to add a new deptartment, please enter a name here:'  
        },
    ]).then(response => { let addingDepartment = 'INSERT INTO department SET ?';
    database.query(addingDepartment, response, function(error, data) {
        if (error) throw error;
        // console.log(response)
        console.table("A new department has been created:", response);
        database.end();
    })
})

}

function addAJob() {
    // console.log("Need to develop the addAJob function Goodbye!");
    // process.exit(0);
    let addingAJob = "SELECT * FROM department";
    database.query(addingAJob, function (error, results) {
        // create an array for the list of departments
        let deptArray = [];
        if (error) throw error;
        deptArray = results.map(data => ({
            // department primary key
            id: data.id,
            // department name
            name: data.name,
        }))
        
        inquirer.prompt([
            {
                type: 'input', 
                name: 'title', 
                message: 'You have chosen to add a new job class, please enter the name of new job here:'  
            },
            {
                type: 'input', 
                name: 'salary', 
                message: 'Enter annual salary for this new job here:'  
            },
            {
                type: 'list',
                // Assistance from Instructor Joe Rehfuss and TA Eli Wood 3/3/2023
                // original = name: 'id'
                // corrected to:
                name: 'department_id',
                message: 'Please choose a department for this job:',
                choices: deptArray.map(deptObj => ({
                    name: deptObj.name,
                    value: deptObj.id,
                }))
            },
        ]).then(response => { let addingJob = 'INSERT INTO job SET ?';
        database.query(addingJob, response, function(error, data) {
            if (error) throw error;
            // console.log(response)
            console.table("A new job has been created:", response);
            database.end();
        })
    })
})
}

function addAemployee() {
    // console.log("Need to develop the addAemployee function Goodbye!");
    // process.exit(0);
    let addingAemployee = "SELECT * FROM job";
    database.query(addingAemployee, function (error, results) {
        // create an array for the list of jobs
        let jobArray = [];
        if (error) throw error;
        jobArray = results.map(data => ({
            //employee primary key
            id: data.id,
            // employee first name and last name
            title: data.title,
        }))
        inquirer.prompt([
            {
                type: 'input', 
                name: 'first_name', 
                message: 'Enter first name of new employee here:'  
            },
            {
                type: 'input', 
                name: 'last_name', 
                message: 'Enter last name of new employee here:'  
            },
            {
                type: 'list',
                name: 'job_id',
                message: 'Please choose a job for this employee:',
                choices: jobArray.map(jobObj => ({
                    title: jobObj.title,
                    value: jobObj.id,
                }))
            },
        ]).then(response => { let addingEmployee = 'INSERT INTO employee SET ?';
        database.query(addingEmployee, response, function(error, data) {
            if (error) throw error;
            // console.log(response)
            console.table("A new employee has been created:", response);
            database.end();
        })
    })
})
}

function updateAnEmployeeJob() {
    console.log("Need to develop the updateAnEmployeeJob function Goodbye!");
    process.exit(0);
}

function deleteADepartment() {
    console.log("Need to develop the deleteADepartment function Goodbye!");
    process.exit(0);
}

function deleteAJob() {
    console.log("Need to develop the deleteAJob function Goodbye!");
    process.exit(0);
}

function deleteAnEmployee() {
    console.log("Need to develop the deleteAnEmployee function Goodbye!");
    process.exit(0);
}


startApplication()
