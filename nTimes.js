const wrappy = require("wrappy");
// task: use ESM to make this importable/ tree shakeable!
// plan:
// - rewrite this with module exports
// - rollup
// - test:
//  - first, on browser. See if I can do <script module...> and import only one or two, say once and thrice
//  - then, on node. See if it still works even though it's written in ESM

// module.exports = nTimes;
// module.exports.once = wrappy(once);
// module.exports.twice = wrappy(twice);
// module.exports.thrice = wrappy(thrice);

function nTimesFunc(fn, n) {
  let calledNTimesCounter = 0;
  return function() {
    if (calledNTimesCounter >= n) return;
    calledNTimesCounter++;
    return fn.apply(this, arguments);
  };
}
function onceFunc(fn) {
  let calledOnce = false;
  return function() {
    if (calledOnce) return;
    calledOnce = true;
    return fn.apply(this, arguments);
  };
}
function twiceFunc(fn) {
  let calledTwiceCounter = 0;
  return function() {
    if (calledTwiceCounter >= 2) return;
    calledTwiceCounter++;
    return fn.apply(this, arguments);
  };
}
function thriceFunc(fn) {
  let calledThriceCounter = 0;
  return function() {
    if (calledThriceCounter >= 3) return;
    calledThriceCounter++;
    return fn.apply(this, arguments);
  };
}

export const nTimes = wrappy(nTimesFunc);
export const once = wrappy(onceFunc);
export const twice = wrappy(twiceFunc);
export const thrice = wrappy(thriceFunc);
