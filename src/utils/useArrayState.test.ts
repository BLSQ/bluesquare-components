import { renderHook, act } from '@testing-library/react';

import { arrayReducer, useArrayState } from './useArrayState';

describe('arrayReducer', () => {
    it('updates a single index', () => {
        expect(arrayReducer([0, 1, 2], { index: 1, value: 3 })).toEqual([
            0, 3, 2,
        ]);
    });

    it('replaces the whole array', () => {
        expect(arrayReducer([0, 1], { index: 'all', value: [4, 5] })).toEqual([
            4, 5,
        ]);
    });
});

describe('useArrayState', () => {
    it('updates array state through the hook', () => {
        const { result } = renderHook(() => useArrayState([0, 1, 2]));

        act(() => {
            result.current[1]({ index: 1, value: 3 });
        });

        expect(result.current[0]).toEqual([0, 3, 2]);
    });
});
