// JavaScript is an interpreted lanaugage <no compile time error, line by line execution and results on the fly>
// hoisting - feature allows functionsto get executed even before that declaration, 
// due to this feature JS is also said to be partially compiled language

// console.log(sum(6,10)); // no errors, due to hositing feature
// function sum(a, b) {
//     console.log(this);
//     return a + b;
// }
// console.log(sum(6,10));

// case sensitve
var name = "some name"
var Name = "Some more Name"
console.log(name, Name)


// we ca use special chars ($, _)

var name$, _Name
// var New Name, NewName# // space and other special characters are not allowed

// can be alphanemeric, but not starting with number as variable names

var name1; // 1name - invalid

// keywords - e.g., var, (let, const - from ES6), etc. not allowed in variables

// operators are not allowed - && - and, || - or, ! - not, = == ===, ? (ternary operator)

var myName = "Test";
var age = "20";

// == : compare the value
// ===: compare the value and type

if(myName == "test" && age == 20) {
// if(myName == "test" && age === 20) {
    console.log("Your name is correct.")
} else {
    console.log("Your name is not correct.")

}

age >= 20 ? console.log("Valid voter"): console.log("Invalid voter");

// var x = 21=="21"; // boolean true
var x = 21==="21";// boolean false
console.log(x);
console.log(typeof x);


// dynamic type change (typing)
x = "Ben Ma"; // x type changes to string


