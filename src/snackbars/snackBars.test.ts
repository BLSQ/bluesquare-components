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
});
