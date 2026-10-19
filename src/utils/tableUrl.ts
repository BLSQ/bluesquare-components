export const getTableUrl = (
    urlKey: string,
    params: Record<string, any>,
    toExport = false,
    exportType = 'csv',
    asLocation = false,
    asSmallDict = false,
): string => {
    let url = `/api/${urlKey}/?`;
    const clonedParams = { ...params };

    if (toExport) {
        clonedParams[exportType] = true;
    }

    if (asLocation) {
        clonedParams.asLocation = true;
        clonedParams.limit = clonedParams.locationLimit;
        delete clonedParams.page;
    }

    if (asSmallDict) {
        clonedParams.limit = clonedParams.locationLimit;
        delete clonedParams.page;
    }

    delete clonedParams.locationLimit;

    const usedParams: string[] = [];
    Object.keys(clonedParams).forEach(key => {
        const value = clonedParams[key];
        if (value && !usedParams.includes(key)) {
            usedParams.push(key);
            // Encoded so that "&", "#", "%" or "+" in a value (e.g. a search) don't break the query string
            url += `&${key}=${encodeURIComponent(value)}`;
        }
    });

    return url;
};
