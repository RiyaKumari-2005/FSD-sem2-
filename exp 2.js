// domEvents.js

const EventEmitter = require("events");

// Create an event emitter
const emitter = new EventEmitter();

// Simulate a button click
emitter.on("click", (buttonName) => {
    console.log(`${buttonName} button was clicked!`);
});

// Simulate mouseover
emitter.on("mouseover", (element) => {
    console.log(`Mouse is over the ${element}.`);
});

// Simulate input event
emitter.on("input", (value) => {
    console.log(`User entered: ${value}`);
});

// Trigger events
emitter.emit("click", "Submit");
emitter.emit("mouseover", "Login Button");
emitter.emit("input", "Riya");