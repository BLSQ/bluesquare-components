import React, { useCallback, ReactNode, ReactElement, Fragment } from 'react';
import {
    Config,
    ImmutableTree,
    Utils as QbUtils,
    Fields,
    JsonLogicTree,
    JsonGroup,
} from 'react-awesome-query-builder';
import isEmpty from 'lodash/isEmpty';

import { useTranslatedConfig } from './useTranslatedConfig';
import { QueryBuilderListToReplace } from '../types';

type getHumanReadableJsonLogicReturnFn = (
    // eslint-disable-next-line no-unused-vars
    logic?: JsonLogicTree,
) => ReactNode;

const queryValue: JsonGroup = { id: QbUtils.uuid(), type: 'group' };

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
    const term = new RegExp(`(\\b${toReplaceItems.join('|')}+\\b)`, 'g');
    return initialQuery.split(term).map((substring, index) => {
        if (index % 2 === 0)
            return <Fragment key={index}>{substring}</Fragment>;
        return (
            <span
                style={{
                    color: getColor(`${substring}`, listToReplace),
                }}
                key={index}
            >
                {substring}
            </span>
        );
    });
};

export const useHumanReadableJsonLogic = (
    fields: Fields,
    listToReplace?: QueryBuilderListToReplace[],
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
            const queryString: string = makeQueryString(
                QbUtils.queryString(tree, config, true),
            );
            if (listToReplace && queryString) {
                return withListToReplace(queryString, listToReplace);
            }
            return queryString;
        },
        [fields, listToReplace, translatedConfig],
    );

    return getHumanReadableJsonLogic;
};
