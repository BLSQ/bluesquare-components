import React, { FunctionComponent, ReactNode } from 'react';

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    SxProps,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FormattedMessage } from 'react-intl';
import { commonStyles } from '../../styles/iaso/common';
import { IntlMessage } from '../../types/types';

const styles = theme => ({
    ...commonStyles(theme),
    paper: {
        overflow: 'visible',
    },
    title: {
        paddingBottom: 0,
    },
    content: {
        overflow: 'visible',
        paddingBottom: theme.spacing(2),
    },
    action: {
        paddingBottom: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
});

// @ts-ignore
const useStyles = makeStyles(styles);

const normalizedMessage = CompOrMessage => {
    if (!CompOrMessage) {
        return '';
    }
    if (CompOrMessage.id) {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <FormattedMessage {...CompOrMessage} />;
    }
    return CompOrMessage;
};
export type MuiWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SimpleDialogProps = {
    open: boolean;
    maxWidth?: MuiWidth;
    onClose: () => void;
    id: string;
    dataTestId: string;
    titleMessage: string | IntlMessage | ReactNode;
    children: ReactNode;
    closeDialog: () => void;
    buttons: FunctionComponent<unknown & { closeDialog: () => void }>;
    backdropClick?: boolean;
    sx?: SxProps;
};

export const SimpleModal: FunctionComponent<SimpleDialogProps> = ({
    open = false,
    maxWidth = 'sm',
    onClose,
    id,
    dataTestId,
    titleMessage,
    children,
    closeDialog,
    buttons,
    sx,
    backdropClick = true,
}) => {
    const classes: Record<string, string> = useStyles();
    return (
        <>
            <Dialog
                fullWidth
                maxWidth={maxWidth}
                open={open}
                classes={{
                    paper: classes.paper,
                }}
                onClose={(_, reason) => {
                    if (reason === 'backdropClick' && backdropClick) {
                        closeDialog();
                    }
                    onClose();
                }}
                scroll="body"
                id={id}
                data-test={dataTestId}
                sx={sx}
            >
                {titleMessage && (
                    <DialogTitle className={classes.title}>
                        {normalizedMessage(titleMessage)}
                    </DialogTitle>
                )}
                <DialogContent className={classes.content}>
                    {children}
                </DialogContent>
                <DialogActions className={classes.action}>
                    {buttons({ closeDialog })}
                </DialogActions>
            </Dialog>
        </>
    );
};
