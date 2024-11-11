// console.log("Hello World");

// var i = 1000;

// infinite loop (Ctrl+c to stop)
// setInterval(function() {
//     console.log(i);
// i++;}, 1000)

// infintie loop 
// setInterval(() => {
//     console.log(i);
// i++;}, 1000)


// console.log(sumValue); // undefined for values
// console.log(sum(3,4));  // function defined (because it is global if it does not belong to any specific class)

function sum(a, b) {

    console.log(this);
    return a+b;
};

// var sumValue = sum(5,6);

console.log(sumValue);
console.log(sum(3,4));


var sumValue = 2000;
console.log(sumValue);

var sumValue = "This is a string";
console.log(sumValue);

