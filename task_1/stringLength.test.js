const stringLength = require ('./stringLength');

test('checks if Jonathas contains 8 chars',() => {
    expect(stringLength('Jonathas')).toBe(8);
});

test('checks if a string larger than 10 chars, the function throws an error', () => {
    expect(stringLength('12345678910')).toBe('Error');
});

test('checks if a string smaller than 1 char, the function throws an error', () => {
    expect(stringLength('')).toBe('Error');
});
