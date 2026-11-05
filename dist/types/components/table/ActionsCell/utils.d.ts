import type { CellAction, CellEntry, TableAction } from './types';
export declare const normalizeActions: (actions: readonly TableAction[]) => CellEntry[];
export declare const partitionActions: (actions: readonly TableAction[], maxInline?: number) => {
    inline: CellAction[];
    menu: CellEntry[];
};
