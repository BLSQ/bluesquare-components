import { renderHook, waitFor } from '@testing-library/react';

import { usePageTitle } from './usePageTitle';

describe('usePageTitle', () => {
    it('updates document.title', async () => {
        renderHook(() => usePageTitle('Dashboard', 'IASO'));

        await waitFor(() => {
            expect(document.title).toBe('IASO Dashboard');
        });
    });
});
