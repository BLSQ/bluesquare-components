import { ApiError, blsqFetch } from './Api';

describe('Api', () => {
    describe('ApiError', () => {
        it('stores response status and details', () => {
            const response = new Response(null, { status: 400 });
            const error = new ApiError('Bad request', response, {
                field: 'invalid',
            });
            expect(error.name).toBe('ApiError');
            expect(error.message).toBe('Bad request');
            expect(error.details).toEqual({ field: 'invalid' });
        });
    });

    describe('blsqFetch', () => {
        it('returns successful responses', async () => {
            const fetchMock = vi.fn().mockResolvedValue(
                new Response(JSON.stringify({ ok: true }), { status: 200 }),
            );
            vi.stubGlobal('fetch', fetchMock);

            const response = await blsqFetch('/api/test');
            expect(response.ok).toBe(true);
            await expect(response.json()).resolves.toEqual({ ok: true });
        });

        it('throws ApiError on failed responses', async () => {
            const fetchMock = vi.fn().mockResolvedValue(
                new Response(JSON.stringify({ message: 'nope' }), {
                    status: 500,
                }),
            );
            vi.stubGlobal('fetch', fetchMock);

            await expect(blsqFetch('/api/test')).rejects.toBeInstanceOf(
                ApiError,
            );
        });
    });

    describe('HTTP helpers', () => {
        it('getRequest parses json responses', async () => {
            const fetchMock = vi.fn().mockResolvedValue(
                new Response(JSON.stringify({ items: [] }), { status: 200 }),
            );
            vi.stubGlobal('fetch', fetchMock);

            const { getRequest } = await import('./Api');
            await expect(getRequest('/api/items')).resolves.toEqual({
                items: [],
            });
        });

        it('postRequest sends json payloads', async () => {
            const fetchMock = vi.fn().mockResolvedValue(
                new Response(JSON.stringify({ id: 1 }), { status: 200 }),
            );
            vi.stubGlobal('fetch', fetchMock);

            const { postRequest } = await import('./Api');
            await expect(postRequest('/api/items', { name: 'test' })).resolves.toEqual({
                id: 1,
            });
            expect(fetchMock).toHaveBeenCalledWith(
                '/api/items',
                expect.objectContaining({ method: 'POST' }),
            );
        });
    });
});
