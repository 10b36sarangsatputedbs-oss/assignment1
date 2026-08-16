let square = document.getElementById("square");

let x = 100;
let y = 100;

square.style.width = "50px";
square.style.height = "50px";
square.style.backgroundColor = "red";
square.style.position = "absolute";
square.style.left = x + "px";
square.style.top = y + "px";

document.addEventListener("keydown", function(event) {

    if (event.key == "w") {
        y = y - 10;
    }

    if (event.key == "s") {
        y = y + 10;
    }

    if (event.key == "a") {
        x = x - 10;
    }

    if (event.key == "d") {
        x = x + 10;
    }

    square.style.left = x + "px";
    square.style.top = y + "px";
});