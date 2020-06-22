import { groupBy } from '../groupBy';

describe('groupBy', () => {
    it('groups correctly with prop selector', () => {
        const objects = [
            {
                name: 'Bob',
                age: 10,
            },
            {
                name: 'Bill',
                age: 10,
            },
            {
                name: 'Bruce',
                age: 11,
            },
        ];

        const result = groupBy(objects, {
            criterion: 'age',
        });

        expect(result).toStrictEqual({
            10: [
                { name: 'Bob', age: 10 },
                { name: 'Bill', age: 10 },
            ],
            11: [
                {
                    name: 'Bruce',
                    age: 11,
                },
            ],
        });
    });

    it('groups correctly with predicate selector', () => {
        const objects = [
            {
                name: 'Bob',
                age: 10,
            },
            {
                name: 'Bill',
                age: 10,
            },
            {
                name: 'Bruce',
                age: 11,
            },
        ];

        const result = groupBy(objects, { predicate: (obj) => obj.age === 10 });

        expect(result).toStrictEqual({
            true: [
                {
                    name: 'Bob',
                    age: 10,
                },
                { name: 'Bill', age: 10 },
            ],
            false: [{ name: 'Bruce', age: 11 }],
        });
    });
});
