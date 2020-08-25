var inquirer = require("inquirer");

var fs = require("fs");
var generateMarkdown = require("./assets/generateMarkdown");

inquirer.prompt([
    {
        type:    "input",
        message: "What is your Github user name?",
        name:    "username"
    
    },
    {
        type:    "input",
        message: "What is your email address?",
        name:    "email"
    
    },
    {
        type:    "input",
        message: "What is the name of your project?",
        name:     "Title"
    },
    {
        type:    "input",
        message: "Please write a short description of your project.",
        name:    "Description"
    },
    {
        type:    "input",
        message: "What are the installation requirements?",
        name:    "Installation"
    },
    {
        type:    "input",
        message: "Provide user instructions here!",
        name:    "Usage"
    },
    {
       type:     "input",
       message:  "What does the user need to know about contributing to the project?",
       name:     "Contributors"
    },
    {
        type:    "input",
        message: "What command should be run to run tests?",
        name:    "Tests"
    },
    {
        type:    "list",
        message: "Select your license.",
        name:    "License",
        choices: ["MIT", "GVL-GPL 3.0","APACHE 2.0","BSD 3","NONE"]
    },
    {
        type:    "input",
        message: "Contact me if you have questions.",
        name:    "Questions"

    },


]).then(answers => {
    console.log(answers);

let readme = generateMarkdown(answers)

    fs.writeFile("README.md", readme, err => {

    })
})