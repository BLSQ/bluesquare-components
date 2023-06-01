export type IntlMessage = {
    id: string;
    defaultMessage: string;
    values?: Record<string, any>;
};

export type IntlFormatMessage = (
    // eslint-disable-next-line no-unused-vars
    message: IntlMessage,
    // eslint-disable-next-line no-unused-vars
    values?: Record<string, string | HTMLElement>,
) => string;
// Make selected properties of a type optional
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
