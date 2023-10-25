import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { withStyles } from '@mui/styles';

import PropTypes from 'prop-types';
import classNames from 'classnames';

const baseRoot = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    top: 0,
    left: 0,
};

const styles = () => ({
    rootFixed: {
        ...baseRoot,
        position: 'fixed',
        zIndex: '1000',
    },
    rootAbsolute: {
        ...baseRoot,
        position: 'absolute',
        zIndex: '500',
    },
    root: {
        ...baseRoot,
        position: 'relative',
        zIndex: '1',
    },
    rootTransparent: {
        backgroundColor: 'transparent',
    },
});

const LoadingSpinner = props => {
    const { classes, size, transparent, fixed, absolute, padding } = props;
    return (
        <div
            style={{
                padding,
            }}
            className={classNames(
                fixed && !absolute && classes.rootFixed,
                absolute && classes.rootAbsolute,
                !fixed && !absolute && classes.root,
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
    absolute: false,
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
    absolute: PropTypes.bool,
    /**
     * add padding
     */
    padding: PropTypes.number,
    classes: PropTypes.object.isRequired,
};

const styledSpinner = withStyles(styles as any)(LoadingSpinner);
export { styledSpinner as LoadingSpinner };
