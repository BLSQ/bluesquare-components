import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Box } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { useStyles } from './styles';

const InfoHeader = ({ message, children }) => {
    const classes = useStyles();
    return (
        <Box
            className={classes.root}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box display="inline" mr={1}>
                {children}
            </Box>
            <Tooltip
                classes={{ popper: classes.popperFixed }}
                placement="bottom"
                title={message}
            >
                <InfoIcon
                    fontSize="small"
                    color="primary"
                    className={classes.icon}
                />
            </Tooltip>
        </Box>
    );
};

InfoHeader.propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
        .isRequired,
};
export { InfoHeader };
