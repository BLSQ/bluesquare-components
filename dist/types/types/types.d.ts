import { IntlShape } from 'react-intl';
export type IntlMessage = {
    id: string;
    defaultMessage: string;
    values?: Record<string, any>;
};
export type IntlFormatMessage = (message: IntlMessage, values?: Record<string, string | HTMLElement>) => string | null;
export type PatchIntlShape = Omit<IntlShape, 'formatMessage'> & {
    formatMessage: IntlFormatMessage;
};
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type DropdownOptions<T> = {
    label: string;
    value: T;
    original?: Record<any, any>;
    color?: string;
};
export type DropdownOptionsWithOriginal<T, O = Record<any, any>> = {
    label: string;
    value: T;
    original: O;
};
export type ValidationError = Record<string, string> | null | undefined;
export type GenericObject = Record<string, any>;
export type ClassNames = Record<string, string>;
export type NameAndId = {
    name: string;
    id: number;
};
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
}[Keys];
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];
