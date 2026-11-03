import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
    areFilterValuesEqual,
    countActiveFilters,
    formatFilterValue,
    getActiveFilters,
    getClearedFilterValues,
    groupFilterFieldsBySection,
    isEmptyFilterValue,
    isFilterFieldActive,
    removeFilterFromValues,
    sanitizeFilterFields,
    splitActiveFilters,
    validateFilterFields,
} from './utils.ts';

const FIELDS = [
    { key: 'search', label: 'Search', type: 'search' },
    { key: 'projects', label: 'Project', type: 'select', multi: true, section: 'Scope', options: [{ value: 1, label: 'LQAS Bas Uele' }, { value: 2, label: 'RRT Survey' }, { value: 3, label: 'planning_collecte_gps' }] },
    { key: 'team', label: 'Team', type: 'select', section: 'Scope', options: [{ value: 'a', label: 'Team A' }] },
    { key: 'count', label: 'Count', type: 'number' },
    { key: 'flag', label: 'Flag', type: 'checkbox' },
    { key: 'period', label: 'Period', type: 'daterange' },
    { key: 'hidden', label: 'Hidden', type: 'text', visible: false },
];

describe('isEmptyFilterValue', () => {
    it('treats nullish, blank and empty arrays as empty, but not 0/false', () => {
        [undefined, null, '', '  ', []].forEach(v => assert.equal(isEmptyFilterValue(v), true));
        [0, false, 'a', [1]].forEach(v => assert.equal(isEmptyFilterValue(v), false));
    });
});

describe('isFilterFieldActive', () => {
    it('keeps 0 as an active number filter', () => {
        assert.equal(isFilterFieldActive(FIELDS[3], 0), true);
        assert.equal(isFilterFieldActive(FIELDS[3], undefined), false);
    });
    it('only activates a checkbox when checked', () => {
        assert.equal(isFilterFieldActive(FIELDS[4], true), true);
        assert.equal(isFilterFieldActive(FIELDS[4], false), false);
    });
    it('activates a daterange with only one bound', () => {
        assert.equal(isFilterFieldActive(FIELDS[5], { from: '2026-01-01' }), true);
        assert.equal(isFilterFieldActive(FIELDS[5], {}), false);
    });
    it('never throws on a broken custom isActive', () => {
        assert.equal(isFilterFieldActive({ key: 'x', label: 'X', isActive: () => { throw new Error('boom'); } }, 1), false);
    });
});

describe('getActiveFilters', () => {
    it('builds chips with option labels, incl. comma-joined multi values (IASO urls)', () => {
        const active = getActiveFilters(FIELDS, { projects: '1,3', team: 'a', count: 0, flag: false });
        assert.deepEqual(active.map(a => [a.key, a.displayValue]), [
            ['projects', 'LQAS Bas Uele, planning_collecte_gps'],
            ['team', 'Team A'],
            ['count', '0'],
        ]);
    });
    it('survives garbage input', () => {
        assert.deepEqual(getActiveFilters(null, null), []);
        assert.deepEqual(getActiveFilters(FIELDS, undefined), []);
        assert.equal(countActiveFilters(undefined, { search: 'x' }), 0);
    });
    it('falls back to raw values when no option matches', () => {
        assert.equal(formatFilterValue(FIELDS[1], [99]), '99');
    });
});

describe('clear / remove', () => {
    it('clears to emptyValue and keeps unknown keys', () => {
        assert.deepEqual(getClearedFilterValues(FIELDS, { search: 'x', other: 1 }), {
            other: 1, search: undefined, projects: undefined, team: undefined, count: undefined, flag: undefined, period: undefined, hidden: undefined,
        });
    });
    it('removes a single filter', () => {
        assert.equal(removeFilterFromValues({ team: 'a', search: 'x' }, 'team').team, undefined);
    });
});

describe('splitActiveFilters (+N MORE)', () => {
    it('splits beyond maxVisible', () => {
        assert.deepEqual(splitActiveFilters([1, 2, 3, 4, 5], 3), { visible: [1, 2, 3], hidden: [4, 5], hiddenCount: 2 });
        assert.deepEqual(splitActiveFilters(null, 3), { visible: [], hidden: [], hiddenCount: 0 });
    });
});

describe('sanitize / validate', () => {
    it('drops duplicates and keyless fields, first wins', () => {
        assert.deepEqual(sanitizeFilterFields([FIELDS[0], FIELDS[0], { label: 'no key' }, null]).map(f => f.key), ['search']);
    });
    it('reports config mistakes without throwing', () => {
        assert.ok(validateFilterFields([{ key: 's', label: 'S', type: 'select' }]).some(i => i.includes('without options')));
        assert.deepEqual(validateFilterFields(FIELDS), []);
    });
});

describe('grouping & equality', () => {
    it('groups visible fields by section in declaration order', () => {
        const groups = groupFilterFieldsBySection(FIELDS, {}, [{ key: 'Scope', label: 'Scope' }]);
        assert.deepEqual(groups.map(g => [g.key, g.fields.map(f => f.key)]), [
            ['', ['search', 'count', 'flag', 'period']],
            ['Scope', ['projects', 'team']],
        ]);
    });
    it('compares values regardless of key order', () => {
        assert.equal(areFilterValuesEqual({ a: 1, b: [1, 2] }, { b: [1, 2], a: 1 }), true);
        assert.equal(areFilterValuesEqual({ a: 1 }, { a: 2 }), false);
    });
});
