
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