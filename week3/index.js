var navB =document.createElement("my-nav")
navB.textContent = "About"
document.body.append(navB)

var newli = document.createElement("li")
newli.context = "Productivity"
var list1 = document.getElementById("list1")
list1.style.display = "flex"
list1.style.flexDirection = "column"
list1.style.alignment = "center"
newli.style.textAlign = "center"

var newH1 = document.createElement("my-h1")
newH1.textContent = "I am having a Productive Day"
document.body.prepend(newH1)
newH1.style.textAlign = "center"

var newP = document.createElement("my-p")
newP.textContent = "I made a list of things that I wanted to get completed today and i completing them one step at a time."
document.body.prepend(newP)
newP.style.textAlign = "center"


document.body.style.background = "red"

