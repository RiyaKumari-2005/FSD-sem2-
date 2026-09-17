// eventLoop.js

console.log("1. Program started");

setTimeout(() => {
    console.log("2. setTimeout executed");
}, 0);

setImmediate(() => {
    console.log("3. setImmediate executed");
});

process.nextTick(() => {
    console.log("4. process.nextTick executed");
});

console.log("5. Program ended");
