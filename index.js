var inquirer = require("inquirer");

var fs = require("fs");
var generateMarkdown = require("./generateMarkdown");

inquirer.prompt([
    {
        type:    "input",
        message: "What is the name of your project?",
        name:     "Title"
    },
    {
        type:    "input",
        message: "Describe your project!",
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
       message:  "List additional contributors to the project.",
       name:     "Contributors"
    },
    {
        type:    "input",
        message: "How is your project tested?",
        name:    "Test"
    },
    {
        type:    "list",
        message: "Select your license",
        name:    "License",
        choices: ["MIT", "GVL-GPL 3.0","APACHE 2.0","BSD 3","NONE"]
    },
    {
        type:    "input",
        message: "Contact me if you have questions.",
        name:    "Questions"

    },
    {
        type:    "input",
        message: "What is your Github user name?",
        name:    "username"

    },
    {
        type:    "input",
        message: "What is your email?",
        name:    "email"

    },


]).then(answers => {
    console.log(answers);

let readme = generateMarkdown(answers)

    fs.writeFile("README.md", readme, err => {

    })
})