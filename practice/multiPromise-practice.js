//create promise of three concurrent sessions of a day and try to resolve and reject them

let javaSession = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            "scheduled": "12:00 pm",
            "duration": "1h"
        })
    }, 5000)
})

let mernStackSession = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            "scheduled": "11:30 am",
            "duration": "1h"
        })
    }, 5000)
})

let dsaSession = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            "scheduled": "10:40 am",
            "duration": "1h"
        })
    }, 5000)
})

console.log("Promises are working...")

// all or nothing
Promise.all([
    javaSession,
    mernStackSession,
    dsaSession
]).then((data, error) => {
    console.log("Promises all returns, when each one is executed/resolved successfully ", data)
}).catch((data, error) => {
    console.log("Promises all returns to catch, when any one of them is rejected.", data)
})

// evaluate one by one

Promise.allSettled([
    mernStackSession,
    dsaSession,
    javaSession
]).then ((data, error) => {
    console.log("Keep the execution of other Promises alive, when one of them rejected.", data)
})

console.log("Promises are all done.")