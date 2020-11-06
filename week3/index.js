var newH1 = document.createElement("my-h1")
newH1.textContent = "Hello World"
document.body.append(newH1)

for(var i = 0; i < 10; i++){
    console.log("Hello World")
}

var names = [
   "Steve",
   "Larry",
   "Joe",
   "Shirley",
   "Steph",
   "Nate",
   "Rick",
   "Emily", 
]
var namelist = document.getElementById("names")
for (var i = 0; i < names.length; i++){
    var newName = document.createElement("li")
    newName.textContent = names[i]
    names.body.append(newName)
}