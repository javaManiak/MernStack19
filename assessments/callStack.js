function Foo() {
    throw new Error("Call Stack");
}
function Bar() {
    Foo();
}
function Baz() {
    Bar()
}

Baz()