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
}>, "classes"> & {
    size?: number | null | undefined;
    transparent?: boolean | null | undefined;
    fixed?: boolean | null | undefined;
    absolute?: boolean | null | undefined;
    padding?: number | null | undefined;
} & {}, "size" | "transparent" | "fixed" | "absolute" | "padding"> & import("@material-ui/core").StyledComponentProps<string>>;
export { styledSpinner as LoadingSpinner };
