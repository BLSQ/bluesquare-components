import React from 'react';
import { renderHook } from '@testing-library/react';

import { TestWrapper } from '../../../tests/helpers';
import { useHumanReadableJsonLogic } from './useHumanReadableJsonLogic';

describe('useHumanReadableJsonLogic', () => {
    it('returns a formatter function', () => {
        const fields = {
            name: { label: 'Name', type: 'text' },
        };
        const { result } = renderHook(
            () => useHumanReadableJsonLogic(fields),
            { wrapper: TestWrapper },
        );

        expect(typeof result.current).toBe('function');
        expect(result.current()).toBe('');
    });
});
