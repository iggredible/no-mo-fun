# nTimes

Calls function no more than *n* many times

# Installation/ Usage

`npm i ntimes`

```
import { nTimes, once, twice, thrice } from "../nTimes";

const sayHello = function() {
  console.log("Hello, you good looking person");
};
// say you want the function to execute no more than four times
const sayHelloFourTimes = nTimes(sayHello, 4);

sayHelloFourTimes();
sayHelloFourTimes();
sayHelloFourTimes();
sayHelloFourTimes();
sayHelloFourTimes(); // => upon the fifth time, it will not run

// Other methods for `once`, `twice`, and `thrice` are also available!
const sayHelloOnce = once(sayHello);
const sayHelloTwice = twice(sayHello);
const sayHelloThrice = thrice(sayHello);
```

# Example
Check out the demo folder for an example.

```
cd demo
npm i
npm run start-demo // will run on localhost:1234
```
