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
} from 'react-awesome-query-builder';

import { useTranslatedConfig } from '../hooks/useTranslatedConfig';

import { useStyles } from '../styles';

type Props = {
    logic?: JsonLogicTree;
    fields: Fields;
    onChange: (
        // eslint-disable-next-line no-unused-vars
        jsonLogic: JsonLogicTree,
    ) => void;
    currentDateString?: string;
};

const queryValue: JsonGroup = { id: QbUtils.uuid(), type: 'group' };

export const QueryBuilder: FunctionComponent<Props> = ({
    logic,
    fields,
    onChange,
    currentDateString,
}) => {
    const translatedConfig = useTranslatedConfig(currentDateString);
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

    const renderBuilder = (props: BuilderProps) => (
        <div className="query-builder-container" style={{ padding: '10px' }}>
            <div className="query-builder qb-lite">
                <Builder {...props} />
            </div>
        </div>
    );

    const classes: Record<string, string> = useStyles();

    return (
        <section className={classes.root}>
            <Query
                {...config}
                value={tree}
                onChange={handleChange}
                renderBuilder={renderBuilder}
            />
        </section>
    );
};
