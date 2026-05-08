import React, { FunctionComponent } from 'react';
declare const onSelect: ({ isSelected, item, selection, setTableSelection, count, }: {
    isSelected: any;
    item: any;
    selection: any;
    setTableSelection: any;
    count: any;
}) => void;
declare const isItemSelected: (item: any, selection: any, selector?: string) => boolean;
declare const getSelectionCol: (selection: any, setTableSelection: any, count: any, formatMessage: any, getIsSelectionDisabled?: (row: any) => boolean) => {
    Header: any;
    accessor: string;
    id: string;
    width: number;
    sortable: boolean;
    Cell: (settings: any) => React.JSX.Element;
};
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
type Props = {
    selectAllCount?: number;
    multiSelect?: boolean;
    selectionActions?: any[];
    setTableSelection?: Function;
    selection?: object;
    selectionActionMessage?: string;
};
declare const Select: FunctionComponent<Props>;
export { getSelectionCol, isItemSelected, onSelect, Select };
