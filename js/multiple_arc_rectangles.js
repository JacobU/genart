var colours = [];

function setup() {
    let canvasWidth = 1500;
    let canvasHeight = 1500;
    createCanvas(canvasWidth,canvasHeight);
    var a = 0;
    while(a < 6) {
        a++;
        colours.push(Math.floor(Math.random() * 255));
    }
    drawMultipleSpacedRectangles(canvasWidth, canvasHeight, 20, 10);
}

function drawMultipleSpacedRectangles(canvasWidth, canvasHeight, numColumns, spacing) {
    let widthOfRectGroup = canvasWidth / numColumns - spacing;
    let heightOfRectGroup = canvasHeight / numColumns - spacing;

    let currentWidth = 0;
    let currentHeight = 0;

    let radius = 10;
    for ( let i = 0; i < numColumns; i++) {
        for (let j = 0; j < numColumns; j++) {
            let numRectangles = (i + j) + 1;//Math.floor(Math.random() * (5 * i + 5 * j)) + 2;
            createSpacedRectangles(currentWidth, currentHeight, heightOfRectGroup / 2, widthOfRectGroup, spacing / 2, radius, numRectangles);
            currentHeight += heightOfRectGroup / 2;
            createHorizontalRectangles(currentWidth, currentHeight + spacing / 2, heightOfRectGroup / 2, widthOfRectGroup, spacing / 2, radius, numRectangles);
            currentWidth += widthOfRectGroup + spacing;
            currentHeight -= heightOfRectGroup / 2;
        }
        currentWidth = 0;
        currentHeight += heightOfRectGroup + spacing;
    }
}

function createSpacedRectangles(xStart, yStart, height, totalWidth, spacing, radius, numRectangles) {
    var x = xStart;
    var y = yStart;
    
    
    for(var i = 0; i < numRectangles; i++) {
        width = totalWidth / numRectangles - spacing;
        firstHeight = Math.random() * (height - spacing);
        topLeft = Math.random() * 100;
        secTopLeft = Math.random() * 100;
        // Fill colour for first rec
        
        (i % 2 == 0) ? fill(colours[0], colours[1], colours[2]) : fill(colours[3], colours[4], colours[5]);
        //(i % 2 == 0) ? fill(66, 233, 223) : fill(205, 181, 153);
        rect(x, y, width, firstHeight, /* radius*/ topLeft, radius, radius, radius);
        // Fill colour for second rec
        //(i % 2 == 0) ? fill(205, 181, 153) : fill(66, 233, 223);
        (i % 2 == 0) ? fill(colours[3], colours[4], colours[5]) : fill(colours[0], colours[1], colours[2]);
        rect(x, y + firstHeight + spacing, width, height - firstHeight - spacing, /* radius */ secTopLeft, radius, radius, radius);
        x += width + spacing
    }
    // Return the total width of the rectangles so we can use for the other func
    return x - spacing - xStart;
}

function createHorizontalRectangles(xStart, yStart, maxHeight, width, spacing, radius, numRectangles) {
    var x = xStart;
    var y = yStart;
    for(var i = 0; i < numRectangles; i++) {
        height = maxHeight / numRectangles - spacing;
        firstWidth = Math.random() * (width - spacing);
        topLeft = Math.random() * 100;
        secTopLeft = Math.random() * 100;
        // Fill colour for first rec
        // (i % 2 == 0) ? fill(148, 147, 152) : fill(244, 223, 78);
        (i % 2 == 0) ? fill(colours[0], colours[1], colours[2]) : fill(colours[3], colours[4], colours[5]);

        rect(x, y, firstWidth, height, /* radius*/ topLeft, radius, radius, radius);
        // Fill colour for second rec
        // (i % 2 == 0) ? fill(244, 223, 78) : fill(148, 147, 152);
        (i % 2 == 0) ? fill(colours[3], colours[4], colours[5]) : fill(colours[0], colours[1], colours[2]);
        rect(x + firstWidth + spacing, y, width - firstWidth - spacing, height, /* radius */ secTopLeft, radius, radius, radius);
        y += height + spacing;
    }
}