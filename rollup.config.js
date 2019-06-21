import pkg from "./package.json";

export default {
  input: "nTimes.js",
  output: {
    file: pkg.main,
    format: "umd",
    name: "nTimes"
  }
};
