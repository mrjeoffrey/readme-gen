// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const userQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a description for your project:",
            name: "description"
        },
        {
            type: "input",
            message: "Enter installation instructions for your project:",
            name: "install"
        },
        {
            type: "input",
            message: "Enter usage information for your project:",
            name: "usage"
        },
        {
            type: "input",
            message: "Who are the collaborators of this projects?",
            name: "credits"
        },
        {
            type: "input",
            message: "Enter your GitHub Username:",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        },
        {
            type: "list",
            message: "Which license does this project fall under?",
            name: "license",
            choices: [
                "MIT",
                "ISC",
                "EPL",
                "Apache 2.0",
            ]
        }
    ])
}

// const questions = [

// 	title,
// 	description,
// 	install,
// 	usage,
// 	credits,
// 	license,
// 	badges,
// 	features,
// 	contributor,
// 	tests,
// ];



// TODO: Create a function to write README file
function writeToFile = (answers) => 
`# ${answers.title}

${answers.description}

## Table of Contents
- <a href="#inst">Install<a>
- <a href="#use">Usage<a>
- <a href="#credits">Credits<a>
- <a href="#lic">License<a>
- <a href="#test">Tests<a>
- <a href="#questions">Questions<a>

## <h1 id="inst">Install<h1>
    
- ${answers.install}

## <h1 id="use">Usage<h1>
    
- ${answers.usage}

## <h1 id="collab">Credits<h1>
- ${answers.credits}

- This application is covered under the ${answers.license} license
[![License: ${answers.license}]${generateLicense(answers.license)}

### <h1 id="git">GitHub Profile<h1>
- https://github.com/${answers.github}

`

// {
// 	fs.appendFile(`${fileName}.md`, data, (err) =>
// 		err ? console.error(err) : console.log(`${filename}.md generated.`)
// 	);
// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const generateMD = ({ name, location, github, linkedin }) =>
	`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;


	.then((answers) => {
		const htmlPageContent = generateMD(answers);

		fs.writeFile("index.html", htmlPageContent, (err) =>
			err ? console.log(err) : console.log("Successfully created index.html!")
		);
	});
