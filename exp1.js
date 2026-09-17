// customEventEmitter.js

class CustomEventEmitter {
    constructor() {
        this.events = {};
    }

    // Register an event listener
    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(listener);
    }

    // Trigger an event
    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => {
                listener(...args);
            });
        }
    }
}

// Create an object
const emitter = new CustomEventEmitter();

// Register "greet" event
emitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

// Register "exit" event
emitter.on("exit", () => {
    console.log("Exit event triggered. Goodbye!");
});

// Trigger events
emitter.emit("greet", "Riya");
emitter.emit("exit");