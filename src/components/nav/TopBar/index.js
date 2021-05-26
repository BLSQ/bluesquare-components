import React from 'react';

import { withStyles, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PropTypes from 'prop-types';

const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(1),
    },
});
/**
 * toggleSidebar originally came from redux. It must now be passed as prop
 *
 */
const TopBar = props => {
    const {
        classes,
        title,
        toggleSidebar,
        children,
        displayBackButton,
        goBack,
    } = props;
    return (
        <>
            <AppBar position="relative" color="primary">
                <Toolbar>
                    {!displayBackButton && (
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={toggleSidebar}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    {displayBackButton && (
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Back"
                            onClick={goBack}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" color="inherit">
                        {title}
                    </Typography>
                </Toolbar>
                {children}
            </AppBar>
        </>
    );
};

TopBar.defaultProps = {
    children: null,
    displayBackButton: false,
    goBack: () => null,
    title: '',
};

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    toggleSidebar: PropTypes.func.isRequired,
    children: PropTypes.any,
    displayBackButton: PropTypes.bool,
    goBack: PropTypes.func,
};

const styledTopBar = withStyles(styles)(TopBar);

export { styledTopBar as TopBar };
