import { suma } from "./calculator";

describe("Given a function suma", () => {
  describe("When it receives 4 and 4", () => {
    test("Then it should return 8", () => {
      const firstNumber = 4;
      const secondNumber = 4;
      const expectedResult = 8;

      const result = suma(firstNumber, secondNumber);

      expect(result).toBe(expectedResult);
    });
  });
});
