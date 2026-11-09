import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { normalizeActions, partitionActions } from './utils.ts';

const action = (key, extra = {}) => ({
    key,
    label: key,
    icon: key,
    onClick: () => {},
    ...extra,
});

describe('normalizeActions', () => {
    it('drops falsy, hidden and unused entries', () => {
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

    it('collapses leading, trailing and doubled dividers, drops empty sections', () => {
        const result = normalizeActions([
            { type: 'divider' },
            { type: 'section', label: 'Section' },
            action('a'),
            { type: 'divider' },
            { type: 'divider' },
            action('b'),
            { type: 'divider' },
            { type: 'section', label: 'Orphan' },
        ]);
        assert.deepEqual(
            result.map(a => a.type),
            ['section', 'action', 'divider', 'action'],
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

    it('keeps items with children in the overflow', () => {
        const { inline, menu } = partitionActions(
            [
                action('parent', {
                    onClick: undefined,
                    children: [action('child')],
                }),
                action('shown'),
            ],
            2,
        );
        assert.deepEqual(
            inline.map(a => a.key),
            ['shown'],
        );
        assert.deepEqual(
            menu.map(a => a.key),
            ['parent'],
        );
        assert.deepEqual(
            menu[0].children.map(a => a.key),
            ['child'],
        );
    });

    it('keeps menu:true items in the overflow', () => {
        const { inline, menu } = partitionActions(
            [action('overflow', { menu: true }), action('shown')],
            2,
        );
        assert.deepEqual(
            inline.map(a => a.key),
            ['shown'],
        );
        assert.deepEqual(
            menu.map(a => a.key),
            ['overflow'],
        );
    });

    it('honours maxInline=0 and drops a menu that is only chrome', () => {
        const none = partitionActions([action('a'), action('b')], 0);
        assert.deepEqual(none.inline, []);
        assert.deepEqual(
            none.menu.map(a => a.key),
            ['a', 'b'],
        );

        const { inline, menu } = partitionActions(
            [{ type: 'divider' }, { type: 'section', label: 'X' }, action('a')],
            2,
        );
        assert.deepEqual(
            inline.map(a => a.key),
            ['a'],
        );
        assert.deepEqual(menu, []);
    });
});
