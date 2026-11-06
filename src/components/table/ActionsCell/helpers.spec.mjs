import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createElement } from 'react';
import { labelOf, linkProps, withIconSize } from './helpers.ts';

const InAppLink = () => null;

describe('withIconSize', () => {
    it('returns the icon unchanged when size is missing or it is not an element', () => {
        const icon = 'plain';
        assert.equal(withIconSize(icon), icon);
        assert.equal(withIconSize(icon, 'small'), icon);
        assert.equal(withIconSize(null, 'small'), null);
    });

    it('sets fontSize when the element has none', () => {
        const icon = createElement('span', { className: 'i' });
        const result = withIconSize(icon, 'small');
        assert.notEqual(result, icon);
        assert.equal(result.props.fontSize, 'small');
        assert.equal(result.props.className, 'i');
    });

    it('keeps an explicit fontSize', () => {
        const icon = createElement('span', { fontSize: 'large' });
        const result = withIconSize(icon, 'small');
        assert.equal(result, icon);
        assert.equal(result.props.fontSize, 'large');
    });
});

describe('linkProps', () => {
    it('returns nothing when the action has no href', () => {
        assert.deepEqual(linkProps({ key: 'edit' }, InAppLink), {});
    });

    it('uses a download anchor when download is set', () => {
        assert.deepEqual(
            linkProps(
                { key: 'csv', href: '/export.csv', download: true },
                InAppLink,
            ),
            { component: 'a', href: '/export.csv', download: true },
        );
    });

    it('uses the in-app link otherwise', () => {
        assert.deepEqual(
            linkProps({ key: 'detail', href: '/items/1' }, InAppLink),
            { component: InAppLink, to: '/items/1' },
        );
    });
});

describe('labelOf', () => {
    const formatMessage = message => `intl:${message.id}`;

    it('returns an empty string when the label is missing', () => {
        assert.equal(labelOf(formatMessage), '');
        assert.equal(labelOf(formatMessage, ''), '');
        assert.equal(labelOf(formatMessage, undefined), '');
    });

    it('returns a string label as-is', () => {
        assert.equal(labelOf(formatMessage, 'Edit'), 'Edit');
    });

    it('formats an intl message', () => {
        assert.equal(
            labelOf(formatMessage, { id: 'blsq.edit', defaultMessage: 'Edit' }),
            'intl:blsq.edit',
        );
    });
});
