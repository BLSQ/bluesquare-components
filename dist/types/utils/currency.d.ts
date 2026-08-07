export type CurrencyAffixPosition = 'prefix' | 'suffix';
export declare const getCurrencySymbol: (currencyCode?: string) => string;
export declare const getCurrencyPosition: (currencyCode?: string) => CurrencyAffixPosition;
export declare const getCurrencyAffixes: (currencyCode?: string) => {
    prefix: string;
    suffix: string;
};
export declare const formatCurrencyAmount: (value: number, currencyCode?: string) => string;
