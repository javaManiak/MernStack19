// // 1.

// var index = 0;

// for (index = 0; index <5; index++) {

//     setTimeout( function() {
//         console.log(index);

//     }, 1000); // set timeout executes the call back function passed as passed as first parameter
//             // after the miliseconds passed ass second param - for one time only
// }

// console.log(index);

// 2. bind is the function prtew=sent with each function which is used to chanmgethe context ot hiold the contezxxt

// for the time function gets executesd

// in the other words,, this is similar to call and apply but doen not 

var User = {
  name: "Yao",
  age: 18,
  address: "somewhere",
  GetUserDetasils: function () {
    // console.log(this);
    // console.log(`
    //         ${this.name}
    //         ${this.age}
    //         ${this.address}
    //         `);

    setTimeout(function () {
      console.log(this);
      console.log(`
            ${this.name}
            ${this.age}
            ${this.address}
            `);
    // }, 2000);
    // return "Nilay"
    }.bind(User), 2000);
  },
};

User.GetUserDetasils();
