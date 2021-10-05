const capitalize = require ('./capitalize');

describe('Tests for capitalize String method', () => {

    test('checks if jonathas returns Jonathas',() => {
        expect(capitalize('jonathas')).toBe('Jonathas');
    });

    test('checks if string returns String', () => {
        expect(capitalize('string')).toBe('String');
    });

    test('checks if microverse returns Microverse', () => {
        expect(capitalize('microverse')).toBe('Microverse');
    });

});