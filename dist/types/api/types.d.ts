import { MutationFunction, QueryFunction, QueryKey, UseMutationOptions, UseQueryOptions } from 'react-query';
import { IntlMessage } from '../types/types';
export type PostArg = {
    url: string;
    data: Record<string, any>;
    fileData?: Record<string, Blob | Blob[]>;
    headers?: Record<string, string>;
    signal?: AbortSignal | null;
};
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
export type SnackQueryDict<QueryFnData, Data, QueryKeyExtended extends QueryKey> = {
    queryKey: QueryKey;
    queryFn: QueryFunction<QueryFnData>;
    snackErrorMsg?: IntlMessage;
    options?: UseQueryOptions<QueryFnData, Error, Data, QueryKeyExtended>;
    dispatchOnError?: boolean;
    ignoreErrorCodes?: number[];
};
