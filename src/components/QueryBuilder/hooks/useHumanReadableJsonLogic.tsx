import React, { useCallback, ReactNode, ReactElement } from 'react';
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

export const useHumanReadableJsonLogic = (
    fields: Fields,
    listToReplace?: QueryBuilderListToReplace[],
): ((
    // eslint-disable-next-line no-unused-vars
    logic?: JsonLogicTree,
) => ReactNode) => {
    const translatedConfig = useTranslatedConfig();
    const getHumanReadableJsonLogic = useCallback(
        (logic?: JsonLogicTree) => {
            let queryString: any = '';
            if (!isEmpty(fields) && logic) {
                const config: Config = {
                    ...translatedConfig,
                    fields,
                };
                const tree: ImmutableTree = QbUtils.checkTree(
                    QbUtils.loadFromJsonLogic(logic, config) ||
                        QbUtils.loadTree(queryValue),
                    config,
                );
                queryString = JSON.stringify(
                    QbUtils.queryString(tree, config, true),
                    undefined,
                    2,
                );
                // remove double quotes at the beginning and the end
                queryString = queryString.substring(1, queryString.length - 1);

                if (
                    queryString.charAt(0) === '(' &&
                    queryString.charAt(queryString.length - 1) === ')'
                ) {
                    // remove "(" et ")" wrapping all the string
                    queryString = queryString.substring(
                        1,
                        queryString.length - 1,
                    );
                }
                if (listToReplace) {
                    const toReplaceItems = listToReplace.flatMap(
                        toReplaceConfig => toReplaceConfig.items,
                    );
                    const term = new RegExp(
                        `(\\b${toReplaceItems.join('|')}+\\b)`,
                        'g',
                    );
                    const parts: ReactElement<any, any>[] =
                        queryString.split(term);
                    for (let i = 1; i < parts.length; i += 2) {
                        parts[i] = (
                            <span
                                style={{
                                    color: getColor(
                                        `${parts[i]}`,
                                        listToReplace,
                                    ),
                                }}
                                key={i}
                            >
                                {parts[i]}
                            </span>
                        );
                    }
                    queryString = parts;
                }
            }

            return queryString;
        },
        [fields, listToReplace, translatedConfig],
    );

    return getHumanReadableJsonLogic;
};
