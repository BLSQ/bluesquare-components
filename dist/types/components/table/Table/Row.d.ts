export function Row({ row, rowProps, subComponent, sortBy, onRowClick, cellProps: userCellProps, }: {
    row: any;
    rowProps: any;
    subComponent: any;
    sortBy: any;
    onRowClick: any;
    cellProps: any;
}): React.JSX.Element;
export namespace Row {
    namespace defaultProps {
        let subComponent: undefined;
        let sortBy: never[];
        let onRowClick: undefined;
        function cellProps(): void;
    }
    namespace propTypes {
        let sortBy_1: PropTypes.Requireable<any[]>;
        export { sortBy_1 as sortBy };
        export let row: PropTypes.Validator<object>;
        export let rowProps: PropTypes.Validator<object>;
        let subComponent_1: PropTypes.Requireable<object>;
        export { subComponent_1 as subComponent };
        let onRowClick_1: PropTypes.Requireable<object>;
        export { onRowClick_1 as onRowClick };
        let cellProps_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { cellProps_1 as cellProps };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
