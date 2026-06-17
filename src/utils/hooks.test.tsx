import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

import { useDebouncedCallback } from './useDebounce';
import { useSkipEffectOnMount } from './useSkipEffectOnMount';
import { useKeyPressListener } from './useKeyPressListener';
import { useTabs } from './useTabs';

const routerWrapper = ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter>{children}</MemoryRouter>
);

describe('hooks', () => {
    describe('useDebouncedCallback', () => {
        it('debounces function calls', () => {
            vi.useFakeTimers();
            const callback = vi.fn();
            const { result } = renderHook(() =>
                useDebouncedCallback(callback, 200),
            );

            act(() => {
                result.current('a');
                result.current('b');
            });

            expect(callback).not.toHaveBeenCalled();

            act(() => {
                vi.advanceTimersByTime(200);
            });

            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith('b');
            vi.useRealTimers();
        });
    });

    describe('useSkipEffectOnMount', () => {
        it('skips the effect on mount', () => {
            const effect = vi.fn();
            const { rerender } = renderHook(
                ({ value }) => useSkipEffectOnMount(effect, [value]),
                { initialProps: { value: 1 } },
            );

            expect(effect).not.toHaveBeenCalled();
            rerender({ value: 2 });
            expect(effect).toHaveBeenCalledTimes(1);
        });
    });

    describe('useKeyPressListener', () => {
        it('tracks when the configured key is pressed', () => {
            const { result } = renderHook(() => useKeyPressListener('Enter'));

            act(() => {
                document.dispatchEvent(
                    new KeyboardEvent('keydown', { key: 'Enter' }),
                );
            });

            expect(result.current).toBe(true);
        });
    });
});

describe('useTabs', () => {
    it('updates the active tab', () => {
        const { result } = renderHook(
            () => useTabs({ defaultTab: 'one' as const }),
            { wrapper: routerWrapper },
        );

        act(() => {
            result.current.handleChangeTab(null, 'two');
        });

        expect(result.current.tab).toBe('two');
    });
});
