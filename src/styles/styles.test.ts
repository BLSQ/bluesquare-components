import { commonStyles } from './iaso/common';
import { mapStyles } from './iaso/map';
import { mapPopupStyles } from './iaso/mapPopup';
import { rawTheme, theme } from './iaso/theme';

describe('styles', () => {
    it('exposes theme objects', () => {
        expect(theme.palette).toBeDefined();
        expect(rawTheme.palette).toBeDefined();
    });

    it('exposes style helpers', () => {
        expect(typeof commonStyles).toBe('function');
        expect(typeof mapStyles).toBe('function');
        expect(typeof mapPopupStyles).toBe('function');
    });
});
