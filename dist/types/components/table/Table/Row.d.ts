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
        const subComponent: undefined;
        const sortBy: never[];
        const onRowClick: undefined;
        function cellProps(): void;
    }
    namespace propTypes {
        const sortBy_1: PropTypes.Requireable<any[]>;
        export { sortBy_1 as sortBy };
        export const row: PropTypes.Validator<object>;
        export const rowProps: PropTypes.Validator<object>;
        const subComponent_1: PropTypes.Requireable<object>;
        export { subComponent_1 as subComponent };
        const onRowClick_1: PropTypes.Requireable<object>;
        export { onRowClick_1 as onRowClick };
        const cellProps_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { cellProps_1 as cellProps };
    }
}
import React from "react";
import PropTypes from "prop-types";
