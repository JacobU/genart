
class Point {
    constructor(x, y) {
     this.x = x;
     this.y = y;
    }
}

class Rectangle {
    constructor(topLeft, topRight, bottomLeft, bottomRight) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
}

let mainRectangle = new Rectangle(new Point(50,50), new Point(1450,50), new Point(50,550), new Point(1450,550));

// Must take a Rectangle object
function drawRectangle(rectangle) {
    line(rectangle.topLeft.x, rectangle.topLeft.y, rectangle.topRight.x, rectangle.topRight.y);
    line(rectangle.topRight.x, rectangle.topRight.y, rectangle.bottomRight.x, rectangle.bottomRight.y);
    line(rectangle.bottomRight.x, rectangle.bottomRight.y, rectangle.bottomLeft.x, rectangle.bottomLeft.y);
    line(rectangle.bottomLeft.x, rectangle.bottomLeft.y, rectangle.topLeft.x, rectangle.topLeft.y);
}

let numColours = 5;
let count = 0;
let timesToRedivide = 20;
let timesToRepeat = 10;
let colours = [];


function setup() {
    generateColours(numColours);
    let xSize = 1500;
    let ySize = 1500;
    createCanvas(xSize, ySize);

    fill('black');
    rect(50,50,1400,500);
    strokeWeight(3);

    for (let outer = 0; outer < timesToRepeat; outer++) {
        stroke(colours[outer % numColours][0], colours[outer % numColours][1], colours[outer % numColours][2]);
        let newRectangle = mainRectangle;
        for (let i = 0; i < timesToRedivide; i++) {
            drawRectangle(newRectangle);
            newRectangle = divideRectangle(newRectangle);
            count++;
        }
    }
}

function divideRectangle(rectangle) {
    let divider = 0.5 + Math.random() * 0.5; 
    if (count % 2 == 0) {
        let halfWidth = rectangle.topLeft.x + (rectangle.topRight.x - rectangle.topLeft.x) * divider;
        return new Rectangle(
            new Point(rectangle.topLeft.x, rectangle.topLeft.y),
            new Point(halfWidth, rectangle.topLeft.y),
            new Point(rectangle.bottomLeft.x, rectangle.bottomLeft.y),
            new Point(halfWidth, rectangle.bottomLeft.y));
    } else {
        let halfHeight = rectangle.topLeft.y + (rectangle.bottomLeft.y - rectangle.topLeft.y) * divider;
        return new Rectangle(
            new Point(rectangle.topLeft.x, rectangle.topLeft.y),
            new Point(rectangle.topRight.x, rectangle.topRight.y),
            new Point(rectangle.bottomLeft.x, halfHeight),
            new Point(rectangle.bottomRight.x, halfHeight));
    }
}

function generateColours(numColours) {
    let i = 0;
    while(i < numColours) {
        let colour = [];
        colour.push(Math.floor(Math.random()* 250) );
        colour.push(Math.floor(Math.random()* 250) );
        colour.push(Math.floor(Math.random()* 250) );
        colours.push(colour);
        i++;
    }
}