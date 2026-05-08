<<<<<<< HEAD
import { FunctionComponent } from 'react';
type Props = {
    errorLog?: Record<string, any> | string;
    id?: any;
=======
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
>>>>>>> main
};
export declare const SnackBarErrorMessage: FunctionComponent<Props>;
export default SnackBarErrorMessage;
