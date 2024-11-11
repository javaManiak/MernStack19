// practice

// buffer is a special memory created outside the V8 heap which can be used for moderate data set


let buff = Buffer.alloc(128);

let len = buff.write("We are using a buffer to perform the following operations.")

console.log("Output from a buffer" + len);

console.log(buff.toString());
console.log(buff.toString("utf8"));
console.log(buff.toString("ascii"));
console.log(buff.toString("base64"));

let buff26 = Buffer.alloc(26); // for 26 letter in English

for(let i=0; i<26; i++) {
    buff26[i] = i+97;
}

console.log(buff26);

console.log(buff26.toString());
console.log(buff26.toString('ascii'));
console.log(buff26.toString('ascii',0,5));
console.log(buff26.toString('utf8',0,5));
console.log(buff26.toString("base64", 0,5));
console.log(buff26.toString("base64"));
console.log(buff26.toString(undefined, 0, 5));
