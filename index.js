// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a description of your project:",
        name: "details"
    },
    {
        type: "list",
        message: "What type of license would you like?",
        name: "licenses", 
        choices: ["MIT", "Apache2.0", "GPL3.0", "BSD3", "None"]
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What tests are available for your application?",
        name: "test"
    },
    {
        type: "input",
        message: "What are the guidelines for using this repo?",
        name: "benefits"
    },
    {
        type: "input",
        message: "How can a user contribute to the repo?",
        name: "contributions"
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions).then((data) => {
        console.log(data)
    fs.writeFile('GeneratedREADME/GeneratedREADME.md', generateMarkdown(data),(err) => err? console.error(err) : console.log("Success!"))})
 }

// Function call to initialize app
init();
