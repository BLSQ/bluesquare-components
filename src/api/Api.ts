import moment from 'moment';
import { FETCHING_ABORTED } from './constants';
import { Nullable, Optional } from '../types/types';
import { PostArg } from './types';

export class ApiError extends Error {
    private status: any;

    public details: any;

    constructor(
        message: string,
        response?: Response,
        json?: Record<string, any>,
    ) {
        super(message);

        Error.apply(this, [message]);
        this.name = 'ApiError';

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError);
        }

        // Custom debugging information
        if (response) {
            this.status = response.status;
        }
        // Details is used by forms to display errors beside fields
        this.details = json;
    }
}

export const tryJson = async response => {
    try {
        return await response.json();
    } catch (e) {
        console.warn('could not parse', e, response);
        return undefined;
    }
};

export const defaultErrorHandler = error => {
    // ignoring errors from cancelled fetch
    if (error.name !== 'AbortError') {
        const apiError = new ApiError(error.message);
        throw apiError;
    }
    // Don't error on cancel fetch
    const emptyRes = new Response(
        JSON.stringify({ message: FETCHING_ABORTED }),
    );
    return emptyRes;
};

export const defaultResponseHandler = async (
    response,
    url: string,
    method: string,
) => {
    if (!response.ok) {
        if (response.status === 401) {
            const currentPath = encodeURIComponent(
                window.location.pathname + window.location.search,
            );
            const loginUrl = `/login/?next=${currentPath}`;
            window.location.href = loginUrl;
            return Promise.reject(
                new ApiError('Redirecting to login', response),
            );
        }
        const json = await tryJson(response);
        const apiError = new ApiError(
            `Error on ${method} ${url}`,
            response,
            json,
        );
        throw apiError;
    }
    return response;
};

// fetch throw on network error but not bad status code
// so throw manually since the code expect it.
// Wrap all errors in ApiError.
/**
 * 
A wrapper on JS native fetch method with custom error handling
default responseHandler and errorHAndler can be overridden to add e.g. Sentry logging
 **/
export const blsqFetch = async (
    resource: RequestInfo,
    init: RequestInit = {},
    responseHandler = defaultResponseHandler,
    errorHandler = defaultErrorHandler,
): Promise<Response> => {
    let response;
    const url =
        typeof resource === 'string' ? resource : (resource.url ?? resource);
    const method = init?.method ?? 'GET';
    try {
        response = await fetch(resource, {
            ...init,
            credentials: 'same-origin',
        });
    } catch (error) {
        return errorHandler(error);
    }
    return responseHandler(response, url, method);
};

export const getRequest = async (
    url: string,
    signal?: Nullable<AbortSignal>,
): Promise<any> => {
    return blsqFetch(url, {
        headers: { 'Accept-Language': moment.locale() },
        signal,
    }).then(response => {
        return response.json();
    });
};
export const getRequestImage = async (
    url: string,
    signal?: Nullable<AbortSignal>,
): Promise<Blob> => {
    return blsqFetch(url, {
        headers: { 'Accept-Language': moment.locale() },
        signal,
    }).then(response => {
        return response.blob();
    });
};

export const basePostRequest = (
    url: string,
    data?: Record<string, any>,
    fileData?: Optional<Record<string, Blob | Blob[]>>,
    headers?: Record<string, string>,
    signal?: Nullable<AbortSignal>,
): Promise<any> => {
    const nullSafeData = data ?? {};
    const nullSafeFileData = fileData ?? {};
    // Send as form if files included else in JSON
    let init: Record<string, unknown> = {};
    if (headers) {
        init = { headers };
    }
    if (Object.keys(nullSafeFileData).length > 0) {
        const formData = new FormData();
        // multipart mode
        Object.entries(nullSafeData).forEach(([key, value]) => {
            let converted_value = value;
            if (typeof converted_value === 'object') {
                converted_value = JSON.stringify(converted_value);
            }
            formData.append(key, converted_value);
        });
        Object.entries(nullSafeFileData).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach(file => formData.append(key, file));
            } else {
                formData.append(key, value);
            }
        });
        init = {
            ...init,
            method: 'POST',
            body: formData,
            signal,
        };
    } else {
        // standard json mode
        init = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                ...(init?.headers ?? {}),
                'Content-Type': 'application/json',
                'Accept-Language': moment.locale(),
            },
            signal,
        };
    }

    return blsqFetch(url, init).then(response => {
        if (response.status === 204) {
            return null;
        }
        return response.json();
    });
};

export const postRequest = (
    arg1: string | PostArg,
    arg2?: Record<string, any>,
    arg3?: Record<string, Blob | Blob[]>,
    arg4?: Record<string, any>,
    arg5?: AbortSignal | null,
): Promise<any> => {
    if (typeof arg1 === 'string') {
        return basePostRequest(arg1, arg2, arg3, arg4, arg5);
    }
    return basePostRequest(
        arg1.url,
        arg1.data,
        arg1.fileData,
        arg1.headers,
        arg1.signal,
    );
};

export const patchRequest = (
    url: string,
    data: unknown,
    signal?: Nullable<AbortSignal>,
): Promise<any> =>
    blsqFetch(url, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': moment.locale(),
        },
        signal,
    }).then(response => response.json());

export const deleteRequest = (
    url: string,
    signal?: Nullable<AbortSignal>,
): Promise<boolean> =>
    blsqFetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Accept-Language': moment.locale(),
        },
        signal,
    }).then(() => true);

export const restoreRequest = (
    url: string,
    signal?: Nullable<AbortSignal>,
): Promise<boolean> =>
    blsqFetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            deleted_at: null,
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': moment.locale(),
        },
        signal,
    }).then(() => true);

export const putRequest = (
    url: string,
    data: unknown,
    signal?: Nullable<AbortSignal>,
): Promise<any> =>
    blsqFetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': moment.locale(),
        },
        signal,
    }).then(response => response.json());

export const optionsRequest = async (
    url: string,
    signal?: Nullable<AbortSignal>,
): Promise<any> => {
    return blsqFetch(url, {
        method: 'OPTIONS',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Accept-Language': moment.locale(),
        },
        signal,
    }).then(response => {
        return response.json();
    });
};
