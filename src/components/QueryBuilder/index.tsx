/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, FunctionComponent, useMemo, useEffect } from 'react';
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

import MaterialConfig from 'react-awesome-query-builder/lib/config/material';

import 'react-awesome-query-builder/lib/css/styles.css';
import 'react-awesome-query-builder/lib/css/compact_styles.css'; // optional, for more compact styles

type Props = {
    logic: JsonLogicTree;
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
    const config: Config = useMemo(
        () => ({
            ...MaterialConfig,
            fields,
        }),
        [fields],
    );
    const [state, setState] = useState({
        tree: QbUtils.checkTree(
            QbUtils.loadFromJsonLogic(logic, config) ||
                QbUtils.loadTree(queryValue),
            config,
        ),
        config,
        logic,
    });

    const handleChange = (immutableTree: ImmutableTree, newConfig: Config) => {
        setState({ tree: immutableTree, config: newConfig, logic });
        onChange(QbUtils.jsonLogicFormat(immutableTree, newConfig));
    };

    const renderBuilder = (props: BuilderProps) => (
        <div className="query-builder-container" style={{ padding: '10px' }}>
            <div className="query-builder qb-lite">
                <Builder {...props} />
            </div>
        </div>
    );

    useEffect(() => {
        if (JSON.stringify(logic) !== JSON.stringify(state.logic)) {
            const newTree = QbUtils.checkTree(
                QbUtils.loadFromJsonLogic(logic, config) ||
                    QbUtils.loadTree(queryValue),
                config,
            );
            setState({ tree: newTree, config, logic });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [logic]);

    return (
        <div>
            <Query
                {...config}
                value={state.tree}
                onChange={handleChange}
                renderBuilder={renderBuilder}
            />
        </div>
    );
};
