// recap for things learned

// Object, inheritaance , assign, create,
// function, overlaoding
// closure
// literals

// callback-nesting
// hoisting
// datattype
// modules (export)
// functions


// call and apply are the functions attached to function (keyword-function), this helps the function in question to 
// change the context (this, scope, execution context, scope bject0 - to return  value

// only difference bretween apply is that apply accepts parameters in the array

name = "Nilay";
age = 22;
address = "somewhere";

var User1 = {
  name: "Michael",
  age: 18,
  address: "somewhere",
};
var User2 = {
  name: "Mark",
  age: 19,
  address: "somewhere",
};

// function PrintInfo(heading) {
//   //   console.log(this);   // this is referred as dynamic context and changeable as pwe the context setting
//   console.log(`
//     ${heading}
//     ${this.name}
//     ${this.age}
//     ${this.address}
// `);
// }

// PrintInfo("No context set, default context is global"); // if not connected toany context, it will be attached to the global context (window, node, global)

// PrintInfo.call(User1, "Setting context to User1"); // PrintInfo will have User1 as context
// PrintInfo.call(User2, "Setting context to User1"); // PrintInfo will have User2 as context

// UserInfo userObj = new UserInfo();
// userObj.PrintInfo();

function PrintSessionInfo(
  heading,
  session1,
  session2,
  session3,
  session4,
  session5
) {
  //   console.log(this);   // this is referred as dynamic context and changeable as pwe the context setting
  console.log(`
        ${heading}
        ${this.name}
        ${this.age}
        ${this.address}
    `);
  console.log(`
        ${session1}
        ${session2}
        ${session3}
        ${session4}
        ${session5}
    `);
}

var sessionListSep = ["Context is User1", "First", "Merstack", "DSA", "Java", "Aws"]
var sessionListOct = ["Context is User1", "Algo", "Merstack", "DSA", "Java", "Aws"]

// apply takes function [parameter as array and applies th econtext smae way as we do with call
PrintSessionInfo.apply(User1, sessionListSep);
// PrintSessionInfo.apply(null, sessionListOct);


