//Problem: User Session Manager Write a Node.js program that creates a custom class SessionManager extending EventEmitter. Requirements: 1. The class must handle two events: greet and exit.  o greet receives a username and prints Hello, <username>! Welcome. o exit receives an exit code and prints Session closed with code <code>. Goodbye! 2. Add a once listener on greet that prints First login of the day! only the first time the event fires. 3. Add a method trigger(command, ...args) that emits the event only if the command is greet or exit. For any other command, print Unknown event: <command>. 4. Emit greet three times with different usernames, then print the current listener count for greet. 5. Emit exit with code 0, then call trigger('login') to show the unknown-event case. 6. Register an error listener and emit an error event with a custom message. /</command>
const EventEmitter = require("events");

// Custom SessionManager class
class SessionManager extends EventEmitter {

    // Handle commands/events
    trigger(command, ...args) {
        if (command === "greet" || command === "exit") {
            this.emit(command, ...args);
        } else {
            console.log(`Unknown event: ${command}`);
        }
    }
}

// Create object
const session = new SessionManager();

// greet event
session.on("greet", (username) => {
    console.log(`Hello, ${username}! Welcome.`);
});

// once listener for greet
session.once("greet", () => {
    console.log("First login of the day!");
});

// exit event
session.on("exit", (code) => {
    console.log(`Session closed with code ${code}. Goodbye!`);
});

// error listener
session.on("error", (message) => {
    console.log(`Error: ${message}`);
});

// Emit greet three times
session.trigger("greet", "Riya");
session.trigger("greet", "Anjali");
session.trigger("greet", "Priya");

// Print current listener count for greet
console.log(
    "Greet listener count:",
    session.listenerCount("greet")
);

// Emit exit
session.trigger("exit", 0);

// Unknown event
session.trigger("login");

// Emit custom error
session.emit("error", "Invalid session detected!");