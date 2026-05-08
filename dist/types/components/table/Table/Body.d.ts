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
    getTableBodyProps: Function;
    prepareRow: Function;
    page?: any[];
    sortBy?: any[];
    rowsPerPage?: number;
    subComponent?: Function | Record<string, any>;
    onRowClick?: (row?: any, event?: any) => void;
    rowProps?: Function;
    cellProps?: Function;
    expanded?: Record<string, any>;
    getObjectId?: Function;
};
export declare const Body: FunctionComponent<Props>;
export {};
