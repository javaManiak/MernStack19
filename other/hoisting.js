// Hoisting is a king of snapshot of all the javascripts, functions, variables present in the while file gets 
// hoisted on top of the file (so we call it partiutally compiled)

// Hositing in two ways:
// 1. funtion hoisting: a function gets hoisted with its complere defintion and so we will be able to execute the same function
// 2. variabl hoisting: variable ges hoisted  with default values of js (undefined)

// console.log(myVar); // undefined



// console.log(myVar);  //I am hoisted var

// MyFunc(myVar)  // 

MyFunc("Hoisted")

function MyFunc(val) {
    console.log("This is a function hoisting", val)
}


var myVar = "I am hoisted var";