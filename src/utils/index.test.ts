import {
    addPositionIndex,
    capitalize,
    formatThousand,
    removePositionIndex,
    substituteVars,
    truncateText,
    waitFor,
} from './index';

describe('utils', () => {
    describe('substituteVars', () => {
        it('substitutes values in an object', () => {
            const templateObj = {
                foo: 11,
                bar: '${a}',
                baz: {
                    x: '${y}',
                },
            };
            const subs = {
                a: 22,
                y: 'hello',
            };
            const expectedObj = {
                foo: 11,
                bar: 22,
                baz: {
                    x: 'hello',
                },
            };
            const newObj = substituteVars(templateObj, subs);
            expect(newObj).toEqual(expectedObj);
            expect(newObj).not.toBe(templateObj);
        });
    });

    describe('capitalize', () => {
        it('capitalizes each word', () => {
            expect(capitalize('hello world')).toBe('Hello World');
        });

        it('preserves end case when keepEndCase is true', () => {
            expect(capitalize('hello WORLD', true)).toBe('Hello WORLD');
        });
    });

    describe('formatThousand', () => {
        it('formats numbers with dot separators', () => {
            expect(formatThousand(1000)).toBe('1.000');
        });

        it('returns 0 for falsy values', () => {
            expect(formatThousand(0)).toBe('0');
        });
    });

    describe('truncateText', () => {
        it('truncates long text', () => {
            expect(truncateText('abcdefghij', 6)).toBe('ab...   ');
        });

        it('pads short text', () => {
            expect(truncateText('abc', 10)).toBe('abc   ');
        });
    });

    describe('addPositionIndex / removePositionIndex', () => {
        it('adds and removes position indexes', () => {
            const withIndex = addPositionIndex(['a', 'b']);
            expect(withIndex).toEqual([
                { value: 'a', position: 0 },
                { value: 'b', position: 1 },
            ]);
            expect(removePositionIndex(withIndex)).toEqual(['a', 'b']);
        });
    });

    describe('waitFor', () => {
        it('resolves after the given delay', async () => {
            vi.useFakeTimers();
            const promise = waitFor(100);
            await vi.advanceTimersByTimeAsync(100);
            await expect(promise).resolves.toBeUndefined();
            vi.useRealTimers();
        });
    });
});
