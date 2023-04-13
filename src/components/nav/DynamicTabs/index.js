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
        '& .MuiTab-wrapper': {
            flexDirection: 'row-reverse',
        },
    },
    mainContainer: {
        display: 'flex',
        position: 'relative',
    },
    tabsContainer: {
        maxWidth: '95vw',
    },
    iconButton: {
        color: 'white !important',
        height: 30,
        position: 'relative',
        top: 21,
    },
    removeIconButton: {
        color: 'white !important',
        height: 30,
        width: 30,
        borderRadius: 30,
        position: 'relative',
        marginBottom: ' 0 !important',
        display: 'flex',
        top: -1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing(1),
        '& svg': {
            width: 14,
            height: 14,
        },
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
        },
    },
    roundColor: {
        display: 'inline-block',
        width: 15,
        height: 15,
        borderRadius: 15,
        position: 'relative',
        top: -1,
        marginRight: theme.spacing(1),
    },
    tabContent: {
        height: 30,
        display: 'flex',
        alignItems: 'center',
        marginBottom: ' 0 !important',
    },
});

class DynamicTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: parseInt(props.params[props.tabParamKey], 10) || 0,
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
        const { tabIndex } = this.state;
        const itemsList = JSON.parse(params[paramKey]);
        return (
            <section className={classes.mainContainer}>
                <div className={classes.tabsContainer}>
                    <Tabs
                        variant="scrollable"
                        value={tabIndex}
                        classes={{
                            root: classes.tabs,
                            indicator: classes.indicator,
                        }}
                        onChange={(_, newtab) => {
                            this.handleTabChange(newtab);
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
                                                    counts[currentTabIndex]
                                                        .count,
                                                )})`}
                                        </span>
                                    }
                                    icon={
                                        <>
                                            {itemsList.length > 1 && (
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
                                                    <span
                                                        role="button"
                                                        tabIndex={0}
                                                        onClick={e => {
                                                            e.stopPropagation();
                                                            this.handleDeleteTab(
                                                                currentTabIndex,
                                                            );
                                                        }}
                                                        className={
                                                            classes.removeIconButton
                                                        }
                                                        size="small"
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
