export function Pagination({ count, rowsPerPage, pageIndex, onTableParamsChange, pages, countOnTop, selectCount, }: {
    count?: number | undefined;
    rowsPerPage?: number | undefined;
    pageIndex?: number | undefined;
    onTableParamsChange: any;
    pages?: number | undefined;
    countOnTop: any;
    selectCount?: number | undefined;
}): React.JSX.Element;
export namespace Pagination {
    namespace propTypes {
        let count: PropTypes.Requireable<number>;
        let rowsPerPage: PropTypes.Requireable<number>;
        let pageIndex: PropTypes.Requireable<number>;
        let pages: PropTypes.Requireable<number>;
        let onTableParamsChange: PropTypes.Validator<(...args: any[]) => any>;
        let countOnTop: PropTypes.Validator<boolean>;
        let selectCount: PropTypes.Requireable<number>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
