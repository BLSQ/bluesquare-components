import type { NormalizedTableAction, PartitionedActions, TableAction } from './types';
/**
 * Filter out falsy/hidden/non-renderable entries, drop empty sections and
 * collapse dividers/headers so the menu never starts or ends with a divider,
 * never shows two dividers in a row and never shows a header with no item under it.
 */
export declare const normalizeActions: (actions: readonly TableAction[]) => NormalizedTableAction[];
/**
 * Split actions between the inline icon row and the overflow ("burger") menu.
 * Order is preserved: `auto`/`inline` actions fill the inline row, first come
 * first served, up to `maxInline`; everything else (including `menu` actions,
 * expandable sections, dividers and section headers) goes to the menu in declaration order.
 */
export declare const partitionActions: (actions: readonly TableAction[], maxInline?: number) => PartitionedActions;
