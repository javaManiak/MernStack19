// 1. first test 

// Sum(1,2,3);  // TypeError: Sum is not a function

// Sum(1,2,3,4);   // TypeError: Sum is not a function

// var Sum = function(a,b,c,d) { // function expression
//     console.log("Sum of a, b, c, d ", a+b+c+d);
// }


// Sum(1,2,3,4);   // This works  

// 2. second test

// console.log(myVar + 1);  // here 'myVar' is 'NAN' if it is defined behind this usage
// console.log(myVar);  // here 'myVar' is 'undefined'

// MyFunc("Hoist")    // function hoisted with value if defined any where int the file

// MyFunc(myVar); // function hoisted with value if defined any where, bu 'myVar' if 'undefined'
// MyFunc(myVar + 1); // function hoisted with value if defined anywher; 'myVar' + 1 = 'NaN'

// function MyFunc(val) {
//     console.log("This is function hoisting", val)
// }

// var myVar = " I am a hoisted var";

// console.log(myVar);   // here 'myVar' is defined with a value (String)

// MyFunc(myVar)     // here 'myVar' has value defined

// 3. use it (variable) when not defined any where

// console.log(myVar + 1);  // attempt to use it but it is not declared anywhere - will give error
// console.log(myVar);      // attempt to use it but it is not declared anywhere - will give error

// var myVar=5;


// 4. scope nad hoisting

// if the variable isdefined int he scope (such as inside a function) hositing happens inside the function
// otherwise, it will look form the outside of the 'function' scope - golbal' and see if it is defined - global hositing
// ifnot, then, code error, with variable 'not define'


Random()

var newVal = "Interesting"
Random()

function Random() {   
    console.log(newVal)
    
    // var newVal = "Interested"  
    VeryRandom()
    function VeryRandom() {
        console.log(newVal)
    }
}

Random()


// 5.  callback - function passed as paramter to another function

// function delegate (function all another function)

// ** callback function keeps holding the scope of the variables and references usedin side the function

function PrintUserDetails(heading,dataObject) {
    console.log(heading, dataObject)

}

var userObj = {
    User: "Anothy",
    Id : "Neilay"
}

// callBackFunc

function GetAccountDetails(callBackFunc, data) {
    callBackFunc("Your account details are : ", data);
}

GetAccountDetails(PrintUserDetails, userObj)  // using the callback function


var productObj = {
    ProductName: "iPhone 29",
    Price : "$5000",
    Available: "Yes"
}

function GetProductDetails(callBackFunc, data) {
    callBackFunc("The product details you are looking for are: ", data);
}

// GetAccountDetails(PrintUserDetails, productObj) 

GetProductDetails(PrintUserDetails, productObj);