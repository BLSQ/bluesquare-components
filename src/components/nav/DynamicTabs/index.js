import React, { Component } from 'react';
import { withStyles, Tabs, Tab, IconButton, Tooltip } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Clear';
import Color from 'color';

import PropTypes from 'prop-types';

import { commonStyles } from '../../../styles/iaso/common';
import { formatThousand } from '../../../utils';
// import MESSAGES from './messages';

const styles = theme => ({
    ...commonStyles(theme),
    tabs: {
        ...commonStyles(theme).tabs,
        paddingRight: 0,
    },
    mainContainer: {
        display: 'flex',
        position: 'relative',
    },
    tabsContainer: {
        position: 'relative',
    },
    iconButton: {
        color: 'white !important',
        height: 30,
        position: 'relative',
        top: 8,
    },
    removeIconButton: {
        color: 'white !important',
        position: 'relative',
        top: 19,
        right: 15,
        height: 20,
        '& svg': {
            width: 14,
            height: 14,
        },
    },
    removeContainer: {
        padding: 0,
        margin: 0,
        position: 'absolute',
        left: theme.spacing(4),
        top: -5,
        minHeight: 0,
        height: 1,
        width: `calc(100% - ${theme.spacing(4)}px)`,
        display: 'flex',
        listStyleType: 'none',
        zIndex: 100000,
    },
    removeContainerItem: {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        minWidth: 160,
        fontSize: 5,
    },
    roundColor: {
        display: 'inline-block',
        width: 15,
        height: 15,
        borderRadius: 15,
        position: 'absolute',
        top: 16,
        left: theme.spacing(2),
    },
    tabContentAlone: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(4),
    },
    tabContent: {
        paddingRight: theme.spacing(6),
        paddingLeft: theme.spacing(6),
    },
});

class DynamicTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: parseInt(props.params[props.tabParamKey], 10) || 0,
            tabsWidth: [],
        };
    }

    handleAddTab() {
        const { params, defaultItem, paramKey, tabParamKey, onTabsAdded } =
            this.props;
        const newState = {
            ...this.state,
        };
        const newItems = JSON.parse(params[paramKey]);
        newState.tabIndex = newItems.length;
        newItems.push(defaultItem);
        const newParams = {
            ...params,
        };
        newParams[tabParamKey] = newState.tabIndex.toString();
        newParams[paramKey] = JSON.stringify(newItems);
        this.setState(newState);
        onTabsAdded(newParams);
    }

    handleDeleteTab(tabIndex) {
        const { params, paramKey, tabParamKey, onTabsDeleted } = this.props;
        const newItems = JSON.parse(params[paramKey]);
        newItems.splice(tabIndex, 1);
        const newParams = {
            ...params,
        };

        newParams[paramKey] = JSON.stringify(newItems);
        if (this.state.tabIndex > newItems.length - 1) {
            newParams[tabParamKey] = (newItems.length - 1).toString();
            this.setState({
                tabIndex: newItems.length - 1,
            });
        }
        onTabsDeleted(newParams);
    }

    handleTabChange(tabIndex) {
        const { params, paramKey, tabParamKey, onTabChange } = this.props;
        const newState = {
            ...this.state,
        };
        const newItems = JSON.parse(params[paramKey]);
        newState.tabIndex = tabIndex;
        const newParams = {
            ...params,
        };
        newParams[tabParamKey] = newState.tabIndex.toString();
        newParams[paramKey] = JSON.stringify(newItems);
        onTabChange(newParams);
        this.setState(newState);
    }

    setTabsElement(element, index) {
        const { tabsWidth } = this.state;
        const newWidth = element.getBoundingClientRect().width;
        if (newWidth !== tabsWidth[index]) {
            const newArray = [...tabsWidth];
            newArray[index] = newWidth;
            this.setState({
                tabsWidth: newArray,
            });
        }
    }

    render() {
        const {
            classes,
            baseLabel,
            params,
            paramKey,
            maxItems,
            displayCounts,
            counts,
            addMessage,
            deleteMessage,
        } = this.props;
        const { tabIndex, tabsWidth } = this.state;
        const itemsList = JSON.parse(params[paramKey]);
        return (
            <section className={classes.mainContainer}>
                <div className={classes.tabsContainer}>
                    {itemsList.length > 1 && (
                        <ul className={classes.removeContainer}>
                            {itemsList.map((item, currentTabIndex) => (
                                <li
                                    className={classes.removeContainerItem}
                                    key={currentTabIndex}
                                    style={{
                                        width: `${tabsWidth[currentTabIndex]}px`,
                                    }}
                                >
                                    <Tooltip
                                        size="small"
                                        title={
                                            <>
                                                <FormattedMessage
                                                    {...deleteMessage}
                                                />
                                                {` ${baseLabel.toLowerCase()}`}
                                            </>
                                        }
                                    >
                                        <IconButton
                                            onClick={() =>
                                                this.handleDeleteTab(
                                                    currentTabIndex,
                                                )
                                            }
                                            className={classes.removeIconButton}
                                            size="small"
                                        >
                                            <Remove />
                                        </IconButton>
                                    </Tooltip>
                                </li>
                            ))}
                        </ul>
                    )}
                    <Tabs
                        value={tabIndex}
                        classes={{
                            root: classes.tabs,
                            indicator: classes.indicator,
                        }}
                        onChange={(event, newtab) =>
                            this.handleTabChange(newtab)
                        }
                    >
                        {itemsList.map((item, currentTabIndex) => (
                            <Tab
                                ref={ref => {
                                    if (ref)
                                        this.setTabsElement(
                                            ref,
                                            currentTabIndex,
                                        );
                                }}
                                key={currentTabIndex}
                                value={currentTabIndex}
                                label={
                                    <span
                                        className={
                                            itemsList.length > 1
                                                ? classes.tabContent
                                                : classes.tabContentAlone
                                        }
                                    >
                                        <span
                                            style={
                                                item.color
                                                    ? {
                                                          backgroundColor: `#${item.color}`,
                                                          border: `2px solid ${Color(
                                                              `#${item.color}`,
                                                          ).darken(0.5)}`,
                                                      }
                                                    : {}
                                            }
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
                            />
                        ))}
                    </Tabs>
                </div>
                {itemsList.length < maxItems && (
                    <Tooltip
                        size="small"
                        title={
                            <>
                                <FormattedMessage {...addMessage} />
                                {` ${baseLabel.toLowerCase()}`}
                            </>
                        }
                    >
                        <IconButton
                            onClick={() => this.handleAddTab()}
                            className={classes.iconButton}
                            size="small"
                        >
                            <Add />
                        </IconButton>
                    </Tooltip>
                )}
            </section>
        );
    }
}
DynamicTabs.defaultProps = {
    baseLabel: 'tab',
    maxItems: 5,
    onTabsAdded: () => ({}),
    onTabsDeleted: () => ({}),
    onTabChange: () => ({}),
    displayCounts: false,
    counts: [],
};

DynamicTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    baseLabel: PropTypes.string,
    params: PropTypes.object.isRequired,
    defaultItem: PropTypes.object.isRequired,
    paramKey: PropTypes.string.isRequired,
    tabParamKey: PropTypes.string.isRequired,
    baseUrl: PropTypes.string.isRequired,
    redirectTo: PropTypes.func.isRequired,
    maxItems: PropTypes.number,
    onTabsAdded: PropTypes.func,
    onTabsDeleted: PropTypes.func,
    onTabChange: PropTypes.func,
    displayCounts: PropTypes.bool,
    counts: PropTypes.array,
    deleteMessage: PropTypes.object.isRequired,
    addMessage: PropTypes.object.isRequired,
};

const styledDynamicTabs = withStyles(styles)(DynamicTabs);

export { styledDynamicTabs as DynamicTabs };
