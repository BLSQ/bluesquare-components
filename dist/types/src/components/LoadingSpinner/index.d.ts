import React from 'react';
import PropTypes from 'prop-types';
declare const styledSpinner: React.ComponentType<Pick<Pick<PropTypes.InferProps<{
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
}>, "classes"> & Partial<Pick<PropTypes.InferProps<{
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
}>, "size" | "transparent" | "fixed" | "absolute" | "padding">> & Partial<Pick<{
    size: number;
    transparent: boolean;
    fixed: boolean;
    absolute: boolean;
    padding: number;
}, never>>, "size" | "transparent" | "fixed" | "absolute" | "padding"> & import("@material-ui/core").StyledComponentProps<string>>;
export { styledSpinner as LoadingSpinner };
