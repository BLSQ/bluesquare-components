import { FormikErrors, FormikTouched } from 'formik';
import { UseMutateAsyncFunction } from 'react-query';
import { TestConfig } from 'yup';
import { IntlFormatMessage, IntlMessage } from '../types/types';
export type ValidationError = Record<string, string> | null | undefined;
/**
 * The params passed to the hook
 * mutationFn is mutateAsync from react-query's useMutation
 *
 * convertError is for cases when the field keys of the api response don't match the field keys of your formik values
 */
type Params = {
    mutationFn: UseMutateAsyncFunction<any, any, any>;
    onSuccess?: any;
    onError?: any;
    onCatch?: any;
    convertError?: (errorsDict: Record<string, string>) => Record<string, string>;
};
/**
 * HOW TO USE:
 *
 * Pass a mutateAsync function from useMutation or useSnackMutation to useApiErrorValidation.
 * The hook will save the payload sent to the API and the errors received in its state and return them along with a function
 * that can then be passed as useFormik's onSubmit parameter.
 * Apart from saving the payload and errors to the hook's state, that function will also throw if the error is not in the 400 range
 *
 * onSuccess and onError have the same use as with useMutation/useSnackMutation
 *
 * onCatch allows you to add custom error management
 *
 * payload and errors can then be passed to makeAPIErrorValidator to generate a `test()` that can be used
 * in a validation hook based on yup, in order to manage backend errors to your form management
 *
 */
/**
 * T is the type of the payload sent to the API
 * K is the type of the response
 * void in return type Promise<void|K> is for when error is caught
 *
 *The hook assumes that all fields have their own error and does not handle non_field_errors
 *
 */
type ApiValidationUtils<T extends Record<string, any>, K extends Record<string, any>> = {
    payload: T;
    apiErrors: Record<string, string>;
    mutation: (values: T, helpers: any) => Promise<void | K>;
};
export declare const useApiErrorValidation: <T extends Record<string, any>, K extends Record<string, any>>({ mutationFn, onSuccess, onError, onCatch, convertError, }: Params) => ApiValidationUtils<T, K>;
export declare const useAPIErrorValidator: <T>(errors: ValidationError, payload: T) => ((fieldKey: string) => TestConfig<any, Record<string, any>>);
type GetErrorParams = {
    formatMessage: IntlFormatMessage;
    touched: Record<string, boolean> | FormikTouched<any>;
    errors: Record<string, string> | FormikErrors<any>;
    messages: Record<string, IntlMessage>;
};
/**
 * Takes touched and errors from formik
 * messages is the usual MESSAGES dict of translations
 * formatMessage should come from useSafeIntl
 *
 * returns a callback that can be called in the `errors`props of an InputComponent to provide a translated error message
 *
 * touched is used to prevent setting the fields in error before the user has had a chance to type
 *
 */
export declare const useTranslatedErrors: ({ formatMessage, touched, errors, messages, }: GetErrorParams) => ((keyValue: string) => string[]);
export {};
