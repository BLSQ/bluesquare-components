import type {
    ActionItem,
    CellAction,
    CellEntry,
    TableAction,
} from './types';

const isVisible = (
    action: TableAction,
): action is Exclude<TableAction, false | null | undefined> =>
    Boolean(action) && !action.hidden;

const isUsable = (action: ActionItem): boolean =>
    Boolean(action.onClick || action.href);

export const normalizeActions = (
    actions: readonly TableAction[],
): CellEntry[] => {
    const entries: CellEntry[] = [];
    actions.forEach((action, index) => {
        if (!isVisible(action)) {
            return;
        }
        if (action.type === 'divider') {
            entries.push({ type: 'divider', key: `divider-${index}` });
            return;
        }
        if (action.type === 'section') {
            entries.push({ ...action, key: `section-${index}` });
            return;
        }
        if (!isUsable(action)) {
            return;
        }
        entries.push({ ...action, type: 'action' });
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

export const partitionActions = (
    actions: readonly TableAction[],
    maxInline = 2,
): { inline: CellAction[]; menu: CellEntry[] } => {
    const cap = Math.max(0, maxInline);
    const inline: CellAction[] = [];
    const menu: CellEntry[] = [];

    normalizeActions(actions).forEach(entry => {
        const canInline =
            entry.type === 'action' && !entry.menu && Boolean(entry.icon);
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
