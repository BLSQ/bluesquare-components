<<<<<<< HEAD
import { FunctionComponent } from 'react';
type Props = {
    sortBy?: any[];
    row: Record<string, any>;
    rowProps: Record<string, any>;
    subComponent?: any;
    onRowClick?: any;
    expanded?: boolean;
    cellProps?: Function;
};
export declare const Row: FunctionComponent<Props>;
export {};
=======
export function Row({ row, rowProps, subComponent, sortBy, onRowClick, expanded, cellProps: userCellProps, }: {
    row: any;
    rowProps: any;
    subComponent?: undefined;
    sortBy?: never[] | undefined;
    onRowClick?: undefined;
    expanded?: boolean | undefined;
    cellProps?: (() => void) | undefined;
}): React.JSX.Element;
export namespace Row {
    namespace propTypes {
        let sortBy: PropTypes.Requireable<any[]>;
        let row: PropTypes.Validator<object>;
        let rowProps: PropTypes.Validator<object>;
        let subComponent: PropTypes.Requireable<object>;
        let onRowClick: PropTypes.Requireable<object>;
        let expanded: PropTypes.Requireable<boolean>;
        let cellProps: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
>>>>>>> main
