// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Create an array of questions for user input
const userQuestions = () => {
	return inquirer.prompt([
		{
			type: "input",
			message: "What is the title of your project?",
			name: "title",
		},
		{
			type: "input",
			message: "Enter a description for your project:",
			name: "description",
		},
		{
			type: "input",
			message: "Enter installation instructions for your project:",
			name: "install",
		},
		{
			type: "input",
			message: "Enter usage information for your project:",
			name: "usage",
		},
		{
			type: "input",
			message: "Who are the collaborators of this projects?",
			name: "credits",
		},
		{
			type: "input",
			message: "Enter your GitHub Username:",
			name: "github",
		},
		{
			type: "input",
			message: "Enter your email address:",
			name: "email",
		},
		{
			type: "list",
			message: "Which license does this project fall under?",
			name: "license",
			choices: ["MIT", "ISC", "EPL", "Apache 2.0"],
		},
	]);
};

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

// TODO: Create a function to write README file
const writeToFile = (answers) =>
	`# ${answers.title}

${answers.description}
${listLicense(answers.license)}

## Table of Contents
- <a href="#install">Install<a>
- <a href="#usage">Usage<a>
- <a href="#credits">Credits<a>
- <a href="#license">License<a>
- <a href="#test">Tests<a>
- <a href="#questions">Questions<a>

## <h1 id="install">Install<h1>
    
- ${answers.install}

## <h1 id="usage">Usage<h1>
    
- ${answers.usage}

## <h1 id="credits">Credits<h1>
- ${answers.credits}

## <h1 id="license">License<h1>

- This application is covered under the ${answers.license} license
[![License: ${answers.license}]${listLicense(answers.license)}

## <h1 id="test">Tests<h1>

## <h1 id="questions">Questions<h1>

${answers.title} was created by [${answers.github}](https://github.com/${
		answers.github
	}). For any inquiries, reach out to my [email](mailto://${
		answers.email
	}) with subject line: "${answers.title} Inquiry".

`;

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(answers) {
	switch (answers) {
		case "None":
			return "";
			break;
		case "MIT":
			return "https://img.shields.io/badge/License-MIT-yellow.svg";
			break;
		case "ISC":
			return "https://img.shields.io/badge/License-ISC-blue.svg";
			break;
		case "EPL":
			return "https://img.shields.io/badge/License-EPL%201.0-red.svg";
			break;
		case "Apache 2.0":
			return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
			break;
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
	switch (answers) {
		case "None":
			return "";
			break;
		case "MIT":
			return "https://opensource.org/licenses/MIT";
			break;
		case "ISC":
			return "https://opensource.org/licenses/ISC";
			break;
		case "EPL":
			return "https://img.shields.io/badge/License-EPL%201.0-red.svg";
			break;
		case "Apache 2.0":
			return "https://opensource.org/licenses/Apache-2.0";
			break;
	}
}

// TODO: Create a function that returns the license section of README
function listLicense(answers) {
	let licenseBadge = renderLicenseBadge(answers);
	let licenseLink = renderLicenseLink(answers);
	return `(${licenseBadge})](${licenseLink})`;
}

// TODO: Create a function to initialize app
const init = () => {
	userQuestions()
		.then((answers) => writeFileAsync("README.md", writeToFile(answers)))
		.then(() => console.log("Generating README file..."))
		.catch((err) => console.error(err));
};

// Function call to initialize app
init();
