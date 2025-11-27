import { Button } from '@mui/material';
import React from 'react';
import { useSafeIntl } from '../localization/useSafeIntl';
import MESSAGES from './messages';

type Props = {
    messageKey: string;
    onClick: () => void;
};

// function declaration and export are legacy from Iaso.
function SnackBarButton(props: Props) {
    const { messageKey, onClick } = props;
    const { formatMessage } = useSafeIntl();
    return (
        <Button size="small" onClick={onClick}>
            {formatMessage(MESSAGES[messageKey])}
        </Button>
    );
}

export default SnackBarButton;
