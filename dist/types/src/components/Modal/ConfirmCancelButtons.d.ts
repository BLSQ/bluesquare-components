import { FunctionComponent } from 'react';
import { IntlMessage } from '../../types/types';
export declare type Callback = () => void;
export declare type ConfirmCancelButtonsProps = {
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
};
export declare const ConfirmCancelButtons: FunctionComponent<ConfirmCancelButtonsProps>;
//# sourceMappingURL=ConfirmCancelButtons.d.ts.map