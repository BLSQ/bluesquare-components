import { FunctionComponent } from 'react';
/**
 * @param {Object} props
 * @param {Array} [props.page]
 * @param {Function} props.getTableBodyProps
 * @param {Function} props.prepareRow
 * @param {any} [props.subComponent]
 * @param {Array} [props.sortBy]
 * @param {(row?: any, event?: any) => void} [props.onRowClick]
 * @param {Function} [props.rowProps]
 * @param {Object} [props.expanded]
 * @param {Function} [props.getObjectId]
 * @param {Function} [props.cellProps]
 */
type Props = {
    getTableBodyProps: () => Record<string, any>;
    prepareRow: (row: any) => void;
    page?: any[];
    sortBy?: any[];
    rowsPerPage?: number;
    subComponent?: any;
    onRowClick?: (row?: any, event?: any) => void;
    rowProps?: (row: any) => Record<string, any>;
    cellProps?: (cell: any) => Record<string, any>;
    expanded?: Record<string, any>;
    getObjectId?: (obj: any) => string;
};
export declare const Body: FunctionComponent<Props>;
export {};
