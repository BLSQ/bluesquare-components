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
export function Body({ page, getTableBodyProps, prepareRow, subComponent, sortBy, onRowClick, rowProps: userRowProps, expanded, getObjectId, cellProps, }: {
    page?: any[] | undefined;
    getTableBodyProps: Function;
    prepareRow: Function;
    subComponent?: any;
    sortBy?: any[] | undefined;
    onRowClick?: ((row?: any, event?: any) => void) | undefined;
    rowProps?: Function | undefined;
    expanded?: any;
    getObjectId?: Function | undefined;
    cellProps?: Function | undefined;
}): React.JSX.Element;
export namespace Body {
    namespace propTypes {
        let page: PropTypes.Requireable<any[]>;
        let sortBy: PropTypes.Requireable<any[]>;
        let getTableBodyProps: PropTypes.Validator<(...args: any[]) => any>;
        let prepareRow: PropTypes.Validator<(...args: any[]) => any>;
        let rowsPerPage: PropTypes.Requireable<number>;
        let subComponent: PropTypes.Requireable<object>;
        let onRowClick: PropTypes.Requireable<object>;
        let rowProps: PropTypes.Requireable<(...args: any[]) => any>;
        let cellProps: PropTypes.Requireable<(...args: any[]) => any>;
        let expanded: PropTypes.Requireable<object>;
        let getObjectId: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
