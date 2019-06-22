![NoMoFun](readme_assets/nomofun.png)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

Calls function no-mo' than *n* many times. *Doesn't mean you can't have no-mo' fun!*

# Installation/ Usage

`npm i noMoFun`

```
import { nTimes, once, twice, thrice } from "../noMoFun";

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

___

Questions and suggestions are welcome. Have fun!
