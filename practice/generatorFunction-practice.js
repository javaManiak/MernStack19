// Accumulator - generator function - (b),

// Accumulator

function* counter(starter) {
    while (true) {
        yield console.log(starter++);
    }
}

let calObj = counter(0);

i=0;
while ( i<10) {
    calObj.next()
    i++      // comment this line out will give you an infinite number of yield numbers
}


// create and example of arithmetic operations (addition, subtraction, multiply, division), using generator function


// Arithmetic calculator

function *arithmetic(num1, num2) {
    yield console.log("addition: " + (num1 + num2));
    yield console.log("subtraction: " + (num1 - num2));
    yield console.log("multiply: " + (num1 * num2));
    yield console.log("division: " + (num1 / num2));
    return "Done";
}

let num1 = 10, num2 =2;
console.log("input numbers: " + num1, num2)
let calObj2 = arithmetic(num1, num2);

calObj2.next();
calObj2.next();
calObj2.next();
calObj2.next();

console.log(calObj2.next())
console.log(calObj2.next())
