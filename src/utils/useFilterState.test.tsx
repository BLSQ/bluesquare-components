import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { vi } from 'vitest';

import { useCheckBoxFilter, useFilterState } from './useFilterState';

const routerWrapper = ({ children }: { children: React.ReactNode }) => (
    <MemoryRouter initialEntries={['/?name=']}>
        <Routes>
            <Route path="*" element={<>{children}</>} />
        </Routes>
    </MemoryRouter>
);

describe('useFilterState', () => {
    const params = { name: '' };

    it('tracks filter changes and updates search params on search', () => {
        const { result } = renderHook(
            () =>
                useFilterState({
                    baseUrl: '/forms',
                    params,
                    withPathParams: false,
                    withPagination: false,
                }),
            { wrapper: routerWrapper },
        );

        expect(result.current.filters).toEqual({ name: '' });
        expect(result.current.filtersUpdated).toBe(false);

        act(() => {
            result.current.handleChange('name', 'test');
        });

        expect(result.current.filtersUpdated).toBe(true);
        expect(result.current.filters.name).toBe('test');

        act(() => {
            result.current.handleSearch();
        });

        expect(result.current.filtersUpdated).toBe(false);
    });
});

describe('useCheckBoxFilter', () => {
    it('toggles checkbox value through handleChange', () => {
        const handleChange = vi.fn();
        const { result } = renderHook(() =>
            useCheckBoxFilter({
                keyValue: 'active',
                handleChange,
                initialValue: false,
            }),
        );

        expect(result.current.checkBoxValue).toBe(false);

        act(() => {
            result.current.handleCheckboxChange('active', true);
        });

        expect(result.current.checkBoxValue).toBe(true);
        expect(handleChange).toHaveBeenCalledWith('active', true);
    });
});
