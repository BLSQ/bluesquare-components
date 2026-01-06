import { IntlFormatMessage } from '../types/types';
/**
 * Accept options either with a string label or an intl MessageDescriptor label
 * and translate if needed
 *
 * @param {Array} options
 * @param {function} formatMessage
 * @return {Array}
 */
export declare const translateOptions: (options: any[], formatMessage: IntlFormatMessage) => any[];
export declare const useTranslatedOptions: (options: any) => any[];
/**
 * Receive a timestamp and displays it as a human readable date
 *
 * @param {Number} timestamp
 */
export declare const displayDateFromTimestamp: (timestamp?: number) => string;
