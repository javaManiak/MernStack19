//Do a practice writing all the data using fs.write (sync async both)-

const fs = require('fs');
const { Session } = require('inspector/promises');
console.log('Sychronous read-write starts from here:');

let data = fs.readFileSync('./2Text.json', 'utf8');
console.log(data);

console.log('Sychronous read-write ends from here:');


// Write data into a file usign write stream

let studentDetails = {
    name: "Ben",
    age: 29,
    city: "San Francisco",
    classSession: "MernStack"
}

console.log("++++++++++++++++++++++++++++++++++++++++");

console.log('A-sychronous read-write starts from here:');

fs.readFile('./Text.json', 'utf-8', (err, data) => {
    console.log("information " + data)
    console.log("err" + err)
    let writtenStream = fs.createWriteStream("Text.json", "utf8");
    console.log(data)
    if(data) {
        let oldData = JSON.parse(data);
        console.log(oldData)
        writtenStream.write(JSON.stringify([...oldData, studentDetails]));
        writtenStream.end();

    } else {
        writtenStream.write(JSON.stringify(
            [
                {name:"Michael",
                    age:22,
                    city:"Denver",
                    classSession: "Java"
                }
            ]
        ));
        writtenStream.end();
    }

});

console.log('A-sychronous read-write ends from here:');

