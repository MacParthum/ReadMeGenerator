var inquirer = require("inquirer");

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
        licenseChoice: [
                 "MIT",
                 "GVL-GPL 3.0",
                 "APACHE 2.0",
                 "BSD 3",
                 "NONE"
        ]
    },
    {
        type:    "input",
        message: "Contact me if you have questions.",
        name:    "Questions"

    },
    {
        type:    "input",
        message: "Github username?",
        name:    "Username"
    },
    {
        type:    "input",
        message: "e-mail?",
        type:    "e-mail"

    }


]).then(answers => {
    console.log(answers);

    let readme = "";

    fs.writeFile("README.md", readme, err => {
        if (err) {
            return console.log(err);
        }
    })
});