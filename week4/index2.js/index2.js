var calculator = document.createElement("div")
calculator.id = "mycalc"
document.body.append(calculator)

var calculator2 = document.createElement("input")
calculator2.id = "mycalc2"
calculator.append(calculator2)

var calculator3 = document.createElement("input")
calculator3.id = "mycalc3"
calculator.append(calculator3)

var calculator4 = document.createElement("button")
calculator4.textContent = "addition"
calculator.append(calculator4)

calculator4.onclick = function() {
 var addition1 = document.querySelector("#mycalc2").value
 var addition2 = document.querySelector("#mycalc3").value
var addition3 = document.createElement("h1")
addition3.textContent = parseInt(addition1) + parseInt(addition2)

calculator.append(addition3)
}
// subtraction
var second = document.createElement("div2")
second.id = "mycalc"
document.body.append(second)

var calculator5 = document.createElement("input")
calculator5.id = "mycalc5"
second.append(calculator5)

var calculator6 = document.createElement("input")
calculator6.id = "mycalc6"
second.append(calculator6)

var calculator7 = document.createElement("button")
calculator7.textContent = "subtraction"
second.append(calculator7)

calculator7.onclick = function() {
 var subtraction1 = document.querySelector("#mycalc5").value
 var subtraction2 = document.querySelector("#mycalc6").value
var subtraction3 = document.createElement("h2")
subtraction3.textContent = parseInt(subtraction1) - parseInt(subtraction2)

second.append(subtraction3)
}
// multiplication
var third = document.createElement("div3")
third.id = "mycalc"
document.body.append(third)

var calculator8 = document.createElement("input")
calculator8.id = "mycalc8"
third.append(calculator8)

var calculator9 = document.createElement("input")
calculator9.id = "mycalc9"
third.append(calculator9)

var calculator10 = document.createElement("button")
calculator10.textContent = "multiplication"
third.append(calculator10)

calculator10.onclick = function() {
 var multiplication1 = document.querySelector("#mycalc8").value
 var multiplication2 = document.querySelector("#mycalc9").value
var multiplication3 = document.createElement("h4")
multiplication3.textContent = parseInt(multiplication1) * parseInt(multiplication2)

third.append(multiplication3)
}
