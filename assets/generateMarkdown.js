// function to generate markdown for README
function generateMarkdown(data) {
    return `![GitHub license](https://img.shields.io/badge/license-${data.License}-blue.svg)
    
    ${data.Title}

  ## Description

    ${data.Description}
    
   ## Table of Contents

   *[Installation](#Installation)
   *[Usage](#Usage)
   *[License](#License)
   *[Contributors](#Contributors)
   *[Tests](#Tests)
   *[Questions](#Questions)


    ## Installation

    ${data.Description}

    ## Usage

    ${data.Usage}

    ## License

    ${data.License}
    

    ## Contributors

    ${data.Contributors}

    ## Tests

    ${data.Tests}


 ## Questions
    Please contact me at ${data.email} if you have any questions.

    Please visit my github account [${data.githubURL}](https://github.com/${data.githubURL}/)
    
    `;
}


module.exports = generateMarkdown;

