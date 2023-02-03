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
                choices: ['view all departments', 'view all roles', 'view all employees','add a department','add a role','add an employee','exit'],
            }
        ]).then((response) => {
            console.log("Value of response from .then promise", response)
            let newVariable = response;
            let newVariable3 = '';
            // console.log("Value of newVariable", newVariable)
            // console.log("Value of typeof(newVariable)", typeof(newVariable))
            // console.log("Stringify values of newVariable object", JSON.stringify(newVariable))
            // let newVariable2 = JSON.stringify(newVariable)
            // console.log("Value of newVariable2", newVariable2)
            // console.log("property of object newVariable:", JSON.stringify(newVariable,["start_menu"]))
            // console.log(JSON.stringify(newVariable))
            // console.log(newVariable, `${value}`)
            for (const [key, value] of Object.entries(newVariable))
            {
                // console.log(`${value}`)
                newVariable3 = value
                // console.log("Value of newVariable3:", newVariable3) 
            }
            // console.log("Value of newVariable3", newVariable3)
            // console.log("property of object newVariable2:", JSON.stringify(newVariable2,["start_menu"]))
            // console.log("Value of newVariable2.value", newVariable2.value)
            // console.log("Value of newVariable2.start_menu", newVariable2.start_menu)
            // console.log("Value of newVariable2(start_menu))", newVariable2(start_menu))
            // console.log("Value of newVariable.children[1]", newVariable.children[1])
            // console.log("Value of response.value from .then promise", response.value)
            // console.log("Value of response[0] from .then promise", response[0])
            // console.log("Value of response from .then promise", response)
            switch (newVariable3) {
                case "view all departments":
                    // console.log("ADD all departments")
                    viewAllDepartments();
                    break;
                    
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
    
}

function quit() {
    console.log("Goodbye!");
    process.exit(0);
}

startApplication()
