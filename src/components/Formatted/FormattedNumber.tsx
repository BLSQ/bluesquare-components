import React, { FunctionComponent } from 'react';
import { NumericFormat } from 'react-number-format';
import { textPlaceholder } from '../../constants/iaso/uiConstants';

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
export const FormattedNumber: FunctionComponent<Props> = ({
    value,
    suffix,
    prefix,
    placeholder = textPlaceholder,
    thousandsGroupStyle = 'thousand',
    thousandSeparator = ',',
    decimalSeparator = '.',
    decimalScale = 10,
}) => (
    <NumericFormat
        value={value}
        prefix={prefix}
        suffix={suffix}
        defaultValue={placeholder}
        displayType="text"
        decimalScale={decimalScale}
        thousandsGroupStyle={thousandsGroupStyle}
        thousandSeparator={thousandSeparator}
        decimalSeparator={decimalSeparator}
    />
);
