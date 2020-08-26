// function to generate markdown for README
function generateMarkdown(data) {
   return `![GitHub license](https://img.shields.io/badge/license-${data.License}-blue.svg)
   
## Title 

${data.Title}

## Description

${data.Description}

## Table of Contents

   *[Installation](#Installation)
   *[Usage](#Usage)
   *[License](#License)
   *[Contributors](#Contributors)
   *[Tests](#Tests)



## Installation

${data.Installation}

## Usage

${data.Usage}

## License

${data.License}
    

## Contributors

${data.Contributors}

## Tests

${data.Tests}

 `;
}


module.exports = generateMarkdown;

