const { EventEmitter } = require("stream");

const myEmitter = new EventEmitter();
function c1() {
  console.log("event 1");
}
function c2() {
  console.log("event 2");
}
myEmitter.on("eventOne", c1);
myEmitter.on("eventOne", c2);

myEmitter.emit("eventOne");
