function setup() {
    createCanvas(1500,1500);
}

let count = 0;

function draw() {
    let xOrigin = 750;
    let yOrigin = 750;
    let pointsToDraw = createArrayOfLineSegments(xOrigin, yOrigin, 200, 10, 50);
    // console.log(pointsToDraw);
    stroke(9, 46, 20);
    
    drawLineSegments(pointsToDraw, count, xOrigin, yOrigin);
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

function drawLineSegments(array, count, xOrigin, yOrigin) {
    if(count < 1) {
        numLines = array.length;
        console.log(numLines);    
        numSegments = array[0].length;
        console.log(numSegments);
        for (var i = 0; i < numSegments; i++) {
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