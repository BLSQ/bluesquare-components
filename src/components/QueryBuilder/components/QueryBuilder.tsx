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
    Settings,
    Conjunctions,
    Operators,
} from '@react-awesome-query-builder/mui';

import { useTranslatedConfig } from '../hooks/useTranslatedConfig';

import { useStyles } from '../styles';

type Props = {
    logic?: JsonLogicTree;
    fields: Fields;
    settings?: Settings;
    conjunctions?: Conjunctions;
    operators?: Operators;
    onChange: (
        // eslint-disable-next-line no-unused-vars
        jsonLogic: JsonLogicTree,
    ) => void;
};

const queryValue: JsonGroup = { id: QbUtils.uuid(), type: 'group' };

/**
 * QueryBuilder component for building queries using a visual interface.
 * It allows users to create complex queries with fields, conjunctions, and operators.
 *
 * @param {Object} props - The properties for the QueryBuilder component.
 * @param {JsonLogicTree} [props.logic] - Initial logic for the query.
 * @param {Fields} props.fields - Fields available for building the query.
 * @param {Settings} [props.settings] - Settings for the query builder.
 * @param {Conjunctions} [props.conjunctions] - Conjunctions available in the query builder. This won't be translated by the component, meaning that this prop should contain the translated conjunctions.
 * @param {Operators} [props.operators] - Operators available in the query builder. This won't be translated by the component, meaning that this prop should contain the translated operators.
 * @param {Function} props.onChange - Callback function to handle changes in the query.
 */
export const QueryBuilder: FunctionComponent<Props> = ({
    logic,
    fields,
    settings,
    conjunctions,
    operators,
    onChange,
}) => {
    const translatedConfig = useTranslatedConfig(fields);

    const config: Config = useMemo(
        () => ({
            ...translatedConfig,
            settings: {
                ...translatedConfig.settings,
                ...(settings ?? {}),
            },
            conjunctions: {
                ...translatedConfig.conjunctions,
                ...(conjunctions ?? {}),
            },
            operators: {
                ...translatedConfig.operators,
                ...(operators ?? {}),
            },
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
