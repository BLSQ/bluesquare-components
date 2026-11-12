import { FunctionComponent, ReactNode } from 'react';
export type TableToolbarProps = {
    count?: number;
    /** Column picker control. Hidden when omitted. */
    columnsSelect?: ReactNode;
    /** Download control (e.g. a menu with multiple formats). Hidden when omitted. */
    download?: ReactNode;
    /** Extra actions rendered after columns/download. */
    extraActions?: ReactNode;
};
/**
 * Shared table header: result count on the left, optional column/download actions on the right.
 * Pass nodes for columnsSelect / download only when they should be shown.
 *
 * When used above a table, set `showCount={false}` on that table (and avoid `countOnTop`)
 * so the result count is not duplicated.
 */
export declare const TableToolbar: FunctionComponent<TableToolbarProps>;
