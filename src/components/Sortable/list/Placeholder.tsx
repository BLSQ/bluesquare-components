import React, { FunctionComponent } from 'react';
import { defineMessages } from 'react-intl';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useSafeIntl } from '../../../utils/useSafeIntl';

const MESSAGES = defineMessages({
    noResult: {
        defaultMessage: 'No result',
        id: 'blsq.table.noResult',
    },
});
const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // @ts-ignore
        backgroundColor: theme.palette.gray.background,
    },
}));
export const Placeholder: FunctionComponent = () => {
    const { formatMessage } = useSafeIntl();
    const classes = useStyles();
    return (
        <Box className={classes.root}>{formatMessage(MESSAGES.noResult)}</Box>
    );
};
