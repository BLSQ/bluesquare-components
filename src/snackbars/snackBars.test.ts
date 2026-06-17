import * as SnackBar from './snackBars';
import {
    buttonReloadMessageKey,
    errorSnackBar,
    formErrorMessageKey,
    formSuccessFullMessageKey,
    formWarningMessageKey,
    reloadPageMessageKey,
    reloadPageSnackBar,
    succesfullSnackBar,
    warningSnackBar,
} from './snackBars';

describe('snackBars', () => {
    it('exports snackbar helpers', () => {
        expect(typeof warningSnackBar).toBe('function');
        expect(typeof errorSnackBar).toBe('function');
        expect(typeof succesfullSnackBar).toBe('function');
        expect(typeof reloadPageSnackBar).toBe('function');
    });

    it('exports message keys', () => {
        expect(reloadPageMessageKey).toBeDefined();
        expect(buttonReloadMessageKey).toBeDefined();
        expect(formWarningMessageKey).toBeDefined();
        expect(formErrorMessageKey).toBeDefined();
        expect(formSuccessFullMessageKey).toBeDefined();
    });

    it('re-exports namespace helpers', () => {
        expect(SnackBar.warningSnackBar).toBe(warningSnackBar);
    });

    it('builds snackbar payloads with expected variants', () => {
        expect(warningSnackBar('warn', 'Watch out', 'warn')).toMatchObject({
            messageKey: 'warn',
            messageObject: 'Watch out',
            options: { variant: 'warning', persist: true },
        });
        expect(errorSnackBar('err', 'Failed', 'trace')).toMatchObject({
            messageKey: 'err',
            messageObject: 'Failed',
            errorLog: 'trace',
            options: { variant: 'error', persist: true },
        });
        expect(succesfullSnackBar('ok', 'Done')).toMatchObject({
            messageKey: 'ok',
            messageObject: 'Done',
            options: { variant: 'success' },
        });
        expect(reloadPageSnackBar()).toMatchObject({
            messageKey: reloadPageMessageKey,
            type: 'reload',
            options: { variant: 'warning', persist: true },
        });
    });
});
