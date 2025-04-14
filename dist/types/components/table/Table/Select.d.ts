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
export function Select({ multiSelect, selectionActions, setTableSelection, selection, selectionActionMessage, selectAllCount, }: {
    multiSelect: any;
    selectionActions: any;
    setTableSelection: any;
    selection: any;
    selectionActionMessage: any;
    selectAllCount: any;
}): React.JSX.Element;
export namespace Select {
    namespace defaultProps {
        export let selectAllCount: number;
        export let multiSelect: boolean;
        export let selectionActions: never[];
        export { selectionInitialState as selection };
        export function setTableSelection(): null;
        export let selectionActionMessage: null;
    }
    namespace propTypes {
        let selectAllCount_1: PropTypes.Requireable<number>;
        export { selectAllCount_1 as selectAllCount };
        let multiSelect_1: PropTypes.Requireable<boolean>;
        export { multiSelect_1 as multiSelect };
        let selectionActions_1: PropTypes.Requireable<any[]>;
        export { selectionActions_1 as selectionActions };
        let setTableSelection_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { setTableSelection_1 as setTableSelection };
        export let selection: PropTypes.Requireable<object>;
        let selectionActionMessage_1: PropTypes.Requireable<string>;
        export { selectionActionMessage_1 as selectionActionMessage };
    }
}
import React from 'react';
import { selectionInitialState } from '../../../utils/tableUtils';
import PropTypes from 'prop-types';
