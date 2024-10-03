// March - MERNStack Session - Assessment Number 1 - 2nd October 2024

// Solutions (from Ben Ma):

//Q1. Create a file with name basics and show all the features that you know about javascript?
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance
console.log("Q1 answer:\n")
console.log("see in JSbasics,js in the same folder");

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

// ++++++ Q2 start ++++++++++++++++
console.log("\nQ2 answer: \n")
var val = "Robert ";            console.log(val, typeof(val));
val = .0266;                    console.log(val, typeof(val));
val = false;                    console.log(val, typeof(val));
val = {myname : "Test Me"};     console.log(val, typeof(val));
val = 25166665;                 console.log(val, typeof(val));
val = undefined;                console.log(val, typeof(val));
val = true;                     console.log(val, typeof(val));
val = "Robert Jr.";             console.log(val, typeof(val));
val = null;                     console.log(val, typeof(val));
val = {};                       console.log(val, typeof(val));
val = -32767;                   console.log(val, typeof(val));
// ++++++ Q2 end ++++++++++++++++

//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function

// ++++++ Q3 start ++++++++++++++++
console.log("\nQ3 answer: \n")
function showUserInfo(firstName, lastName, age) {
        console.log(firstName, lastName, age);
    }
    
showUserInfo("Ben", "Ma", 23)
// ++++++ Q3 end ++++++++++++++++
    
//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!

// ++++++ Q4 start ++++++++++++++++
console.log("\nQ4 answer: \n")
function doAddition(a, b, c) {
        return a + b + c;
    }
    
var result = doAddition(2,3,4)  // this will expect the addition of three numbers, as expected it should output the calculated sum
console.log(result);
    
var result = doAddition(2) // this only gets one paremeter, the other two is not supplied, with the funcion hoisting, the variable/paramter is defined in the funtion, but value is  not defined
console.log(result);       // with that, the parameters with undefined values are used to add the number supplied, it will get an 'NaN' result. 
    
var result = doAddition(2,3,3)  // this wil perform as the same way as in the first example
console.log(result);
    
var result = doAddition("first",2, "three")   // in this case, the three parameters will be casted to string type (since the first one taken as string), then concatenated as on string
console.log(result);   
// ++++++ Q4 end ++++++++++++++++

//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
// b. hoisting, 
// c. constructor function

//++++++ Q5 start ++++++++++++++++
// a. closure example
console.log("\n\nQ5 answer:\n");
console.log("\na. closure example\n");

function EmailAccouts(name, password, address, url) {
        var name = name
        var password = password
    var address = address
    var url = url

    function getEmailAccoutDetails(name, pswd) {
            if(password == pswd) {
                    return {
                            name, 
                address,
                url
            } 
        } else {
                return "Invalid Password!";
            }
        }
        return getEmailAccoutDetails;
    }
    
    var emailObject = EmailAccouts("Benjamin", "benpassword", "123 Same Street", "ben@gmail.com");
    
    
    console.log(emailObject("Benjamin", "benpassword"));
    console.log(emailObject("Benjamin", "enpassword"));
    
  //  b. hoisting

  console.log("\nb. hositing\n");

Parent()
var newVal = "outsideVal"   // If this change to another variable or not present/commented out, with line 142 also commented out, you will get an 'not defined' error, code not running
Parent()
function Parent() { // function hoisted with variables inside with 'undefined' as data type 
    console.log(newVal)   // can not get the value defined after this line inside Parent function

    var newVal = "insideVal"    // if this commnented out, the functions (Parent and Child) will look outside its scope to find the variable with same name(s) initialized with values
                               // if not commented, Child function will use the initialized value with same name inside the Parent function
    Child()
    function Child() {
            console.log(newVal)
        }
    }
    
Parent()
    
//   c. constructor function

console.log("\nc. constructor function\n")

function Player(name, age, field) {
    (this.name = name), (this.age = age), (this.field = field);
    this.getPlayerDetails = function () {
          console.log("Player's Information: ", this.name, this.age, this.field);
        };
      }
    
 var player = new Player();

player.name = "Ben";
player.age = "23";
player.major = "BASKETBALL";
player.getPlayerDetails;
console.log("Player's Information: \n", player);

//++++++ Q5 end ++++++++++++++++

//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?

console.log("\nQ6 answer - please see the comments\n")

// call and apply are same kind of function attached to function, they help the function they are attached to control the context. If not used the function in question 
//  will, by default, use the global context (Object), which in most of cases is not wanted. The only difference between the call and apply is that apply can take 
// array as input;

// bind is also a function used to change or hold the context for the time function when the time funtion gets executed; the difference between this one and the 'call/apply' function is that
// it becomes part of the same funtion to hold the new context supplied, not like the apply, which execute the function immediately, on the contrary, it holds it until time comes to change.


//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.

console.log("\nQ7 answer: \n");

var Student = {
    name: "Jonathan",
    age: 21,
    address: "123 Warrior Street",
    GetStudentDetasils: function () {
        setTimeout(function () {
            console.log(this);
            console.log(`
                ${this.name}
                ${this.age}
                ${this.address}
                `);
                //   }, 2000);
            }.bind(Student), 2000);  // this line will fix the issue with 'SetTimeout'
        },
    };
    
Student.GetStudentDetasils();  // if run together with all the codes, since there are two seconds delay, this will be printed in the very end
    
//Q8. Create an example of creating object with null prototype
    
console.log("\nQ8 answer: \n");

var nullObj = Object.create(null)
console.log(nullObj, typeof(nullObj));

//Q9. How do we merge different objects properties using Object class function

console.log("\nQ9 answer: \n")

var DispatchItem;

var User = {name: "David", accType : "Credit"}
var Address = {ID :"1234", Current : "New York City"}
var Address2 = {ID :"5678", Dilivery : "Tampa, Florida"}

DispatchItem = {User, Address, Address2}
console.log(DispatchItem)

// add in new properties

Address2.Mobile = 321233333 // WILL PRESENT
DispatchItem = Object.assign(User, Address, Address2)
console.log(DispatchItem)

//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned

console.log("\nQ10 answer: \n")
var user3 = require("./literal.js") 
console.log(user3);

// expecting Q7 answer to be printed after this
console.log("\n\n Expecting the printed 'Student' details for/from Q7\n");

