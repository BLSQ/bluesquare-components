import React, { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

import { useSafeIntl } from '../../../utils/useSafeIntl';
import { IntlMessage } from '../../../types/types';

const useStyles = makeStyles(theme => ({
    box: {
        width: '100%',
        height: theme.spacing(10),
        // @ts-ignore
        backgroundColor: theme.palette.gray.background,
    },
}));

type Props = {
    noDataMessage: IntlMessage;
    displayMessage: boolean;
};

export const NoTableData: FunctionComponent<Props> = ({
    noDataMessage,
    displayMessage = true,
}) => {
    const classes = useStyles();
    const { formatMessage } = useSafeIntl();
    return (
        <Box
            className={classes.box}
            alignItems="center"
            justifyContent="center"
            display="flex"
        >
            {displayMessage && formatMessage(noDataMessage)}
        </Box>
    );
};
