export declare type IntlMessage = {
    id: string;
    defaultMessage: string;
    values?: Record<string, any>;
};
export declare type IntlFormatMessage = (message: IntlMessage, values?: Record<string, string | HTMLElement>) => string;
export declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
