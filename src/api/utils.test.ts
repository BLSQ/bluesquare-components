import { cleanupParams } from './utils';

describe('cleanupParams', () => {
    it('removes undefined values', () => {
        expect(cleanupParams({ a: 1, b: undefined, c: 'x' })).toEqual({
            a: 1,
            c: 'x',
        });
    });
});
