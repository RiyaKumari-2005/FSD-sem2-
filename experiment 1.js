
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('greet', (name)=>{
    console.log(`hello,${name}! welcome to node.js`);
});

myEmitter.on('exit',()=>{
    console.log("Application Closed.");
});
myEmitter.emit('greet','Tarun');
myEmitter.emit('exit');