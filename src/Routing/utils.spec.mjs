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
