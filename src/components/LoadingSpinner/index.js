import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';

import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = () => ({
    rootFixed: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        zIndex: '10000',
    },
    root: {
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        zIndex: '1',
    },
    rootTransparent: {
        backgroundColor: 'transparent',
    },
});

const LoadingSpinner = props => {
    const { classes, size, transparent, fixed, padding } = props;
    return (
        <div
            style={{
                padding,
            }}
            className={classNames(
                fixed && classes.rootFixed,
                !fixed && classes.root,
                transparent && classes.rootTransparent,
            )}
        >
            <CircularProgress size={size} />
        </div>
    );
};
LoadingSpinner.defaultProps = {
    size: 40,
    transparent: false,
    fixed: true,
    padding: 0,
};

LoadingSpinner.propTypes = {
    /**
     * Adjust the size of the spinner
     */
    size: PropTypes.number,
    /**
     * I don't know what that does
     */
    transparent: PropTypes.bool,
    fixed: PropTypes.bool,
    /**
     * add padding
     */
    padding: PropTypes.number,
    classes: PropTypes.object.isRequired,
};

const styledSpinner = withStyles(styles)(LoadingSpinner);
export { styledSpinner as LoadingSpinner };
