import { once } from "../nTimes";

const sayHello = function() {
  console.log("HELLO FUNC");
};
const sayHelloOnce = once(sayHello);
console.log("about to say it: ");
sayHelloOnce();
console.log("said it once^");
sayHelloOnce();
console.log("did I say it second time?^");
