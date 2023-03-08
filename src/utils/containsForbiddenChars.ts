const forbiddenChars = ['"', '?', '/', '%', '&'];

export const containsForbiddenCharacter = (
    value: string,
    charsToCheck: string[] = forbiddenChars,
) => {
    for (let i = 0; i < value.length; i += 1) {
        if (charsToCheck.includes(value[i])) return true;
    }
    return false;
};
