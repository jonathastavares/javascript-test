const reverseString = require ('./reverseString');

test('checks if Jonathas contains 8 chars',() => {
    expect(reverseString('Jonathas')).toBe('sahtanoJ');
});
