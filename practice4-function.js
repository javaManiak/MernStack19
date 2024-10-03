// a function is indenpendently, it does not have to be related to a class pt somethig else

// fucntion is pure, it always return something, if return is not defined, JS will give it a default return value - 'undefined'

// 'function' is the keywrod to define a fucntion


// keyword 'function - function name - (parameter list)
function name(params) {
    // define the function body here
    // scope of function
}

// function can make decision which class to associate with
// Square().call(Area,)

// 1. named function
function print() {
    console.log('Jimmy');
}

print();   // calling a function or invoke a a funciton


//2. function expression assign a function to a variable - function can have a name or not have a name

var myFunc = function (a, b) {  // unnnamed function
    return a * b;
}

console.log(myFunc(4,5));

var yourFunc = function multiple(a, b) {
    return a * b;
}

console.log(yourFunc(2,5));  // need a ';' here, otherwise, code not running

// 3. IIFE - immediately invokable function expressopn

// (function (name, age) { // unnamed
//     console.log("Name is registered as: ", name, age)
// })("Anthony", 21)

(function iifeFunc(name, age) { // named
    console.log("Name is registered as: ", name, age)
})("Anthony", 21);

// iffeFunc()  // not available at this point


// 4. constructor function - have properties associated with them and those can be initialized via constructoe and 
// be futher used as a class

function User(name, age, address) {
    this.name= name,
    this.age = age,
    this.address = address;

    this.getUserDetails = function() {
        console.log("User information entered is: " , this.name, this.age, this.address);
    }
}

var userObj = new User("Ben", 21, "somewhere in the uS");

console.log(userObj.getUserDetails())

userObj.session= "merstack";  // adding new property (this is the help of 'prototype')

// overwrite the function
userObj.getUserDetails = function() {
    console.log("User information entered is: " , this.name, this.age, this.address, this.session);
}

console.log(userObj.getUserDetails())

// 5. nested function

var val = 15;

function A(a) {
    return function B(b) {
        return function C(c) {
            return function D(d) {
                return a+b+c+d+val;
            }
        }
    }
}

var objA = A(5)
var objB = objA(5)
var objC = objB(5)
var objD = objC(5)

console.log(objA, objB, objC, objD);

// chain execution of nested function

var result = A(5)(5)(5)(5)

console.log(result);
