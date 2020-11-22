var form = document.getElementById("myForm")
console.log(form)
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("testing")
var fname = document.getElementById("fname").value
var lname = document.getElementById("lname").value
var age = document.getElementById("age").value
var myLocations = document.getElementById("myLocations").value
var myCheck = document.getElementById("myCheck").value
var myCheck2 = document.getElementById("myCheck2").value
var myCheck3 = document.getElementById("myCheck3").value
console.log(fname, lname, age, myLocations, myCheck)
alert(fname + " " + lname + " " + age + " " + myLocations + " " + myCheck + " " + myCheck2 + " " + myCheck3 + " ")
})