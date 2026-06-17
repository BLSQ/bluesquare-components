import { testTS } from './test';

describe('testTS', () => {
    it('concatenates arguments', () => {
        expect(testTS(42, 'value')).toBe('value-42');
    });
});
