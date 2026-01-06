import React, { FunctionComponent, ReactNode } from 'react';
import { Tooltip, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useStyles } from './styles';

type Props = {
    message: string;
    children: ReactNode;
};

export const InfoHeader: FunctionComponent<Props> = ({ message, children }) => {
    const classes: Record<string, string> = useStyles();
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
