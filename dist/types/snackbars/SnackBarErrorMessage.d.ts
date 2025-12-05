import React from 'react';
import PropTypes from 'prop-types';
export declare const SnackBarErrorMessage: {
    ({ errorLog, id }: {
        errorLog?: any;
        id?: any;
    }): React.JSX.Element | null;
    propTypes: {
        errorLog: PropTypes.Requireable<any>;
        id: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
    };
};
export default SnackBarErrorMessage;
