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

const queryValue: JsonGroup = { id: QbUtils.uuid(), type: 'group' };

const FALLBACK_DATE_FORMAT = 'DD/MM/YYYY';
const FALLBACK_DATETIME_FORMAT = 'DD/MM/YYYY HH:mm';

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

const getVarName = (node: unknown): string | undefined => {
    if (node && typeof node === 'object' && 'var' in node) {
        return String((node as { var: unknown }).var);
    }
    return undefined;
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
    const fieldType = fields[varName]?.type;
    if (fieldType === 'currentDate') {
        return dateFormat;
    }
    if (fieldType === 'currentDatetime') {
        return datetimeFormat;
    }
    return undefined;
};

const formatTimestampValue = (
    value: string | number,
    format: string,
): string => {
    const parsed = moment(Number(value));
    return parsed.isValid() ? parsed.format(format) : String(value);
};

/**
 * Collect timestamp → human-readable date replacements for values compared
 * to current_date / current_datetime (or fields of those types).
 */
const collectTimestampReplacements = (
    logic: unknown,
    fields: Fields,
    replacements: Map<string, string>,
    getLocaleDateFormat?: GetLocaleDateFormat,
): void => {
    if (Array.isArray(logic)) {
        logic.forEach(item =>
            collectTimestampReplacements(
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
            collectTimestampReplacements(
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
                if (isTimestampValue(arg)) {
                    replacements.set(
                        String(arg),
                        formatTimestampValue(arg, format),
                    );
                } else {
                    collectTimestampReplacements(
                        arg,
                        fields,
                        replacements,
                        getLocaleDateFormat,
                    );
                }
            });
            return;
        }

        collectTimestampReplacements(
            value,
            fields,
            replacements,
            getLocaleDateFormat,
        );
    });
};

const replaceTimestampsInQueryString = (
    queryString: string,
    logic: JsonLogicTree,
    fields: Fields,
    getLocaleDateFormat?: GetLocaleDateFormat,
): string => {
    const replacements = new Map<string, string>();
    collectTimestampReplacements(
        logic,
        fields,
        replacements,
        getLocaleDateFormat,
    );
    if (replacements.size === 0) {
        return queryString;
    }
    let result = queryString;
    replacements.forEach((formatted, timestamp) => {
        result = result.split(timestamp).join(formatted);
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
            const queryString: string = replaceTimestampsInQueryString(
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
