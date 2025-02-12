import { EventEmitter } from "events";

const emitter = new EventEmitter();


emitter.on("greet", () => {
    console.log("welcome .... ");
});


emitter.on("error", (err) => {
    console.log(err);
});


emitter.emit("greet");
