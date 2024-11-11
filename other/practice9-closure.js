// OOPs

// Polymorphism - overloading (over-writing), overriding (inheriting)
// Interitance - is possible, prototype
// abstraction - abstract to function level, can do implementation

// Encapsulation - limit the access of the properties and fields via access modifier, we don't have any knowledge for this
// we can manimpulate the function to restrict the access of function variables

//. Closure comes to play the role - a paradigm when a fucntion contains another function and has some ields kept as private. some as puhblic

// by returning them through child function

// function returning another function is closure example

function Accounts(name, age, balance, type) {
  // private scope
  var AccName = name;
  var AccHolderAge = age;
  var AccBalance = balance;
  var AccType = type;
  var password = "xyz";
  // private scope
  var AccountDetails = function (name, pwd) {
    // things returns from this function are public
    if (pwd == password) {
      return {  // short hand from ES6 (if the key and value names are the same, then key can be ommitted)
        AccName,
        AccHolderAge,
        AccBalance,
        AccType,
      };
    } else {
      return "Password is incorrect!";
    }
  };
  // the entities returned via function
  return AccountDetails;
}

var acctObj = Accounts("Mark", 21, "$20000", "Credit");

// console.log(acctObj("Mark", "xyz"));
// console.log(acctObj("Mark", "123"));

// for (let index = 0; index < 1000000; index++) {
//     //const element = array[index];
//   console.log(index);
// }

console.log("loop exceed 1000000 times");

console.log(acctObj("", "xyz"));
console.log(acctObj("", "123"));

// create you own example of closure and share with me you git hubli


