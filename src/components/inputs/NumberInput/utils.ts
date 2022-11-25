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
    const valueAsString = typeof value === 'string' ? value : `${value}`;
    // Split string to be able to remove markers
    const valueAsArray = valueAsString.split('');
    const decimalMarkerIndex = valueAsString.indexOf(decimalMarker);
    let number = valueAsString;
    let decimals;
    if (decimalMarkerIndex !== -1) {
        number = valueAsString.substring(0, decimalMarkerIndex);
        decimals = valueAsString.substring(
            decimalMarkerIndex + 1,
            valueAsString.length,
        );
    }
    console.log('number', number, 'decimals', decimals);
    const rawNumberAsArray = number.split(thousandMarker);
    const rawNumberAsString = rawNumberAsArray.join('');
    const rawNumber = parseInt(rawNumberAsString, 10);
    // Parse decimals to prevent forbidden chars
    const parsedDecimals = parseInt(decimals, 10);
    console.log('parsedDecimals', parsedDecimals, Number.isNaN(parsedDecimals));
    // If there is only one decimalMarker, the decimalMarker should be the last char and the char before it should be a number
    // e.g: "123."
    // if (
    //     decimalMarkerIndex !== -1 &&
    //     valueAsArray[valueAsArray.length - 1] === decimalMarker &&
    //     !Number.isNaN(rawNumber) &&
    //     Number.isNaN(decimals)
    // ) {
    //     console.log('BUG!');
    //     return value;
    // }
    // "12.l" should return "12.""
    if (
        decimalMarkerIndex !== -1 &&
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
    console.log('rawNumberAsFloat', rawNumberAsFloat);
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
    if (rawNumber < 1000 && Number.isInteger(rawNumberAsFloat)) {
        return rawNumberAsFloat;
    }
    // else add the separators at the right spots
    const mutableArray = [...rawNumberAsArray];
    console.log('rawNumberAsArray', rawNumberAsArray);
    if (rawNumberAsArray.length > 3) {
        // stop the loop before 0 to avoid turning the whole input into 0.xxxx
        for (let i = rawNumberAsArray.length - 3; i > 0; i -= 3) {
            console.log('replacing', mutableArray[i]);
            mutableArray.splice(i, 0, thousandMarker);
        }
    }
    // add the decimals to the string value
    if (!Number.isNaN(parsedDecimals)) {
        console.log('concat', mutableArray, parsedDecimals);
        return `${mutableArray.join('')}${decimalMarker}${parsedDecimals}`;
    }
    if (Number.isNaN(parsedDecimals) && decimalMarkerIndex !== -1) {
        return `${mutableArray.join('')}${decimalMarker}`;
    }
    return mutableArray.join('');
};
