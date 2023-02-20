// Loading Inquirer Package into file
const inquirer = require('inquirer');
// Loading File System into file
const fs = require('fs');
const generatehtml = require('./generatehtml')

// Questions to add a manager
const addManager = [
    {
        type: "input",
        name : "name",
        message: "What is the team manager's name?",
    },
    {
        type: "input",
        name : "id",
        message: "What is the team manager's ID?", 
    },
    {
        type: "input",
        name : "email",
        message: "What is the team manager's email address?",
    },
    {
        type: "input",
        name : "office_num",
        message: "What is the team manager's office number?", 
    }
];

// Questions to add an engineer
const addEngineer = [
    {
        type: "input",
        name : "name",
        message: "What is the Engineer's name?",
    },
    {
        type: "input",
        name : "id",
        message: "What is the Engineer's ID?", 
    },
    {
        type: "input",
        name : "email",
        message: "What is the Engineer's email address?",
    },
    {
        type: "input",
        name : "github",
        message: "What is the Engineer's GitHub username?", 
    }
]

// Questions to add an intern
const addIntern = [
    {
        type: "input",
        name : "name",
        message: "What is the Intern's name?",
    },
    {
        type: "input",
        name : "id",
        message: "What is the Intern's ID?", 
    },
    {
        type: "input",
        name : "email",
        message: "What is the Intern's email address?",
    },
    {
        type: "input",
        name : "school",
        message: "What is the Intern's school?", 
    }
]

// Questions to add more team members or finish creating team
const menu = {
    type: 'list',
    name: 'menu',
    message: 'Would you like to add an Engineer or an Intern or to finish building your team',
    choices: ['Add Engineer', 'Add Intern', 'Finish building my team']
}

const teamMembers = [];

function getManagerInfo() {
    inquirer
    .prompt(addManager)
    .then((data) => {const manager = {
            name: data.name,
            id: data.id,
            email: data.email,
            extraInfo: data.office_num,
            role: 'Manager'
            }
        teamMembers.push(manager);
        console.log(teamMembers);
        getMenu()

        }
    )  
}


function getEnginnerInfo() {
    inquirer
    .prompt(addEngineer)
    .then((data) => {const engineer = {
            name: data.name,
            id: data.id,
            email: data.email,
            extraInfo: data.github,
            role: 'Engineer'
            }
        teamMembers.push(engineer);
        console.log(teamMembers);
        getMenu()
        }
    )   
}

function getInternInfo() {
    inquirer.
    prompt(addIntern)
    .then((data) => {const intern = {
            name: data.name,
            id: data.id,
            email: data.email,
            extraInfo: data.school,
            role: 'Intern'
            }
        teamMembers.push(intern);
        console.log(teamMembers);
        getMenu()
        }
    )   
}


function getMenu() {
    inquirer
    .prompt(menu)
    .then((data) => {const choice = data.menu
        console.log(choice);
        if (choice === 'Add Engineer') {
            getEnginnerInfo()
        }
        else if (choice === 'Add Intern') {
            getInternInfo() 
        }
        else {
            console.log('finish');
            writeToFile(teamMembers)
        }
    })
    
}

function writeToFile(teamMembers) {
    fs.writeFile('./dist/index.html', generatehtml(teamMembers), (err) => {
        if(err) throw err;
        console.log('Team Members Profile page has been created');
    })
}

function init() {
    getManagerInfo()
}

init()