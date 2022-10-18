function setup() {
    createCanvas(1500,1500);
}

function draw() {
    noFill();
    arc(500, 500, 500, 50, 0, PI * 0.3);
    arc(500, 500, 1000, -100, 0, PI * 0.3);

    
    line(500, 500, 501, 500);
}

//arc(x, y, w, h, start, stop, [mode], [detail])

// Parameters
// x Number: x-coordinate of the arc's ellipse
// y Number: y-coordinate of the arc's ellipse
// w Number: width of the arc's ellipse by default
// h Number: height of the arc's ellipse by default
// start Number: angle to start the arc, specified in radians
// stop Number: angle to stop the arc, specified in radians
