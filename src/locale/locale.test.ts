import { english, french } from './index';

describe('locale', () => {
    it('exports translation bundles', () => {
        expect(Object.keys(english).length).toBeGreaterThan(0);
        expect(Object.keys(french).length).toBeGreaterThan(0);
    });
});
