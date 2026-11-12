import { FunctionComponent } from 'react';
type Props = {
    options?: any[];
    name: string;
    onChange?: (value: string) => void;
    value?: string | boolean;
    label?: string;
    errors?: string[];
    className?: string;
    dataTestId?: string;
    required?: boolean;
    id?: string;
};
declare const RadioComponent: FunctionComponent<Props>;
export { RadioComponent as Radio };
