const calculator = require("./calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("adds -4 + 8 to equal 4", () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test("subtract 5 - 4 to equal 1", () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test("subtract -5 - -10 to equal 5", () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test("divides 10 / 2 to equal 5", () => {
  // test para división
  expect(calculator.divide(10, 2)).toBe(5);
});

test("divides -4 / 2 to equal -2", () => {
  // test para división
  expect(calculator.divide(-4, 2)).toBe(-2);
});

test("divides -4 / 0 to equal -2", () => {
  // test para división por cero
  expect(calculator.divide(-4, 0)).toBe("You can't divide by zero");
});

test("multiply 10 * 2 to equal 20", () => {
  // test para multiplicación.
  expect(calculator.multiply(10, 2)).toBe(20);
});

test("multiply -4 * 2 to equal -8", () => {
  // test para multiplicación.
  expect(calculator.multiply(-4, 2)).toBe(-8);
});
