import { useCallback } from 'react';
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

const queryValue: JsonGroup = { id: QbUtils.uuid(), type: 'group' };

export const useHumanReadableJsonLogic = (
    fields: Fields,
): ((
    // eslint-disable-next-line no-unused-vars
    logic?: JsonLogicTree,
) => string) => {
    const translatedConfig = useTranslatedConfig();
    const getHumanReadableJsonLogic = useCallback(
        (logic?: JsonLogicTree) => {
            let queryString = '';
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
            }

            return queryString;
        },
        [fields, translatedConfig],
    );

    return getHumanReadableJsonLogic;
};
