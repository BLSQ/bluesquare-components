import { createUrl } from './fetchData';

describe('createUrl', () => {
    it('creates a url from params', () => {
        const url = createUrl({
            foo: 11,
            bar: 12,
            baz: 'hello',
        });
        expect(url).toBe('/charts/foo/11/bar/12/baz/hello');
    });

    it('skips empty values', () => {
        expect(createUrl({ foo: '', bar: null, baz: undefined })).toBe('/charts');
    });
});
