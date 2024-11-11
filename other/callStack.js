// function Foo() {
//     throw new Error("Call Stack");
// }
// function Bar() {
//     Foo();
// }
// function Baz() {
//     Bar()
// }

// Baz()


var i = 1;
function Baz() {
    //console.log("We are in BAZ")
    //return "Baz"
    //Bar()
    i++
    //if (i < 1000) {
        console.log(i)
        Baz()
    //}else{
        console.log(i + "we can further call it in recursive order")
    //}
}
Baz()