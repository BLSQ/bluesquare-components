import { convertObjectToUrlParams, makeRedirectionUrl } from './utils';

describe('Routing utils', () => {
    it('converts objects to url params', () => {
        expect(
            convertObjectToUrlParams({
                page: 1,
                active: true,
                ignored: undefined,
                items: [1, 2],
            }),
        ).toBe('/page/1/active/true/items/[1,2]');
    });

    it('builds redirection urls', () => {
        expect(makeRedirectionUrl('forms', { page: 2 })).toBe('/forms/page/2');
        expect(makeRedirectionUrl('home')).toBe('/home');
    });
});
