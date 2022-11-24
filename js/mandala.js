let colours = [];
let numColours = 4;

let minNumberSides = 2;
let maxNumberSides = 20;
let radiusToEndAt = 100;

let canvasHeight = 900;
let canvasWidth = 900;

let originX = canvasWidth / 2;
let originY = canvasHeight / 2;

function setup() {
    createCanvas(canvasWidth, canvasHeight);    
    colours = generateColours(numColours);
    drawMandala(originX - 10);
}

function drawCircles(radius) {
    let i = 0;
    while(radius >= radiusToEndAt) {
        colour = i % numColours;
        fill(colours[colour][0], colours[colour][1], colours[colour][2]);
        circle(originX, originY, radius);
        radius -= Math.random() * 50;
        i++;
    }
}

function drawMandala(radius) {
    let i = 0;
    while(radius >= radiusToEndAt) {
        // circle
        stroke('black');
        strokeWeight(1);
        colour = i % numColours;
        fill(colours[colour][0], colours[colour][1], colours[colour][2]);
        circle(originX, originY, radius * 2);

        // polygon

        let numberOfSides = Math.ceil(Math.random() * maxNumberSides / 2 + 1) * 2;
        console.log(numberOfSides);
        console.log(radius);
        radius = drawPolygonInsideCircle(radius, numberOfSides);
        console.log(radius);
        console.log("End loop");
        i++;
    }
}

// function drawBrokenMandala(radius) {
//     let i = 0;
//     while(radius >= radiusToEndAt) {
//         // circle
//         stroke('black');
//         strokeWeight(1);
//         colour = i % numColours;
//         fill(colours[colour][0], colours[colour][1], colours[colour][2]);
//         circle(originX, originY, radius);

//         // polygon
//         let numberOfSides = Math.ceil(Math.random() * maxNumberSides / 2) * 2;
//         drawPolygonInsideCircle(radius, numberOfSides);

//         // update variables
//         radius -= Math.random() * 50;
//         i++;
//     }
// }

function drawPolygonInsideCircle(radius, numberOfSides) {
    stroke('white');
    strokeWeight(4);

    let points = [];
    let angle = 0;
    for (let i = 0; i < numberOfSides; i++) {
        angle += (Math.PI * 2) / numberOfSides;
        let x = (radius * Math.cos(angle)) + originX;
        let y = (radius * Math.sin(angle)) + originY;
        points.push([x,y]);
    }
    
    for(let i = 0; i < numberOfSides; i++) {
        if (i < numberOfSides - 1) {
            line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
        } else {
            line(points[i][0], points[i][1], points[0][0], points[0][1]);
        }
    }

    let pointsBetween = (numberOfSides / 2)  - 1;
    let newRadius = distanceBetweenPoints(points[0], points[pointsBetween]) / 2;
    return newRadius;
}

function findRandomPointOnCircle(originX, originY, radius) {
    let angle = Math.random() * Math.PI * 2;
    let x = radius * Math.cos(angle);
    let y = radius * Math.sin(angle);

    x += originX;
    y += originY;
    return [x,y];
}

function distanceBetweenPoints(point1, point2) {
    let x = point2[0] - point1[0];
    let y = point2[1] - point1[1];
    let length = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));

    return length;
}

function generateColours(numColours) {
    let i = 0;
    let colours = [];
    while(i < numColours) {
        let colour = [];
        // colour.push(Math.floor(Math.random()* 50) + 150);
        // colour.push(Math.floor(Math.random()* 50) + 150);
        // colour.push(Math.floor(Math.random()* 50) + 150);


        colour.push(Math.floor(Math.random()* 255));
        colour.push(Math.floor(Math.random()* 255));
        colour.push(Math.floor(Math.random()* 255));
        colours.push(colour);
        i++;
    }
    return colours;
}