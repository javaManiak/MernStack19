
//Create two examples of your own choice to make a map and a weak map

// Strong map example
let strongMap = new Map();
strongMap.set("name", "Yani");
strongMap.set("StringKey", "This is an example of strong map because the key is set as a 'alphanumeric' type");
strongMap.set(1, "Another value from strong map")

console.log(strongMap.get("name"));
console.log(strongMap.get("StringKey"));
console.log(strongMap.get(1));


// week map example

let weakMap = new Map();
let keyObj = {};
let keyFunc = function(){console.log("I am a function")}

weakMap.set(keyObj, "This is a weak map because the key is an object type");
weakMap.set(keyFunc, "This is another entry from a weakMap because the key is a function object")

console.log(weakMap.get(keyObj));
console.log(weakMap.get(keyFunc));

// and a list of unique names of 10 states of your favourite country you wish to visit on world tour

let StateToVisit = new Set(["California", "Alaska", "Washington", " New York","Louisiana", "Georgia", "New Mexico", "North Carolina"]);

console.log(StateToVisit.size);

// adding states existing in the list of states will not be possible - set elements are unique

StateToVisit.add("Alaska");
StateToVisit.add("California");

console.log(StateToVisit.size);
console.log(StateToVisit)

// adding new and unique states will be accepted to the set
StateToVisit.add("North Dakota");
StateToVisit.add("Mississippi");

console.log(StateToVisit.size);
console.log(StateToVisit)

// create one set of map using different types of keys and at least show the usage of 5 functions (.get, .clear)

    // various types of map keys
console.log("Map manipulation starts ... ");

    let stringAsKey = "stringAsKey"
    let objAsKey = {}  // empty object
    let funcAsKey = function() {} // an empty function
    let numberAsKey = 100;

    let myMap = new Map();

    myMap.set(stringAsKey, "yesterday");                    // set 
    myMap.set(objAsKey, [4, 5] )
    myMap.set(funcAsKey, myfunc = function() {console.log("I am a function")});
    myMap.set(numberAsKey, 111);

    console.log("print 'myMap'")
    console.log(myMap);
    
    myMap.set(numberAsKey, 921);
    console.log(myMap);
    
    console.log("Retrieve value from 'funcAsKey' in 'myMap'")
    console.log(myMap.get("funcAsKey"));                       // get
    
    console.log("show size of 'myMap'")
    console.log(myMap.size);                                    // size
    
    console.log("show myMap after delete value with key = 'objAsKey': ")
    myMap.delete(objAsKey);                                     // delete
    console.log(myMap)

    console.log("Execute the fuinction from 'myMap'");
    console.log(myMap.get(funcAsKey));

    console.log("show key set:", myMap.keys);
    console.log("print myMap after 'clear' everything")
    myMap.clear();                                              //clear()
    console.log(myMap)

// create a list using set and show the usage of 5 functions (.add, .clear)

let mySet = new Set;

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);

console.log("mySet = ")
console.log(mySet);

let myList = [];

myList = mySet;

console.log("myList =");
console.log(myList);
