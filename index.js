// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    ["input", "title", "What is the project title?: "],
    ["input", "description", "What is the project description?: "],
    ["input", "installation", "What is the project's installation instructions?: "],
    ["input", "usage", "What is the usage information?: "],
    ["input", "contributors", "Who else contributed to the project?: "],
    ["input", "test", "What do you need to input to run tests?: "],
    ["input", "github", "Please enter your GitHub username: "],
    ["input", "email", "Please enter your email address: "],
    ["list", "license", "What license are you using?: "],
];

