// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
if (License !== "None") {
return `<img src=https://img.shields.io/badge/License-${License}-red.svg>`
}
return "";
}
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(License) {
    if (License !== "None"){
      return `* [License](#license)`
    }
    return "";
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(License) {

    if (License !== "None"){
      return `## License
      
      
      This project is licensed under ${License} 
      
      `
    }
    return "";
  }

  
  // TODO: Create a function to generate markdown for README
  const generateMarkdown = (data) =>  `
  
  # **${data.title}**

  ${renderLicenseBadge(data.License)}

  ### Description
  ${data.description}
    
  ## TABLE OF CONTENT

  * [Installation](#installation)
   
  * [Usage](#usage)
   
  * [Test](#test)
  
  ${renderLicenseLink(data.License)}
   
  * [Questions](#questions)


 


    
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
    
  ## Contribution
  ${data.contribution}
    
  ## Test
  ${data.test}
 
  ${renderLicenseSection(data.License)}
  
  ## Questions
  If you have any questions about the project the please feel free to contact me 

  Email: ${data.email}
 <br>
  GitHub User: [https://github.com/${data.github}](https://github.com/${data.github})

  
### This program is developed by Jagdeep Tiwana

 GitHub: [https://github.com/jtiwana-git](https://github.com/jtiwana-git)
<br>
 Email: [jtiwana@hotmail.com](mailto:jtiwana@hotmail.com)
  
  `
  
  module.exports = generateMarkdown;