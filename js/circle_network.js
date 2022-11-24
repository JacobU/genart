function setup() {
    let xSize = 920;
    let ySize = 920;
    createCanvas(xSize, ySize);

    let numColours = 5;
    let colours = generateColours(numColours);
    
    let points = generateRandomPoints(xSize, ySize, 30);
    drawLinesBetweenCircles(points, numColours, colours);
    drawCircles(points, 30, 0);
}

function generateColours(numColours) {
    let i = 0;
    let colours = [];
    while(i < numColours) {
        let colour = [];
        colour.push(Math.floor(Math.random()* 50) + 150);
        colour.push(Math.floor(Math.random()* 50) + 150);
        colour.push(Math.floor(Math.random()* 50) + 150);
        colours.push(colour);
        i++;
    }
    return colours;
    // console.log(colours);
}

class Point {
    constructor(x, y) {
     this.x = x;
     this.y = y;
    }
}

function generateRandomPoints(canvasXSize, canvasYSize, numPoints) {
    let points = [];
    for(let i = 0; i < numPoints; i++) {
        x = Math.floor(Math.random() * (canvasXSize - 40)) + 20;
        y = Math.floor(Math.random() * (canvasYSize - 40)) + 20;
        points.push(new Point(x,y));
    }
    return points;
}

function drawLinesBetweenCircles(points, numAdjacentPointsToJoin, colours) {
    for(let i = 0; i < points.length - 1; i++) {
        console.log(points[i].x);
        for (let j = 1; j <= numAdjacentPointsToJoin; j++) {
            if (i + j < points.length) {
                line(points[i].x, points[i].y, points[i+j].x, points[i+j].y);    
                stroke(colours[j-1][0], colours[j-1][1], colours[j-1][2]);
            }
        }
    }
}

function drawCircles(points, circleSize, circleColour) {
    points.forEach(point => {
        circle(point.x, point.y, circleSize);
    });
}



