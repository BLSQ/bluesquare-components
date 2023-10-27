export type IntlMessage = {
    id: string;
    defaultMessage: string;
    values?: Record<string, any>;
};
export type IntlFormatMessage = (message: IntlMessage, values?: Record<string, string | HTMLElement>) => string;
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
