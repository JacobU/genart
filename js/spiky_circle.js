let xOrigin = 750;
let yOrigin = 750;
let count = 0;
let colours = [];
let pointsToDraw = [];

function setup() {
    createCanvas(1500,1500);
    let numColours = 50;
    colours = generateColours(numColours);


    let numLines = 100;
    let maxLengthOfSegment = 10;
    let numSegments = 50;
    pointsToDraw = createArrayOfLineSegments(xOrigin, yOrigin, numLines, maxLengthOfSegment, numSegments);

}

function draw() {
    
    clear();
    drawLineSegments(pointsToDraw, count, xOrigin, yOrigin, colours);
    for ( let i = 0; i < 5000; i++) {
        console.log(i);
    }
    fill('black');
    circle(xOrigin, yOrigin, 50);
    count += 1;
}

function createLinesExpandingFromOrigin(xOrigin, yOrigin, radius, numLines) {
    for(var i = 0; i < numLines; i++) {
        let x = xOrigin + radius * Math.cos(Math.PI * 2 * i / numLines);
        let y = yOrigin + radius * Math.sin(Math.PI * 2 * i / numLines);
        line(xOrigin, yOrigin, x, y);
    }   
}

class Point {
   constructor(x, y) {
    this.x = x;
    this.y = y;
   }
}

function createRandomSegmentedLineAtAngleFromOrigin(xOrigin, yOrigin, angle, maxLengthOfSegment, numSegments) {
    let segmentArray = [];
    let totalLength = 0;
    for (var i = 0; i < numSegments; i++) {
        totalLength += Math.random() * maxLengthOfSegment;
        let x = xOrigin + totalLength * Math.cos(angle);
        let y = yOrigin + totalLength * Math.sin(angle);
        segmentArray.push(new Point(x,y));
    }
    return segmentArray;
}

function createArrayOfLineSegments(xOrigin, yOrigin, numLines, maxLengthOfSegment, numSegments) {
    let arrayOfSegmentedLines = [];
    for (var i = 0; i < numLines; i++) {
        let angle = Math.PI * 2 * i / numLines;
        let segmentedLine = createRandomSegmentedLineAtAngleFromOrigin(xOrigin, yOrigin, angle, maxLengthOfSegment, numSegments);
        arrayOfSegmentedLines.push(segmentedLine);
    }
    return arrayOfSegmentedLines;
}

function drawLineSegments(array, count, xOrigin, yOrigin, colours) {
    if(count < 1000) {
        numLines = array.length;
        numSegments = array[0].length;
        for (var i = 0; i < numSegments; i++) {
            colour = (i + count) % colours.length;
            stroke(colours[colour][0], colours[colour][1], colours[colour][2]);
            for (var j = 0; j < numLines-1; j++) {
                // This connects the current end of segment to the end of the segment on another line adjacent to it
                if (i == numSegments-1) {
                    line(xOrigin, yOrigin, array[j][i].x, array[j][i].y);
                }
                line(array[j][i].x, array[j][i].y, array[j+1][i].x, array[j+1][i].y);
            }
            line(array[numLines-1][i].x, array[numLines-1][i].y, array[0][i].x, array[0][i].y)
        }
    }
    
}

function generateColours(numColours) {
    let i = 0;
    let colours = [];
    while(i < numColours) {
        let colour = [];
        colour.push(Math.floor(Math.random()* 255));
        colour.push(Math.floor(Math.random()* 50 + 50));
        colour.push(Math.floor(Math.random()* 255));
        colours.push(colour);
        i++;
    }
    return colours;
}