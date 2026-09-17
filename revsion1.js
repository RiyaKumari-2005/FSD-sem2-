let a = 10;
let b = "10";
console.log(a == b);
console.log(a === b);
console.log(a + 5);
console.log(a > 5 && a < 20);

let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let num = 0;
while (num <= 10) {
    console.log(num);
    num += 2;
}


const greet = (name="Guest") => `Hello, ${name}!`;
console.log(greet());
console.log(greet("Alice"));


const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(doubled);
console.log(evenNumbers);
console.log(sum);

console.log("1: Start (sync)");

setTimeout(() => {
    console.log("2: setTimeout (macroTask - timers phase)");
}, 6000);

setImmediate(() => {
    console.log("3: setImmediate (macroTask - check phase)");
});

process.nextTick(() => {
    console.log("4: process.nextTick (highest priority microtask)");
});

Promise.resolve().then(() => {
    console.log("5: Promise.then (microtask)");
});

const fs = require("fs");

console.log("1: Start (sync)");

setTimeout(() => {
    console.log("2: Inside setTimeout (macrotask - runs LAST)");
}, 0);

Promise.resolve().then(() => {
    console.log("3: Inside Promise.then (microtask - runs BEFORE setTimeout)");
});

fs.readFile("filename", () => {
    console.log("4: Inside fs.readFile callback (I/O - runs later)");
});

console.log("5: End (sync)");

