const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

const teamMembers = [];

// Write code to use inquirer to gather information about the development team members,
const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Hello manager! To begin building your engineering team's profile, we'll need to know some more information about you and your team. What is your name?"
    },
    {
        type: "input",
        name: "managerId",
        message: "MANAGER: What is your employee ID?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "MANAGER: What is your employee email address?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "MANAGER: What is your office number?"
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "Next, we'll build a profile for your engineer. What is their name?"
    },
    {
        type: "input",
        name: "engineerId",
        message: "ENGINEER: What is your engineer's employee ID?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "ENGINEER: What is your engineer's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "ENGINEER: What is your engineer's GitHub username?"
    }
]

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "Next, we'll build a profile for your intern. What is their name?"
    },
    {
        type: "input",
        name: "internId",
        message: "INTERN: What is your intern's employee ID?"
    },
    {
        type: "input",
        name: "internEmail",
        message: "INTERN: What is your intern's email address?"
    },
    {
        type: "input",
        name: "school",
        message: "INTERN: What school is your intern attending or recently graduated from?"
    }
]

const addEmployee =
{
    type: "list",
    name: "employeeType",
    message: "What team member role would you like to add?",
    choices: ["Engineer", "Intern", "My team is complete"]
}



function initialize() {
    inquirer.prompt(managerQuestions).then((response) => {
        const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber)
        teamMembers.push(newManager)
        buildTeam()
    });
};

function addEngineer() {
    inquirer.prompt(engineerQuestions).then((response) => {
        const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github)
        teamMembers.push(newEngineer)
        buildTeam()
    });
};

function addIntern() {
    inquirer.prompt(internQuestions).then(response => {
        const newIntern = new Intern(response.internName, response.internId, response.school)
        teamMembers.push(newIntern)
        buildTeam()
    });
};


function buildTeam () {
    inquirer.prompt(addEmployee).then(response => {
        if (response.employeeType === "Engineer") {
            addEngineer()
        } else if (response.employeeType === "Intern") {
            addIntern()
        } else if (response.employeeType === "My team is complete") {
            const finalHTML = render (teamMembers)
            fs.writeFile("./output/team.html", finalHTML, (err) => {
                if (err) throw err
            })
            console.log("Generating your team's profile!")
        }
    })
}




// Initialize/ create manager and then add other employees
initialize();





// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
