let xSize = 1400;
let ySize = 1400;
let numberOfRecursions = 14;
let colours = [];
let numColours = 2;
let colour = 0;

class Point {
    constructor(x, y) {
     this.x = x;
     this.y = y;
    }
}

class ALine {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

function setup() {    
    createCanvas(xSize, ySize);

    colours = generateColours(numColours);
    background(colours[colour % numColours][0], colours[colour % numColours][1], colours[colour % numColours][2]);
    strokeWeight(1);
    stroke('white');

    let startPoint = new Point(700, 0);
    let firstLine = new ALine(startPoint, new Point(startPoint.x, startPoint.y + 800));

    drawRecursiveLine(firstLine, 0.4, 0.55, 0);
}

// In this func, "line" is a line that starts from the origin and moves outwards. Ie Line(origin.x, origin.y, outwards.x, outwards.y).
// heightPercentage is the height that the new two lines start from.
// widthPercentage is the length that the new two lines expand from the original line.
function drawRecursiveLine(theLine, heightPercentage, widthPercentage, count) {
    if (count < numberOfRecursions) {
        colour++;
        stroke(colours[colour % numColours][0], colours[colour % numColours][1], colours[colour % numColours][2]);
        line(theLine.a.x, theLine.a.y, theLine.b.x, theLine.b.y);
        let newLineOrigin = getCartesianPercentage(theLine, heightPercentage);
        let lengthToAdd = getLineLength(theLine) * widthPercentage;
        let newLine1;
        let newLine2;
        if (isLineHorizontal(theLine)) {
            newLine1 = new ALine(newLineOrigin, new Point(newLineOrigin.x, newLineOrigin.y + lengthToAdd));
            newLine2 = new ALine(newLineOrigin, new Point(newLineOrigin.x, newLineOrigin.y - lengthToAdd))
        } else {
            newLine1 = new ALine(newLineOrigin, new Point(newLineOrigin.x + lengthToAdd, newLineOrigin.y));
            newLine2 = new ALine(newLineOrigin, new Point(newLineOrigin.x - lengthToAdd, newLineOrigin.y));
        }
        drawRecursiveLine(newLine1, heightPercentage, widthPercentage, count + 1);
        drawRecursiveLine(newLine2, heightPercentage, widthPercentage, count + 1);
    }
}

function getLineLength(aLine) {
    if (isLineHorizontal(aLine)) {
        return Math.abs(aLine.b.x - aLine.a.x);
    }
    else {
        return Math.abs(aLine.b.y - aLine.a.y);
    }
}

function isLineHorizontal(aLine) {
    if (aLine.a.y - aLine.b.y == 0) return true;
    return false;
}

function getCartesianPercentage(aLine, percentage) {
    let newX = (aLine.b.x - aLine.a.x) * percentage + aLine.a.x;
    let newY = (aLine.b.y - aLine.a.y) * percentage + aLine.a.y;
    console.log(newX, newY);
    return new Point(newX, newY); 
}

function generateColours(numColours) {
    let i = 0;
    let colours = [];
    while(i < numColours) {
        let colour = [];
        colour.push(Math.floor(Math.random()* 255));
        colour.push(Math.floor(Math.random()* 255));
        colour.push(Math.floor(Math.random()* 255));
        colours.push(colour);
        i++;
    }
    return colours;
}