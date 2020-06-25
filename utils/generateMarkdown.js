function generateMarkdown(userInput, gitInfo) {
  // if user has an email address than email will be presented otherwise "user does not have an email" will be displayed
  const email = gitInfo.email || "User does not have an email"

  return `
  # ${userInput.title}
  ## Description
  ${userInput.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${userInput.installation}
  ## Usage
  ${userInput.usage}
  ## License
  This project is licensed under the ${userInput.license} license.
  <img src="https://img.shields.io/badge/License-${userInput.license}-orange" alt="badge"/>
  ## Contributing
  ${userInput.credits}
  ## Tests
      ${userInput.tests}
  ## Questions
  For any questions regarding the repo contact: ${email}
  GitHub username: ${gitInfo.login}
  <img src="${gitInfo.avatar_url}" alt="avatar" height="200" width="200"/>
  `;
};
module.exports = generateMarkdown;