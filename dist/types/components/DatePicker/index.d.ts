import { FunctionComponent } from 'react';
import { IntlMessage } from '../../types/types';
type Props = {
    label: string;
    onChange: (value: any, context?: any) => void;
    currentDate?: string | Date;
    errors?: string[];
    clearMessage?: IntlMessage;
    required?: boolean;
    hideError?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    minDate?: any;
    maxDate?: any;
};
export declare const DatePicker: FunctionComponent<Props>;
export {};
