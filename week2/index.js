var newli = document.createElement("li")
newli.textContent = "G" 
var mylist = document.getElementById("my-list")
mylist.innerHTML = `<li>A</li><li>B</li><li>C</li><li>D</li><li>E</li><li>F</li>`
mylist.append(newli)

var newP = document.createElement("p") 
newP.textContent = "All of this was created with Javascript"
document.body.append(newP)

var newH1 = document.createElement("H1")
newH1.textContent = "Welcome to my JS site"
var myH1 = document.getElementById("my-h1")
myH1.append(newH1)
document.body.style.background = "grey"