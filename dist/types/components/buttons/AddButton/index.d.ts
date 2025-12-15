export { styledAddButton as AddButton };
declare const styledAddButton: React.JSXElementConstructor<Omit<Pick<{
    classes: any;
    onClick: any;
    message?: {
        id: string;
        defaultMessage: string;
    } | undefined;
    id?: string | undefined;
    dataTestId?: string | undefined;
    size?: string | undefined;
    disabled?: boolean | undefined;
}, "disabled" | "id" | "size" | "message" | "dataTestId"> & Pick<PropTypes.InferProps<{
    classes: PropTypes.Validator<object>;
    onClick: PropTypes.Validator<(...args: any[]) => any>;
    message: PropTypes.Requireable<object>;
    id: PropTypes.Requireable<string>;
    dataTestId: PropTypes.Requireable<string>;
    size: PropTypes.Requireable<string>;
    disabled: PropTypes.Requireable<boolean>;
}>, PropTypes.RequiredKeys<{
    classes: PropTypes.Validator<object>;
    onClick: PropTypes.Validator<(...args: any[]) => any>;
    message: PropTypes.Requireable<object>;
    id: PropTypes.Requireable<string>;
    dataTestId: PropTypes.Requireable<string>;
    size: PropTypes.Requireable<string>;
    disabled: PropTypes.Requireable<boolean>;
}>> & Pick<{
    classes: any;
    onClick: any;
    message?: {
        id: string;
        defaultMessage: string;
    } | undefined;
    id?: string | undefined;
    dataTestId?: string | undefined;
    size?: string | undefined;
    disabled?: boolean | undefined;
}, never>, "classes"> & import("@mui/styles").StyledComponentProps<string> & object>;
import PropTypes from 'prop-types';
import React from 'react';
