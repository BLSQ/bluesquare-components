import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
    convertObjectToUrlParams,
    decodeParamValue,
    encodeParamValue,
    getParamsFromPath,
    makeRedirectionUrl,
} from './utils.ts';

const ENTITIES_URL = 'entities/list';
const ENTITIES_PARAMS = ['accountId', 'search', 'order', 'page', 'pageSize'];

// Real "file active" identifier reported in IA-5540
const FILE_ACTIVE_ID = '01211/sh/20/0008e';

const roundTrip = params =>
    getParamsFromPath(
        makeRedirectionUrl(ENTITIES_URL, params),
        ENTITIES_URL,
        ENTITIES_PARAMS,
    );

describe('encodeParamValue', () => {
    it('encodes only the characters that would break a path segment', () => {
        assert.equal(
            encodeParamValue(FILE_ACTIVE_ID),
            '01211%2Fsh%2F20%2F0008e',
        );
        assert.equal(encodeParamValue('a?b#c%d\\e'), 'a%3Fb%23c%25d%5Ce');
    });

    it('keeps the other characters readable', () => {
        const readable = 'Belgique 1,2,3 & "France" é:+=@;[{}]';
        assert.equal(encodeParamValue(readable), readable);
    });
});

describe('decodeParamValue', () => {
    it('decodes percent-encoded values', () => {
        assert.equal(
            decodeParamValue('01211%2Fsh%2F20%2F0008e'),
            FILE_ACTIVE_ID,
        );
        assert.equal(
            decodeParamValue('Belgique%20%22France%22'),
            'Belgique "France"',
        );
    });

    it('returns the raw value when it is not valid percent-encoding', () => {
        assert.equal(decodeParamValue('50%'), '50%');
        assert.equal(decodeParamValue('%E0%A4%A'), '%E0%A4%A');
    });
});

describe('convertObjectToUrlParams', () => {
    it('encodes string and JSON values', () => {
        assert.equal(
            convertObjectToUrlParams({
                search: FILE_ACTIVE_ID,
                fields: { path: 'a/b' },
                page: 1,
            }),
            '/search/01211%2Fsh%2F20%2F0008e/fields/{"path":"a%2Fb"}/page/1',
        );
    });

    it('leaves urls without unsafe characters unchanged', () => {
        assert.equal(
            convertObjectToUrlParams({
                accountId: 1,
                orgUnitTypeId: '1,2,3',
                searches: [{ validation_status: 'all' }],
                isActive: true,
                empty: '',
                missing: undefined,
            }),
            '/accountId/1/orgUnitTypeId/1,2,3/searches/[{"validation_status":"all"}]/isActive/true',
        );
    });
});

describe('getParamsFromPath', () => {
    it('reads the params of the url', () => {
        assert.deepEqual(
            getParamsFromPath(
                '/entities/list/accountId/1/search/Belgium/page/2',
                ENTITIES_URL,
                ENTITIES_PARAMS,
            ),
            {
                accountId: '1',
                search: 'Belgium',
                order: undefined,
                page: '2',
                pageSize: undefined,
            },
        );
    });

    it('round-trips values containing special characters', () => {
        [
            '01211/sh/20/0008e',
            'a?b',
            'a#b',
            '50%',
            'a\\b',
            'a%2Fb',
            'Belgium & "France"',
            // Real form / org unit names
            'PMA - Qualité 13 - Lutte contre le VIH/SIDA',
            'FORMULAIRE DE VERIFICATION 5%',
            'tn %Ila%Bo Village',
            'kc Ep ki%banguiste Village', // "%ba" looks like an escape
            'hk Kabudji # Village',
            'Minkan - &\\',
            '????',
        ].forEach(search => {
            assert.deepEqual(
                roundTrip({ accountId: 1, search, page: 2 }),
                {
                    accountId: '1',
                    search,
                    order: undefined,
                    page: '2',
                    pageSize: undefined,
                },
                `search "${search}" did not survive the round trip`,
            );
        });
    });

    it('does not mistake a value for a param key', () => {
        // "page" is the value of search here, not the page key
        assert.deepEqual(roundTrip({ search: 'page', pageSize: 20 }), {
            accountId: undefined,
            search: 'page',
            order: undefined,
            page: undefined,
            pageSize: '20',
        });
    });

    it('keeps a value containing slashes in one piece', () => {
        // Each part of the value looks like a key/value pair once split on "/"
        assert.deepEqual(roundTrip({ search: 'page/2/order/name' }), {
            accountId: undefined,
            search: 'page/2/order/name',
            order: undefined,
            page: undefined,
            pageSize: undefined,
        });
    });

    it('decodes characters encoded by the browser in old urls', () => {
        assert.equal(
            getParamsFromPath(
                '/entities/list/search/Belgium%20%22France%22%20%C3%A9',
                ENTITIES_URL,
                ENTITIES_PARAMS,
            ).search,
            'Belgium "France" é',
        );
    });

    it('keeps a stray % from an old url as is', () => {
        assert.equal(
            getParamsFromPath(
                '/entities/list/search/50%/page/1',
                ENTITIES_URL,
                ENTITIES_PARAMS,
            ).search,
            '50%',
        );
    });

    it('keeps a raw % that looks like an escape from an old url as is', () => {
        // "%ba" alone isn't valid utf-8, decoding it would throw
        assert.equal(
            getParamsFromPath(
                '/entities/list/search/kc Ep ki%banguiste Village/page/1',
                ENTITIES_URL,
                ENTITIES_PARAMS,
            ).search,
            'kc Ep ki%banguiste Village',
        );
    });

    it('returns undefined when the pathname is not under baseUrl', () => {
        assert.equal(
            getParamsFromPath('/entities/listing/accountId/1', ENTITIES_URL, [
                'accountId',
            ]),
            undefined,
        );
    });

    it('returns undefined params when the url has none', () => {
        assert.deepEqual(
            getParamsFromPath('/entities/list', ENTITIES_URL, ['accountId']),
            { accountId: undefined },
        );
    });
});

// Json logic queries as built by the query builder (entities / instances filters)
const JSON_LOGICS = {
    'nested some': {
        and: [
            { '==': [{ var: 'gender' }, 'F'] },
            {
                some: [
                    { var: 'form_2' },
                    { '==': [{ var: 'residence' }, 'Bujumbura'] },
                ],
            },
        ],
    },
    'contains in a sub form': {
        some: [
            { var: 'form_1' },
            { in: ['Beau', { var: 'responsable_fosa' }] },
        ],
    },
    'is empty': {
        '!': {
            and: [
                { '!=': [{ var: 'responsable_fosa' }, ''] },
                { '!=': [{ var: 'responsable_fosa' }, null] },
            ],
        },
    },
    'numbers and dates': {
        and: [
            { '>=': [{ var: 'age__int__' }, 18] },
            { '<': [{ var: 'visit_date' }, '2026-10-19'] },
        ],
    },
    'values with special characters': {
        or: [
            { '==': [{ var: 'id' }, FILE_ACTIVE_ID] },
            { in: ['5%', { var: 'q' }] },
            { '==': [{ var: 'q' }, 'a&b=c'] },
            { '==': [{ var: 'phone' }, '+32 2 123'] },
            { '==': [{ var: 'q' }, 'a#b?c\\d'] },
            { '==': [{ var: 'q' }, 'kc Ep ki%banguiste'] },
            { '==': [{ var: 'q' }, 'Qualité "VIH/SIDA" {x}'] },
        ],
    },
};
const JSON_LOGIC_PARAMS = ['accountId', 'search', 'fieldsSearch', 'page'];

// window.location.pathname after a reload: the browser percent-encodes
// spaces, quotes, <>`{} and non-ascii characters (WHATWG path percent-encode set)
const asBrowserPathname = path =>
    path.replace(/[\x00-\x20"<>`{}]|[^\x00-\x7f]/gu, c =>
        encodeURIComponent(c),
    );

const parseFieldsSearch = path =>
    JSON.parse(
        getParamsFromPath(path, ENTITIES_URL, JSON_LOGIC_PARAMS).fieldsSearch,
    );

describe('json logic params', () => {
    Object.entries(JSON_LOGICS).forEach(([name, logic]) => {
        const url = makeRedirectionUrl(ENTITIES_URL, {
            accountId: 1,
            search: 'a/b',
            fieldsSearch: JSON.stringify(logic),
            page: 2,
        });

        it(`${name}: round-trips through in-app navigation`, () => {
            assert.deepEqual(
                getParamsFromPath(url, ENTITIES_URL, JSON_LOGIC_PARAMS),
                {
                    accountId: '1',
                    search: 'a/b',
                    fieldsSearch: JSON.stringify(logic),
                    page: '2',
                },
                url,
            );
        });

        it(`${name}: round-trips after a page reload`, () => {
            const reloaded = asBrowserPathname(url);
            assert.deepEqual(parseFieldsSearch(reloaded), logic, reloaded);
        });
    });

    it('parses an old url built without encoding', () => {
        const logic = JSON_LOGICS['nested some'];
        const oldUrl = asBrowserPathname(
            `/entities/list/fieldsSearch/${JSON.stringify(logic)}/page/1`,
        );
        assert.deepEqual(parseFieldsSearch(oldUrl), logic, oldUrl);
    });
});
