export function substituteVars(obj, subs, transform = x => x) {
    // Replace every occurence of a placeholder in a value of every property of the object.
    // The syntax for the placeholder is `${<varname>}`
    // An optional transform function can pretransform the substitute
    // e.g. `{foo: "${bar}"} => {foo: "baz"}` if `subs = {bar: "baz"}`
    // We use json.stringify -> json.parse to clone the object and replace values.
    // See the test for a complete example.
    return JSON.parse(
        JSON.stringify(obj, (key, value) => {
            if (typeof value === 'string') {
                const match = value.match(/\$\{([a-zA-Z0-9_-]+)\}/);
                if (match) {
                    const k = match[1];
                    if (!subs.hasOwnProperty(k)) {
                        console.warn(
                            'Cannot find match in substitudes for value:',
                            value,
                        );
                    } else {
                        return transform(subs[k]);
                    }
                }
            }
            return value;
        }),
    );
}

export const capitalize = (text, keepEndCase = false) =>
    text
        .split(' ')
        .map(
            word =>
                word.slice(0, 1).toUpperCase() +
                (keepEndCase ? word.slice(1) : word.slice(1).toLowerCase()),
        )
        .join(' ');

export const formatThousand = number => {
    if (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return '0';
};

export const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return `${text.substring(0, maxLength - 4)}...   `;
    }
    return `${text}   `;
};

export const addPositionIndex = array => {
    const tempArray = [];
    if (array) {
        array.forEach((e, index) => {
            tempArray.push({
                value: e,
                position: index,
            });
        });
    }
    return tempArray;
};

export const removePositionIndex = array => {
    const tempArray = [];
    if (array) {
        array.forEach(e => {
            tempArray.push(e.value);
        });
    }
    return tempArray;
};

// create timeout to simulate async call
// credit https://stackoverflow.com/questions/51200626/using-a-settimeout-in-a-async-function
export const waitFor = delay =>
    new Promise(resolve => setTimeout(resolve, delay));
