import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { normalizeActions, partitionActions } from './utils.ts';

const action = (key, extra = {}) => ({
    key,
    label: key,
    onClick: () => {},
    ...extra,
});

describe('normalizeActions', () => {
    it('drops falsy, hidden and non-renderable entries', () => {
        const result = normalizeActions([
            false,
            null,
            undefined,
            action('hidden', { hidden: true }),
            { key: 'empty', label: 'Empty' },
            action('kept'),
        ]);
        assert.deepEqual(
            result.map(a => a.key),
            ['kept'],
        );
    });

    it('collapses leading, trailing and doubled dividers, drops orphan headers', () => {
        const result = normalizeActions([
            { type: 'divider' },
            { type: 'header', label: 'Section' },
            action('a'),
            { type: 'divider' },
            { type: 'divider' },
            action('b'),
            { type: 'divider' },
            { type: 'header', label: 'Orphan' },
        ]);
        assert.deepEqual(
            result.map(a => a.type),
            ['header', 'action', 'divider', 'action'],
        );
    });

    it('keeps a header followed by an action and drops empty submenus', () => {
        const result = normalizeActions([
            { type: 'header', label: 'Section' },
            action('a'),
            action('parent', {
                onClick: undefined,
                children: [action('child', { hidden: true })],
            }),
        ]);
        assert.deepEqual(
            result.map(a => a.key),
            ['header-0', 'a'],
        );
    });
});

describe('partitionActions', () => {
    it('shows at most maxInline icons and spills the rest to the menu', () => {
        const { inline, menu } = partitionActions(
            [action('a'), action('b'), action('c'), action('d')],
            2,
        );
        assert.deepEqual(
            inline.map(a => a.key),
            ['a', 'b'],
        );
        assert.deepEqual(
            menu.map(a => a.key),
            ['c', 'd'],
        );
    });

    it('respects explicit placement and forces submenus into the menu', () => {
        const { inline, menu } = partitionActions(
            [
                action('menu-only', { placement: 'menu' }),
                action('submenu', { children: [action('child')] }),
                action('inline-only', { placement: 'inline' }),
            ],
            2,
        );
        assert.deepEqual(
            inline.map(a => a.key),
            ['inline-only'],
        );
        assert.deepEqual(
            menu.map(a => a.key),
            ['menu-only', 'submenu'],
        );
    });

    it('spills explicit inline actions beyond maxInline and honours maxInline=0', () => {
        const spilled = partitionActions(
            [
                action('a', { placement: 'inline' }),
                action('b', { placement: 'inline' }),
            ],
            1,
        );
        assert.deepEqual(
            spilled.inline.map(a => a.key),
            ['a'],
        );
        assert.deepEqual(
            spilled.menu.map(a => a.key),
            ['b'],
        );

        const none = partitionActions([action('a'), action('b')], 0);
        assert.deepEqual(none.inline, []);
        assert.deepEqual(
            none.menu.map(a => a.key),
            ['a', 'b'],
        );
    });

    it('returns an empty menu when there is nothing to put in it', () => {
        const { inline, menu } = partitionActions(
            [{ type: 'divider' }, action('a')],
            2,
        );
        assert.deepEqual(
            inline.map(a => a.key),
            ['a'],
        );
        assert.deepEqual(menu, []);
    });
});
