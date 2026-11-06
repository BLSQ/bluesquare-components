import type {
    ActionDivider,
    ActionItem,
    ActionSection,
    CellAction,
    CellEntry,
    TableAction,
} from './types';

const isPresent = (
    action: TableAction,
): action is ActionItem | ActionDivider | ActionSection =>
    action != null && action !== false;

const isDivider = (
    action: ActionItem | ActionDivider | ActionSection,
): action is ActionDivider => 'type' in action && action.type === 'divider';

const isSection = (
    action: ActionItem | ActionDivider | ActionSection,
): action is ActionSection => 'type' in action && action.type === 'section';

export const normalizeActions = (
    actions: readonly TableAction[],
): CellEntry[] => {
    const entries: CellEntry[] = [];
    actions.forEach((action, index) => {
        if (!isPresent(action) || action.hidden) {
            return;
        }
        if (isDivider(action)) {
            entries.push({ type: 'divider', key: `divider-${index}` });
            return;
        }
        if (isSection(action)) {
            entries.push({ ...action, key: `section-${index}` });
            return;
        }
        const children = action.children
            ? normalizeActions(action.children)
            : undefined;
        if (!action.onClick && !action.href && !children?.length) {
            return;
        }
        entries.push({
            ...action,
            type: 'action',
            children: children?.length ? children : undefined,
        });
    });

    let list = entries;
    let changed = true;
    while (changed) {
        const next = list.filter((entry, index, all) => {
            if (entry.type === 'action') {
                return true;
            }
            const prev = all[index - 1];
            const following = all[index + 1];
            if (entry.type === 'divider') {
                return Boolean(prev && prev.type === 'action' && following);
            }
            return Boolean(following && following.type === 'action');
        });
        changed = next.length !== list.length;
        list = next;
    }
    return list;
};

/** Split actions into inline icon buttons and a ⋮ overflow menu.
 *  Only leaf actions with an icon can be inline (no children, not `menu: true`),
 *  up to `maxInline`. Everything else goes to the menu; a menu with no real
 *  action (only dividers/sections) is dropped. */
export const partitionActions = (
    actions: readonly TableAction[],
    maxInline = 2,
): { inline: CellAction[]; menu: CellEntry[] } => {
    const cap = Math.max(0, maxInline);
    const inline: CellAction[] = [];
    const menu: CellEntry[] = [];

    normalizeActions(actions).forEach(entry => {
        const canInline =
            entry.type === 'action' &&
            !entry.menu &&
            !entry.children?.length &&
            Boolean(entry.icon);
        if (canInline && inline.length < cap) {
            inline.push(entry);
        } else {
            menu.push(entry);
        }
    });

    return {
        inline,
        menu: menu.some(entry => entry.type === 'action')
            ? normalizeActions(menu as TableAction[])
            : [],
    };
};
