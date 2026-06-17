import React, { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { MESSAGES } from './messages';

const useStyles = makeStyles(theme => ({
    select: {
        height: 40,
        marginLeft: theme.spacing(10),
    },
}));
type Props = {
    rowsPerPage: number;
    rowsPerPageOptions: any[];
    selectRowsPerPage: (rowsPerPage: number) => void;
};

export const PageRowSelect: FunctionComponent<Props> = ({
    rowsPerPage,
    rowsPerPageOptions,
    selectRowsPerPage,
}) => {
    const classes = useStyles();
    const { formatMessage } = useSafeIntl();
    const handleChange = event => {
        selectRowsPerPage(event.target.value);
    };
    return (
        <Box
            sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                mr: 8,
            }}
        >
            <FormControl variant="outlined">
                <Select
                    className={classNames(
                        classes.select,
                        'pagination-row-select',
                    )}
                    value={rowsPerPage}
                    onChange={handleChange}
                >
                    {rowsPerPageOptions.map(o => (
                        <MenuItem
                            key={o}
                            value={o}
                            className={`row-option-${o}`}
                        >
                            {`${o} ${formatMessage(MESSAGES.rowsText)}`}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
