// Person prsnObj = new Person();

console.log(sum(3,5));  // calls the funciton before it is defined (hoisting)

function sum(a, b) {
    
    // console.log(this);
    return a+b;
};

console.log(sum(13,5));

var $name, _name;

// var (from classical ot vanilla)
// let and const (from ES6)

var myName = "Test";
var age = "20";

if(myName=="Test" && age==20) {
    console.log("Yor name and age are correct");
    } else {
        console.log("Yor name and age are correct");

    }