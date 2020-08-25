// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}
    
    ## Description

    ${data.Description}
    
   ## Table of Contents

   *[Installation](#Installation)
   *[Usage](#Usage)
   *[Contributors](#Contributors)
   *[Test](#Test)


    ## Installation

    ${data.Description}

    ## Usage

    ## Licence







    
    ## Questions
    Please contact me at ${data.email} if you have any questions.

    Please visit my github account [${data.githubURL}](https://github.com/${data.githubURL}/)
    
    `;
}