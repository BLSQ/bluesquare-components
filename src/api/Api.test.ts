import {
    ApiError,
    basePostRequest,
    blsqFetch,
    deleteRequest,
    getRequest,
    getRequestImage,
    optionsRequest,
    patchRequest,
    postRequest,
    putRequest,
} from './Api';

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
            const fetchMock = vi
                .fn()
                .mockResolvedValue(
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
                new Response(JSON.stringify({ items: [] }), {
                    status: 200,
                }),
            );
            vi.stubGlobal('fetch', fetchMock);

            await expect(getRequest('/api/items')).resolves.toEqual({
                items: [],
            });
        });

        it('postRequest sends json payloads', async () => {
            const fetchMock = vi
                .fn()
                .mockResolvedValue(
                    new Response(JSON.stringify({ id: 1 }), { status: 200 }),
                );
            vi.stubGlobal('fetch', fetchMock);

            await expect(
                postRequest('/api/items', { name: 'test' }),
            ).resolves.toEqual({
                id: 1,
            });
            expect(fetchMock).toHaveBeenCalledWith(
                '/api/items',
                expect.objectContaining({ method: 'POST' }),
            );
        });

        it('basePostRequest returns null on 204 responses', async () => {
            const fetchMock = vi
                .fn()
                .mockResolvedValue(new Response(null, { status: 204 }));
            vi.stubGlobal('fetch', fetchMock);

            await expect(
                basePostRequest('/api/items', { name: 'test' }),
            ).resolves.toBeNull();
        });

        it('putRequest sends PUT payloads', async () => {
            const fetchMock = vi.fn().mockResolvedValue(
                new Response(JSON.stringify({ updated: true }), {
                    status: 200,
                }),
            );
            vi.stubGlobal('fetch', fetchMock);

            await expect(
                putRequest('/api/items/1', { name: 'updated' }),
            ).resolves.toEqual({
                updated: true,
            });
            expect(fetchMock).toHaveBeenCalledWith(
                '/api/items/1',
                expect.objectContaining({ method: 'PUT' }),
            );
        });

        it('patchRequest sends PATCH payloads', async () => {
            const fetchMock = vi.fn().mockResolvedValue(
                new Response(JSON.stringify({ patched: true }), {
                    status: 200,
                }),
            );
            vi.stubGlobal('fetch', fetchMock);

            await expect(
                patchRequest('/api/items/1', { active: true }),
            ).resolves.toEqual({
                patched: true,
            });
            expect(fetchMock).toHaveBeenCalledWith(
                '/api/items/1',
                expect.objectContaining({ method: 'PATCH' }),
            );
        });

        it('deleteRequest sends DELETE requests', async () => {
            const fetchMock = vi
                .fn()
                .mockResolvedValue(new Response(null, { status: 204 }));
            vi.stubGlobal('fetch', fetchMock);

            await expect(deleteRequest('/api/items/1')).resolves.toBe(true);
            expect(fetchMock).toHaveBeenCalledWith(
                '/api/items/1',
                expect.objectContaining({ method: 'DELETE' }),
            );
        });

        it('optionsRequest sends OPTIONS requests', async () => {
            const fetchMock = vi.fn().mockResolvedValue(
                new Response(JSON.stringify({ methods: ['GET'] }), {
                    status: 200,
                }),
            );
            vi.stubGlobal('fetch', fetchMock);

            await expect(optionsRequest('/api/items')).resolves.toEqual({
                methods: ['GET'],
            });
            expect(fetchMock).toHaveBeenCalledWith(
                '/api/items',
                expect.objectContaining({ method: 'OPTIONS' }),
            );
        });

        it('getRequestImage returns blob responses', async () => {
            const blob = new Blob(['image'], { type: 'image/png' });
            const fetchMock = vi
                .fn()
                .mockResolvedValue(new Response(blob, { status: 200 }));
            vi.stubGlobal('fetch', fetchMock);

            const image = await getRequestImage('/api/image.png');
            expect(image.size).toBeGreaterThan(0);
        });
    });
});
