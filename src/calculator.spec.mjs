import { add } from './calculator.js';

describe("calculator.js", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
