import { flattenObject } from '../flattenObject';

describe('flattenObject', () => {
    it('flattens object with one root key', () => {
        const object = {
            key1: {
                key2: 'abc',
                key3: {
                    key4: 'def',
                },
            },
        };

        const result = flattenObject({ object });

        expect(result).toEqual({
            _key1_key2: 'abc',
            _key1_key3_key4: 'def',
        });
    });

    it('flattens object with multiple root keys', () => {
        const object = {
            key1: {
                key2: 'abc',
                key3: {
                    key4: 'def',
                },
            },
            key5: {
                key6: {
                    key7: {
                        key8: 'ghi',
                    },
                },
                key9: 'jkl',
            },
        };

        const result = flattenObject({ object });

        expect(result).toEqual({
            _key1_key2: 'abc',
            _key1_key3_key4: 'def',
            _key5_key6_key7_key8: 'ghi',
            _key5_key9: 'jkl',
        });
    });

    it('respects depth', () => {
        const object = {
            key1: {
                key2: 'abc',
                key3: {
                    key4: 'def',
                },
            },
            key5: {
                key6: {
                    key7: {
                        key8: 'ghi',
                    },
                },
                key9: 'jkl',
            },
        };

        const result = flattenObject({ object, depth: 1 });

        expect(result).toEqual({
            _key1_key2: 'abc',
            _key1_key3: { key4: 'def' },
            _key5_key6: { key7: { key8: 'ghi' } },
            _key5_key9: 'jkl',
        });
    });
});
