export function Body({ page, getTableBodyProps, prepareRow, subComponent, sortBy, onRowClick, rowProps: userRowProps, cellProps, }: {
    page: any;
    getTableBodyProps: any;
    prepareRow: any;
    subComponent: any;
    sortBy: any;
    onRowClick: any;
    rowProps: any;
    cellProps: any;
}): React.JSX.Element;
export namespace Body {
    namespace defaultProps {
        const page: never[];
        const sortBy: never[];
        const rowsPerPage: number;
        const subComponent: undefined;
        const onRowClick: undefined;
        function rowProps(): void;
        function cellProps(): void;
    }
    namespace propTypes {
        const page_1: PropTypes.Requireable<any[]>;
        export { page_1 as page };
        const sortBy_1: PropTypes.Requireable<any[]>;
        export { sortBy_1 as sortBy };
        export const getTableBodyProps: PropTypes.Validator<(...args: any[]) => any>;
        export const prepareRow: PropTypes.Validator<(...args: any[]) => any>;
        const rowsPerPage_1: PropTypes.Requireable<number>;
        export { rowsPerPage_1 as rowsPerPage };
        const subComponent_1: PropTypes.Requireable<object>;
        export { subComponent_1 as subComponent };
        const onRowClick_1: PropTypes.Requireable<object>;
        export { onRowClick_1 as onRowClick };
        const rowProps_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { rowProps_1 as rowProps };
        const cellProps_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { cellProps_1 as cellProps };
    }
}
import React from "react";
import PropTypes from "prop-types";
