

// Create a student promise object and it should return the resolve and reject data after two seconds
// It should be named as student info

let studentPromise = new Promise((resolve, reject) =>  {
   setTimeout( () => {
       resolve({
               authToken : "asfjow19379jljdflasA9801L",
               status: "success",
               studentInfo:
                   {"name" : "Frank",
                   "age" : 21,
                   "gpa" : 4.0
                   }
                   })
       }, 2000);

   setTimeout(() => {
       reject( {
           authToken : "token failure",
           status: "error",
           studentInfo : "Bad request"
       })
   }, 2000)
});

console.log(studentPromise)

// move to the next call

studentPromise.then((data, error) => {
    console.log(data)
    console.log(error)
}).catch((data, error) => {
    console.log(data)
    console.log(error)
})

