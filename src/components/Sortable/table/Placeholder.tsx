import React, { FunctionComponent } from 'react';
import { defineMessages } from 'react-intl';

import { makeStyles } from '@material-ui/core/styles';
import { Box, TableCell, TableRow } from '@material-ui/core';
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
    },
    cell: {
        padding: '0 !important',
    },
}));
type Props = {
    colSpan: number;
};
export const Placeholder: FunctionComponent<Props> = ({ colSpan }) => {
    const { formatMessage } = useSafeIntl();
    const classes = useStyles();
    return (
        <TableRow>
            <TableCell colSpan={colSpan} className={classes.cell}>
                <Box className={classes.root}>
                    {formatMessage(MESSAGES.noResult)}
                </Box>
            </TableCell>
        </TableRow>
    );
};
