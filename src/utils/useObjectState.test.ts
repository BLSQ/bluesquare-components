import { renderHook, act } from '@testing-library/react';

import { recursiveReducer, useObjectState } from './useObjectState';

const state = {
    red: { name: 'Shiba', powerSet: { weapon: 'Katana' } },
    blue: { name: 'Ikenami', powerSet: { weapon: 'Arrow' } },
};

describe('recursiveReducer', () => {
    it('does not mutate original state', () => {
        const result = recursiveReducer(state, { red: { name: 'Updated' } });
        expect(result).not.toBe(state);
        expect(state.red.name).toBe('Shiba');
    });

    it('resets state when passed an empty object', () => {
        expect(recursiveReducer(state, {})).toEqual({});
    });

    it('updates nested values', () => {
        expect(
            recursiveReducer(state, {
                red: { powerSet: { weapon: 'New weapon' } },
            }),
        ).toEqual({
            red: { name: 'Shiba', powerSet: { weapon: 'New weapon' } },
            blue: { name: 'Ikenami', powerSet: { weapon: 'Arrow' } },
        });
    });
});

describe('useObjectState', () => {
    it('updates object state through the hook', () => {
        const { result } = renderHook(() =>
            useObjectState({ name: 'Shiba', active: false }),
        );

        act(() => {
            result.current[1]({ name: 'Updated' });
        });

        expect(result.current[0]).toEqual({ name: 'Updated', active: false });
    });
});
