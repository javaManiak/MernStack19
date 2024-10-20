// repeat and write an arrow function to print account information with return, without return
// by creating a account object

class Account {
    constructor(name, acctType, age, acctOffer) {
        this.name = name;
        this.acctType = acctType;
        this.age = age;
        this.acctOffer = acctOffer;
    }
    GetName = () => this.name

    GetUserDetails = () => {
        return [this.name, this.acctType, this.age];
    }
    GetAccountOffers = () => this.acctOffer;
}

let bankAccount = new Account("Mark", "Checking", 23, "$200 cash when opening a new checking account");


console.log("Account holder's name (no return in arrow function): ", bankAccount.GetName());
console.log("Account holder's information (with return): ", bankAccount.GetUserDetails())
console.log("Pre-approved offer (no return): ", bankAccount.GetAccountOffers());





