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
    if (entries.length > 0) {
        result = '/';
    }
    entries.forEach(([key, value]) => {
        result = `${result}/${key}/${value}`;
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
