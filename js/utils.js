export function generateColours(numColours) {
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