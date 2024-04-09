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

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("generatedREADME.md", data, (err) =>
        err ? console.error(err) : console.log(`generatedREADME.md created!`)
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions.map((question, index) => {
                let obj = {
                    type: question[0],
                    message: question[2],
                    name: question[1],
                };
                if (question[0] === 'list') {
                    obj.choices = ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'MPL 2.0', 'None'];
                }
                return obj;
            })
        )
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile(markdown);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                return console.log("Something went wrong");
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();