import moment from 'moment';
import { useSafeIntl } from './useSafeIntl';
import { textPlaceholder } from '../constants/iaso/uiConstants';
/**
 * Accept options either with a string label or an intl MessageDescriptor label
 * and translate if needed
 *
 * @param {Array} options
 * @param {function} formatMessage
 * @return {Array}
 */

export const translateOptions = (options, formatMessage) =>
    options.map(option => {
        if (typeof option.label === 'object' && 'id' in option.label) {
            return {
                ...option,
                label: formatMessage(option.label),
            };
        }

        return option;
    });

// options = [{id:'translation.key',defaultMessage:'What I want to display'}]
export const useTranslatedOptions = options => {
    const { formatMessage } = useSafeIntl();
    return translateOptions(options, formatMessage);
};

/**
 * Receive a timestamp and displays it as a human readable date
 *
 * @param {Number} timestamp
 */

export const displayDateFromTimestamp = timestamp =>
    timestamp ? moment.unix(timestamp).format('LTS') : textPlaceholder;
