// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// `https://img.shields.io/badge/license-${license}-<choose color/colour.svg>`

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {}
  
  // TODO: Create a function to generate markdown for README
  const generateMarkdown = (data) =>  `
  
  # **${data.title}**
    
    ##TABLE OF CONTENT
    [link ##-Descripton] (link ##-Descripton)

    ## Description
    ${data.description}
    
    ### Installation
    ${data.installation}
    
    ### Usage
    ${data.usage}
    
    ### Contribution
    ${data.contribution}
    
    ### Test
    ${data.test}
    
    ### License
    ${data.license}
    
    ### Questions
    If you have any questions about the projectm the please feel free to contact me 

    GitHub User: [github](https://github.com/${data.github})
    email: [email](mailto:${data.email})
          2 [mailto:${data.email}]
          3 mailto:${data.email}
    [email](mailto:${data.email}) 4
    5 <${data.email}>

    
  `
  
  module.exports = generateMarkdown;