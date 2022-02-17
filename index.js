// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
	title,
	description,
	install,
	usage,
	credits,
	license,
	badges,
	features,
	contributor,
	tests,
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${filename}.md generated.`)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
