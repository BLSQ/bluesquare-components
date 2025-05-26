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

import { useTranslatedConfig } from '../hooks/useTranslatedConfig';

import { useStyles } from '../styles';

type Props = {
    logic?: JsonLogicTree;
    fields: Fields;
    onChange: (
        // eslint-disable-next-line no-unused-vars
        jsonLogic: JsonLogicTree,
    ) => void;
    // those two fields are used to set the value of date or datetime while selecting current date or current date time
    // required if CurrentDate and CurrentDatetime are used instead of date or datetime
    currentDateString?: string;
    currentDateTimeString?: string;
};

const queryValue: JsonGroup = { id: QbUtils.uuid(), type: 'group' };

export const QueryBuilder: FunctionComponent<Props> = ({
    logic,
    fields,
    onChange,
    currentDateString,
    currentDateTimeString,
}) => {
    const translatedConfig = useTranslatedConfig(
        currentDateString,
        currentDateTimeString,
    );

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
            console.log('immutableTree', immutableTree);
            console.log('newConfig', newConfig);
            console.log('QbUtils.jsonLogicFormat(immutableTree, newConfig)', QbUtils.jsonLogicFormat(immutableTree, newConfig));
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
