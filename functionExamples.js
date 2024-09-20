
function print() {
    console.log("My name is Jimmy");    
}

print();

var myFunc = function(a, b) {

        return a/b;
}

console.log(myFunc(5,4));


(function iife(name, age, hobby) {
    console.log("Name is: " + name);
    console.log("Age is: " + age);
    console.log("Hobby is: " + hobby);
}) ("Richard", 30, "basketball");


function user(name, age, hobby){
    this.name = name,
    this.age = age,
    this.hobby = hobby;
    this.getUser = function() {
        console.log("User is: " + this.name, "Age is: " + this.age, "Hobby is: " + this.hobby);
    }
}

var userObj = new user("Frank", 24, "soccer");

userObj.session = "MernStack";

userObj.getUser = function () {
    console.log("User details: ", this.name, this.age, this.hobby, this.session);
}

console.log(userObj.getUser())

// nested func

var val = 12;
function A(a) {
        return function B(b) { 
            return function C(c) {
                return function D(d) {
                    return a+b+c+d + val;
            }
        }   
    }
}

var objA = A(5);
var objB = objA(5);
var objC = objB(5);
var objD = objC(5);

console.log(objA);
console.log(objB);
console.log(objC);
console.log(objD);

// var result = A(5)(5)(5)(5);
// console.log(result);
