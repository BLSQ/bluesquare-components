import { FunctionComponent } from 'react';
import { IntlMessage } from '../../../types/types';
type Props = {
    onClick: any;
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
