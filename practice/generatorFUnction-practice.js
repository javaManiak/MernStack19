// Accumulator - generator function - (b),

// Accumulator

function* counter(starter) {
    while (true) {
        yield console.log(starter++);
    }
}

let calObj = counter(0);

i=0;
while ( i<10) {
    calObj.next()
    i++      // comment this line out will give you an infinite number of yield numbers
}


