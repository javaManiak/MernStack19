// create a promise to print user info like - name, address, account number after 3 seconds, using aync and await

function printUserDetailsAfter3Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                "name": "Jack",
                "address": "somewhere on the moon",
                "accountNo": "12345"
            });
        }, 3000)
    });
}

console.log("async execution starts");

async function asyncCall() {
    console.log("Before await:  blocking thread starts:")

    await printUserDetailsAfter3Seconds()
        .then((data, error) => console.log(data))
        .catch((error) => console.log(error))

    console.log("After await - thread executed one after another")

    console.log("Before the second await:")

    await printUserDetailsAfter3Seconds()
        .then((data, err) => console.log(data))
        .catch((err) => console.log(err))

    console.log("After the second await. - thread executes one by one.")

}

asyncCall();

console.log("async execution ends.")


// also check when it rejects after 2 second
function rejectPrintUserDetailsAfter2Seconds() {
    return new Promise((reject) => {
        setTimeout(() => {
            reject({
                "status": 500,
                "msg": "Server not accessible!",
                "Promise date": (new Date).toDateString()
            });
        }, 2000)
    });
}

console.log("async execution starts");

async function asyncCall() {
    console.log("Before await:  blocking thread starts:")

    await rejectPrintUserDetailsAfter2Seconds()
        .then((data, error) => console.log(data))
        .catch((error) => console.log(error))

    console.log("After await - thread executed one after another")

    console.log("Before the second await:")

    await rejectPrintUserDetailsAfter2Seconds()
        .then((data, error) => console.log(data))
        .catch((err) => console.log(err))

    console.log("After the second await. - thread executes one by one.")
}

asyncCall();

console.log("async execution ends.")

// analyse how await works as blocking execution

// create one set of map using different types of keys and at least show the usage of 5 functions (.get, .clear)


// create a list using set and show the usage of 5 functions (.add, .clear)

// create and example of arithmetic operations (addition, subtraction, multiply, division), using generator function