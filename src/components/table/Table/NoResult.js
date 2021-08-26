import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

import { MESSAGES } from './messages';

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: theme.spacing(10),
        backgroundColor: theme.palette.gray.background,
    },
}));
const NoResult = ({ loading }) => {
    const classes = useStyles();
    return (
        <Box
            className={classes.box}
            alignItems="center"
            justifyContent="center"
            display="flex"
        >
            {!loading && <FormattedMessage {...MESSAGES.noDataText} />}
            {loading && <FormattedMessage {...MESSAGES.loading} />}
        </Box>
    );
};
NoResult.defaultProps = {
    loading: false,
};

NoResult.propTypes = {
    loading: PropTypes.bool,
};

export { NoResult };
