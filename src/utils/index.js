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
