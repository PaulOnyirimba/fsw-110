var square = document.getElementById("square")
square.addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue"
    console.log("Hello World")
})
square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "red"
})

square.addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow"
})

square.addEventListener("dblclick", function() {
    square.style.backgroundColor = "green"
})

square.addEventListener("onwheel", function() {
    square.style.backgroundColor = "orange"
})