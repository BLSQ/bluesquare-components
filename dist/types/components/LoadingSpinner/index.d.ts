import React from 'react';
import PropTypes from 'prop-types';
declare const styledSpinner: React.JSXElementConstructor<Omit<Pick<{
    classes: any;
    size?: number | undefined;
    transparent?: boolean | undefined;
    fixed?: boolean | undefined;
    absolute?: boolean | undefined;
    padding?: number | undefined;
}, "padding" | "size" | "fixed" | "transparent" | "absolute"> & Pick<PropTypes.InferProps<{
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
}>, "classes"> & Pick<{
    classes: any;
    size?: number | undefined;
    transparent?: boolean | undefined;
    fixed?: boolean | undefined;
    absolute?: boolean | undefined;
    padding?: number | undefined;
}, never>, "classes"> & (import("@mui/styles").StyledComponentProps<any> | (import("@mui/styles").StyledComponentProps<any> & object))>;
export { styledSpinner as LoadingSpinner };
