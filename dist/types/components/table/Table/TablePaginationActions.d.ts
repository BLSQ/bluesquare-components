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
        const pages: PropTypes.Validator<number>;
        const count: PropTypes.Validator<number>;
        const onPageChange: PropTypes.Validator<(...args: any[]) => any>;
        const pageIndex: PropTypes.Validator<number>;
        const rowsPerPage: PropTypes.Validator<number>;
        const rowsPerPageOptions: PropTypes.Validator<any[]>;
        const selectRowsPerPage: PropTypes.Validator<(...args: any[]) => any>;
        const countOnTop: PropTypes.Validator<boolean>;
        const selectCount: PropTypes.Validator<number>;
    }
}
import React from "react";
import PropTypes from "prop-types";
