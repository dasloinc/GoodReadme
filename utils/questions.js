const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your Application:"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps needed to install your application?"
    },
    {
        type: "input",
        name: "usage",
        message: "What should the user know about using the repo?"
    },
    {
        type: "input",
        name: "credits",
        message: "What should the user know about any collaborators to the repo?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license should the application has?",
        choices: ["MIT", "IBM", "Apache"]
    },
    {
        type: "input",
        name: "tests",
        message: "What command needs to be run to run tests?"
    }
];

module.exports = questions;