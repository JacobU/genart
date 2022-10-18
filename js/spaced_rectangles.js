function setup() {
    createCanvas(1500,1500);
    var a = 0;
    while(a < 12) {
        a++;
        colours.push(Math.floor(Math.random() * 255));
    }
}

var count = 0;
var colours = [];
    
function draw() {
    if (count < 1) {
        x = 100;
        y = 500;
        height = 300;
        maxHeight = 30
        maxWidth = 50;
        spacing = 10;
        radius = 10;
        numRectangles = 20;

        horizontalWidth = createSpacedRectangles(x, y, height, maxWidth, spacing, radius, numRectangles);
        
        createHorizontalRectangles(x, y + height + spacing, maxHeight, horizontalWidth, spacing, radius, numRectangles / 2);
    }
    
    count++;
}  

function createSpacedRectangles(xStart, yStart, height, maxWidth, spacing, radius, numRectangles) {
    var x = xStart;
    var y = yStart;
    
    
    for(var i = 0; i < numRectangles; i++) {
        width = Math.random() * maxWidth + 5;
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
        height = Math.random() * maxHeight + 5;
        firstWidth = Math.random() * (width - spacing);
        topLeft = Math.random() * 100;
        secTopLeft = Math.random() * 100;
        // Fill colour for first rec
        // (i % 2 == 0) ? fill(148, 147, 152) : fill(244, 223, 78);
        (i % 2 == 0) ? fill(colours[6], colours[7], colours[8]) : fill(colours[9], colours[10], colours[11]);

        rect(x, y, firstWidth, height, /* radius*/ topLeft, radius, radius, radius);
        // Fill colour for second rec
        // (i % 2 == 0) ? fill(244, 223, 78) : fill(148, 147, 152);
        (i % 2 == 0) ? fill(colours[9], colours[10], colours[11]) : fill(colours[6], colours[7], colours[8]);
        rect(x + firstWidth + spacing, y, width - firstWidth - spacing, height, /* radius */ secTopLeft, radius, radius, radius);
        y += height + spacing;
    }
}