const Calculator = require ('./calculator');
const calculator = new Calculator;

describe('Tests for Calculator subtract method', () => {

    test('checks if 1 - 2 = -1',() => {
        expect(calculator.subtract(1, 2)).toBe(-1);
    });

    test('checks if 5 - 7 = -2',() => {
        expect(calculator.subtract(5, 7)).toBe(-2);
    });

    test('checks if 130 - 267 = -137',() => {
        expect(calculator.subtract(130, 267)).toBe(-137);
    });
});