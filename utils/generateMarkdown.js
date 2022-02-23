// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== "None") {
return `<img src=https://img.shields.io/badge/license-${license}-red.svg>`
}
return "";
}
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== "None"){
      return `* [License](#license)`
    }
    return "";
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {

    if (license !== "None"){
      return `## License
      
      
      This project is licensed under ${license} 
      
      `
    }
    return "";
  }

  
  // TODO: Create a function to generate markdown for README
  const generateMarkdown = (data) =>  `
  
  # **${data.title}**

  ${renderLicenseBadge(data.license)}

  ### Description
  ${data.description}
    
  ## TABLE OF CONTENT

  * [Installation](#installation)
   
  * [Usage](#usage)
   
  * [Test](#test)
  
  ${renderLicenseLink(data.license)}
   
  * [Questions](#questions)


 


    
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
    
  ## Contribution
  ${data.contribution}
    
  ## Test
  ${data.test}
 
  ${renderLicenseSection(data.license)}
  
  ## Questions
  If you have any questions about the projectm the please feel free to contact me 

  Email: ${data.email}
 <br>
  GitHub User: [https://github.com/${data.github}](https://github.com/${data.github})

  
### This program is developed by Jagdeep Tiwana

 GitHub: [https://github.com/jtiwana-git](https://github.com/jtiwana-git)
<br>
 Email: [jtiwana@hotmail.com](mailto:jtiwana@hotmail.com)
  
  `
  
  module.exports = generateMarkdown;