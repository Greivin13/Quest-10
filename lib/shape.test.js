// Importing necessary classes from shape.js
const { Triangle, Square, Circle } = require('./shape');

// Testing the render function of the Triangle class
describe('Triangle', () => {
  test('render() should return the correct SVG string for Triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    triangle.setColorText('yellow');
    triangle.text = 'TRIANGLE';
    
    const expectedSvgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="150, 18 244, 182 56, 182" fill="green"/>
      <text x="150" y="130" text-anchor="middle" font-size="40" fill="yellow">TRIANGLE</text>
    </svg>`;

    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
});
});
// Testing the render function of the Square class
describe('Square', () => {
  test('render() should return the correct SVG string for Square', () => {
    const square = new Square();
    square.setColor('purple');
    square.setColorText('pink');
    square.text = 'SQUARE';
    
    const expectedSvgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect x="73" y="40" width="160" height="160" fill="purple"/>
      <text x="150" y="130" text-anchor="middle" font-size="40" fill="pink">SQUARE</text>
    </svg>`;

    expect(square.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="purple" />');
});
});
// Testing the render function of the Circle class
describe('Circle', () => {
  test('render() should return the correct SVG string for Circle', () => {
    const circle = new Circle();
    circle.setColor('red');
    circle.setColorText('blue');
    circle.text = 'CIRCLE';
    
    const expectedSvgString = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle cx="150" cy="115" r="80" fill="red"/>
      <text x="150" y="130" text-anchor="middle" font-size="40" fill="blue">CIRCLE</text>
    </svg>`;

    expect(circle.render()).toEqual('<circle cx="150" cy="115" r="80" fill="red" />');
});
});
