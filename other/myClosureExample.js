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
