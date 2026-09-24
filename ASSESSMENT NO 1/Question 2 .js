//Question 2: DOM-like Event Handling  Problem: Simulated Browser Click Handling Node.js has no DOM, so simulate one using the events module. Requirements: 1. Create a class Element that extends EventEmitter with these properties and methods:  o name and parent properties o addEventListener(type, handler) o removeEventListener(type, handler) o dispatchEvent(type, data) 2. dispatchEvent must create an event object containing type, target (the element where the event started), currentTarget (the element currently handling it), data and a stopPropagation() method. 3. Events must bubble from the element up through its parents, like in a browser. 4. Build this hierarchy: document → form → button. 5. Attach a click listener to each of the three elements. Each must print its own name and the target and currentTarget names. 6. Demonstrate three scenarios in order:  o Scenario A: click the button and show the event bubbling to document. o Scenario B: make the form listener call stopPropagation() and click again. document must not receive the event. o Scenario C: remove the button's listener with removeEventListener and click again. The button's handler must not run. 7. Add one more event type, keypress, on the form element, to show that different event types work independently. 
const EventEmitter = require("events");

class Element extends EventEmitter {
    constructor(name, parent = null) {
        super();
        this.name = name;
        this.parent = parent;
    }

    addEventListener(type, handler) {
        this.on(type, handler);
    }

    removeEventListener(type, handler) {
        this.off(type, handler);
    }

    dispatchEvent(type, data = {}) {
        const event = {
            type: type,
            target: this,
            currentTarget: null,
            data: data,
            propagationStopped: false,

            stopPropagation() {
                this.propagationStopped = true;
            }
        };

        let current = this;

        while (current !== null) {
            event.currentTarget = current;

            current.emit(type, event);

            if (event.propagationStopped) {
                break;
            }

            current = current.parent;
        }
    }
}


// Create hierarchy
const documentElement = new Element("document");
const form = new Element("form", documentElement);
const button = new Element("button", form);


// -----------------------------
// Button click handler
// -----------------------------
function buttonClickHandler(event) {
    console.log(
        `Button handler: target=${event.target.name}, currentTarget=${event.currentTarget.name}`
    );
}


// -----------------------------
// Form click handler
// -----------------------------
function formClickHandler(event) {
    console.log(
        `Form handler: target=${event.target.name}, currentTarget=${event.currentTarget.name}`
    );
}


// -----------------------------
// Document click handler
// -----------------------------
function documentClickHandler(event) {
    console.log(
        `Document handler: target=${event.target.name}, currentTarget=${event.currentTarget.name}`
    );
}


// Add click listeners
button.addEventListener("click", buttonClickHandler);
form.addEventListener("click", formClickHandler);
documentElement.addEventListener("click", documentClickHandler);


// ======================================================
// SCENARIO A
// ======================================================

console.log("\n--- Scenario A ---");
console.log("Clicking button:");

button.dispatchEvent("click", {
    message: "Button clicked"
});


// ======================================================
// SCENARIO B
// ======================================================

console.log("\n--- Scenario B ---");
console.log("Form stops propagation:");


// Remove old form listener
form.removeEventListener("click", formClickHandler);

// Create new form listener
function formStopHandler(event) {
    console.log(
        `Form handler: target=${event.target.name}, currentTarget=${event.currentTarget.name}`
    );

    console.log("Form calls stopPropagation().");

    event.stopPropagation();
}

form.addEventListener("click", formStopHandler);


// Click button again
button.dispatchEvent("click", {
    message: "Button clicked again"
});


// ======================================================
// SCENARIO C
// ======================================================

console.log("\n--- Scenario C ---");
console.log("Button listener removed:");


// Remove button listener
button.removeEventListener("click", buttonClickHandler);


// Click button again
button.dispatchEvent("click", {
    message: "Third button click"
});


// ======================================================
// KEYPRESS EVENT
// ======================================================

console.log("\n--- Keypress Event ---");

form.addEventListener("keypress", (event) => {
    console.log(
        `Keypress handler: target=${event.target.name}, currentTarget=${event.currentTarget.name}, key=${event.data.key}`
    );
});


// Dispatch keypress on form
form.dispatchEvent("keypress", {
    key: "Enter"
});