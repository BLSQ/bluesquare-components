export const containsForbiddenCharacter = (
    value: string,
    forbiddenCharacters: string[],
) => {
    for (let i = 0; i < value.length; i += 1) {
        if (forbiddenCharacters.includes(value[i])) return true;
    }
    return false;
};
