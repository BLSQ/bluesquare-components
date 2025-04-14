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
        let count: number;
        let rowsPerPage: number;
        let pageIndex: number;
        let pages: number;
        let selectCount: number;
    }
    namespace propTypes {
        let count_1: PropTypes.Requireable<number>;
        export { count_1 as count };
        let rowsPerPage_1: PropTypes.Requireable<number>;
        export { rowsPerPage_1 as rowsPerPage };
        let pageIndex_1: PropTypes.Requireable<number>;
        export { pageIndex_1 as pageIndex };
        let pages_1: PropTypes.Requireable<number>;
        export { pages_1 as pages };
        export let onTableParamsChange: PropTypes.Validator<(...args: any[]) => any>;
        export let countOnTop: PropTypes.Validator<boolean>;
        let selectCount_1: PropTypes.Requireable<number>;
        export { selectCount_1 as selectCount };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
