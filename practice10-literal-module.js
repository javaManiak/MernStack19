// literal - is the alphanumeric name for any value we use to declare or define out fields or peroperties

// user1

var name1 = "Bryan";
var age1 = 99;
var address1 = "Somewher";


//user2
var name2 = "Alpha";
var age2 = 93;
var address2 = "Other place";

// Object literal reduces variable to 2 ('user', 'user2' from 6 above)

var user = {  // behavior like a class
    name: "Michael",
    age: 16,
    address: "Eastern US"
}

var user2 = {
    name: "Mary",
    age: 19,
    address: "Western US"
}


user.name = "Ben"
user2.name = "Nilay"

console.log(user)
console.log(user2)

var user3 = {
    name: "Sierra",
    age: 19,
    address: "BYC US",
    getUserDetails : function() {
        return `
        ${this.name}
        ${this.age}
        ${this.address}
        `
    }
}


console.log(user3.getUserDetails());


// to make user3 available in another module/file
module.exports = user3;