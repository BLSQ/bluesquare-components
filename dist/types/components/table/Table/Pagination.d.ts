export function Pagination({ count, rowsPerPage, pageIndex, onTableParamsChange, pages, countOnTop, selectCount, }: {
    count: any;
    rowsPerPage: any;
    pageIndex: any;
    onTableParamsChange: any;
    pages: any;
    countOnTop: any;
    selectCount: any;
}): React.JSX.Element;
export namespace Pagination {
    namespace defaultProps {
        const count: number;
        const rowsPerPage: number;
        const pageIndex: number;
        const pages: number;
        const selectCount: number;
    }
    namespace propTypes {
        const count_1: PropTypes.Requireable<number>;
        export { count_1 as count };
        const rowsPerPage_1: PropTypes.Requireable<number>;
        export { rowsPerPage_1 as rowsPerPage };
        const pageIndex_1: PropTypes.Requireable<number>;
        export { pageIndex_1 as pageIndex };
        const pages_1: PropTypes.Requireable<number>;
        export { pages_1 as pages };
        export const onTableParamsChange: PropTypes.Validator<(...args: any[]) => any>;
        export const countOnTop: PropTypes.Validator<boolean>;
        const selectCount_1: PropTypes.Requireable<number>;
        export { selectCount_1 as selectCount };
    }
}
import React from "react";
import PropTypes from "prop-types";
