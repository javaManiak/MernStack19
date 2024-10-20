
//Questions for practice
let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}
// print firstname, total marks and Individual Subject Marks, using object and nested destructuring

let firstName = Student.FirstName;
let totalMarks = Student.TotalMarks;

console.log(firstName);
console.log(totalMarks)

let {FirstName, Subject: {Physics, Chemistry, Language}} = Student;

console.log("Student First Name: ", FirstName);
console.log("Student's Physics marks :", Physics)
console.log("Student's Chemistry marks :", Chemistry)
console.log("Student's Language marks :", Language)


//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student

console.log(Student)

let {LastName = "Mason", Subject: {Ecology = 90}} = Student;

console.log("New student's last name : ", LastName)
console.log("New Student's Ecology marks: ", Ecology)

console.log(Student)

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring
let [aspiration1, aspiration2, aspiration3, ...aspirations] = ["Java", "Spring", "devops", "Code guru", "architect", "other"];

console.log(aspiration1)
console.log(aspiration2)
console.log(aspiration3)
console.log(aspirations)

//create a function with name multiply which accepts three parameters, and return multiplication of all
console.log("Show arrow function examples:")
let multiply = (p1 = 0, p2 = 0, p3 = 0) => p1 * p2 * p3;

console.log("multiply arrow function result (with supplied parameters): ", multiply(1, 2, 3))

//but if we dont pass any parameter it returns 0
console.log("multiply arrow function result (with nmo parameters supplied): ", multiply());

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

let array = [1, 2, 3, 4, 5];

array.newVal = 6;

console.log("Display for-in loop:")
for (const i in array) {
    const element = array[i];
    console.log(`${i}, ${element}`)
}

console.log("Display for-of loop:")
for (const i of array) {
    console.log(i)
}

//create an example of const where we can update on property of the object, where it says const is immutable

console.log("Show immutability of 'const'");
const a = 6;

// a = 7;  // not allowed to reassign a new value

const Student2 = {"Name": "Jeffery", "age": 32}

console.log("Show that the property can be changed in a object:")
console.log("Before reassignment: ")
console.log("Student's age is: ", Student2.age)

console.log("After reassignment: ")
Student2.age = 23;
console.log("Student's age is: ", Student2.age)
console.log()
//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let

console.log("Using 'var' and 'let' keywords to define a variable:")
console.log()
for (var i = 1; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 2000);
}

for (let i = 1; i < 5; i++) {  //
    setTimeout(function () {
        console.log(i)
    }, 2000);
}

// lexical scope

{
    var newVar = "newVar inside block";
    let newLet = "newLet inside block";
    const newConst = "const defined inside block"
}

console.log(newVar);   // scope inside function but not block
console.log(newLet);  // gives erros (can't see variables defined using 'let'
console.log(newConst);  // gives erros (can't see variables defined using 'const'
