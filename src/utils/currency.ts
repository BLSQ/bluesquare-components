export type CurrencyAffixPosition = 'prefix' | 'suffix';

const getCurrencyParts = (currencyCode?: string): Intl.NumberFormatPart[] => {
    if (!currencyCode) {
        throw new Error('Missing currency code');
    }
    return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
    }).formatToParts(0);
};

// currencyCode is often user-entered and only regex-validated as 3 letters on
// input, not checked against real ISO 4217 codes, so Intl.NumberFormat can
// throw on garbage values - fall back to the raw code in that case.
export const getCurrencySymbol = (currencyCode?: string): string => {
    try {
        const currencyPart = getCurrencyParts(currencyCode).find(
            part => part.type === 'currency',
        );
        return currencyPart?.value ?? `${currencyCode} `;
    } catch {
        return currencyCode ? `${currencyCode} ` : '';
    }
};

// Symbol placement (e.g. "$1.00" vs "1,00 €") is a property of how the
// currency is conventionally written, not of the app's active UI locale.
// Intl.NumberFormat ties placement to the locale it's given rather than to
// the currency - the same currency flips sides depending on the runtime's
// locale (EUR is prefixed under "en-US" but suffixed under "de-DE") - so we
// can't derive it from Intl without accidentally keying off the browser's
// language instead of the currency itself.
//
// This list was generated from Intl/CLDR itself: for every ISO 4217 currency,
// resolve its issuing country's official locale and check where that locale
// places the symbol (Francophone West/Central African currencies - XOF, XAF,
// CDF, GNF - use their French locale rather than CLDR's indigenous-language
// default, since French is the administrative/financial language there).
const SUFFIX_CURRENCIES = new Set([
    'AED',
    'ALL',
    'AMD',
    'ARS',
    'AZN',
    'BAM',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BOB',
    'BYN',
    'CDF',
    'CHF',
    'CLP',
    'COP',
    'CRC',
    'CUC',
    'CUP',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'EUR',
    'GEL',
    'GNF',
    'GTQ',
    'HNL',
    'HRK',
    'HUF',
    'ILS',
    'IQD',
    'ISK',
    'JOD',
    'KGS',
    'KHR',
    'KMF',
    'KWD',
    'KZT',
    'LBP',
    'LYD',
    'MAD',
    'MDL',
    'MKD',
    'MMK',
    'MRU',
    'MUR',
    'MXN',
    'NIO',
    'NOK',
    'OMR',
    'PAB',
    'PEN',
    'PLN',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'SAR',
    'SCR',
    'SDG',
    'SEK',
    'SSP',
    'SVC',
    'SYP',
    'TJS',
    'TMT',
    'TND',
    'UAH',
    'UYU',
    'UZS',
    'VES',
    'VND',
    'XAF',
    'XOF',
    'XPF',
    'YER',
]);

export const getCurrencyPosition = (
    currencyCode?: string,
): CurrencyAffixPosition =>
    currencyCode && SUFFIX_CURRENCIES.has(currencyCode.toUpperCase())
        ? 'suffix'
        : 'prefix';

export const getCurrencyAffixes = (
    currencyCode?: string,
): { prefix: string; suffix: string } => {
    const symbol = getCurrencySymbol(currencyCode);
    return getCurrencyPosition(currencyCode) === 'suffix'
        ? { prefix: '', suffix: ` ${symbol}` }
        : { prefix: symbol, suffix: '' };
};

// Currencies have a fixed number of minor units (e.g. 0 for JPY, 3 for TND),
// which Intl already knows - only the affix side needs to bypass Intl's
// locale-driven placement.
const getCurrencyFractionDigits = (currencyCode: string): number => {
    try {
        return (
            new Intl.NumberFormat(undefined, {
                style: 'currency',
                currency: currencyCode,
            }).resolvedOptions().maximumFractionDigits ?? 2
        );
    } catch {
        return 2;
    }
};

export const formatCurrencyAmount = (
    value: number,
    currencyCode?: string,
): string => {
    if (!currencyCode) {
        return value.toLocaleString();
    }
    const { prefix, suffix } = getCurrencyAffixes(currencyCode);
    const formattedValue = value.toLocaleString(undefined, {
        maximumFractionDigits: getCurrencyFractionDigits(currencyCode),
    });
    return `${prefix}${formattedValue}${suffix}`;
};
