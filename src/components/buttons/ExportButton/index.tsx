import React, { FunctionComponent } from 'react';
import CallMade from '@mui/icons-material/CallMade';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { commonStyles } from '../../../styles/iaso/common';
import { MESSAGES } from './messages';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { IntlMessage } from '../../../types/types';

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
            onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
            disabled={isDisabled}
            id={id}
        >
            <CallMade className={classes.buttonIcon} />
            {formatMessage(message)}
        </Button>
    ) : (
        <CallMade onClick={onClick} disabled={isDisabled} />
    );
};
