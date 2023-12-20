import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';
import { withStyles } from '@mui/styles';
import { styles } from './styles';

function HeaderRowIcon({ IconComponent, title, classes }) {
    return (
        <div className={classes.root}>
            <Tooltip title={title}>
                <IconComponent />
            </Tooltip>
        </div>
    );
}
HeaderRowIcon.propTypes = {
    title: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    IconComponent: PropTypes.object.isRequired,
};

const styled = withStyles(styles)(HeaderRowIcon);
export { styled as HeaderRowIcon };
