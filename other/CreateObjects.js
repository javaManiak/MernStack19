// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function

var Person = {
    Name : "John",
    ID : 2022,
    GroupCode : "Science",
    GetStudentInfo : function () {
        return `
                    ${this.Name}
                    ${this.ID} 
                    ${this.GroupCode} 
                    ${this.Tuition}
                `
    }
}

var Student = Object.create(Person)

Student.Tuition = "$900";
Student.Subject = "Physics";

console.log(Student.Name, Student.ID, Student.Tuition);

console.log(Student.GetStudentInfo());


// Create three objects and merge their propeties

var User = { name : "Jack", ID : "1234", userType : "Credit" }
var Address = {ID : "4567", Current : "Somewhere in NA"}
var Address2 = {ID : "6789", Delivery : "Somewhere in texas"}

Address2.Mobile = "123456789";
Address2.Delivery = "Via the Internet (digital product)";


var DispatchItem;

dispatchItem = Object.assign(User, Address, Address2);

console.log(dispatchItem);


// Create a logical example of closure
function BankAcct(name, age, balance, type) {
    //Private scope
    var AccName = name
    var AccHolderAge = age
    var AccBalance = balance
    var AccType = type
    var password = "xyz" // private
    var AccPin = "9682" // private

    //
    var acctDetail = function (name, pwd) {
        //things returned from this function are public
        if (pwd == password) {
            return { 
            //short hand from ES6, if variable name (from which we read the value) and key refers to same name
                AccName, //"AccName" : AccName, 
                AccHolderAge,
                AccBalance,
                AccType
            }
        } else {
            return "Password is incorrect!!"
        }
    }

    //the entities returned via function
    return acctDetail;
}

var acctObj = BankAcct("Mark", 21, "$200000", "Credit")

console.log(acctObj("Mark", "xyz"))
console.log(acctObj("Mark", "3123"))

// Share few data objects from one file to another (not sure if this is working)

var {User, User3, User2} = require("./literal")

console.log(User)
console.log(User2)
console.log(User3.getUserDetails())