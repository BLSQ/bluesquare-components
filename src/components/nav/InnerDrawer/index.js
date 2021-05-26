import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import { withStyles, Box, Grid, Tabs, Tab } from '@material-ui/core';

import PropTypes from 'prop-types';

import { commonStyles } from '../../../styles/iaso/common';
import { menuHeight } from '../../../styles/iaso/innerDrawer';

const styles = theme => ({
    ...commonStyles(theme),
    boxContent: {
        width: '100%',
    },
    button: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    mapContainer: {
        ...commonStyles(theme).mapContainer,
        marginBottom: 0,
        height: `calc(100vh - ${menuHeight}px)`,
        overflow: 'hidden',
    },
});

class InnerDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOption: props.filtersOption ? 'filters' : 'settings',
        };
    }

    toggleOption(activeOption) {
        this.setState({
            activeOption,
        });
        this.props.setCurrentOption(activeOption);
    }

    render() {
        const {
            children,
            classes,
            editOption,
            settingsOption,
            filtersOption,
            settingsDisabled,
            filtersDisabled,
            withTopBorder,
            footerComponent,
        } = this.props;
        const { activeOption } = this.state;
        return (
            <>
                <Box
                    borderTop={withTopBorder ? 1 : 0}
                    borderColor="grey.300"
                    p={0}
                    className={classes.boxContent}
                    component="div"
                >
                    <Grid container spacing={0}>
                        <Grid
                            item
                            xs={7}
                            md={8}
                            lg={9}
                            className={classes.mapContainer}
                        >
                            {children}
                        </Grid>
                        <Grid
                            item
                            xs={5}
                            md={4}
                            lg={3}
                            className={classes.innerDrawerToolContainer}
                        >
                            {(editOption || filtersOption) && (
                                <Tabs
                                    classes={{
                                        root: classes.innerDrawerTabs,
                                    }}
                                    value={activeOption}
                                    indicatorColor="primary"
                                    onChange={(event, newtab) =>
                                        this.toggleOption(newtab)
                                    }
                                >
                                    {filtersOption && (
                                        <Tab
                                            classes={{
                                                root: classes.innerDrawerTab,
                                            }}
                                            disabled={filtersDisabled}
                                            value="filters"
                                            label={
                                                <FormattedMessage
                                                    {...filtersOption.message}
                                                />
                                            }
                                        />
                                    )}
                                    <Tab
                                        classes={{
                                            root: classes.innerDrawerTab,
                                        }}
                                        disabled={settingsDisabled}
                                        value="settings"
                                        label={
                                            <FormattedMessage
                                                {...settingsOption.message}
                                            />
                                        }
                                    />
                                    {editOption && (
                                        <Tab
                                            classes={{
                                                root: classes.innerDrawerTab,
                                            }}
                                            value="edit"
                                            label={
                                                <FormattedMessage
                                                    {...editOption.message}
                                                />
                                            }
                                        />
                                    )}
                                </Tabs>
                            )}
                            <Box
                                display="flex"
                                flexWrap="wrap"
                                className={classes.innerDrawerContentContainer}
                                flexDirection="row"
                            >
                                {filtersOption && (
                                    <Box
                                        width="100%"
                                        className={
                                            activeOption !== 'filters'
                                                ? 'hidden-opacity'
                                                : ''
                                        }
                                    >
                                        {filtersOption.component}
                                    </Box>
                                )}

                                {activeOption === 'edit' && (
                                    <Box width="100%">
                                        {editOption.component}
                                    </Box>
                                )}

                                {activeOption === 'settings' && (
                                    <Box width="100%">
                                        {settingsOption.component}
                                    </Box>
                                )}
                                {footerComponent && (
                                    <div
                                        className={
                                            classes.innerDrawerFooterContent
                                        }
                                    >
                                        {footerComponent}
                                    </div>
                                )}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </>
        );
    }
}

InnerDrawer.defaultProps = {
    children: null,
    editOption: null,
    filtersOption: null,
    footerComponent: null,
    settingsDisabled: false,
    filtersDisabled: false,
    setCurrentOption: () => null,
    withTopBorder: false,
};

InnerDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any,
    settingsOption: PropTypes.object.isRequired,
    editOption: PropTypes.object,
    filtersOption: PropTypes.object,
    footerComponent: PropTypes.object,
    settingsDisabled: PropTypes.bool,
    filtersDisabled: PropTypes.bool,
    setCurrentOption: PropTypes.func,
    withTopBorder: PropTypes.bool,
};

const styledInnerDrawer = withStyles(styles)(InnerDrawer);

export { styledInnerDrawer as InnerDrawer };
