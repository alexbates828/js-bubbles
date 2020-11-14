function drawnewcircle() {
    console.log("drawing new circle");
    let circle = document.getElementById("circle");
    let new_r = getRandomNumberBetween(15, 40);
    let new_cx = getRandomNumberBetween(new_r, 400 - new_r);
    let new_cy = getRandomNumberBetween(new_r, 400 - new_r);
    let new_fill = getRandomColor();
    circle.setAttribute("r", new_r.toString());
    circle.setAttribute("cx", new_cx.toString());
    circle.setAttribute("cy", new_cy.toString());
    circle.setAttribute("fill", new_fill);
}
// Range from 0 to n-1
function getRandomNumberUpTo(n) {
    return Math.floor(Math.random() * n);
}
// Range [a, b)
function getRandomNumberBetween(a, b) {
    return getRandomNumberUpTo(b - a) + a;
}
function getRandomColor() {
    let availableColors = [
        "black",
        "blue",
        "green",
        "red",
        "yellow",
        "pink",
        "orange",
        "purple",
        "brown"
    ];
    return availableColors[getRandomNumberUpTo(availableColors.length)];
}
