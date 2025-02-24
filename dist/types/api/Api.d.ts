import { Nullable, Optional } from '../types/types';
import { PostArg } from './types';
export declare class ApiError extends Error {
    private status;
    details: any;
    constructor(message: string, response?: Response, json?: Record<string, any>);
}
/**
 *
A wrapper on JS native fetch method with custom error handling
default responseHandler and errorHAndler can be overridden to add e.g. Sentry logging
 **/
export declare const blsqFetch: (resource: RequestInfo, init?: RequestInit, responseHandler?: (response: any, url: string, method: string) => Promise<any>, errorHandler?: (error: any) => Response) => Promise<Response>;
export declare const getRequest: (url: string, signal?: Nullable<AbortSignal>) => Promise<any>;
export declare const getRequestImage: (url: string, signal?: Nullable<AbortSignal>) => Promise<Blob>;
export declare const basePostRequest: (url: string, data?: Record<string, any>, fileData?: Optional<Record<string, Blob | Blob[]>>, signal?: Nullable<AbortSignal>) => Promise<any>;
export declare const postRequest: (arg1: string | PostArg, arg2?: Record<string, any>, arg3?: Record<string, Blob | Blob[]>, arg4?: AbortSignal | null) => Promise<any>;
export declare const patchRequest: (url: string, data: unknown, signal?: Nullable<AbortSignal>) => Promise<any>;
export declare const deleteRequest: (url: string, signal?: Nullable<AbortSignal>) => Promise<boolean>;
export declare const restoreRequest: (url: string, signal?: Nullable<AbortSignal>) => Promise<boolean>;
export declare const putRequest: (url: string, data: unknown, signal?: Nullable<AbortSignal>) => Promise<any>;
export declare const optionsRequest: (url: string, signal?: Nullable<AbortSignal>) => Promise<any>;
