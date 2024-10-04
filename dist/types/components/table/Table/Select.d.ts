export function getSelectionCol(selection: any, setTableSelection: any, count: any, formatMessage: any, getIsSelectionDisabled?: () => boolean): {
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
export function Select({ count, multiSelect, selectionActions, setTableSelection, selection, selectionActionMessage, }: {
    count: any;
    multiSelect: any;
    selectionActions: any;
    setTableSelection: any;
    selection: any;
    selectionActionMessage: any;
}): React.JSX.Element;
export namespace Select {
    namespace defaultProps {
        export const count: number;
        export const multiSelect: boolean;
        export const selectionActions: never[];
        export { selectionInitialState as selection };
        export function setTableSelection(): null;
        export const selectionActionMessage: null;
    }
    namespace propTypes {
        const count_1: PropTypes.Requireable<number>;
        export { count_1 as count };
        const multiSelect_1: PropTypes.Requireable<boolean>;
        export { multiSelect_1 as multiSelect };
        const selectionActions_1: PropTypes.Requireable<any[]>;
        export { selectionActions_1 as selectionActions };
        const setTableSelection_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { setTableSelection_1 as setTableSelection };
        export const selection: PropTypes.Requireable<object>;
        const selectionActionMessage_1: PropTypes.Requireable<string>;
        export { selectionActionMessage_1 as selectionActionMessage };
    }
}
import React from "react";
import { selectionInitialState } from "../../../utils/tableUtils";
import PropTypes from "prop-types";
