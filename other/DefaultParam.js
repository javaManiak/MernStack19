let person = {fname:"john", lname:"Doe", age:23, Address:{}};

// for (key in person) {
//     let element = person[key];
//     console.log(`${key}, ${element}`);
// }

// let arr =[3,5,7];

// // arr.push("Eight");

// arr.newKey = "Sierra";
// arr["nextItem"]   = "Mark";

// console.log(arr);

// for(key in arr) {
//     const element = arr[key];
//     console.log(`${key}, ${element}`);
// }


console.log("For of Loop");

let cars = ["BMW", "Volvo", "Mini"];
cars.push("Range Rover");
cars.newKey = "Toyota";

for (const element of cars) {
    console.log(element);
}


