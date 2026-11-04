import type {
    ActionItem,
    NormalizedTableAction,
    PartitionedActions,
    TableAction,
} from './types';

const isVisible = (action: TableAction): boolean =>
    Boolean(action) && !(action as ActionItem).hidden;

const hasVisibleChildren = (action: ActionItem): boolean =>
    Boolean(action.children?.some(isVisible));

/**
 * An action is only renderable if it can actually do / show something:
 * a click handler, a link, a custom renderer or a (sub)menu with visible children.
 */
const isRenderable = (action: ActionItem): boolean =>
    Boolean(
        action.onClick ||
        action.url ||
        action.render ||
        action.renderInline ||
        action.renderMenuItem ||
        hasVisibleChildren(action),
    );

const isRenderableWithoutChildren = (action: ActionItem): boolean =>
    Boolean(
        action.onClick ||
        action.url ||
        action.render ||
        action.renderInline ||
        action.renderMenuItem,
    );

/**
 * Filter out falsy/hidden/non-renderable entries, drop empty submenus and
 * collapse dividers/headers so the menu never starts or ends with a divider,
 * never shows two dividers in a row and never shows a header with no item under it.
 */
export const normalizeActions = (
    actions: readonly TableAction[],
): NormalizedTableAction[] => {
    const normalized: NormalizedTableAction[] = [];
    actions.forEach((action, index) => {
        if (!isVisible(action)) {
            return;
        }
        const entry = action as Exclude<TableAction, false | null | undefined>;
        const key = entry.key ?? `${entry.type ?? 'action'}-${index}`;
        if (entry.type === 'divider' || entry.type === 'header') {
            normalized.push({ ...entry, key });
            return;
        }
        const item = entry as ActionItem;
        if (!isRenderable(item)) {
            return;
        }
        const children = item.children
            ? normalizeActions(item.children)
            : undefined;
        if (
            item.children &&
            !children?.length &&
            !isRenderableWithoutChildren(item)
        ) {
            return;
        }
        normalized.push({
            ...item,
            type: 'action',
            key,
            children: children?.length ? children : undefined,
        });
    });
    // Repeat until stable: dropping an orphan header can orphan a divider, etc.
    let cleaned = normalized;
    let changed = true;
    while (changed) {
        const next = cleaned.filter((entry, index, list) => {
            if (entry.type === 'action') {
                return true;
            }
            const prev = list[index - 1];
            const following = list[index + 1];
            if (entry.type === 'divider') {
                // No leading/trailing divider, no divider after a header, no doubles.
                return Boolean(prev && prev.type === 'action' && following);
            }
            // Header: only if a visible action follows it.
            return Boolean(following && following.type === 'action');
        });
        changed = next.length !== cleaned.length;
        cleaned = next;
    }
    return cleaned;
};

/** Dividers/headers are meaningless without menu items around them. */
const normalizeMenuOnly = (
    menu: NormalizedTableAction[],
): NormalizedTableAction[] =>
    menu.some(entry => entry.type === 'action')
        ? normalizeActions(menu as TableAction[])
        : [];

/**
 * Split actions between the inline icon row and the overflow ("burger") menu.
 * Order is preserved: `auto`/`inline` actions fill the inline row, first come
 * first served, up to `maxInline`; everything else (including `menu` actions,
 * submenus, dividers and section headers) goes to the menu in declaration order.
 */
export const partitionActions = (
    actions: readonly TableAction[],
    maxInline = 2,
): PartitionedActions => {
    const cap = Math.max(0, maxInline);
    const inline: PartitionedActions['inline'] = [];
    const menu: PartitionedActions['menu'] = [];
    normalizeActions(actions).forEach(entry => {
        if (entry.type !== 'action') {
            menu.push(entry);
            return;
        }
        const canInline =
            !entry.children &&
            entry.placement !== 'menu' &&
            Boolean(
                entry.renderInline ||
                entry.render ||
                entry.icon ||
                entry.onClick ||
                entry.url,
            );
        if (canInline && inline.length < cap) {
            inline.push(entry);
        } else {
            menu.push(entry);
        }
    });
    return { inline, menu: normalizeMenuOnly(menu) };
};
