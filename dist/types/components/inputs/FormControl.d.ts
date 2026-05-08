<<<<<<< HEAD
import { FunctionComponent, ReactNode } from 'react';
type Props = {
    children: ReactNode;
    errors?: string[];
    id?: string | Record<string, any>;
    hideError?: boolean;
};
declare const FormControlComponent: FunctionComponent<Props>;
export { FormControlComponent as FormControl };
=======
export { styledComponent as FormControl };
declare const styledComponent: React.JSXElementConstructor<Omit<Pick<{
    classes: any;
    children: any;
    errors?: string[] | undefined;
    id?: null | undefined;
    hideError?: boolean | undefined;
}, "id" | "errors" | "hideError"> & Pick<PropTypes.InferProps<{
    classes: PropTypes.Validator<object>;
    children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    errors: PropTypes.Requireable<string[]>;
    id: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
    hideError: PropTypes.Requireable<boolean>;
}>, PropTypes.RequiredKeys<{
    classes: PropTypes.Validator<object>;
    children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    errors: PropTypes.Requireable<string[]>;
    id: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
    hideError: PropTypes.Requireable<boolean>;
}>> & Pick<{
    classes: any;
    children: any;
    errors?: string[] | undefined;
    id?: null | undefined;
    hideError?: boolean | undefined;
}, never>, "classes"> & import("@mui/styles").StyledComponentProps<"error" | "formControl" | "errorContainer"> & object>;
import PropTypes from 'prop-types';
import React from 'react';
>>>>>>> main
