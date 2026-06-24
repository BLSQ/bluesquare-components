import React, { FunctionComponent } from 'react';
import Add from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { commonStyles } from '../../../styles/iaso/common';
import { IntlMessage } from '../../../types/types';
import { MESSAGES } from './messages';

const useStyles = makeStyles(theme => ({
    ...commonStyles(theme),
}));

type Props = {
    onClick;
    message?: IntlMessage;
    id?: string;
    dataTestId?: string;
    size?: 'medium' | 'large' | 'small' | undefined;
    variant?: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
    color?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning';
};

export const AddButton: FunctionComponent<Props> = ({
    onClick,
    message = MESSAGES.create,
    id = '',
    dataTestId = '',
    size = 'medium',
    disabled = false,
    variant = 'contained',
    color = 'primary',
}) => {
    const classes = useStyles();
    const { formatMessage } = useSafeIntl();
    return (
        <Button
            variant={variant}
            className={classes.button}
            color={color}
            onClick={onClick}
            id={id}
            data-test={dataTestId}
            size={size}
            disabled={disabled}
        >
            <Add className={classes.buttonIcon} />
            {formatMessage(message)}
        </Button>
    );
};
