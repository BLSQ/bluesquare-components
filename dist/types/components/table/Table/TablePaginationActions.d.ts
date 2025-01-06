export function TablePaginationActions({ count, pageIndex, rowsPerPage, onPageChange, pages, rowsPerPageOptions, selectRowsPerPage, countOnTop, selectCount, }: {
    count: any;
    pageIndex: any;
    rowsPerPage: any;
    onPageChange: any;
    pages: any;
    rowsPerPageOptions: any;
    selectRowsPerPage: any;
    countOnTop: any;
    selectCount: any;
}): React.JSX.Element;
export namespace TablePaginationActions {
    namespace propTypes {
        let pages: PropTypes.Validator<number>;
        let count: PropTypes.Validator<number>;
        let onPageChange: PropTypes.Validator<(...args: any[]) => any>;
        let pageIndex: PropTypes.Validator<number>;
        let rowsPerPage: PropTypes.Validator<number>;
        let rowsPerPageOptions: PropTypes.Validator<any[]>;
        let selectRowsPerPage: PropTypes.Validator<(...args: any[]) => any>;
        let countOnTop: PropTypes.Validator<boolean>;
        let selectCount: PropTypes.Validator<number>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
