//API - Application Programming Interface

//Restful
// http - <verbs, request, response>
let http = require('http')
http.get()

//cookies, sessions, query string, route param
//json - data type, size - of data passed

// re-inventig the wheel <when we do everything togather>

// express - a complete package for building the restful application

// express - package is present on npm.js .org

// command line tools to build node applications
// npm - node package manager tool is used to create setup
// yarn - can also be used to create node application

// commands used

// npm - init <to initialize the application> <package.json - is created>

// to install the package

// npm install <package name> 
// npm i <package name>

// once installed it adds to the dependency field
// also creates a new folder with name <node_modules>

//npm commands are registered in package.json - in scripts tag

// mogodb-using mongoose
// mongoose - orm (object relationship manager) <json => mapped with backend document based noSQL structure>
// bson (b-json - base64 encoded json)
[ //colletions - users

{  // document (row1)-user1
    username: "Yao", // 
    address: {

    },
    address2: {

    }
},
{  // document (row2)-user2
    username: "Windie",
    address: {

    },
    address2: {

    },
    address3: {

    }
}
]
// post calls
// jwt token auth