// 4th November - 2024 : ES6, eventloop and some spa definitions
// All questions are mandatory - 14 out of 15 needs to be done, 1st question is equal to two question credits so can't be left out

// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

//Answers:
    // console.log("\nAnswer to question 1:\n");
    // // how to make my heroes list immutable?
    //     // for the following line will make it immutable (need to commet it out to do the rest of operations in this question)
    //     // heroes.freeze();
    //     // heroes[9] = {name:"test", family: "test", isEvil: false}  // code compiles but won't run

    // //a. get heros who are not evils
    //     console.log("Non evil heros: ")
    //     let herosNotEvil = heroes.filter((hero) => hero.isEvil==false);
    //     console.log(herosNotEvil);

    // // b. print unique family names
    //     let typeOfFamilyCounts = heroes.reduce((prevObject, currObject,nu,list)  => {
    //         prevObject[currObject.family] = prevObject[currObject.family] ? prevObject[currObject.family] + 1 : 1
    //         return prevObject
    //     }, new Set())

    //     console.log("\nUnique family names: ")
    //     for (let i in typeOfFamilyCounts){
    //         console.log(i);
    //     }

    // // c. Print Hero Names from given objects, and append sir in each of them before printing
    //     let sufixNames = heroes.map((hero) => hero.name + " sir");
    //     console.log(sufixNames)

    // // d. Do we have any hero in Marvel Family who is not evil
    //     let hasNonEvilHeroes = heroes.some((hero) => hero.isEvil == false && hero.family =='Marvel');
    //     console.log(hasNonEvilHeroes)

//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
//   using apply keyword we need to implement this one

// Answer:
    // console.log("\nAnswer to question 2:\n");
    // // create the array
    // let arr = []
    // let n = 5
    // for (i = 1; i <= n; i++) {
    //     arr.push(i)
    // }

    // let prod = function(...restNumberList)
    // {
    //     let mult = 1;
    //     multi = restNumberList.reduce((prevNum, currNum) => {
    //         return prevNum * currNum;
    //     }, 1);
    //     return multi;
    // }

    // console.log(prod.apply(null, arr))
    
//3. Print the last name through destructuring and add a contact number:9119119110 as well
// Answer:
    // console.log("\nAnswer to question 3:\n");
    // const person = {
    //     userDetails :{
    //         first: "FirstName",
    //         last: "LastName"
    //     }
    // }

    // let lname = person.userDetails.last;
    // console.log(lname)

    // let {lsname = person.userDetails.last, userDetails:{phoneNumber = "9119119110"}} = person

    // console.log("person's last name: ", lsname, "\nperson's phone number:", phoneNumber)

    // // the orginal 'person' object untouched
    // console.log(person)

//4. Give me an example of const data manipulation  
// Answer: 
    // console.log("\n Answer to question 4:\n");
    // // if const is used for primitive types, it means that the data is immutable and finalized
    // // you can't either reassign it nor redeclare it
    // const a = 5;
    // // const a = 6; // can not re-declare varibale a with 'const'
    // // a = 6;  // can not be re-assigned with a new value (compiles ok, but will have runtime error)

    // // if const is used to define a reference (non-primitive) type, the reference of the object define is immutable, but the contents referrenced is mutable

    // const teacher = {}
    // console.log(teacher.name);
    // console.log(teacher.age);
    
    // teacher.age = 21;
    // teacher.name = "Aaron"
    // console.log(teacher.name);
    // console.log(teacher.age);


//5. What is the difference between for-of and for-in show with examples
// Answer:
    // console.log("\nAnswer to question 5:\n");
    // // 1. For-in loop is maininly used for the objects (e.g., JSON) with key-value pairs. usually log values. For example: 
    // let arr = [0, 1, 2];
    // arr.str = "hello";  // this will be printed out in the 'for-in' loop

    // console.log("contents in the array:")
    // console.log(arr)

    // console.log("\nOutput from 'for-in' loop");
    // for (let i in arr){
    //     console.log(`${i}, ${arr[i]}`);
    // }

    // // 2. For-of loop is maininly for the arrays, recommended for arrays of numbers or string instead of objects
    // console.log("\nOutput from 'for-of' loop");
    // // let arr2 = [0, 1, 2];
    // // arr2.str = "hello"; 

    // for (let i of arr) {  // only takes array indicies as keys to iterate over
    //     console.log(`${i}, ${arr[i]}`);
    // }

//6. Give me an example of bind and write its usage, comparison with arrow function

// Answer:
        // console.log("\nAnswer to question 6:\n");

        // // when it comes to the scope/context handling, bind can be used to copy the parent's context, and get the desired results
        // console.log("Context/Scope handling with \"bind\":")
        // let User1 = {
        //     name : "John",
        //     age : 21,
        //     address : "Detroit",           
        //     getDetails : function(){            
        //         console.log(`
        //             ${this.name}
        //             ${this.age}
        //             ${this.address}
        //             `)      
        //         setTimeout(function(){
        //             console.log(`
        //                 Inside set timeout - bind
        //                 ${this.name}
        //                 ${this.age}
        //                 ${this.address}
        //                 `)
        //         }.bind(this), 0);  // use 'bind' to get the immediate parent's context

        //     }
        // }
        // User1.getDetails();

        // // while the arrow function will use the immediate parent's context to get the scope handling giving the desird results 
        
        // console.log("Context/Scope handling with \"arrow function\":")

        // let User2 = {
        //     name : "Mike",
        //     age : 21,
        //     address : "Chicargo",           
        //     getDetails : function(){            
        //         //${that.name}
        //         console.log(`
        //             ${this.name}
        //             ${this.age}
        //             ${this.address}
        //             `)
        //             setTimeout(()=>{
        //                 console.log(`
        //                     Inside set timeout - arrow function
        //                     ${this.name}
        //                     ${this.age}
        //                     ${this.address}
        //                     `)
        //             }, 0);
        //         }
        //     }
        
        // User2.getDetails();

//7. Create an example showing usage of event loop in concurrent execution cycle

//Answer:
    // console.log("\nAnswer to question 7:\n");

    // let javaSession = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve({
    //             "scheduled": "12:00 pm",
    //             "duration": "1h"
    //         })
    //     }, 5000)
    // })

    // let mernStackSession = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve({
    //             "scheduled": "11:30 am",
    //             "duration": "1h"
    //         })
    //     }, 5000)
    // })

    // let dsaSession = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve({
    //             "scheduled": "10:40 am",
    //             "duration": "1h"
    //         })
    //     }, 5000)
    // })
    // console.log("Promises are working...")
    // // all or nothing
    // Promise.all([
    //     javaSession,
    //     mernStackSession,
    //     dsaSession
    // ]).then((data, error) => {
    //     console.log("Promises all returns, when each one is executed/resolved successfully ", data)
    // }).catch((data, error) => {
    //     console.log("Promises all returns to catch, when any one of them is rejected.", data)
    // })

    // // evaluate one by one
    // Promise.allSettled([
    //     mernStackSession,
    //     dsaSession,
    //     javaSession
    // ]).then ((data, error) => {
    //     console.log("Keep the execution of other Promises alive, when one of them rejected.", data)
    // })

    // console.log("Promises are all done.")

//8. create an example showing usage of short hand and default param.
//Answer:
    // console.log("\nAnswer to question 8:\n");
    // // short hand examples
    // let sky = "blue", tree = "green", sand = "white", rock = "gray"; 
    // let objectColors = {
    //     sky : sky, //key and value of the variable are identical
    //     tree : tree,
    //     sand : sand,
    //     rock : rock
    // }
    // console.log("The common JSON object:")
    // console.log(objectColors)
    // console.log()
    // // short equivalents
    // let objectColorsES6 = {
    //     sky, //we can just use the variable and it will act as key and value both
    //     tree,
    //     sand,
    //     rock
    // }
    // console.log("JSON object defined using the 'shorthand' dtyle:")
    // console.log(objectColorsES6)
    // console.log()

    // // default params examples
    // function Student (name = "John", age = 23) {
    //     this.name = name;
    //     this.age = age;
    // }

    // // using default params to build a object from a class
    // studentObj1 = new Student();

    // console.log("Student object using the default params")
    // console.log(studentObj1);
    // console.log()
    // // specify user defined params to construct a class object
    // console.log("Student object using supplied params")
    // studentObj2 = new Student("Mary", 21)
    // console.log(studentObj2);

//9. Create two objects with some properties and merge them using Object method and ES6 way
//Answer:
    // console.log("\nAnswer to question 9:\n");
    // let doctor = {
    //     id: 1,
    //     docName: "Alfred",
    //     type: "residence",
    //     yearsOfPractice: 5,
    // }
    // console.log("Doctor's basic info:")
    // console.log(doctor)
    
    // let address = {
    //     location: "New York",
    //     zipCode: 12345,
    //     hospital: "medical center"
    // }
    // console.log("\nDoctor's address:")
    // console.log(address)
    
    // let fullDetails = {...doctor, ...address}
    // console.log("\nDoctor's full details:")
    // console.log(fullDetails)

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
// Answer:
    // console.log("\nAnswer to question 10:\n");
    // // map collection examples
    // // a. various types of map keys
    // let stringAsKey = "stringAsKey"
    // let objAsKey = {}  // empty object
    // let funcAsKey = function() {} // an empty function
    // let numberAsKey = 100;
    
    // let myMap = new Map();
    // myMap.set(stringAsKey, "yesterday");                    // set 
    // myMap.set(objAsKey, [4, 5] )
    // myMap.set(numberAsKey, 111);
    
    // console.log("\nMap examples start here:");
    // console.log("Print 'myMap'");
    // console.log(myMap);

    // myMap.set(numberAsKey, 921);
    // console.log(myMap);

    // console.log("Retrieve value from 'funcAsKey' in 'myMap'")
    // console.log(myMap.get("funcAsKey"));                          // get

    // console.log("Show size of 'myMap'")
    // console.log(myMap.size);                                    // size

    // console.log("show myMap after delete value with key = 'objAsKey': ")
    // myMap.delete(objAsKey);                                     // delete
    // console.log(myMap)

    // console.log("show key set:", myMap.keys);
    // console.log("print myMap after 'clear' everything")
    // myMap.clear();                                              //clear
    // console.log(myMap)

    // // set collection examples
    // console.log("\nSet examples start here:\n")
    // let mySet = new Set;
    // mySet.add(1);                                           // add
    // mySet.add(2);
    // mySet.add(3);
    // mySet.add(4);
    // mySet.add(5);

    // console.log("mySet = ", mySet);

    // mySet.delete(2);                                        // delete
    // console.log("mySet = ", mySet);

    // mySet.has(1);           // return true                  // has
    // mySet.clear();                                          // clear
    // console.log("mySet = ", mySet);


//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
// // Answer:
//     console.log("\n Answer to question 12:\n");
//     let studentPromise = new Promise((resolve, reject) =>  {
//         setTimeout( () => {
//             resolve({
//                     authToken : "asfjow19379jljdflasA9801L",
//                     status: "success",
//                     studentInfo:
//                         {"name" : "Frank",
//                         "age" : 21,
//                         "gpa" : 4.0
//                         }
//                         })
//             }, 2000);
     
//         setTimeout(() => {
//             reject( {
//                 authToken : "token failure",
//                 status: "error",
//                 studentInfo : "Bad request"
//             })
//         }, 3000)
//      });     
//      console.log(studentPromise)
//      // move to the next call
     
//      studentPromise.then((data, error) => {
//          console.log(data)
//          console.log(error)
//      }).catch((data, error) => {
//          console.log(data)
//          console.log(error)
//      })
     
//      console.log(studentPromise)
     
//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
// // Answer:
//     console.log("\n Answer to question 12:\n");
//     // create the array
//     let arr = []
//     let n = 5
//     for (i = 1; i <= n; i++) {
//         arr.push(i)
//     }

//     let prod = function(...restNumberList)
//     {
//         let mult = 1;
//         multi = restNumberList.reduce((prevNum, currNum) => {
//             return prevNum * currNum;
//         }, 1);
//         return multi;
//     }

//     console.log()
//     console.log("The product of the array in question  array[1...n] is: ", prod(...arr))

//13. Use the question #11 to build promises using async and await - with multithread

// Answer:
    // console.log("\n Answer to question 13:\n");

    // function printStudentDetails() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({
    //                 "name": "Frank",
    //                 "age": 21,
    //                 "gpa": 4.0
    //             });
    //         }, 3000)
    //     });
    // }    
    // console.log("async execution starts");
    
    // async function asyncCall() {
    //     console.log("first await starts:  blocking thread starts:")
    //     await printStudentDetails()
    //         .then((data, error) => console.log(data))
    //         .catch((error) => console.log(error)) 
    //     console.log("first await ends - thread executed one after another")

    //     console.log("second await starts:")
    //     await printStudentDetails()
    //         .then((data, err) => console.log(data))
    //         .catch((err) => console.log(err))
    //     console.log("second await ends.")

    //     console.log("third await starts:")
    //     await printStudentDetails()
    //         .then((data, err) => console.log(data))
    //         .catch((err) => console.log(err))
    //     console.log("third await ends.")

    //     console.log("4th await starts:")
    //     await printStudentDetails()
    //         .then((data, err) => console.log(data))
    //         .catch((err) => console.log(err))
    //     console.log("4th await ends.")
    // }
    
    // asyncCall();
    // console.log("async execution ends.")  

//14. Create an example of generator function of your choice

// Answer:
    // console.log("\n Answer to question 14:\n");    
    // // Arithmetic calculator

    // function *arithmetic(num1, num2) {
    //     yield console.log("addition: " + (num1 + num2));
    //     yield console.log("subtraction: " + (num1 - num2));
    //     yield console.log("multiply: " + (num1 * num2));
    //     yield console.log("division: " + (num1 / num2));
    //     return "Done";
    // }

    // let num1 = 10, num2 =2;
    // console.log("input numbers: " + num1, num2)
    // let calObj2 = arithmetic(num1, num2);

    // calObj2.next();
    // calObj2.next();
    // calObj2.next();
    // calObj2.next();

    // console.log(calObj2.next())
    // console.log(calObj2.next())


//15. Explain your knowledge of - statelessness, http, REST, spa and classical applications
// Answer:

    console.log()
    console.log(
    `
    stateless - it is one of the features of RESTful API software architecture that provides protocols to develop web service/systems communicating over the Internet. 
                 it means each request is separate and independent; no state information is shared between the web pages.

    http - stands for hypertext Transfer Protocol (HTTP). It is the fundation of the Internet. It is an application layer protocol designed to transfer information between network connected
           devices, and runs on top of other layers of the network protocols.

    REST - stands for Representational State Transfer. It is a software architeure that defines the rules of designing and developing systems that communicate over the Internet.

            a. it uses client-server model (separation of concerns) to manage the requests via http;
            b. each request is separate and independent, need complete state information for each request from client to the server;
            c. it uses standard way of transferring information using uniform interfaces;
            d. layered system to organize server types into hierarchical orders;
            e. it uses data caching for client from server side data to make the fast response, avoiding reload the static contents from the server side. 
   
    SPA - stands for single page application. Web application and web page that dynamically rewrites the current web page contents with new data from the server side. 
          By doing this, there is no need to reload the entire page each time. This results in a fatser loading of the webpage in front tof the user, making good user experiences.

    classical application - or callaed traditional applications that has a user interface wired up with background logic. 
                            Those user interfaces are based on Windows Forms, Jswing, WPF, Gtk, Qt, etc. and dependent on the operation sytem.

    `)

