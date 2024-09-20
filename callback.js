// callback - is a function which is passed as parameter in another function and will be executed to 
// give desired results upon being called

// callback function keeps holding the scope od the variables or references used in it


function PrintUserDetails (heading, dataObject) {

    console.log(heading, dataObject);
}

var userObj = {
    User: "Anthony",
    Id: "Bilay"

}

function GetAccountDetails(callBackFunc, data) {
    callBackFunc("Your account details: ", data);
}

// callBackFunc - 

GetAccountDetails(PrintUserDetails, userObj);


var productObj = {
    ProductName: "iPhone 29",
    Available: "Yes"
}

function GetProductDetails(callBackFunc, data) {

    callBackFunc("The product details:", data)
}

GetProductDetails(PrintUserDetails, productObj);