export declare const encodeParamValue: (value: string) => string;
export declare const decodeParamValue: (value: string) => string;
export declare const convertObjectToUrlParams: (params: Record<string, any>) => string;
export declare const makeRedirectionUrl: (baseUrl: string, params?: Record<string, string | number | Array<unknown> | Record<string, any> | undefined>) => string;
export declare const getParamsFromList: (paramsList: string[], paramKeys: string[]) => Record<string, string | undefined>;
/**
 * Reads the params from the raw (still encoded) pathname, so an encoded "/" in a value isn't taken for a separator.
 * Returns undefined when the pathname doesn't start with baseUrl.
 */
export declare const getParamsFromPath: (pathname: string, baseUrl: string, paramKeys: string[]) => Record<string, string | undefined> | undefined;
