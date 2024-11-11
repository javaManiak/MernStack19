//1. named function

function countingNumbers(params) {
  var counts = 0;
  for (var i = 0; i < params; i++) {
    // console.log(i);
    counts = counts + i;
  }
  return counts;
}

var sum1 = countingNumbers(6);

console.log(sum1);

console.log(countingNumbers(5));

// 2. function expression

var func = function (x, y) {
  return x ** y;
};

console.log(func);

console.log(func(2, 3));

//3.  iife

(function iife1(name, addresses) {
  console.log(name, addresses);
})("Ben", "US");

// iife1("ben2", "Canada");  // not available anymore

// 4. Constructor functtion

function Player(name, age, major) {
  (this.name = name), (this.age = age), (this.major = major);
  this.getPlayerDetails = function () {
    console.log("Player's Information: ", this.name, this.age, this.major);
  };
}

var player = new Player();

player.name = "Ben";
player.age = "23";
player.major = "BASKETBALL";

player.getPlayerDetails;

console.log("Player's Information: \n", player);

// player.getPlayerDetails();

// 5. nested function

function goDown1(x) {
  return function goDown2(y) {
    return function goDown3(z) {
      return x * y * z;
    };
  };
}

console.log("Godown chained functions");
var getDown = goDown1(4)(5)(6);

console.log(getDown);

var objX = goDown1(4);
var objY = objX(5);
var objZ = objY(6);

console.log(objZ);

// Yao's example

var square = function area(a) {
  return a * a;
};
console.log("print square 1: \n");
console.log(square(5));

var square = function (a) {
  return a * a;
};

console.log("print square 2: \n");
// console.log(square(5))
square(5);

// Duncan's example nested function
function A(a) {
  return function B(b) {
    console.log("Hello from B");
    return function C(c) {
      console.log("Hello from C");
      return function D(d) {
        console.log("Hello from D");
        return a + b + c + d;
      };
    };
  };
}

var result = A(1)(2)(3)(4);
console.log("result=", result);

// var a = "a";
// var b = "b";

// console.log(a+b);

var result2 = A("a")("b")("c")("d");
// console.log("result2=", result2);

console.log(A("hello-")()("-HELLO-")());

// end of class demo

Sum(1,2)

function Sum() {
  console.log("Nothing to sum");
}

Sum()

function Sum(a) {
  console.log("Sum of a", a);
}

Sum(1)

function Sum(a, b) {
    console.log("Sum of a, b", a + b);
}

Sum(1,2)

function Sum(a, b, c) {
    console.log("Sum of a, b, c", a + b + c);
}
Sum(1,2,3)
