import React, { useCallback, ReactNode, ReactElement, Fragment } from 'react';
import {
    Config,
    ImmutableTree,
    Utils as QbUtils,
    Fields,
    JsonLogicTree,
    JsonGroup,
} from '@react-awesome-query-builder/mui';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

import { QueryBuilderListToReplace } from '../types';
import { useTranslatedConfig } from './useTranslatedConfig';

type getHumanReadableJsonLogicReturnFn = (logic?: JsonLogicTree) => ReactNode;

type GetLocaleDateFormat = (longType: string) => string;

type FieldWithSubfields = {
    type?: string;
    subfields?: Fields;
};

const queryValue: JsonGroup = { id: QbUtils.uuid(), type: 'group' };

const FALLBACK_DATE_FORMAT = 'L';
const FALLBACK_DATETIME_FORMAT = 'L LT';

const getColor = (
    part: string,
    listToReplace: QueryBuilderListToReplace[],
): string => {
    const color: string =
        listToReplace.find(toReplaceConfig =>
            toReplaceConfig.items.some(item => item === part),
        )?.color || 'inherit';
    return color;
};

const makeQueryString = (initialQuery: string | undefined): string => {
    let queryString: any = '';
    queryString = initialQuery
        ? JSON.stringify(initialQuery, undefined, 2)
        : '';

    // remove double quotes at the beginning and the end
    queryString = queryString.substring(1, queryString.length - 1);

    if (
        queryString.charAt(0) === '(' &&
        queryString.charAt(queryString.length - 1) === ')'
    ) {
        // remove "(" et ")" wrapping all the string
        queryString = queryString.substring(1, queryString.length - 1);
    }
    return queryString;
};

const withListToReplace = (
    initialQuery: string,
    listToReplace: QueryBuilderListToReplace[],
): ReactElement<any, any>[] => {
    const toReplaceItems = listToReplace.flatMap(
        toReplaceConfig => toReplaceConfig.items,
    );
    const term = new RegExp(`(${toReplaceItems.join('|')})`, 'g');
    return initialQuery.split(term).map((substring, index) => {
        if (index % 2 === 0)
            // eslint-disable-next-line react/no-array-index-key
            return <Fragment key={index}>{substring}</Fragment>;
        return (
            <span
                style={{
                    color: getColor(substring, listToReplace),
                }}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
            >
                {substring}
            </span>
        );
    });
};

const isTimestampValue = (value: unknown): value is string | number => {
    if (typeof value === 'number') {
        return Number.isFinite(value) && String(Math.trunc(value)).length >= 12;
    }
    if (typeof value === 'string') {
        return /^\d{12,13}$/.test(value);
    }
    return false;
};

const isApiDateValue = (value: unknown): value is string =>
    typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);

const isApiDateTimeValue = (value: unknown): value is string =>
    typeof value === 'string' &&
    /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}(:\d{2})?$/.test(value);

const getVarName = (node: unknown): string | undefined => {
    if (node && typeof node === 'object' && 'var' in node) {
        return String((node as { var: unknown }).var);
    }
    return undefined;
};

const findField = (
    fields: Fields,
    fieldName: string,
): FieldWithSubfields | undefined => {
    const directField = fields[fieldName] as FieldWithSubfields | undefined;
    if (directField) {
        return directField;
    }
    return Object.values(fields).reduce<FieldWithSubfields | undefined>(
        (found, field) => {
            if (found) {
                return found;
            }
            const fieldWithSubfields = field as FieldWithSubfields;
            if (fieldWithSubfields?.subfields) {
                return findField(fieldWithSubfields.subfields, fieldName);
            }
            return undefined;
        },
        undefined,
    );
};

const getDisplayFormatForVar = (
    varName: string,
    fields: Fields,
    getLocaleDateFormat?: GetLocaleDateFormat,
): string | undefined => {
    const dateFormat = getLocaleDateFormat?.('L') || FALLBACK_DATE_FORMAT;
    const datetimeFormat =
        getLocaleDateFormat?.('LTS') || FALLBACK_DATETIME_FORMAT;

    if (varName === 'current_date') {
        return dateFormat;
    }
    if (varName === 'current_datetime') {
        return datetimeFormat;
    }

    const fieldType = findField(fields, varName)?.type;
    if (fieldType === 'currentDate' || fieldType === 'date') {
        return dateFormat;
    }
    if (fieldType === 'currentDatetime' || fieldType === 'datetime') {
        return datetimeFormat;
    }
    return undefined;
};

const formatDateLikeValue = (
    value: string | number,
    format: string,
): string => {
    const parsed = isTimestampValue(value)
        ? moment(Number(value))
        : moment(value);
    return parsed.isValid() ? parsed.format(format) : String(value);
};

const shouldFormatValue = (
    value: unknown,
    format: string,
    getLocaleDateFormat?: GetLocaleDateFormat,
): value is string | number => {
    if (isTimestampValue(value)) {
        return true;
    }
    const dateFormat = getLocaleDateFormat?.('L') || FALLBACK_DATE_FORMAT;
    const datetimeFormat =
        getLocaleDateFormat?.('LTS') || FALLBACK_DATETIME_FORMAT;
    if (format === dateFormat) {
        return isApiDateValue(value);
    }
    if (format === datetimeFormat) {
        return isApiDateTimeValue(value) || isApiDateValue(value);
    }
    return false;
};

/**
 * Collect date/datetime → locale-formatted replacements for values compared
 * to date-like fields (including nested group subfields).
 */
const collectDateReplacements = (
    logic: unknown,
    fields: Fields,
    replacements: Map<string, string>,
    getLocaleDateFormat?: GetLocaleDateFormat,
): void => {
    if (Array.isArray(logic)) {
        logic.forEach(item =>
            collectDateReplacements(
                item,
                fields,
                replacements,
                getLocaleDateFormat,
            ),
        );
        return;
    }
    if (!logic || typeof logic !== 'object') {
        return;
    }

    Object.values(logic as Record<string, unknown>).forEach(value => {
        if (!Array.isArray(value)) {
            collectDateReplacements(
                value,
                fields,
                replacements,
                getLocaleDateFormat,
            );
            return;
        }

        const format = value
            .map(getVarName)
            .map(varName =>
                varName
                    ? getDisplayFormatForVar(
                          varName,
                          fields,
                          getLocaleDateFormat,
                      )
                    : undefined,
            )
            .find((displayFormat): displayFormat is string =>
                Boolean(displayFormat),
            );

        if (format) {
            value.forEach(arg => {
                if (shouldFormatValue(arg, format, getLocaleDateFormat)) {
                    replacements.set(
                        String(arg),
                        formatDateLikeValue(arg, format),
                    );
                } else {
                    collectDateReplacements(
                        arg,
                        fields,
                        replacements,
                        getLocaleDateFormat,
                    );
                }
            });
            return;
        }

        collectDateReplacements(
            value,
            fields,
            replacements,
            getLocaleDateFormat,
        );
    });
};

const replaceDatesInQueryString = (
    queryString: string,
    logic: JsonLogicTree,
    fields: Fields,
    getLocaleDateFormat?: GetLocaleDateFormat,
): string => {
    const replacements = new Map<string, string>();
    collectDateReplacements(logic, fields, replacements, getLocaleDateFormat);
    if (replacements.size === 0) {
        return queryString;
    }
    let result = queryString;
    replacements.forEach((formatted, original) => {
        result = result.split(original).join(formatted);
    });
    return result;
};

export const useHumanReadableJsonLogic = (
    fields: Fields,
    listToReplace?: QueryBuilderListToReplace[],
    getLocaleDateFormat?: GetLocaleDateFormat,
): getHumanReadableJsonLogicReturnFn => {
    const translatedConfig = useTranslatedConfig();
    const getHumanReadableJsonLogic = useCallback(
        (logic?: JsonLogicTree) => {
            if (isEmpty(fields) || !logic) return '';
            const config: Config = {
                ...translatedConfig,
                fields,
            };
            const tree: ImmutableTree = QbUtils.checkTree(
                QbUtils.loadFromJsonLogic(logic, config) ||
                    QbUtils.loadTree(queryValue),
                config,
            );
            const queryString: string = replaceDatesInQueryString(
                makeQueryString(QbUtils.queryString(tree, config, true)),
                logic,
                fields,
                getLocaleDateFormat,
            );
            if (listToReplace && queryString) {
                return withListToReplace(queryString, listToReplace);
            }
            return queryString;
        },
        [fields, listToReplace, translatedConfig, getLocaleDateFormat],
    );

    return getHumanReadableJsonLogic;
};
