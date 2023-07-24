// Importing necessary modules and classes
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require('./lib/shape');

// Function to write SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
  // SVG string for holding the SVG elements
  let svgString = "";
  // Opening <svg> tag with width and height attributes
  svgString += `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  // Opening <g> tag to wrap SVG elements together
  svgString += "<g>";

    // Determine the shape choice and add the corresponding SVG element
  let shapeChoice;
  if (answers.shape === 'circle') {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
  } else if (answers.shape === 'triangle') {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
  } else if (answers.shape === 'square') {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
  }

  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  // Writing SVG string to the file
  fs.writeFile(fileName, svgString, (err) => {
    if (err) {
      console.error('Error writing SVG file:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

// Function to prompt the user for input using inquirer
function promptUser() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):',
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Must enter up to three characters");
        promptUser();
      } else {
        writeToFile("logo.svg", answers);
      }
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
}

promptUser();
