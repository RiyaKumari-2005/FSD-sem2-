//import EventEmitter class
const EventEmitter = require('events');

//creat Button class
class Button extends EventEmitter {}

//creat object

const button = new Button();

//click event listener

button.on('click',()=>{
    console.log("Button Clicked!");
});

//Mousehover Event Listener
button.on('mouseover',()=>{
    console.log("mouse is over the button");
});

//Trigger Events
button.emit('click');
button.emit('mouseover');