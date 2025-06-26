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
    onFieldChange?: (
        fields: {
            type: string;
            field: string;
            value: any;
        }[],
    ) => void;
    onChange: (
        // eslint-disable-next-line no-unused-vars
        jsonLogic: JsonLogicTree,
    ) => void;
};

const queryValue: JsonGroup = { id: QbUtils.uuid(), type: 'group' };

// Utility to get field object by path (supports nested subfields)
const getFieldByPath = (fields, path) => {
    const parts = path.split('.');
    let current = fields;
    for (let i = 0; i < parts.length; i += 1) {
        if (!current) return null;
        current = current[parts[i]];
        if (!current) return null;
        if (i < parts.length - 1) {
            current = current.subfields;
        }
    }
    return current;
};

// Utility to extract all selected fields from the tree
const extractSelectedFields = (tree, fields) => {
    const results: {
        type: string;
        field: string;
        value: any;
    }[] = [];
    const walk = (node, depth = 0) => {
        if (!node) return;
        if (node.type === 'rule_group' && node.properties?.field) {
            const fieldObj = getFieldByPath(fields, node.properties.field);
            results.push({
                type: 'rule_group',
                field: fieldObj,
                value: node.properties.field,
            });
        }
        if (node.type === 'rule' && node.properties?.field) {
            const fieldObj = getFieldByPath(fields, node.properties.field);
            results.push({
                type: 'rule',
                field: fieldObj,
                value: node.properties.field,
            });
        }
        if (node.children1) {
            Object.values(node.children1).forEach(child =>
                walk(child, depth + 1),
            );
        }
    };
    walk(tree);
    return results;
};

/**
 * QueryBuilder component for building queries using a visual interface.
 * It allows users to create complex queries with fields, conjunctions, and operators.
 *
 * @param {Object} props - The properties for the QueryBuilder component.
 * @param {JsonLogicTree} [props.logic] - Initial logic for the query.
 * @param {Fields} props.fields - Fields available for building the query.
 * @param {Settings} [props.settings] - Settings for the query builder.
 * @param {Conjunctions} [props.conjunctions]
 *  - Conjunctions available in the query builder. This won't be translated by the component, meaning that this prop should contain the translated conjunctions.
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
    onFieldChange,
}) => {
    const translatedConfig = useTranslatedConfig();

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
        [conjunctions, fields, operators, settings, translatedConfig],
    );
    const [tree, setTree] = useState(
        QbUtils.checkTree(
            QbUtils.loadFromJsonLogic(logic, config) ||
                QbUtils.loadTree(queryValue),
            config,
        ),
    );

    const handleChange = useCallback(
        (immutableTree, newConfig) => {
            setTree(immutableTree);
            // Convert Immutable.js tree to plain JS object
            const jsTree = immutableTree.toJS
                ? immutableTree.toJS()
                : immutableTree;
            onChange(QbUtils.jsonLogicFormat(immutableTree, newConfig));
            const selectedFields = extractSelectedFields(jsTree, fields);
            onFieldChange?.(selectedFields);
        },
        [onChange, fields, onFieldChange],
    );

    const renderBuilder = useCallback(
        (props: BuilderProps) => (
            <div
                className="query-builder-container"
                style={{ padding: '10px' }}
            >
                <div className="query-builder qb-lite">
                    <Builder {...props} />
                </div>
            </div>
        ),
        [],
    );

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
