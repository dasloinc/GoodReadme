const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown");
const axios = require("axios");

//Questions
function questions(){
 return inquirer.prompt([
    {
        message: "Enter your GitHub username:",
        name: "Username"
    },
    {
        message: "What is the title of your project ",
        name: "Title"
    },
    {
        message: "Description of your Application in a few words",
        name: "Description"
    },
    {
        type: "input",
        name: "contents",
        message: "What are the contents of the project?"
    },
    {
        message: 'What are the necessary packages required to be installed to run the application? ',
        name: 'Installation'
    },
    {
        message: "How to use the application ",
        name: "Usage"
    },
    {
        message: "Provide the license of the application",
        name: "License"
    },
    {
        type: "input",
        name: "Test",
        message: "How to test the application to make sure it is running?"
    }
])}

function generate(data,me) {
    fs.writeFile('README.md', generateMarkdown(data, me), (err) => {
        if (err) {
            throw err;
        }
    })
}

async function init() {
    console.log("hi")
    try {
        const answers = await questions();
        const README = await api(answers.username);
        await generate(answers, README);

        console.log("Successfully generated README.md");
    } catch (err) {
        console.log(err);
    }
}

init();