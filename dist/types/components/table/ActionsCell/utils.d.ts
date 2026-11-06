import type { CellAction, CellEntry, TableAction } from './types';
export declare const normalizeActions: (actions: readonly TableAction[]) => CellEntry[];
/** Split actions into inline icon buttons and a ⋮ overflow menu.
 *  Only leaf actions with an icon can be inline (no children, not `menu: true`),
 *  up to `maxInline`. Everything else goes to the menu; a menu with no real
 *  action (only dividers/sections) is dropped. */
export declare const partitionActions: (actions: readonly TableAction[], maxInline?: number) => {
    inline: CellAction[];
    menu: CellEntry[];
};
