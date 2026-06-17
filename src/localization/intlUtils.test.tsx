import { renderHook } from '@testing-library/react';

import { textPlaceholder } from '../constants/iaso/uiConstants';
import { TestWrapper } from '../tests/helpers';
import {
    displayDateFromTimestamp,
    translateOptions,
    useTranslatedOptions,
} from './intlUtils';

describe('intlUtils', () => {
    const formatMessage = (msg: { id: string; defaultMessage: string }) =>
        msg.defaultMessage;

    it('translateOptions translates message descriptors', () => {
        const options = [
            { value: 1, label: { id: 'test.label', defaultMessage: 'Label' } },
            { value: 2, label: 'Plain' },
        ];
        expect(translateOptions(options, formatMessage)).toEqual([
            { value: 1, label: 'Label' },
            { value: 2, label: 'Plain' },
        ]);
    });

    it('displayDateFromTimestamp formats unix timestamps', () => {
        const formatted = displayDateFromTimestamp(1_704_067_200);
        expect(formatted).not.toBe(textPlaceholder);
    });

    it('displayDateFromTimestamp returns placeholder when empty', () => {
        expect(displayDateFromTimestamp()).toBe(textPlaceholder);
    });

    it('useTranslatedOptions translates option labels', () => {
        const { result } = renderHook(
            () =>
                useTranslatedOptions([
                    {
                        value: 1,
                        label: { id: 'test.label', defaultMessage: 'Label' },
                    },
                ]),
            { wrapper: TestWrapper },
        );

        expect(result.current[0].label).toBe('Label');
    });
});
