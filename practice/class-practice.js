
// Task - create a class named as account accepting 3 or more params  like - name, acct type etc and
// has three methods to show balance, user details and account offers

class Account {
    constructor(name, acctType, age, acctOffer) {
        this.name = name;
        this.acctType = acctType;
        this.age = age;
        this.acctOffer = acctOffer;
    }
    GetName = () => { return this.name}

    GetUserDetails = () => {
        return [this.name, this.acctType, this.age];
    }

    GetAccountOffers = () => {
        return this.acctOffer;
    }
}

let bankAccount = new Account("Mark", "Checking", 23, "$200 cash when opening a new checking account");

console.log("Account holder's name: ", bankAccount.GetName());
console.log("Account holder's information: ", bankAccount.GetUserDetails())
console.log("Pre-approved offer: ", bankAccount.GetAccountOffers());
