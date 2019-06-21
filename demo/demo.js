import { twice, nTimes } from "../nTimes";

const sayHello = function() {
  console.log("Hello, you good looking person");
};

const hablaHola = function() {
  console.log("Hola hermoso");
};

const sayHelloTwice = twice(sayHello);
sayHelloTwice();
sayHelloTwice();
sayHelloTwice(); // => should not do anything anymore

const sayHolaOnce = nTimes(hablaHola, 1);
sayHolaOnce();
sayHolaOnce(); // => should not do anything anymore
