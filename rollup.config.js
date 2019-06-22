import pkg from "./package.json";

export default {
  input: "noMoFun.js",
  output: {
    file: pkg.main,
    format: "umd",
    name: "nTimes"
  }
};
