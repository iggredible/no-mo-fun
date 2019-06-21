import { nTimes, once, twice, thrice } from "../nTimes";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

describe("Given a function", () => {
  const returnOne = function() {
    return 1;
  };
  it("should call the function once", () => {
    const resultArr = [];
    let returnedValue;
    const returnOneOnce = once(returnOne);
    for (let i = 0; i < 5; i++) {
      returnedValue = returnOneOnce();
      if (returnedValue) resultArr.push(returnedValue);
    }
    expect(resultArr).toEqual([1]);
  });
  it("should call the function twice", () => {
    const resultArr = [];
    let returnedValue;
    const returnOneTwice = twice(returnOne);
    for (let i = 0; i < 5; i++) {
      returnedValue = returnOneTwice();
      if (returnedValue) resultArr.push(returnedValue);
    }
    expect(resultArr).toEqual([1, 1]);
  });
  it("should call the function thrice", () => {
    const resultArr = [];
    let returnedValue;
    const returnOneThrice = thrice(returnOne);
    for (let i = 0; i < 5; i++) {
      returnedValue = returnOneThrice();
      if (returnedValue) resultArr.push(returnedValue);
    }
    expect(resultArr).toEqual([1, 1, 1]);
  });

  it("should call the function n-times", () => {
    const resultArr = [];
    const expectedArr = [];
    const MAX = 10;
    const n = getRandomInt(MAX);
    const returnOneNTimes = nTimes(returnOne, n);

    let returnedValue;

    for (let i = 0; i < 20; i++) {
      returnedValue = returnOneNTimes();
      if (returnedValue) resultArr.push(returnedValue);
    }

    for (let j = 0; j < n; j++) {
      expectedArr.push(returnOne());
    }
    expect(resultArr).toEqual(expectedArr);
  });
});
