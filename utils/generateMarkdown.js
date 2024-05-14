// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
        return "";
    } else {
        let formattedLicense = license.replace(/ /g, "_");
        return `![GitHub license](https://img.shields.io/badge/license-${formattedLicense}-blue.svg)`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return "";
    } else {
        let formattedLicense = license.replace(/ /g, "-");
        return `https://choosealicense.com/licenses/${formattedLicense.toLowerCase()}`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    } else {
        return `This application is covered under the ${license} license`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({
    title,
    description,
    installation,
    usage,
    contributors,
    test,
    github,
    email,
    license,
}) {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    const licenseSection = renderLicenseSection(license);

    return `# ${title}
    ${licenseBadge}
    ##### Table of Contents  
    [Description](#description)  
    [Installation](#installation)  
    [Usage](#usage)  
    [Contributions](#contributions)  
    [Tests](#tests)  
    [Questions](#questions)  
    [License](#license)  
  
    ## Description  
    ${description}
  
    ## Installation  
    ${installation}
  
    ## Usage  
    ${usage}
  
    ## Contributions  
    ${contributors}
  
    ## Tests  
    ${test}
  
  
    ## Questions
    For any questions regarding the repository, contact me via:
    * Github: [${github}](https://www.github.com/${github})
    * Email: <a href="mailto:${email}">${email}</a>
    
    ## License
    ${licenseSection}  
    ${licenseLink} 
  `;
}

module.exports = generateMarkdown;