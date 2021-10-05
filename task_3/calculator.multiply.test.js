const Calculator = require ('./calculator');
const calculator = new Calculator;

describe('Tests for Calculator multiply method', () => {

    test('checks if 1 * 2 = 2',() => {
        expect(calculator.multiply(1, 2)).toBe(2);
    });

    test('checks if 5 * 7 = 35',() => {
        expect(calculator.multiply(5, 7)).toBe(35);
    });

    test('checks if 130 * 267 = 34710',() => {
        expect(calculator.multiply(130, 267)).toBe(34710);
    });
});
