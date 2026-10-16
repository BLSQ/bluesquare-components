// Characters that can't stay raw in a path segment: "/" (and "\", which browsers turn into "/") would split the value,
// "?" and "#" would end the path, "%" would be read as an escape. Everything else stays readable in the url.
const PATH_UNSAFE_CHARS = /[%/\\?#]/g;

export const encodeParamValue = (value: string): string =>
    value.replace(PATH_UNSAFE_CHARS, char => encodeURIComponent(char));

export const decodeParamValue = (value: string): string => {
    try {
        return decodeURIComponent(value);
    } catch {
        // Not valid percent-encoding, e.g. a raw "%" typed in the url
        return value;
    }
};

export const convertObjectToUrlParams = (
    params: Record<string, any>,
): string => {
    const keys = Object.keys(params);
    const paramsNoUndef = { ...params };
    // Exclude undefined and null values
    keys.forEach(key => {
        const param = params[key];
        if (param === null || param === undefined || param === '') {
            delete paramsNoUndef[key];
            return;
        }
        // stringify json values
        // We don't have to check if params[key]=== null (edge case of typeof) thanks to the early return above
        if (typeof param === 'object' || Array.isArray(param)) {
            paramsNoUndef[key] = JSON.stringify(param);
            return;
        }
        // convert int and bool
        if (typeof param !== 'string') {
            paramsNoUndef[key] = `${param}`;
        }
    });
    // concatenate string
    let result = '';
    const entries = Object.entries(paramsNoUndef);

    entries.forEach(([key, value]) => {
        result = `${result}/${key}/${encodeParamValue(value)}`;
    });
    return result;
};

export const makeRedirectionUrl = (
    baseUrl: string,
    params?: Record<
        string,
        string | number | Array<unknown> | Record<string, any> | undefined
    >,
): string => {
    const paramsAsString = convertObjectToUrlParams(params ?? {});
    return `/${baseUrl}${paramsAsString}`;
};

export const getParamsFromList = (
    paramsList: string[],
    paramKeys: string[],
): Record<string, string | undefined> => {
    const result = {};
    paramKeys.forEach(paramKey => {
        const index = paramsList.findIndex(param => param === paramKey);
        // Even indexes are the params key
        // This check is necessary for ambiguous cases.Eg: /order/status/pageSize/20/ where status is also an acceptable param key
        result[paramKey] =
            index > -1 && index % 2 === 0 ? paramsList[index + 1] : undefined;
    });
    return result;
};

/**
 * Reads the params from the raw (still encoded) pathname, so an encoded "/" in a value isn't taken for a separator.
 * Returns undefined when the pathname doesn't start with baseUrl.
 */
export const getParamsFromPath = (
    pathname: string,
    baseUrl: string,
    paramKeys: string[],
): Record<string, string | undefined> | undefined => {
    const prefix = `/${baseUrl}`;
    if (pathname !== prefix && !pathname.startsWith(`${prefix}/`)) {
        return undefined;
    }
    const paramsList = pathname
        .slice(prefix.length + 1)
        .split('/')
        .map(decodeParamValue);
    return getParamsFromList(paramsList, paramKeys);
};
