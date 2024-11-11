// object - as class, we can cerate an onbject with details of key, value pair
// An object is the reference pointer holds the value via properties defined inside the object


// 1.using two curly brackets

var Employee = {
    Name: "Ben",
    ID: "2024",
    GroupCode: "Account Systems",
    GetEMployeeInfo: function() {
        return `
        ${this.Name}
        ${this.ID}
        ${this.GroupCode}
        `
        // ${this.Salary}
        // `
    }
}

// Employee.Salary = "$100000"


// var empObj = new Employee(); // will not work

// console.log(Employee.GetEMployeeInfo());

// use constructor method to creat the class - use new keyword

// 2. Software Engineer inhertate from Employee

// var SoftwareEngineer = new Object(Employee);

// SoftwareEngineer.Salary = "$20000"

// console.log(Employee.GetEMployeeInfo());  // should not be seeing the propertie sfrom the child class (from parent class)

// console.log(SoftwareEngineer.GetEMployeeInfo())

// separate copy for child class

var SoftwareEngineer = Object.create(Employee);

SoftwareEngineer.GetEMployeeInfo = function() {
    return `
    ${this.Name}
    ${this.ID}
    ${this.GroupCode}
    `
    // ${this.Salary}
    // ${this.Tag}
    //  `
}


SoftwareEngineer.Salary = "$20000"
SoftwareEngineer.Tag = "Expert"

// console.log(Employee.GetEMployeeInfo());  // should work as expected

// console.log(SoftwareEngineer.GetEMployeeInfo())

// This inheritance is only possible because of the prototype present in javascript
// checking the prototype reference

// console.log(Employee.__proto__)
// console.log(SoftwareEngineer.__proto__)

// 4. when object is empty

// var emptyObj = {}

// //5. null prototype object

// var nullObj = Object.create(null)


// 6. merging of different objects

var User = {name: "Robin", accType : "Credit"}
var Address = {ID :"1234", Current : "somewherwe"}
var Address2 = {ID :"2345", Dilivery : "somewherwe in Colorado"}

var DispatchItem = {User, Address, Address2}

console.log(DispatchItem)


Address2.Mobile = 321233333 // WILL PRESENT
DispatchItem = Object.assign(User, Address, Address2)

Address2.Mobile2 = 1221233333  // WILL NOT PRESENT

console.log(DispatchItem)