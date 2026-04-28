export type SelectionObject = {
    selectedItems: any[];
    unSelectedItems: any[];
    selectAll: boolean;
    selectCount: number;
};
export function getSelectionCol(selection: any, setTableSelection: any, count: any, formatMessage: any, getIsSelectionDisabled?: (row: any) => boolean): {
    Header: any;
    accessor: string;
    id: string;
    width: number;
    sortable: boolean;
    Cell: (settings: any) => React.JSX.Element;
};
export function isItemSelected(item: any, selection: any, selector?: string): boolean;
export function onSelect({ isSelected, item, selection, setTableSelection, count, }: {
    isSelected: any;
    item: any;
    selection: any;
    setTableSelection: any;
    count: any;
}): void;
/**
 * @typedef {Object} SelectionObject
 * @property {Array} selectedItems
 * @property {Array} unSelectedItems
 * @property {boolean} selectAll
 * @property {number} selectCount
 */
/**
 * @param {Object} props
 * @param {boolean} [props.multiSelect]
 * @param {Array} [props.selectionActions]
 * @param {(selectionType: string, items: Array<any>, totalCount?: number) => any} [props.setTableSelection]
 * @param {SelectionObject|any} [props.selection]
 * @param {string|null} [props.selectionActionMessage]
 * @param {number} [props.selectAllCount]
 */
export function Select({ multiSelect, selectionActions, setTableSelection, selection, selectionActionMessage, selectAllCount, }: {
    multiSelect?: boolean | undefined;
    selectionActions?: any[] | undefined;
    setTableSelection?: ((selectionType: string, items: Array<any>, totalCount?: number) => any) | undefined;
    selection?: SelectionObject | any;
    selectionActionMessage?: string | null | undefined;
    selectAllCount?: number | undefined;
}): React.JSX.Element;
export namespace Select {
    namespace propTypes {
        let selectAllCount: PropTypes.Requireable<number>;
        let multiSelect: PropTypes.Requireable<boolean>;
        let selectionActions: PropTypes.Requireable<any[]>;
        let setTableSelection: PropTypes.Requireable<(...args: any[]) => any>;
        let selection: PropTypes.Requireable<object>;
        let selectionActionMessage: PropTypes.Requireable<string>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
