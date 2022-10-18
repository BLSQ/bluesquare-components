import React, { FunctionComponent, ReactNode } from 'react';

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    makeStyles,
} from '@material-ui/core';
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
                onClose={onClose}
                scroll="body"
                id={id}
                data-test={dataTestId}
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
