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
        let page: never[];
        let sortBy: never[];
        let rowsPerPage: number;
        let subComponent: undefined;
        let onRowClick: undefined;
        function rowProps(): void;
        function cellProps(): void;
    }
    namespace propTypes {
        let page_1: PropTypes.Requireable<any[]>;
        export { page_1 as page };
        let sortBy_1: PropTypes.Requireable<any[]>;
        export { sortBy_1 as sortBy };
        export let getTableBodyProps: PropTypes.Validator<(...args: any[]) => any>;
        export let prepareRow: PropTypes.Validator<(...args: any[]) => any>;
        let rowsPerPage_1: PropTypes.Requireable<number>;
        export { rowsPerPage_1 as rowsPerPage };
        let subComponent_1: PropTypes.Requireable<object>;
        export { subComponent_1 as subComponent };
        let onRowClick_1: PropTypes.Requireable<object>;
        export { onRowClick_1 as onRowClick };
        let rowProps_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { rowProps_1 as rowProps };
        let cellProps_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { cellProps_1 as cellProps };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
