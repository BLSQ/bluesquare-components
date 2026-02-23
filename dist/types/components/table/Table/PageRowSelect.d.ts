export function PageRowSelect({ rowsPerPage, rowsPerPageOptions, selectRowsPerPage, }: {
    rowsPerPage: any;
    rowsPerPageOptions: any;
    selectRowsPerPage: any;
}): React.JSX.Element;
export namespace PageRowSelect {
    namespace propTypes {
        let rowsPerPage: PropTypes.Validator<number>;
        let rowsPerPageOptions: PropTypes.Validator<any[]>;
        let selectRowsPerPage: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
