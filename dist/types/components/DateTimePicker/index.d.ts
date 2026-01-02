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
    /** Use moment to pass these props
     * https://github.com/mui/material-ui-pickers/issues/1506
     */
    maxTime?: any;
    maxDateTime?: any;
    maxDate?: any;
    minTime?: any;
    minDateTime?: any;
    minDate?: any;
};
export declare const DateTimePicker: FunctionComponent<Props>;
export {};
