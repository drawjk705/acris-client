import { uppercaseFirstLetters } from '../uppercaseFirstLetters';

describe('uppercaseFirstLetters', () => {
    [
        ['hello', 'Hello'],
        ['HELLO', 'Hello'],
        ['hEllO', 'Hello'],
        ['hello there', 'Hello There'],
        ['hey, there', 'Hey, There'],
        ['', ''],
    ].forEach(([input, expectedOutput]) => {
        it('works with words', () => {
            const result = uppercaseFirstLetters(input);

            expect(result).toBe(expectedOutput);
        });
    });
});
