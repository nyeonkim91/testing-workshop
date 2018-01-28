const { expect, it } = require("../utilities/testRunner.js");
const { add } = require("./index.js");

it("adds two numbers", () => {
  const result = add(1, 2);
  const expectation = 3;

  expect(result).toBe(expectation);
});
