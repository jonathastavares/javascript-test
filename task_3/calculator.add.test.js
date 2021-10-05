const Calculator = require ('./calculator');
const calculator = new Calculator;

describe('Tests for Calculator add method', () => {

    test('checks if 1 + 2 = 3',() => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('checks if 5 + 7 = 12',() => {
        expect(calculator.add(5, 7)).toBe(12);
    });

    test('checks if 130 + 267 = 397',() => {
        expect(calculator.add(130, 267)).toBe(397);
    });
});