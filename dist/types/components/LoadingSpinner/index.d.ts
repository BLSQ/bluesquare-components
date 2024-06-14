import React from 'react';
import PropTypes from 'prop-types';
declare const styledSpinner: React.JSXElementConstructor<Omit<Pick<PropTypes.InferProps<{
    /**
     * Adjust the size of the spinner
     */
    size: PropTypes.Requireable<number>;
    /**
     * I don't know what that does
     */
    transparent: PropTypes.Requireable<boolean>;
    fixed: PropTypes.Requireable<boolean>;
    absolute: PropTypes.Requireable<boolean>;
    /**
     * add padding
     */
    padding: PropTypes.Requireable<number>;
    classes: PropTypes.Validator<object>;
}>, "classes"> & {
    size?: number | null | undefined;
    transparent?: boolean | null | undefined;
    padding?: number | null | undefined;
    absolute?: boolean | null | undefined;
    fixed?: boolean | null | undefined;
} & {}, "classes"> & (import("@mui/styles").StyledComponentProps<any> | (import("@mui/styles").StyledComponentProps<any> & object))>;
export { styledSpinner as LoadingSpinner };
