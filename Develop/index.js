// Loading Inquirer Package into file
const inquirer = require('inquirer');
// Loading File System into file
const fs = require('fs');
// Loading generatehtml.js into file
const generatehtml = require('./generatehtml');
// Loading Manager.js, Inter.js and Enginner.js into file
const {Manager, Intern, Engineer} = require('./lib')

// Questions to add a manager
const addManager = [
    {
        type: "input",
        name : "name",
        message: "What is the team manager's name?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the team manager's name"
            }return true
        }
    },
    {
        type: "input",
        name : "id",
        message: "What is the team manager's ID?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the team manager's ID"
            }
            return true
        }
    },
    {
        type: "input",
        name : "email",
        message: "What is the team manager's email address?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the team manager's email address"
            }
            return true
        }
    },
    {
        type: "input",
        name : "office_num",
        message: "What is the team manager's office number?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the team manager's office number"
            }
            return true
        }
    }
];

// Questions to add an engineer
const addEngineer = [
    {
        type: "input",
        name : "name",
        message: "What is the Engineer's name?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the Engineer's name"
            }return true
        }
    },
    {
        type: "input",
        name : "id",
        message: "What is the Engineer's ID?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the Engineer's ID"
            }
            return true
        }
    },
    {
        type: "input",
        name : "email",
        message: "What is the Engineer's email address?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the Engineer's email address"
            }
            return true
        }
    },
    {
        type: "input",
        name : "github",
        message: "What is the Engineer's GitHub username?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the Engineer's GitHub username"
            }
            return true
        }
    }
]

// Questions to add an intern
const addIntern = [
    {
        type: "input",
        name : "name",
        message: "What is the Intern's name?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the Intern's name"
            }return true
        }
    },
    {
        type: "input",
        name : "id",
        message: "What is the Intern's ID?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the Intern's ID"
            }
            return true
        }
    },
    {
        type: "input",
        name : "email",
        message: "What is the Intern's email address?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the Intern's email address"
            }
            return true
        }
    },
    {
        type: "input",
        name : "school",
        message: "What is the Intern's school name?",
        // Validating to make sure input is not blank
        validate: function(input) {
            if(input == "") {
                return "Please enter the Intern's school name"
            }
            return true
        }
    }
]

// Questions to add more team members or finish creating team
const menu = {
    type: 'list',
    name: 'menu',
    message: 'Would you like to add an Engineer or an Intern or to finish building your team',
    choices: ['Add Engineer', 'Add Intern', 'Finish building my team']
}

// Variable to house the new team members' info
const teamMembers = [];

// Function to ask for manager's info in CLI and push it into teamMembers array
function getManagerInfo() {
    inquirer
    .prompt(addManager)
    .then(({name, id, email, office_num}) => {const manager = new Manager(name, id, email, office_num)
        teamMembers.push(manager);
        getMenu()
        }
    )  
}

// Function to ask for engineer's info in CLI and push it into teamMembers array
function getEnginnerInfo() {
    inquirer
    .prompt(addEngineer)
    .then(({name, id, email, github}) => {const engineer = new Engineer(name, id, email, github)
        teamMembers.push(engineer);
        getMenu()
        }
    )   
}

// Function to ask for intern's info in CLI and push it into teamMembers array
function getInternInfo() {
    inquirer.
    prompt(addIntern)
    .then(({name, id, email, school}) => {const intern = new Intern(name, id, email, school)
        teamMembers.push(intern);
        getMenu()
        }
    )   
}

// Function to ask if user wnats to add more team members or finish creating the team
function getMenu() {
    inquirer
    .prompt(menu)
    .then((data) => {const choice = data.menu
        if (choice === 'Add Engineer') {
            getEnginnerInfo()
        }
        else if (choice === 'Add Intern') {
            getInternInfo() 
        }
        else {
            writeToFile(teamMembers)
        }
    })
    
}

// Function to write the HTML using structure in generatehtml
function writeToFile(teamMembers) {
    fs.writeFile('./dist/index.html', generatehtml(teamMembers), (err) => {
        if(err) throw err;
        console.log('Team Members Profile page has been created');
    })
}

// Function to initialize app
function init() {
    getManagerInfo()
}

init()