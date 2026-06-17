import React, { FunctionComponent } from 'react';
import CallMade from '@mui/icons-material/CallMade';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { commonStyles } from '../../../styles/iaso/common';
import { IntlMessage } from '../../../types/types';
import { MESSAGES } from './messages';

const useStyles = makeStyles(theme => ({
    ...commonStyles(theme),
    button: {
        marginLeft: theme.spacing(2),
        '& svg, & i': {
            marginRight: theme.spacing(1),
        },
    },
}));

type Props = {
    onClick: () => void;
    message?: IntlMessage;
    isDisabled?: boolean;
    batchExport: boolean;
    id?: string;
};

export const ExportButton: FunctionComponent<Props> = ({
    onClick,
    message = MESSAGES.export,
    isDisabled = false,
    batchExport,
    id = '',
}) => {
    const classes: Record<string, string> = useStyles();
    const { formatMessage } = useSafeIntl();
    return batchExport ? (
        <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
            disabled={isDisabled}
            id={id}
        >
            <CallMade className={classes.buttonIcon} />
            {formatMessage(message)}
        </Button>
    ) : (
        <CallMade onClick={onClick} />
    );
};
