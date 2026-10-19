import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getTableUrl } from './tableUrl.ts';

const searchOf = url =>
    new URL(url, 'http://localhost').searchParams.get('search');

describe('getTableUrl', () => {
    it('builds the api url from the params', () => {
        assert.equal(
            getTableUrl('instances', {
                limit: 20,
                page: 1,
                empty: '',
                missing: undefined,
            }),
            '/api/instances/?&limit=20&page=1',
        );
    });

    it('keeps special characters of the values', () => {
        [
            'VIH/SIDA',
            'Minkan - &\\',
            'hk Kabudji # Village',
            'FORMULAIRE DE VERIFICATION 5%',
            'a+b',
            'kc Ep ki%banguiste Village',
        ].forEach(search => {
            assert.equal(
                searchOf(getTableUrl('instances', { search, page: 1 })),
                search,
                `search "${search}" was altered in the query string`,
            );
        });
    });

    it('does not let a value add params to the query string', () => {
        const url = getTableUrl('instances', { search: 'a&page=99', page: 1 });

        assert.equal(
            new URL(url, 'http://localhost').searchParams.get('page'),
            '1',
        );
    });

    it('keeps json values readable by the backend', () => {
        const searches = JSON.stringify([
            { search: 'VIH&SIDA', validation_status: 'all' },
        ]);
        const url = getTableUrl('orgunits', { searches });

        assert.equal(
            new URL(url, 'http://localhost').searchParams.get('searches'),
            searches,
        );
    });

    it('keeps json logic values readable by the backend', () => {
        const jsonContent = JSON.stringify({
            or: [
                { '==': [{ var: 'id' }, '01211/sh/20/0008e'] },
                { in: ['5%', { var: 'q' }] },
                { '==': [{ var: 'q' }, 'a&b=c'] },
                { '==': [{ var: 'phone' }, '+32 2 123'] },
                { '==': [{ var: 'q' }, 'a#b?c\\d'] },
                { '==': [{ var: 'q' }, 'Qualité "VIH/SIDA" {x}'] },
            ],
        });
        const url = getTableUrl('instances', { jsonContent, page: 1 });
        const params = new URL(url, 'http://localhost').searchParams;

        assert.equal(params.get('jsonContent'), jsonContent, url);
        assert.equal(params.get('page'), '1', url);
    });

    it('adds the export flag and location limit', () => {
        assert.equal(
            getTableUrl(
                'orgunits',
                { page: 1, locationLimit: 3000 },
                true,
                'xlsx',
                true,
            ),
            '/api/orgunits/?&xlsx=true&asLocation=true&limit=3000',
        );
    });
});
