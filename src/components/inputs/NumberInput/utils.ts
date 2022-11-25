import { localeMarkers } from './constants';

// Helper to remove the thousand and decimal markers and convert the string back to a number
export const convertToNumber = (formattedValue, locale = 'EN') => {
    const decimalMarker = localeMarkers[locale].thousand;
    const thousandMarker = localeMarkers[locale].decimal;
    const [number, decimals] = formattedValue.split(decimalMarker);
    const rawNumber = parseInt(number.split(thousandMarker).join(''), 10);
    if (!decimals) return rawNumber;
    return parseFloat(`${rawNumber}.${decimals}`);
};

export const formatValue = ({
    value,
    min,
    max,
    previousValue = '',
    // declaring locale here to avoid a ts error in the component
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    locale,
}) => {
    if (value === undefined || value == null) return '';
    if (typeof value !== 'number') {
        const valueAsArray = value.split('');
        const containsDots = valueAsArray.filter(char => char === '.');
        // If there is only one dot, the dot should be the last char and the char before it should be a number
        // e.g: "123."
        if (
            containsDots.length === 1 &&
            valueAsArray[valueAsArray.length - 1] === '.' &&
            !Number.isNaN(parseInt(valueAsArray[valueAsArray.length - 2], 10))
        ) {
            return value;
        }
        // "12.l" should return "12.""
        if (
            containsDots.length === 1 &&
            valueAsArray[valueAsArray.length - 2] === '.' &&
            Number.isNaN(parseInt(valueAsArray[valueAsArray.length - 1], 10))
        ) {
            valueAsArray.pop();
            return valueAsArray.join('');
        }
    }

    const parsedValue = typeof value === 'number' ? value : parseFloat(value);
    if (Number.isNaN(parsedValue)) {
        return '';
    }
    if (min && parsedValue < min) {
        return previousValue;
    }
    if (max && parsedValue > max) {
        return previousValue;
    }
    return parsedValue;
};

export const formatThousand = ({
    value,
    min,
    max,
    previousValue = '',
    locale = 'EN',
}) => {
    if (value === undefined || value == null) return '';
    if ((typeof value === 'number' && value < 1000) || !value) return value;
    const decimalMarker = localeMarkers[locale].thousand;
    const thousandMarker = localeMarkers[locale].decimal;
    // Check if number has decimals, split and store value
    const valueAsArray = value.split('');
    const hasDecimals = valueAsArray.filter(char => char === decimalMarker);
    // prevent multiple decimal markers
    if (hasDecimals.length > 1) {
        const firstDecimalIndex = valueAsArray.indexOf(decimalMarker);
        const secondDecimalIndex = valueAsArray.indexOf(
            decimalMarker,
            firstDecimalIndex,
        );
        const deleteCount = valueAsArray.length - secondDecimalIndex - 1;
        valueAsArray.splice(secondDecimalIndex, deleteCount);
    }
    const [number, decimals] = value.toString().split(decimalMarker);
    const rawNumberAsString = number.split(thousandMarker).join('');
    const rawNumberAsArray = rawNumberAsString.split('');
    const rawNumber = parseInt(rawNumberAsString, 10);
    // Parse decimals to prevent forbidden chars
    const parsedDecimals = parseInt(decimals, 10);
    // If there is only one decimalMarker, the decimalMarker should be the last char and the char before it should be a number
    // e.g: "123."
    if (
        hasDecimals.length > 0 &&
        valueAsArray[valueAsArray.length - 1] === decimalMarker &&
        !Number.isNaN(rawNumber)
    ) {
        return value;
    }
    // "12.l" should return "12.""
    if (
        hasDecimals.length > 0 &&
        valueAsArray[valueAsArray.length - 2] === decimalMarker &&
        Number.isNaN(parsedDecimals)
    ) {
        valueAsArray.pop();
        return valueAsArray.join('');
    }
    // reconstruct float value, store it for comparison with min and max

    const rawNumberAsFloat = !Number.isNaN(parsedDecimals)
        ? parseFloat(`${rawNumberAsString}.${parsedDecimals}`)
        : rawNumber;
    if (Number.isNaN(rawNumberAsFloat)) {
        return '';
    }
    // if problem with min or max, return previous value
    if (min && rawNumberAsFloat < min) {
        return previousValue;
    }
    if (max && rawNumberAsFloat > max) {
        return previousValue;
    }
    // else if number <1000 return it
    if (rawNumber < 1000) {
        return rawNumberAsFloat;
    }
    // else add the separators at the right spots
    const mutableArray = [...rawNumberAsArray];
    // stop the loop before 0 to avoid turning the whole input into 0.xxxx
    for (let i = rawNumberAsArray.length - 3; i > 0; i -= 3) {
        mutableArray.splice(i, 0, thousandMarker);
    }
    // add the decimals to the string value
    if (!Number.isNaN(parsedDecimals)) {
        return `${mutableArray.join('')}${decimalMarker}${parsedDecimals}`;
    }
    return mutableArray.join('');
};
