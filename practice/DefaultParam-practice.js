
//create a student information functional and set some values as default

function Student (name = "John", age = 23) {

    this.name = name;
    this.age = age;
}

studentObj1 = new Student();

console.log(studentObj1);

studentObj2 = new Student("Mary", 21)

console.log(studentObj2);
