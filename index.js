// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require ('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');


// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Brief description of your project?"
},
{
    type: "input",
    name: "installation",
    message: "What is the Installation instructions?",
},
{
    type: "input",
    name: "usage",
    message: "What is the usage of this program?",

},
{
    type: "input",
    name: "contribution",
    message:"Who contributed toward your project?",
},     
{
    type: "input",
    name: "test",
    message:"How did you test your project?",
}, 
{ 
    type: "list",
    name: "license",
    message: "Select license key or select NO KEY?",
    choices: ["None", "MIT", "GNU", "Apache"],

},
{
    type: "input",
    name: "github",
    message:"Please enter your GitHub username?",
},
{
    type: "input",
    name: "email",
    message:"Please enter your email address?",
}

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)


}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile('output/README.md', generateMarkdown({...answers}) )
    })
}

// Function call to initialize app

init();
