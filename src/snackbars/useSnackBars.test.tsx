import { renderHook, act, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

import { TestWrapper } from '../tests/helpers';
import { EventDispatcher } from './EventDispatcher';
import { useSnackBars, useTranslateMessage } from './useSnackBars';

const { enqueueSnackbar } = vi.hoisted(() => ({
    enqueueSnackbar: vi.fn(),
}));

vi.mock('notistack', async importOriginal => {
    const actual = await importOriginal<typeof import('notistack')>();
    return {
        ...actual,
        useSnackbar: () => ({ enqueueSnackbar }),
    };
});

describe('useSnackBars', () => {
    beforeEach(() => {
        enqueueSnackbar.mockClear();
    });

    it('useTranslateMessage resolves message objects', () => {
        const { result } = renderHook(() => useTranslateMessage(), {
            wrapper: TestWrapper,
        });

        expect(
            result.current({
                id: '1',
                key: 'k',
                messageKey: '',
                messageObject: { id: 'test.msg', defaultMessage: 'Saved' },
                options: {},
            }),
        ).toBe('Saved');
    });

    it('useSnackBars enqueues snackbars on dispatcher events', async () => {
        const dispatcher = new EventDispatcher();

        renderHook(() => useSnackBars(dispatcher), { wrapper: TestWrapper });

        act(() => {
            dispatcher.dispatch('snackbar', {
                id: '1',
                key: 'k',
                messageKey: '',
                messageObject: { id: 'test.msg', defaultMessage: 'Saved' },
                options: {},
            });
        });

        await waitFor(() => {
            expect(enqueueSnackbar).toHaveBeenCalledWith(
                'Saved',
                expect.objectContaining({ key: '1' }),
            );
        });
    });
});
