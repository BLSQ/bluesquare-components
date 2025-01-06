export function PageRowSelect({ rowsPerPage, rowsPerPageOptions, selectRowsPerPage, }: {
    rowsPerPage: any;
    rowsPerPageOptions: any;
    selectRowsPerPage: any;
}): React.JSX.Element;
export namespace PageRowSelect {
    namespace propTypes {
        const rowsPerPage: PropTypes.Validator<number>;
        const rowsPerPageOptions: PropTypes.Validator<any[]>;
        const selectRowsPerPage: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
