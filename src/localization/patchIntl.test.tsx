import { IntlShape } from 'react-intl';

import { patchIntl } from './patchIntl';

const createIntl = (): IntlShape =>
    ({
        formatMessage: (msg: { defaultMessage: string }) => msg.defaultMessage,
        formatNumber: (value: number) => String(value),
    }) as IntlShape;

describe('patchIntl', () => {
    it('formats valid messages', () => {
        const patched = patchIntl(createIntl());

        expect(
            patched.formatMessage({
                id: 'test.msg',
                defaultMessage: 'Hello',
            }),
        ).toBe('Hello');
    });

    it('returns empty string for invalid messages', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const patched = patchIntl(createIntl());

        expect(patched.formatMessage(undefined)).toBe('');
        warn.mockRestore();
    });

    it('exposes number separators', () => {
        const patched = patchIntl(createIntl());

        expect(patched.separators).toEqual({
            decimal: '.',
            thousand: ',',
        });
    });

    it('formatNullishMessage falls back to the key when missing', () => {
        const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const patched = patchIntl(createIntl());

        expect(patched.formatNullishMessage('missing.key', {}, undefined)).toBe(
            'missing.key',
        );
        warn.mockRestore();
    });
});
