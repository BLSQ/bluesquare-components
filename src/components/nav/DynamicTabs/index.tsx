import React, { FunctionComponent, useCallback, useState } from 'react';
import { Tabs, Tab, IconButton, Tooltip } from '@mui/material';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Clear';
import Color from 'color';

import { formatThousand } from '../../../utils';
import { useSafeIntl } from '../../../utils/useSafeIntl';

import { useStyles } from './styles';
import { IntlMessage } from '../../../types/types';

type Count = {
    index: number;
    count: number;
};
type Props = {
    params: Record<string, string>;
    paramKey: string;
    addMessage: IntlMessage;
    deleteMessage: IntlMessage;
    tabParamKey: string;
    defaultItem: Record<string, any>;
    baseLabel?: string;
    maxItems?: number;
    displayCounts?: boolean;
    counts?: Count[];
    // eslint-disable-next-line no-unused-vars
    onTabsDeleted?: (newParams: Record<string, string>) => void;
    // eslint-disable-next-line no-unused-vars
    onTabsAdded: (newParams: Record<string, string>) => void;
    // eslint-disable-next-line no-unused-vars
    onTabChange?: (newParams: Record<string, string>) => void;
};

const DynamicTabs: FunctionComponent<Props> = ({
    params,
    paramKey,
    addMessage,
    deleteMessage,
    tabParamKey,
    defaultItem,
    counts = [],
    baseLabel = 'tab',
    maxItems = 5,
    displayCounts = false,
    onTabsDeleted = () => null,
    onTabsAdded = () => null,
    onTabChange = () => null,
}) => {
    const { formatMessage } = useSafeIntl();
    const classes: Record<string, any> = useStyles();
    const [tabIndex, setTabIndex] = useState<number>(
        parseInt(params[tabParamKey], 10) || 0,
    );
    const itemsList = JSON.parse(params[paramKey]);

    const handleAddTab = useCallback(() => {
        const newItems = JSON.parse(params[paramKey]);
        const newIndex = newItems.length;
        newItems.push(defaultItem);
        const newParams = {
            ...params,
        };
        newParams[tabParamKey] = newIndex.toString();
        newParams[paramKey] = JSON.stringify(newItems);
        setTabIndex(newIndex);
        onTabsAdded(newParams);
    }, [defaultItem, onTabsAdded, paramKey, params, tabParamKey]);

    const handleDeleteTab = useCallback(
        newIndex => {
            const newItems = JSON.parse(params[paramKey]);
            newItems.splice(newIndex, 1);
            const newParams = {
                ...params,
            };

            newParams[paramKey] = JSON.stringify(newItems);
            if (newIndex > newItems.length - 1) {
                newParams[tabParamKey] = (newItems.length - 1).toString();
                // go to previous tab, code should prevent to delete tif the list contain only one item
                setTabIndex(newIndex - 1);
            }
            onTabsDeleted(newParams);
        },
        [onTabsDeleted, paramKey, params, tabParamKey],
    );

    const handleTabChange = useCallback(
        newIndex => {
            const newItems = JSON.parse(params[paramKey]);
            const newParams = {
                ...params,
            };
            newParams[tabParamKey] = newIndex.toString();
            newParams[paramKey] = JSON.stringify(newItems);
            onTabChange(newParams);
            setTabIndex(newIndex);
        },
        [onTabChange, paramKey, params, tabParamKey],
    );
    return (
        <section className={classes.mainContainer}>
            <div className={classes.tabsContainer}>
                <Tabs
                    variant="scrollable"
                    textColor="inherit"
                    indicatorColor="secondary"
                    value={tabIndex}
                    classes={{
                        root: classes.tabs,
                        indicator: classes.indicator,
                    }}
                    onChange={(_, newtab) => {
                        handleTabChange(newtab);
                    }}
                >
                    {itemsList.map((item, currentTabIndex) => {
                        let tabStyle = {};
                        if (item.color) {
                            tabStyle = {
                                backgroundColor: `#${item.color}`,
                                border: `2px solid ${Color(
                                    `#${item.color}`,
                                ).darken(0.5)}`,
                            };
                        }
                        return (
                            <Tab
                                className={classes.tab}
                                key={currentTabIndex}
                                value={currentTabIndex}
                                label={
                                    <span className={classes.tabContent}>
                                        <span
                                            style={tabStyle}
                                            className={classes.roundColor}
                                        />
                                        {baseLabel}
                                        {displayCounts &&
                                            counts[currentTabIndex] &&
                                            ` (${formatThousand(
                                                counts[currentTabIndex].count,
                                            )})`}
                                    </span>
                                }
                                icon={
                                    <>
                                        {itemsList.length > 1 && (
                                            <Tooltip
                                                title={
                                                    <>
                                                        {formatMessage(
                                                            deleteMessage,
                                                        )}
                                                        {` ${baseLabel.toLowerCase()}`}
                                                    </>
                                                }
                                            >
                                                <span
                                                    role="button"
                                                    tabIndex={0}
                                                    onClick={e => {
                                                        e.stopPropagation();
                                                        handleDeleteTab(
                                                            currentTabIndex,
                                                        );
                                                    }}
                                                    className={
                                                        classes.removeIconButton
                                                    }
                                                >
                                                    <Remove />
                                                </span>
                                            </Tooltip>
                                        )}
                                    </>
                                }
                            />
                        );
                    })}
                </Tabs>
            </div>
            {itemsList.length < maxItems && (
                <Tooltip
                    title={
                        <>
                            {formatMessage(addMessage)}
                            {` ${baseLabel.toLowerCase()}`}
                        </>
                    }
                >
                    <IconButton
                        onClick={() => handleAddTab()}
                        className={classes.iconButton}
                        size="small"
                    >
                        <Add />
                    </IconButton>
                </Tooltip>
            )}
        </section>
    );
};

export { DynamicTabs };
