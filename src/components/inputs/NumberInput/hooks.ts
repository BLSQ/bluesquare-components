import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';

export const useTooltipMessage = (min, max) => {
    const { formatMessage } = useSafeIntl();
    let msg = '';
    if (min || min === 0) {
        msg = `${formatMessage(MESSAGES.min)}: ${min}`;
        if (max) {
            msg += ' - ';
        }
    }
    if (max || max === 0) {
        msg += `${formatMessage(MESSAGES.max)}: ${max}`;
    }
    return msg;
};
