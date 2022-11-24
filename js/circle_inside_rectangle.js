let colours = [];
let numColours = 2;

function setup() {
    let canvasHeight = 900;
    let canvasWidth = 900;
    createCanvas(canvasWidth, canvasHeight);
    let numberRects = 1000;
    stroke('#222222');
    colours = generateColours(numColours);
    for ( let i = 0; i < numberRects; i++) {
        createRandomRectangle(canvasHeight, canvasWidth);
    }
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
}

function createRandomRectangle(canvasWidth, canvasHeight) {
    let height =  0.1 * Math.floor(Math.random() * canvasWidth);
    let width = 0.1 * Math.floor(Math.random() * canvasHeight);
    let x = Math.floor(Math.random() * canvasWidth);
    let y = Math.floor(Math.random() * canvasHeight);
    
    rect(x, y, height, width);
    drawCircleInsideRect(x, y, height, width);
}

function drawCircleInsideRect(x, y, height, width) {
    if (height > width) {
        fill(colours[0][0], colours[0][1], colours[0][2]);
        let radius = width / 2;
        ((Math.floor(Math.random() * 100) % 2) == 0) ? 
            circle(x + radius, y + radius, width) : circle(x + radius, y + height - radius, width);
    } else {
        fill(colours[1][0], colours[1][1], colours[1][2]);
        let radius = height / 2;
        ((Math.floor(Math.random() * 100) % 2) == 0) ? 
            circle(x + radius, y + radius, height) : circle(x + width - radius, y + height, height);
    }
    noFill();
}
