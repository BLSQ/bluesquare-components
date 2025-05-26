/* eslint-disable react/jsx-props-no-spreading */
import React, {
    useState,
    FunctionComponent,
    useMemo,
    useCallback,
} from 'react';
import {
    JsonGroup,
    Config,
    ImmutableTree,
    BuilderProps,
    Query,
    Builder,
    Utils as QbUtils,
    JsonLogicTree,
    Fields,
} from '@react-awesome-query-builder/mui';
import { MESSAGES } from '../messages';

import { useTranslatedConfig } from '../hooks/useTranslatedConfig';

import { useStyles } from '../styles';
import { useSafeIntl } from '../../../utils/useSafeIntl';

type Props = {
    logic?: JsonLogicTree;
    fields: Fields;
    onChange: (
        // eslint-disable-next-line no-unused-vars
        jsonLogic: JsonLogicTree,
    ) => void;
};

const queryValue: JsonGroup = { id: QbUtils.uuid(), type: 'group' };

export const QueryBuilder: FunctionComponent<Props> = ({
    logic,
    fields,
    onChange,
}) => {

    const translatedConfig = useTranslatedConfig();

    const config: Config = useMemo(
        () => ({
            ...translatedConfig,
            fields,
        }),
        [fields, translatedConfig],
    );
    const [tree, setTree] = useState(
        QbUtils.checkTree(
            QbUtils.loadFromJsonLogic(logic, config) ||
                QbUtils.loadTree(queryValue),
            config,
        ),
    );

    const handleChange = useCallback(
        (immutableTree: ImmutableTree, newConfig: Config) => {
            setTree(immutableTree);
            onChange(QbUtils.jsonLogicFormat(immutableTree, newConfig));
        },
        [onChange],
    );

    const renderBuilder = useCallback((props: BuilderProps) => {
        return (
            <div
                className="query-builder-container"
                style={{ padding: '10px' }}
            >
                <div className="query-builder qb-lite">
                    <Builder {...props} />
                </div>
            </div>
        );
    }, []);

    const classes: Record<string, string> = useStyles();

    return (
        <section className={classes.root}>
            <Query
                {...config}
                value={tree}
                onInit={handleChange}
                onChange={handleChange}
                renderBuilder={renderBuilder}
            />
        </section>
    );
};
