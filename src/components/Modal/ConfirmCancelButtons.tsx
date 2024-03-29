/* eslint-disable react/jsx-props-no-spreading */
import { Button } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { IntlMessage } from '../../types/types';

export type Callback = () => void;

export type ConfirmCancelButtonsProps = {
    closeDialog: Callback;
    onConfirm: Callback;
    onCancel: Callback;
    allowConfirm?: boolean;
    confirmMessage: IntlMessage;
    cancelMessage: IntlMessage;
    additionalButton?: boolean;
    additionalMessage?: IntlMessage;
    onAdditionalButtonClick?: Callback;
    allowConfirmAdditionalButton?: boolean;
    closeOnConfirm?: boolean;
};

export const ConfirmCancelButtons: FunctionComponent<ConfirmCancelButtonsProps> =
    ({
        closeDialog,
        allowConfirm = true,
        onConfirm,
        confirmMessage,
        onCancel,
        cancelMessage,
        additionalButton = false,
        additionalMessage,
        onAdditionalButtonClick,
        allowConfirmAdditionalButton = true,
        closeOnConfirm = true,
    }) => (
        <>
            <Button
                onClick={() => {
                    onCancel();
                    closeDialog();
                }}
                color="primary"
                data-test="cancel-button"
            >
                <FormattedMessage {...cancelMessage} />
            </Button>
            <Button
                data-test="confirm-button"
                onClick={() => {
                    onConfirm();
                    if (closeOnConfirm) {
                        closeDialog();
                    }
                }}
                disabled={!allowConfirm}
                color="primary"
                autoFocus
            >
                <FormattedMessage {...confirmMessage} />
            </Button>
            {additionalButton && additionalMessage && onAdditionalButtonClick && (
                <Button
                    data-test="additional-button"
                    onClick={() => {
                        onAdditionalButtonClick();
                        closeDialog();
                    }}
                    color="primary"
                    disabled={
                        allowConfirmAdditionalButton !== null &&
                        allowConfirmAdditionalButton !== undefined
                            ? !allowConfirmAdditionalButton
                            : !allowConfirm
                    }
                >
                    <FormattedMessage {...additionalMessage} />
                </Button>
            )}
        </>
    );
