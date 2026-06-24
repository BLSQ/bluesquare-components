import React from 'react';
import { renderHook, act } from '@testing-library/react';

import { LocaleProvider, useLocale } from './useLocale';

const wrapper = ({ children }: { children: React.ReactNode }) => (
    <LocaleProvider>{children}</LocaleProvider>
);

describe('useLocale', () => {
    it('defaults to en and allows locale changes', () => {
        const { result } = renderHook(() => useLocale(), { wrapper });

        expect(result.current.locale).toBe('en');

        act(() => {
            result.current.setLocale('fr');
        });

        expect(result.current.locale).toBe('fr');
    });
});
