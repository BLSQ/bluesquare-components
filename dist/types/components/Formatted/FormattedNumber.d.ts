import { FunctionComponent } from 'react';
type Props = {
    value: number | undefined;
    prefix?: string;
    suffix?: string;
    thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan';
    thousandSeparator?: ',' | '.';
    decimalSeparator?: ',' | '.';
    decimalScale?: number;
    placeholder?: string | number;
};
/** A component to format numbers with the same defaults as NumberInput.
 * Can be used for example in table cells
 * The Numeric format will not return plain text but a <span/> containing the text
 */
export declare const FormattedNumber: FunctionComponent<Props>;
export {};
