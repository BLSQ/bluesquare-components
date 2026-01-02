import { FunctionComponent, ReactNode } from 'react';
type Props = {
    children: ReactNode;
    errors?: string[];
    id?: string | Record<string, any>;
    hideError?: boolean;
};
declare const FormControlComponent: FunctionComponent<Props>;
export { FormControlComponent as FormControl };
