import { MutationFunction, QueryFunction, QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from 'react-query';
import { IntlMessage } from '../types/types';
export declare const MESSAGES: {
    permissionError: {
        id: string;
        defaultMessage: string;
    };
    defaultMutationApiError: {
        id: string;
        defaultMessage: string;
    };
    defaultMutationApiSuccess: {
        id: string;
        defaultMessage: string;
    };
    defaultQueryApiSuccess: {
        defaultMessage: string;
        id: string;
    };
};
/**
 * Mix a useMutation from react-query and snackbar message as well as
 * cache invalidation.
 *
 * Per default will display a message on success and on error.
 * Success message can be disabled
 *
 * @param mutationFn
 * @param snackSuccessMessage
 *   Snack Message to display in case of success, optional
 *   pass null to suppress, undefined for default.
 * @param snackErrorMsg
 *  Snack Message to display in case of success, optional
 *  pass null to suppress, undefined for default.
 * @param invalidateQueryKey
 *   optional query key to invalidate
 * @param options
 *   standard useMutation Options
 * @returns {UseMutationResult<mutationFn, options, void, unknown>}
 */
export type SnackMutationDict<Data, Error, Variables, Context> = {
    mutationFn: MutationFunction<Data, any>;
    snackSuccessMessage?: IntlMessage;
    snackErrorMsg?: IntlMessage;
    invalidateQueryKey?: QueryKey | undefined;
    options?: Omit<UseMutationOptions<Data, Error, Variables, Context>, 'mutationFn'> | undefined;
    ignoreErrorCodes?: number[];
    showSucessSnackBar?: boolean;
    successSnackBar?: (msg: IntlMessage, data: any) => {
        messageKey: string;
        messageObject: any;
        options: {
            variant: string;
            persist: boolean;
        };
    };
};
export declare const useBaseSnackMutation: <Data = unknown, Error = unknown, Variables = void, Context = unknown>(mutationFn: MutationFunction<Data, any>, snackSuccessMessage?: IntlMessage, snackErrorMsg?: IntlMessage, invalidateQueryKey?: QueryKey | undefined, options?: Omit<UseMutationOptions<Data, Error, Variables, Context>, "mutationFn"> | undefined, showSucessSnackBar?: boolean, ignoreErrorCodes?: number[], successSnackBar?: (msg: IntlMessage, data: any) => {
    messageKey: string;
    messageObject: any;
    options: {
        variant: string;
        persist: boolean;
    };
}) => UseMutationResult<Data, Error, Variables, Context>;
export declare const useSnackMutation: <Data = unknown, Error = unknown, Variables = void, Context = unknown>(mutationArg: MutationFunction<Data, any> | SnackMutationDict<Data, Error, Variables, Context>, snackSuccessMessage?: IntlMessage, snackErrorMsg?: IntlMessage, invalidateQueryKey?: QueryKey | undefined, options?: Omit<UseMutationOptions<Data, Error, Variables, Context>, "mutationFn"> | undefined, showSucessSnackBar?: boolean, ignoreErrorCodes?: number[], successSnackBar?: (msg: IntlMessage, data: any) => {
    messageKey: string;
    messageObject: any;
    options: {
        variant: string;
        persist: boolean;
    };
}) => UseMutationResult<Data, Error, Variables, Context>;
/**
 * Mix a useQuery from react-query and snackbar message in case of error
 * @param queryKey
 * @param queryFn
 * @param snackErrorMsg
 *  Translatable Formatjs Message object. null to suppress, undefined for default.
 * @param options
 * @param {boolean} dispatchOnError
 * @returns UseQueryResult<Data, Error>;
 */
export declare const useBaseSnackQuery: <QueryFnData = unknown, Error = unknown, Data = QueryFnData, QueryKeyExtended extends QueryKey = QueryKey>(queryKey: QueryKey, queryFn: QueryFunction<QueryFnData>, snackErrorMsg?: IntlMessage | undefined, options?: UseQueryOptions<QueryFnData, Error, Data, QueryKeyExtended>, dispatchOnError?: boolean, ignoreErrorCodes?: number[]) => UseQueryResult<Data, Error>;
export type SnackQueryDict<QueryFnData, Data, QueryKeyExtended extends QueryKey> = {
    queryKey: QueryKey;
    queryFn: QueryFunction<QueryFnData>;
    snackErrorMsg?: IntlMessage;
    options?: UseQueryOptions<QueryFnData, Error, Data, QueryKeyExtended>;
    dispatchOnError?: boolean;
    ignoreErrorCodes?: number[];
};
export declare const useSnackQuery: <QueryFnData = any, Error = unknown, Data = QueryFnData, QueryKeyExtended extends QueryKey = QueryKey>(queryArg: QueryKey | SnackQueryDict<QueryFnData, Data, QueryKeyExtended>, queryFn?: QueryFunction<QueryFnData>, snackErrorMsg?: IntlMessage | undefined, options?: UseQueryOptions<QueryFnData, Error, Data, QueryKeyExtended>, dispatchOnError?: boolean, ignoreErrorCodes?: number[]) => UseQueryResult<Data, Error>;
/**
 * Mix a useQueries from react-query and snackbar message in case of error
 * @param queries
 */
export declare const useSnackQueries: <QueryFnData>(queries: {
    queryKey: QueryKey;
    queryFn: QueryFunction<QueryFnData>;
    snackErrorMsg?: IntlMessage;
    options: UseQueryOptions;
    dispatchOnError?: boolean;
}[]) => Array<UseQueryResult<unknown, unknown>>;
export declare const useAbortController: () => AbortController | Record<string, never>;
