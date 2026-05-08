import { FunctionComponent } from 'react';
type Props = {
    htmlFor: string;
    required: boolean;
    label?: string;
    shrink?: boolean;
    error?: boolean;
};
/** @deprecated use InputLabel from @mui/material instead to avoid text alignment issues */
declare const InputLabelComponent: FunctionComponent<Props>;
export { InputLabelComponent as InputLabel };
