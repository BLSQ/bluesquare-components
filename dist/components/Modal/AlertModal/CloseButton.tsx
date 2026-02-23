import React, { FunctionComponent } from 'react';
import { Button } from '@mui/material';
import { MESSAGES } from './messages';
import { useSafeIntl } from '../../../localization/useSafeIntl';

type ButtonProps = { closeDialog: () => void };

export const CloseButton: FunctionComponent<ButtonProps> = ({
    closeDialog,
}) => {
    const { formatMessage } = useSafeIntl();
    return (
        <Button onClick={closeDialog} variant="contained" color="primary">
            {formatMessage(MESSAGES.close)}
        </Button>
    );
};
