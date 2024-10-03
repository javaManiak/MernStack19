var User1 = {
    name : "Micheal",
    age : 18,
    address : "Western America"
}

var User2 = {
    name : "Mark",
    age : 18,
    address : "Eastern America"
}


var User3 = {
    name : "Ana",
    age : 20,
    address : "Canada",
    getUserDetails : function () {
        return ` 
            ${this.name}
            ${this.age}
            ${this.address}
        `
    }
}

module.exports = {
    User1,
    User2,
    User3
}