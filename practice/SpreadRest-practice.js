//Questions :
//Spread Operator -
//create a list of vaccines and print

let vaccineList = ["Covid-19", "Flu", "TDap"];
console.log("List of vaccines:")
console.log(vaccineList)

//create doctor object and print his qualifications and other details using spread
let doctor = {
    id: 1,
    docName: "Alfred",
    type: "residence",
    yearsOfPractice: 5,
}
console.log("Doctor's basic info:")
console.log(doctor)

let address = {
    location: "New York",
    zipCode: 12345,
    hospital: "medical center"
}
console.log("Doctor's address:")
console.log(address)

let fullDetails = {...doctor, ...address}
console.log("Doctor's full details:")
console.log(fullDetails)

//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread
let vaccineDetails = {
    vaccineName: "Covid-19",
    dose: 3,
    price: 20,
    sideEffect: true
}

let doctorVaccine = {...doctor, ...vaccineDetails}
console.log("Doctor with vaccine details:")
console.log(doctorVaccine)


//Rest Parameter -
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers

// create the array
let arr = []
for (i = 100; i <= 150; i++) {
    arr.push(i)
}

let largesum = function(...restNumberList)
{
    let sum = 0;
    sum = restNumberList.reduce((prevNum, currNum) => {
        return prevNum + currNum;
    }, 0);
    return sum;
}

console.log()
console.log("The sum of the array in question  array[100...150] is: ", largesum(...arr))
// console.log(largesum(...arr));
