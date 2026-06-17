import * as IasoChipColors from './iaso/chipColors';
import * as IasoUiConstants from './iaso/uiConstants';
import {
    MENU_HEIGHT_WITHOUT_TABS,
    MENU_HEIGHT_WITH_TABS,
    SIDEBAR_WIDTH,
    textPlaceholder,
} from './iaso/uiConstants';

describe('constants', () => {
    it('exports chip color constants', () => {
        expect(Object.keys(IasoChipColors).length).toBeGreaterThan(0);
    });

    it('exports ui constants', () => {
        expect(IasoUiConstants.MENU_HEIGHT_WITH_TABS).toBeDefined();
        expect(MENU_HEIGHT_WITH_TABS).toBe(
            IasoUiConstants.MENU_HEIGHT_WITH_TABS,
        );
        expect(MENU_HEIGHT_WITHOUT_TABS).toBeDefined();
        expect(SIDEBAR_WIDTH).toBeDefined();
        expect(textPlaceholder).toBeDefined();
    });
});
