export { styledComponent as FormControl };
declare const styledComponent: React.JSXElementConstructor<Omit<Pick<Pick<{
    classes: any;
    children: any;
    errors: any;
    id: any;
    hideError: any;
}, never> & Pick<PropTypes.InferProps<{
    classes: PropTypes.Validator<object>;
    children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    errors: PropTypes.Requireable<string[]>;
    id: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
    hideError: PropTypes.Requireable<boolean>;
}>, "id" | "errors" | "hideError" | PropTypes.RequiredKeys<{
    classes: PropTypes.Validator<object>;
    children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    errors: PropTypes.Requireable<string[]>;
    id: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
    hideError: PropTypes.Requireable<boolean>;
}>>, PropTypes.RequiredKeys<{
    classes: PropTypes.Validator<object>;
    children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    errors: PropTypes.Requireable<string[]>;
    id: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
    hideError: PropTypes.Requireable<boolean>;
}>> & {
    id?: NonNullable<string | object | null | undefined> | null | undefined;
    errors?: string[] | null | undefined;
    hideError?: boolean | null | undefined;
} & {}, "classes"> & import("@mui/styles").StyledComponentProps<"error" | "formControl" | "errorContainer"> & object>;
import PropTypes from 'prop-types';
import React from 'react';
