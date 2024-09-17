// 
// console.log("Hello World!");

//
// var i = 1000; // var keyword is used to initialize the variable in js

// built in loop function
// setInterval(function(){
    // console.log(i++);
// }, 1000)

// REPL - Read, Evaluate, Print, Loop
// stop executuion - crtl+c

function sum(a, b) {
    console.log(this);
    return a + b;
}

// Arithmetic - is class and sum is class member (given behaviors)
// Arithmetic obj = new Arithmetic();
// obj.sum(5,6)

var result = sum(6, 10); // function invocation, calling

console.log(result);

result = 2000;
console.log(result);

result = "This is initialized as number but now it is a string"; // dynamic Ntyping

console.log(result);
