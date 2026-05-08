import moment, { Moment } from 'moment';

export const toMomentValue = (value: unknown): Moment | null => {
    if (value === null || value === undefined || value === '') {
        return null;
    }
    if (moment.isMoment(value)) {
        return value;
    }
    if (typeof value === 'string' || value instanceof Date) {
        const parsedValue = moment(value);
        return parsedValue.isValid() ? parsedValue : null;
    }
    return null;
};
