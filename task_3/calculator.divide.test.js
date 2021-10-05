const Calculator = require ('./calculator');
const calculator = new Calculator;

describe('my beverage', () => {

    test('checks if 3 / 1 = 3',() => {
        expect(calculator.divide(3, 1)).toBe(3);
    });

    test('checks if 144 / 12 = 12',() => {
        expect(calculator.divide(144, 12)).toBe(12);
    });

    test('checks if 50 / 10 = 5',() => {
        expect(calculator.divide(50, 10)).toBe(5);
    });
});