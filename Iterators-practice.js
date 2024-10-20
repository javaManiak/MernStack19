//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag

let personTags = persons.map((person) =>{
                            if (person) {
                                return {
                                    tags: person.tags
                                }
                            }
})

console.log(personTags)

//2. List the name of person using java and put programmer after their name, change the name key to Developer

let javaProgrammers = persons.map((person) => {
                                if (person.tags === "java") {
                                    return {
                                        id: person.id,
                                        Developer : person.name + " Programmer",
                                        tags : person.tags
                                    }
                                }
}).filter((person) => person !== undefined)

console.log(javaProgrammers)


//3. If we have anyone with tag python
let pythonDeveloper = persons.some((person) => person.tags ==="Python")

console.log(pythonDeveloper)

//4. Find the number of unique tags and their count present in list

let typeOfDeveloperCounts = persons.reduce((prevObject, currObject,nu,list)  => {
    prevObject[currObject.tags] = prevObject[currObject.tags] ? prevObject[currObject.tags] + 1 : 1
    return prevObject
}, new Set())

console.log(typeOfDeveloperCounts)