import { FunctionComponent } from 'react';
import { IntlMessage } from '../../../types/types';
type Props = {
    onClick: any;
<<<<<<< HEAD
    message: any;
    id: any;
    dataTestId: any;
    size: any;
    disabled: any;
}, never> & Pick<PropTypes.InferProps<{
    classes: PropTypes.Validator<object>;
    onClick: PropTypes.Validator<(...args: any[]) => any>;
    message: PropTypes.Requireable<object>;
    id: PropTypes.Requireable<string>;
    dataTestId: PropTypes.Requireable<string>;
    size: PropTypes.Requireable<string>;
    disabled: PropTypes.Requireable<boolean>;
}>, "disabled" | "id" | "size" | "message" | "dataTestId" | PropTypes.RequiredKeys<{
    classes: PropTypes.Validator<object>;
    onClick: PropTypes.Validator<(...args: any[]) => any>;
    message: PropTypes.Requireable<object>;
    id: PropTypes.Requireable<string>;
    dataTestId: PropTypes.Requireable<string>;
    size: PropTypes.Requireable<string>;
    disabled: PropTypes.Requireable<boolean>;
}>>, PropTypes.RequiredKeys<{
    classes: PropTypes.Validator<object>;
    onClick: PropTypes.Validator<(...args: any[]) => any>;
    message: PropTypes.Requireable<object>;
    id: PropTypes.Requireable<string>;
    dataTestId: PropTypes.Requireable<string>;
    size: PropTypes.Requireable<string>;
    disabled: PropTypes.Requireable<boolean>;
}>> & {
    disabled?: boolean | null | undefined;
    id?: string | null | undefined;
    size?: string | null | undefined;
    message?: object | null | undefined;
    dataTestId?: string | null | undefined;
} & {}, "classes"> & import("@mui/styles").StyledComponentProps<string> & object>;
import PropTypes from 'prop-types';
import React from 'react';
=======
    message?: IntlMessage;
    id?: string;
    dataTestId?: string;
    size?: 'medium' | 'large' | 'small' | undefined;
    variant?: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
};
export declare const AddButton: FunctionComponent<Props>;
export {};
>>>>>>> IA-4640_safe_date_picker
