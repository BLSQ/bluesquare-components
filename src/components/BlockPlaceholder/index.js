import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@mui/styles';
import { styles } from './styles';

const BlockPlaceholder = ({ classes, width="50%" }) => (
    <div
        className={classes.placeholder}
        style={{
            width,
        }}
    />
);


BlockPlaceholder.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string,
};

const styled = withStyles(styles)(BlockPlaceholder);
export { styled as BlockPlaceholder };
