const inquirer = require("inquirer");

let fs = require("fs");
let generateMarkdown = require("./assets/generateMarkdown");

inquirer.prompt([
    {
        type:    "input",
        message: "What is your project's name?",
        name:     "Title"
    },
    {
        type:    "input",
        message: "What is your GitHub user name?",
        name:    "username"
    
    },
    {
        type:    "input",
        message: "What is your email address?",
        name:    "email"
    
    },
    {
        type:    "input",
        message: "Please write a short description of your project.",
        name:    "Description"
    },
    {
        type:    "input",
        message: "What command should be run to install dependancies?",  
        name:    "Installation"
    },
    {
        type:    "input",
        message: "What does the user need to know about using the repo?",
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
        message: "What kind of license should your project have?",
        name:    "License",
        choices: ["MIT", "APACHE", "GPL", "BSD", "None"]
    },


]).then(answers => {
    console.log(answers);

let readme = generateMarkdown(answers)

    fs.writeFile("README.md", readme, err => {

    })
})