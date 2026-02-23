import { FunctionComponent } from 'react';
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
export declare const ConfirmCancelButtons: FunctionComponent<ConfirmCancelButtonsProps>;
